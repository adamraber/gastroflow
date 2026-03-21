import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function sanitizeMimeType(raw: string): string {
  const base = raw.split(";")[0].trim();
  const supported = ["audio/webm", "audio/mp4", "audio/ogg", "audio/wav", "audio/mpeg", "audio/aac", "audio/flac"];
  return supported.includes(base) ? base : "audio/webm";
}

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    console.error("[transcribe] GEMINI_API_KEY no está configurada");
    return NextResponse.json({ error: "API key no configurada." }, { status: 500 });
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

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent([
      {
        inlineData: { mimeType, data: base64 },
      },
      "Transcribí este audio en español rioplatense. Devolvé únicamente el texto transcripto, sin comillas ni comentarios adicionales.",
    ]);

    const transcription = result.response.text().trim();
    console.log("[transcribe] ok:", transcription);

    return NextResponse.json({ transcription });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[transcribe] error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
