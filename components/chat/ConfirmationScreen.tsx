"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Clock, MapPin, Moon, Pill, Stethoscope } from "lucide-react";
import type { MedicalSummary } from "@/types";

interface Props {
  summary: MedicalSummary;
  onConfirm: () => void;
}

function Field({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  if (!value || value === "No mencionado" || value === "N/A") return null;
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-50">
        <Icon className="h-4 w-4 text-brand-600" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-[14px] text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export function ConfirmationScreen({ summary, onConfirm }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex h-dvh max-w-lg mx-auto flex-col"
      style={{
        backgroundColor: "#F9F6EF",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Header */}
      <div className="bg-white border-b border-cream-300 px-6 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-500">
          Paso final
        </p>
        <h2 className="mt-1 text-[22px] font-bold leading-tight tracking-tight text-slate-900">
          Revisá el resumen de tu consulta
        </h2>
        <p className="mt-1 text-[13px] text-slate-400">
          Confirmá que la información es correcta antes de enviar.
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
        {/* Red flag warning */}
        {summary.banderas_rojas_detectadas && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3"
          >
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5" />
            <div>
              <p className="text-[13px] font-semibold text-red-700">Síntomas de alerta detectados</p>
              <p className="text-[12px] text-red-500 mt-0.5">
                Si el dolor es severo o tenés fiebre alta, considerá ir a guardia urgente.
              </p>
            </div>
          </motion.div>
        )}

        {/* Summary card */}
        <div className="rounded-2xl border border-cream-300 bg-white p-5 space-y-4 shadow-sm">
          <Field icon={Stethoscope} label="Motivo de consulta" value={summary.motivo} />
          <Field icon={MapPin} label="Localización del dolor" value={summary.localizacion_dolor} />
          <Field icon={Clock} label="Duración de síntomas" value={summary.duracion} />
          <Field icon={Moon} label="Peso y sueño" value={summary.peso_y_sueno} />
          {summary.otros_sintomas?.length > 0 && (
            <Field icon={Pill} label="Otros síntomas" value={summary.otros_sintomas.join(", ")} />
          )}
        </div>

        {/* Executive summary */}
        {summary.resumen_ejecutivo && (
          <div className="rounded-2xl border border-cream-300 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Resumen para el médico
            </p>
            <p className="text-[13px] leading-relaxed text-slate-600">
              {summary.resumen_ejecutivo}
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="flex-shrink-0 px-4 pt-3 pb-safe pb-6 bg-gradient-to-t from-[#F9F6EF] via-[#F9F6EF] to-transparent">
        <button
          onClick={onConfirm}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all active:scale-[0.98]"
        >
          Enviar consulta
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}
