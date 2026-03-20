"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, Send, Trash2 } from "lucide-react";
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
    clearAudio,
    checkPermission,
  } = useVoiceRecorder();

  // Stable ref to avoid stale-closure issues in the effect
  const onSendRef = useRef(onSend);
  useEffect(() => {
    onSendRef.current = onSend;
  }, [onSend]);

  // Check permission on mount (silent probe)
  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fire when recording finishes successfully
  useEffect(() => {
    if (audioBlob && audioUrl) {
      onSendRef.current(audioBlob, audioUrl, duration);
      clearAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioBlob, audioUrl]);

  const handleMicPress = async () => {
    if (disabled || hasPermission === false) return;
    await startRecording();
  };

  const handleSend = () => {
    if (!isRecording) return;
    if (duration < 1) {
      cancelRecording();
    } else {
      stopRecording();
    }
  };

  return (
    <div className="bg-white border-t border-slate-100 pb-safe">
      <AnimatePresence mode="wait" initial={false}>
        {isRecording ? (
          /* ── Recording active ─────────────────────────────────── */
          <motion.div
            key="recording"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2.5 px-4 py-3"
          >
            {/* Cancel */}
            <button
              onClick={cancelRecording}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 active:bg-slate-300"
              aria-label="Cancelar grabación"
            >
              <Trash2 className="h-4 w-4" />
            </button>

            {/* Recording indicator pill */}
            <div className="flex flex-1 items-center gap-2.5 rounded-full border border-red-200 bg-red-50 px-4 py-2.5">
              <motion.span
                className="h-2 w-2 flex-shrink-0 rounded-full bg-red-500"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="flex-1 text-[13px] font-medium text-red-600">
                Grabando...
              </span>
              <span className="font-mono text-[13px] font-semibold tabular-nums text-red-500">
                {formatDuration(duration)}
              </span>
            </div>

            {/* Send */}
            <button
              onClick={handleSend}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-md shadow-brand-200 transition-all hover:bg-brand-700 active:scale-95"
              aria-label="Enviar mensaje de voz"
            >
              <Send className="h-4 w-4" />
            </button>
          </motion.div>
        ) : (
          /* ── Idle / ready ─────────────────────────────────────── */
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col items-center gap-3 px-4 py-4"
          >
            {/* Hint / error text */}
            <p
              className={cn(
                "text-center text-xs",
                error
                  ? "text-red-500"
                  : disabled
                    ? "text-slate-300"
                    : "text-slate-400"
              )}
            >
              {error
                ? error
                : disabled
                  ? "Procesando respuesta..."
                  : "Presioná para grabar tu mensaje"}
            </p>

            {/* Mic button */}
            <div className="relative">
              {/* Pulse ring (only when enabled) */}
              {!disabled && hasPermission !== false && (
                <span className="absolute inset-0 rounded-full bg-brand-400 opacity-30 animate-pulse-ring" />
              )}

              <motion.button
                onPointerDown={handleMicPress}
                onPointerUp={handleSend}
                onPointerLeave={() => {
                  if (isRecording) handleSend();
                }}
                disabled={disabled || hasPermission === false}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                  "no-select relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-colors",
                  disabled || hasPermission === false
                    ? "cursor-not-allowed bg-slate-200 text-slate-400 shadow-none"
                    : "cursor-pointer bg-brand-600 text-white shadow-brand-200 hover:bg-brand-700"
                )}
                aria-label="Grabar mensaje de voz"
              >
                {hasPermission === false ? (
                  <MicOff className="h-7 w-7" />
                ) : (
                  <Mic className="h-7 w-7" />
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
