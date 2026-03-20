import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Stethoscope } from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="flex h-dvh max-w-lg mx-auto flex-col"
      style={{
        backgroundColor: "#F9F6EF",
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* ── Scrollable content ──────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-6 pt-14 pb-4">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
          Beta · Gastroenterología
        </span>

        {/* Main title */}
        <h1 className="mt-6 text-[38px] font-bold leading-[1.1] tracking-tight text-slate-900">
          Hacé tu consulta gastro en minutos.{" "}
          <span className="text-slate-400 font-medium">
            Recibí la respuesta asincrónica.
          </span>
        </h1>

        {/* Feature chips */}
        <div className="mt-8 flex flex-col gap-3">
          {[
            {
              icon: Clock,
              label: "Menos de 3 minutos",
              sub: "Respuesta validada por un médico especialista",
            },
            {
              icon: Stethoscope,
              label: "IA + Médico real",
              sub: "La IA guía el triaje, el médico firma la indicación",
            },
            {
              icon: ShieldCheck,
              label: "100% confidencial",
              sub: "Tus datos y audios están protegidos",
            },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-2xl border border-cream-300 bg-white px-4 py-3.5 shadow-sm"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-50">
                <Icon className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-800">
                  {label}
                </p>
                <p className="text-[12px] text-slate-400 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sticky CTA ──────────────────────────────────── */}
      <div className="flex-shrink-0 px-4 pt-3 pb-safe pb-6 bg-gradient-to-t from-[#F9F6EF] via-[#F9F6EF] to-transparent">
        <Link href="/chat" className="block">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-200 transition-all hover:bg-brand-700 active:scale-[0.98]">
            Iniciar consulta
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </Link>
        <p className="mt-3 text-center text-[11px] text-slate-400">
          Consulta $10.000 ARS · Pago seguro por Mercado Pago
        </p>
      </div>
    </div>
  );
}
