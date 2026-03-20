export type UserRole = "PATIENT" | "DOCTOR" | "ADMIN";

export type ConsultationStatus =
  | "PENDING_PAYMENT"
  | "PENDING_CHAT"
  | "IN_PROGRESS"
  | "PENDING_REVIEW"
  | "APPROVED"
  | "REFERRED"
  | "CANCELLED"
  | "RED_FLAG";

export type MessageRole = "AI" | "PATIENT" | "DOCTOR";

// ─── Chat UI types ────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  role: "ai" | "user";
  type: "text" | "voice";
  content: string;
  duration?: number;
  audioBlob?: Blob;
  audioUrl?: string;
  waveform: number[];
  timestamp: Date;
}

// ─── AI output types ──────────────────────────────────────────────────────────

export interface AiSummary {
  mainSymptom: string;
  duration: string;
  intensityScore: number; // 1–10
  medications: string[];
  allergies: string[];
  medicalHistory: string[];
  redFlags: string[];
}

export interface PrescriptionItem {
  drug: string;
  dose: string;
  frequency: string;
  duration: string;
  notes?: string;
}

// ─── Next-auth session extension ─────────────────────────────────────────────

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
