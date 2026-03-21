import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;

    if (!audioFile) {
      return NextResponse.json({ error: "No se recibió audio." }, { status: 400 });
    }

    const bytes = await audioFile.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const mimeType = (audioFile.type || "audio/webm") as Parameters<
      typeof genAI.getGenerativeModel
    >[0]["model"] extends string ? string : string;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: mimeType,
          data: base64,
        },
      },
      "Transcribí este audio en español rioplatense. Devolvé únicamente el texto transcripto sin ningún comentario adicional, comillas ni formato.",
    ]);

    const transcription = result.response.text().trim();

    return NextResponse.json({ transcription });
  } catch (error) {
    console.error("[transcribe]", error);
    return NextResponse.json(
      { error: "Error al transcribir el audio." },
      { status: 500 }
    );
  }
}
