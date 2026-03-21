"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MoreVertical } from "lucide-react";

interface ChatHeaderProps {
  isComplete?: boolean;
  onBack?: () => void;
}

export function ChatHeader({ isComplete = false, onBack }: ChatHeaderProps) {
  const progressRatio = isComplete ? 1 : 0;

  return (
    <header className="sticky top-0 z-50 bg-cream-50 border-b border-cream-300">
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={onBack}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-cream-200 transition-colors"
          aria-label="Volver"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white text-[11px] font-semibold tracking-wide">
          IA
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-semibold text-slate-800 leading-none">
            GastroFlow
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <p className="text-[11px] text-slate-400 leading-none">Asistente médico · En línea</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isComplete ? (
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
              Listo
            </span>
          ) : (
            <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
              En consulta
            </span>
          )}
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-cream-200 transition-colors">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] w-full bg-cream-200">
        <motion.div
          className="h-full bg-brand-500"
          initial={{ width: 0 }}
          animate={{ width: `${progressRatio * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </header>
  );
}
