import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GastroFlow — Consulta Gastroenterológica Online",
  description:
    "Resolvé tu consulta gastroenterológica en minutos. Chat guiado por IA con validación de médico especialista.",
  applicationName: "GastroFlow",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GastroFlow",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0d9488",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={interTight.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
