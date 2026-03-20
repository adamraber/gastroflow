"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { cn, formatDuration } from "@/lib/utils";

interface VoiceMessageProps {
  waveform: number[];
  duration: number;
  audioUrl?: string;
  isUser?: boolean;
}

export function VoiceMessage({
  waveform,
  duration,
  audioUrl,
  isUser = false,
}: VoiceMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progress = duration > 0 ? elapsed / duration : 0;
  const activeBars = Math.round(progress * waveform.length);

  const stopPlayback = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
  }, []);

  const resetPlayback = useCallback(() => {
    stopPlayback();
    setElapsed(0);
  }, [stopPlayback]);

  // Set up audio element when URL is provided
  useEffect(() => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onended = () => {
      stopPlayback();
      setElapsed(0);
    };

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [audioUrl, stopPlayback]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      stopPlayback();
      return;
    }

    if (audioRef.current) {
      // Real audio playback
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
      setElapsed(0);

      timerRef.current = setInterval(() => {
        const current = Math.floor(audioRef.current?.currentTime ?? 0);
        setElapsed(current);
        if (current >= duration) resetPlayback();
      }, 250);
    } else {
      // Simulated playback (no audio blob)
      setIsPlaying(true);
      setElapsed(0);
      let tick = 0;
      timerRef.current = setInterval(() => {
        tick++;
        setElapsed(tick);
        if (tick >= duration) {
          resetPlayback();
        }
      }, 1000);
    }
  };

  return (
    <div className="flex items-center gap-3 w-[210px]">
      {/* Play / Pause button */}
      <button
        onClick={togglePlay}
        className={cn(
          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all active:scale-95",
          isUser
            ? "bg-brand-700/90 text-white hover:bg-brand-800"
            : "bg-brand-600 text-white hover:bg-brand-700"
        )}
        aria-label={isPlaying ? "Pausar" : "Reproducir"}
      >
        {isPlaying ? (
          <Pause className="h-3.5 w-3.5" />
        ) : (
          <Play className="h-3.5 w-3.5 translate-x-[1px]" />
        )}
      </button>

      {/* Waveform + duration */}
      <div className="flex flex-1 flex-col gap-1.5">
        {/* Bars */}
        <div className="flex h-7 items-end gap-[2px]">
          {waveform.map((h, i) => {
            const isActive = i < activeBars;
            const isCurrent = i === activeBars && isPlaying;

            return (
              <motion.div
                key={i}
                className={cn(
                  "flex-1 rounded-[1px] transition-colors duration-100",
                  isActive
                    ? isUser
                      ? "bg-brand-800"
                      : "bg-brand-600"
                    : isUser
                      ? "bg-brand-300/60"
                      : "bg-slate-300"
                )}
                style={{ height: `${h * 100}%` }}
                animate={isCurrent ? { scaleY: [1, 1.25, 1] } : {}}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}
        </div>

        {/* Duration */}
        <span
          className={cn(
            "text-[10px] font-medium tabular-nums",
            isUser ? "text-brand-900/50" : "text-slate-400"
          )}
        >
          {isPlaying ? formatDuration(elapsed) : formatDuration(duration)}
        </span>
      </div>
    </div>
  );
}
