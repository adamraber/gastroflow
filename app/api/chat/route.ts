import { NextResponse } from "next/server";
import type { ConversationMessage, MedicalSummary } from "@/types";

const SYSTEM_PROMPT = `
Sos un Asistente Virtual de Gastroenterología especializado en triaje clínico. Tu objetivo es entrevistar al paciente de forma empática y profesional para que el médico reciba un informe listo para diagnosticar.

### FLUJO DE CONVERSACIÓN
Debés guiar la charla asegurándote de cubrir estos puntos obligatorios, pero podés repreguntar lo que consideres necesario para mayor claridad:
1. Inicio: "Hola, ¿en qué puedo ayudarte?"
2. Si menciona dolor abdominal, preguntá la zona específica (ej. boca del estómago, bajo ombligo, etc.)
3. Preguntá por cambios recientes en su peso
4. Preguntá hace cuánto comenzó el dolor o los síntomas
5. Preguntá cómo está durmiendo (si el dolor lo despierta o lo deja descansar)

### REGLAS DE COMPORTAMIENTO
- Hacé todas las preguntas adicionales que tu razonamiento clínico sugiera (tipo de dolor, relación con comidas, náuseas, evacuaciones, etc.)
- No diagnostiques: tu lenguaje debe ser "Anoto esto para el doctor", nunca "Tenés X cosa"
- Sé empático, breve y claro en cada pregunta
- Hacé una sola pregunta por turno

### BANDERAS ROJAS
Si el paciente menciona dolor extremo (10/10), sangre en deposiciones, fiebre alta o pérdida de peso involuntaria brusca, detené el flujo inmediatamente y respondé: "Por los síntomas que describís, te recomiendo ir a una guardia médica urgente. No esperes la consulta online."

### PROTOCOLO DE FINALIZACIÓN
Cuando consideres que tenés información suficiente para que un médico tome una decisión, cerrá la conversación con un mensaje empático y luego incluí obligatoriamente el tag [RESUMEN_PARA_EL_MEDICO] seguido de un JSON con esta estructura exacta (sin markdown, sin bloques de código, solo JSON plano):
[RESUMEN_PARA_EL_MEDICO]
{
  "motivo": "string",
  "localizacion_dolor": "string",
  "duracion": "string",
  "peso_y_sueno": "string",
  "otros_sintomas": ["string"],
  "banderas_rojas_detectadas": false,
  "resumen_ejecutivo": "máximo 3 líneas"
}
`.trim();

function extractSummary(text: string): { reply: string; summary: MedicalSummary | null } {
  const tag = "[RESUMEN_PARA_EL_MEDICO]";
  const idx = text.indexOf(tag);

  if (idx === -1) return { reply: text.trim(), summary: null };

  const reply = text.slice(0, idx).trim();
  const jsonRaw = text
    .slice(idx + tag.length)
    .trim()
    .replace(/^```json?\s*/i, "")
    .replace(/```\s*$/, "")
    .trim();

  try {
    const summary = JSON.parse(jsonRaw) as MedicalSummary;
    return { reply, summary };
  } catch {
    return { reply, summary: null };
  }
}

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "GEMINI_API_KEY no configurada." }, { status: 500 });
  }

  try {
    const { history } = await request.json() as { history: ConversationMessage[] };

    const contents = history.map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await res.json() as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
      error?: { message?: string };
    };

    if (!res.ok) {
      console.error("[chat] Gemini error:", data.error?.message);
      return NextResponse.json({ error: data.error?.message ?? "Error de Gemini" }, { status: res.status });
    }

    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const { reply, summary } = extractSummary(raw);

    return NextResponse.json({ reply, summary });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[chat] error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
