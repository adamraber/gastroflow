import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

/**
 * Generates a deterministic pseudo-random waveform for a given seed string.
 * Returns an array of `count` values in [0.15, 1.0] — bar heights relative to container.
 */
export function generateWaveform(seed: string, count = 32): number[] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Array.from({ length: count }, (_, i) => {
    const v = Math.abs(Math.sin(hash * 9301 + i * 49297 + 233) * 0.5 + 0.5);
    return 0.15 + v * 0.85;
  });
}
