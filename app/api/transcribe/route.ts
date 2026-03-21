import { NextResponse } from "next/server";

function sanitizeMimeType(raw: string): string {
  const base = raw.split(";")[0].trim();
  const supported = ["audio/webm", "audio/mp4", "audio/ogg", "audio/wav", "audio/mpeg", "audio/aac", "audio/flac"];
  return supported.includes(base) ? base : "audio/webm";
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

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
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
      }
    );

    const data = await res.json() as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
      error?: { message?: string };
    };

    if (!res.ok) {
      console.error("[transcribe] Gemini error:", data.error?.message);
      return NextResponse.json({ error: data.error?.message ?? "Error de Gemini" }, { status: res.status });
    }

    const transcription = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
    return NextResponse.json({ transcription });

  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[transcribe]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
