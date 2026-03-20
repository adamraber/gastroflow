"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, Trash2 } from "lucide-react";
import { cn, formatDuration } from "@/lib/utils";
import { useVoiceRecorder } from "@/hooks/useVoiceRecorder";

interface VoiceRecorderProps {
  onSend: (audioBlob: Blob, audioUrl: string, duration: number) => void;
  disabled?: boolean;
}

export function VoiceRecorder({ onSend, disabled = false }: VoiceRecorderProps) {
  const {
    isRecording,
    duration,
    audioBlob,
    audioUrl,
    error,
    hasPermission,
    startRecording,
    stopRecording,
    cancelRecording,
    resetAfterSend,
    checkPermission,
  } = useVoiceRecorder();

  const onSendRef = useRef(onSend);
  useEffect(() => { onSendRef.current = onSend; }, [onSend]);

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioBlob && audioUrl) {
      onSendRef.current(audioBlob, audioUrl, duration);
      resetAfterSend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioBlob, audioUrl]);

  const handleMicPress = async () => {
    if (disabled || hasPermission === false) return;
    await startRecording();
  };

  const handleSend = () => {
    if (!isRecording) return;
    duration < 1 ? cancelRecording() : stopRecording();
  };

  return (
    <div className="px-4 pb-safe pt-3 pb-4">
      {/* Input box — styled like the screenshot */}
      <div
        className={cn(
          "rounded-2xl border bg-white shadow-sm transition-all duration-200",
          isRecording
            ? "border-red-200 shadow-red-100"
            : "border-cream-300 shadow-cream-200"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isRecording ? (
            /* ── Recording active ───────────────── */
            <motion.div
              key="recording"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="px-4 pt-4 pb-3"
            >
              {/* Waveform animation */}
              <div className="flex items-end justify-center gap-[3px] h-10 mb-3">
                {Array.from({ length: 28 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-red-400"
                    animate={{
                      height: ["4px", `${8 + Math.random() * 24}px`, "4px"],
                    }}
                    transition={{
                      duration: 0.5 + Math.random() * 0.4,
                      repeat: Infinity,
                      delay: i * 0.04,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-red-400"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-[13px] font-medium text-red-500">
                    Grabando...
                  </span>
                  <span className="font-mono text-[13px] font-semibold tabular-nums text-red-400">
                    {formatDuration(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={cancelRecording}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 transition-colors"
                    aria-label="Cancelar"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={handleSend}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white shadow-md hover:bg-brand-700 transition-all active:scale-95"
                    aria-label="Enviar"
                  >
                    <Mic className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ── Idle ───────────────────────────── */
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center gap-3 px-4 py-5"
            >
              {/* Mic button — centered */}
              <div className="relative">
                {!disabled && hasPermission !== false && (
                  <span className="absolute inset-0 rounded-full bg-brand-400 opacity-20 animate-pulse-ring" />
                )}
                <motion.button
                  onPointerDown={handleMicPress}
                  onPointerUp={handleSend}
                  onPointerLeave={() => { if (isRecording) handleSend(); }}
                  disabled={disabled || hasPermission === false}
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: "spring", stiffness: 380, damping: 18 }}
                  className={cn(
                    "no-select relative flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-colors",
                    disabled || hasPermission === false
                      ? "cursor-not-allowed bg-slate-200 text-slate-400 shadow-none"
                      : "cursor-pointer bg-brand-600 text-white shadow-brand-200 hover:bg-brand-700"
                  )}
                  aria-label="Grabar mensaje de voz"
                >
                  {hasPermission === false ? (
                    <MicOff className="h-5 w-5" />
                  ) : (
                    <Mic className="h-5 w-5" />
                  )}
                </motion.button>
              </div>

              {/* Label — centered */}
              <p
                className={cn(
                  "text-center text-[13px]",
                  error
                    ? "text-red-400"
                    : disabled
                      ? "text-slate-300"
                      : "text-slate-400"
                )}
              >
                {error
                  ? error
                  : disabled
                    ? "Procesando respuesta..."
                    : "Presioná para grabar el mensaje"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
