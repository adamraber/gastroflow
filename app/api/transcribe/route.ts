import { NextResponse } from "next/server";

function sanitizeMimeType(raw: string): string {
  const base = raw.split(";")[0].trim();
  const supported = ["audio/webm", "audio/mp4", "audio/ogg", "audio/wav", "audio/mpeg", "audio/aac", "audio/flac"];
  return supported.includes(base) ? base : "audio/webm";
}

// Models to try in order — stops at first success
const MODELS = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-001",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
  "gemini-1.5-flash-001",
];

async function callGemini(model: string, mimeType: string, base64: string): Promise<string> {
  // Try v1 first, fall back to v1beta
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        parts: [
          { inlineData: { mimeType, data: base64 } },
          { text: "Transcribí este audio en español rioplatense. Devolvé únicamente el texto transcripto, sin comillas ni comentarios." },
        ],
      }],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = (err as { error?: { message?: string } })?.error?.message ?? res.statusText;
    throw new Error(`[${res.status}] ${model}: ${msg}`);
  }

  const data = await res.json() as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  return text.trim();
}

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "GEMINI_API_KEY no configurada." }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;

    if (!audioFile || audioFile.size === 0) {
      return NextResponse.json({ error: "No se recibió audio." }, { status: 400 });
    }

    const bytes = await audioFile.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const mimeType = sanitizeMimeType(audioFile.type || "audio/webm");

    console.log("[transcribe] size:", audioFile.size, "mimeType:", mimeType);

    let lastError = "";
    for (const model of MODELS) {
      try {
        const transcription = await callGemini(model, mimeType, base64);
        console.log(`[transcribe] success with ${model}:`, transcription);
        return NextResponse.json({ transcription, model });
      } catch (err) {
        lastError = err instanceof Error ? err.message : String(err);
        console.warn(`[transcribe] failed ${model}:`, lastError);
        // Continue trying next model on 404 or 429
        const shouldRetry = lastError.includes("[404]") || lastError.includes("[429]");
        if (!shouldRetry) break;
      }
    }

    return NextResponse.json({ error: lastError }, { status: 500 });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[transcribe] error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
