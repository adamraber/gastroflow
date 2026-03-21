"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { cn, formatTime } from "@/lib/utils";
import { VoiceMessage } from "./VoiceMessage";
import type { ChatMessage } from "@/types";

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn("flex w-full px-1", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "relative max-w-[78%] rounded-2xl",
          isUser
            ? "rounded-tr-[4px] bg-brand-100 text-slate-900 shadow-sm"
            : "rounded-tl-[4px] bg-white text-slate-800 shadow-sm ring-1 ring-cream-300"
        )}
      >
        <div className="px-3.5 py-2.5">
          {message.type === "voice" ? (
            <div className="py-0.5">
              <VoiceMessage
                waveform={message.waveform}
                duration={message.duration ?? 0}
                audioUrl={message.audioUrl}
                isUser={isUser}
              />
              {/* Transcripción — aparece cuando Gemini responde */}
              {message.content ? (
                <p className="mt-1.5 text-[12px] leading-snug text-slate-500 italic">
                  &ldquo;{message.content}&rdquo;
                </p>
              ) : (
                <p className="mt-1.5 text-[11px] text-slate-300 italic">
                  Transcribiendo...
                </p>
              )}
            </div>
          ) : (
            <p className="text-[14px] leading-[1.6] whitespace-pre-line break-words font-[430]">
              {message.content}
            </p>
          )}

          {/* Timestamp */}
          <div
            className={cn(
              "mt-1 flex items-center gap-1",
              isUser ? "justify-end" : "justify-start"
            )}
          >
            <span className="text-[10px] tabular-nums text-slate-400">
              {formatTime(message.timestamp)}
            </span>
            {isUser && (
              <CheckCheck className="h-3 w-3 flex-shrink-0 text-brand-500" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
