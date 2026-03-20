"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MoreVertical, Stethoscope } from "lucide-react";

interface ChatHeaderProps {
  stage: number;
  totalStages?: number;
  isComplete?: boolean;
  onBack?: () => void;
}

export function ChatHeader({
  stage,
  totalStages = 4,
  isComplete = false,
  onBack,
}: ChatHeaderProps) {
  const progressRatio = isComplete ? 1 : stage / totalStages;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main row */}
      <div className="flex items-center gap-3 px-3 py-2.5">
        <button
          onClick={onBack}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 active:bg-slate-200"
          aria-label="Volver"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 shadow-sm">
            <Stethoscope className="h-5 w-5 text-white" />
          </div>
          {/* Online indicator */}
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
        </div>

        {/* Title + status */}
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-[15px] font-semibold leading-tight text-slate-900">
            GastroFlow IA
          </h1>
          <p className="text-[11px] font-medium text-brand-600">
            Asistente médico · En línea
          </p>
        </div>

        {/* Stage badge */}
        <div className="flex items-center gap-2">
          {!isComplete ? (
            <motion.span
              key={stage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-200"
            >
              {stage}/{totalStages}
            </motion.span>
          ) : (
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
              Completado
            </span>
          )}
          <button
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100"
            aria-label="Opciones"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] w-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
          initial={{ width: 0 }}
          animate={{ width: `${progressRatio * 100}%` }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
      </div>
    </header>
  );
}
