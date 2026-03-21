"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatBubble } from "./ChatBubble";
import { VoiceRecorder } from "./VoiceRecorder";
import { ConfirmationScreen } from "./ConfirmationScreen";
import { SuccessScreen } from "./SuccessScreen";
import { generateWaveform } from "@/lib/utils";
import type { ChatMessage, ConversationMessage, MedicalSummary } from "@/types";

const FIRST_AI_MESSAGE = "Hola, ¿en qué puedo ayudarte?";

// ─── Typing indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18 }}
      className="flex justify-start px-1"
    >
      <div className="rounded-2xl rounded-tl-[4px] bg-white px-4 py-3 shadow-sm ring-1 ring-cream-300">
        <div className="flex items-end gap-[5px] h-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-2 w-2 rounded-full bg-slate-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.16, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main container ───────────────────────────────────────────────────────────

type Screen = "chat" | "confirmation" | "success";

export function ChatContainer() {
  const [screen, setScreen] = useState<Screen>("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [history, setHistory] = useState<ConversationMessage[]>([
    { role: "model", content: FIRST_AI_MESSAGE },
  ]);
  const [summary, setSummary] = useState<MedicalSummary | null>(null);
  const [isAiResponding, setIsAiResponding] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasMessages = messages.length > 0 || isAiResponding;

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isAiResponding, scrollToBottom]);

  // Show first AI message on mount
  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([{
        id: crypto.randomUUID(),
        role: "ai",
        type: "text",
        content: FIRST_AI_MESSAGE,
        waveform: [],
        timestamp: new Date(),
      }]);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  // ── Transcribe audio ────────────────────────────────────────────────────────
  const transcribeAudio = useCallback(async (audioBlob: Blob): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("audio", new File([audioBlob], "recording.webm", { type: audioBlob.type }));
      const res = await fetch("/api/transcribe", { method: "POST", body: formData });
      const data = await res.json() as { transcription?: string; error?: string };
      return data.transcription ?? "";
    } catch {
      return "";
    }
  }, []);

  // ── Call chat API ────────────────────────────────────────────────────────────
  const callChat = useCallback(async (h: ConversationMessage[]): Promise<{ reply: string; summary: MedicalSummary | null }> => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ history: h }),
    });
    return await res.json() as { reply: string; summary: MedicalSummary | null };
  }, []);

  // ── Handle voice send ─────────────────────────────────────────────────────
  const handleVoiceSend = useCallback(async (audioBlob: Blob, audioUrl: string, duration: number) => {
    const msgId = crypto.randomUUID();
    setIsAiResponding(true);

    // 1. Add voice bubble immediately
    setMessages((prev) => [
      ...prev,
      {
        id: msgId,
        role: "user",
        type: "voice",
        content: "",
        duration,
        audioBlob,
        audioUrl,
        waveform: generateWaveform(msgId),
        timestamp: new Date(),
      },
    ]);

    // 2. Transcribe (blocks until done)
    const transcription = await transcribeAudio(audioBlob);

    // 3. Update bubble with transcription
    if (transcription) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msgId ? { ...m, content: transcription } : m))
      );
    }

    // 4. Add user message to history
    const updatedHistory: ConversationMessage[] = [
      ...history,
      { role: "user", content: transcription || "[audio sin transcripción]" },
    ];
    setHistory(updatedHistory);

    // 5. Call Gemini chat
    const { reply, summary: detectedSummary } = await callChat(updatedHistory);

    // 6. Show AI reply (the patient-facing message)
    if (reply) {
      const aiId = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        {
          id: aiId,
          role: "ai",
          type: "text",
          content: reply,
          waveform: [],
          timestamp: new Date(),
        },
      ]);
      setHistory((prev) => [...prev, { role: "model", content: reply }]);
    }

    // 7. Handle summary → switch to confirmation
    if (detectedSummary) {
      setSummary(detectedSummary);
      setTimeout(() => setScreen("confirmation"), reply ? 2500 : 500);
    }

    setIsAiResponding(false);
  }, [history, transcribeAudio, callChat]);

  // ── Screens ───────────────────────────────────────────────────────────────

  if (screen === "confirmation" && summary) {
    return <ConfirmationScreen summary={summary} onConfirm={() => setScreen("success")} />;
  }

  if (screen === "success") {
    return <SuccessScreen />;
  }

  // ── Chat screen ───────────────────────────────────────────────────────────

  return (
    <div
      className="flex h-dvh max-w-lg flex-col mx-auto"
      style={{
        backgroundColor: "#F9F6EF",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <ChatHeader isComplete={false} />

      {/* Title — only before first user message */}
      <AnimatePresence>
        {!hasMessages && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 pt-8 pb-2"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-500 mb-2">
              Nueva consulta
            </p>
            <h2 className="text-[26px] font-semibold leading-[1.2] tracking-tight text-slate-900">
              Consulta gastroenterológica online
            </h2>
            <p className="mt-2 text-[13px] text-slate-400 leading-relaxed">
              Respondé por voz y un médico especialista revisará tu caso.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages */}
      <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto space-y-2 px-3 py-3">
        {hasMessages && (
          <div className="flex justify-center mb-1">
            <span className="rounded-full bg-black/[0.07] px-3 py-1 text-[11px] font-medium text-slate-500">
              Hoy
            </span>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
          {isAiResponding && <TypingIndicator key="typing" />}
        </AnimatePresence>

        <div className="h-1" />
      </div>

      {/* Recorder */}
      <VoiceRecorder onSend={handleVoiceSend} disabled={isAiResponding} />
    </div>
  );
}
