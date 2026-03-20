"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatBubble } from "./ChatBubble";
import { VoiceRecorder } from "./VoiceRecorder";
import { generateWaveform } from "@/lib/utils";
import type { ChatMessage } from "@/types";

// ─── Scripted AI conversation ──────────────────────────────────────────────────

const AI_QUESTIONS = [
  "¡Hola! Soy el asistente médico de GastroFlow 👋\n\nEstoy aquí para ayudarte con tu consulta gastroenterológica de forma rápida y segura. Todo lo que compartas es confidencial.\n\n¿Cuál es el síntoma principal que te trajo hoy?",
  "Gracias por contarme eso. ¿Desde cuándo tenés estos síntomas? ¿Son constantes o aparecen y desaparecen? Podés describirlos con tus propias palabras.",
  "Entendido. ¿Estás tomando algún medicamento actualmente? ¿Tenés alergias conocidas a medicamentos o alimentos que el médico deba saber?",
  "Casi terminamos. ¿Tenés algún antecedente médico relevante? Por ejemplo, cirugías previas, enfermedades crónicas o consultas recientes por este mismo motivo.",
];

const AI_FINAL =
  "Perfecto, recibí toda la información que necesitaba. ✅\n\nAhora estoy procesando tu consulta. En breve un médico especialista la revisará — normalmente esto toma menos de 3 minutos.\n\nTe notificaremos por la app y por email cuando tengamos novedades. 🩺";

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
      <div className="rounded-2xl rounded-tl-[4px] bg-white px-4 py-3 shadow-sm">
        <div className="flex items-end gap-[5px] h-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-2 w-2 rounded-full bg-slate-300"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 0.55,
                repeat: Infinity,
                delay: i * 0.16,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Completion card ──────────────────────────────────────────────────────────

function CompletionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, type: "spring", stiffness: 280, damping: 22 }}
      className="mx-auto mt-3 flex max-w-xs flex-col items-center gap-2 rounded-2xl bg-white px-6 py-5 text-center shadow-sm"
    >
      <span className="text-3xl">🩺</span>
      <div>
        <h3 className="text-[14px] font-semibold text-slate-800">
          Consulta enviada
        </h3>
        <p className="mt-0.5 text-[12px] text-slate-400">
          Un especialista revisará tu caso en breve
        </p>
      </div>
      <div className="mt-1 flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
        <span className="text-[11px] font-medium text-brand-700">
          Tiempo estimado: &lt; 3 min
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main container ───────────────────────────────────────────────────────────

export function ChatContainer() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stage, setStage] = useState(0);
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAiResponding, scrollToBottom]);

  const addAiMessage = useCallback(
    (content: string, typingDelay = 1600) => {
      setIsAiResponding(true);
      const timer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "ai",
            type: "text",
            content,
            waveform: [],
            timestamp: new Date(),
          },
        ]);
        setIsAiResponding(false);
      }, typingDelay);
      return timer;
    },
    []
  );

  // Show opening AI message on first render
  useEffect(() => {
    const t = setTimeout(() => {
      addAiMessage(AI_QUESTIONS[0], 900);
    }, 400);
    return () => clearTimeout(t);
  }, [addAiMessage]);

  const handleVoiceSend = useCallback(
    (audioBlob: Blob, audioUrl: string, duration: number) => {
      const nextStage = stage + 1;
      const msgId = crypto.randomUUID();

      const userMsg: ChatMessage = {
        id: msgId,
        role: "user",
        type: "voice",
        content: "",
        duration,
        audioBlob,
        audioUrl,
        waveform: generateWaveform(msgId),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setStage(nextStage);

      if (nextStage < 4) {
        addAiMessage(AI_QUESTIONS[nextStage], 2000);
      } else {
        addAiMessage(AI_FINAL, 2400);
        setTimeout(() => setIsComplete(true), 2400 + 800);
      }
    },
    [stage, addAiMessage]
  );

  return (
    <div className="flex h-dvh max-w-lg flex-col mx-auto">
      <ChatHeader stage={stage} totalStages={4} isComplete={isComplete} />

      {/* ── Chat messages area ──────────────────────────────── */}
      <div
        ref={scrollRef}
        className="chat-scroll flex-1 overflow-y-auto space-y-2 px-2 py-3"
        style={{ backgroundColor: "var(--chat-bg)" }}
      >
        {/* Date chip */}
        <div className="flex justify-center">
          <span className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
            Hoy
          </span>
        </div>

        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}

          {isAiResponding && <TypingIndicator key="typing-indicator" />}
        </AnimatePresence>

        {isComplete && <CompletionCard />}

        {/* Scroll anchor */}
        <div className="h-2" />
      </div>

      {/* ── Input area ──────────────────────────────────────── */}
      {!isComplete ? (
        <VoiceRecorder
          onSend={handleVoiceSend}
          disabled={isAiResponding}
        />
      ) : (
        <div className="border-t border-slate-100 bg-white px-4 py-3 pb-safe text-center">
          <p className="text-[12px] text-slate-400">
            Te avisaremos cuando el médico complete tu consulta
          </p>
        </div>
      )}
    </div>
  );
}
