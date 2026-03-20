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
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn("flex w-full px-1", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "relative max-w-[78%] rounded-2xl shadow-sm",
          isUser
            ? "rounded-tr-[4px] bg-brand-100 text-slate-900"
            : "rounded-tl-[4px] bg-white text-slate-900"
        )}
      >
        {/* Bubble tail */}
        {isUser ? (
          <span className="absolute -right-[6px] top-0 h-3 w-3 overflow-hidden">
            <span className="absolute left-0 top-0 h-3 w-3 origin-top-left rotate-0 bg-brand-100" />
          </span>
        ) : (
          <span className="absolute -left-[6px] top-0 h-3 w-3 overflow-hidden">
            <span className="absolute right-0 top-0 h-3 w-3 origin-top-right rotate-0 bg-white" />
          </span>
        )}

        <div className="px-3 py-2">
          {message.type === "voice" ? (
            <div className="py-0.5">
              <VoiceMessage
                waveform={message.waveform}
                duration={message.duration ?? 0}
                audioUrl={message.audioUrl}
                isUser={isUser}
              />
            </div>
          ) : (
            <p className="text-[14.5px] leading-[1.55] whitespace-pre-line break-words">
              {message.content}
            </p>
          )}

          {/* Timestamp row */}
          <div
            className={cn(
              "mt-[3px] flex items-center gap-1",
              isUser ? "justify-end" : "justify-start"
            )}
          >
            <span className="text-[10px] leading-none text-slate-400 tabular-nums">
              {formatTime(message.timestamp)}
            </span>
            {isUser && (
              <CheckCheck className="h-3 w-3 flex-shrink-0 text-brand-600" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
