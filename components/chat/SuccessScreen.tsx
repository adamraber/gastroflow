"use client";

import { motion } from "framer-motion";

export function SuccessScreen() {
  return (
    <div
      className="flex h-dvh max-w-lg mx-auto flex-col items-center justify-center px-8 text-center"
      style={{
        backgroundColor: "#F9F6EF",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 mb-6"
      >
        <span className="text-4xl">✅</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-[28px] font-bold tracking-tight text-slate-900">
          ¡Consulta enviada!
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
          Un médico especialista evaluará tu caso y te contestará en un período de{" "}
          <span className="font-semibold text-slate-700">12 horas</span>.
        </p>
        <p className="mt-2 text-[13px] text-slate-400">
          Te notificaremos por email y por la app cuando tengamos novedades.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-8 flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-4 py-2"
      >
        <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
        <span className="text-[12px] font-medium text-brand-700">
          Médico revisando tu caso...
        </span>
      </motion.div>
    </div>
  );
}
