"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export interface VoiceRecorderState {
  isRecording: boolean;
  duration: number;
  audioBlob: Blob | null;
  audioUrl: string | null;
  error: string | null;
  hasPermission: boolean | null;
}

export function useVoiceRecorder() {
  const [state, setState] = useState<VoiceRecorderState>({
    isRecording: false,
    duration: 0,
    audioBlob: null,
    audioUrl: null,
    error: null,
    hasPermission: null,
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const durationRef = useRef(0);

  const checkPermission = useCallback(async () => {
    if (typeof window === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setState((s) => ({
        ...s,
        hasPermission: false,
        error: "Tu navegador no soporta grabación de audio.",
      }));
      return false;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      setState((s) => ({ ...s, hasPermission: true, error: null }));
      return true;
    } catch {
      setState((s) => ({
        ...s,
        hasPermission: false,
        error:
          "Permiso de micrófono denegado. Habilitalo en la configuración del navegador.",
      }));
      return false;
    }
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      durationRef.current = 0;

      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/webm";

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setState((s) => ({
          ...s,
          isRecording: false,
          audioBlob: blob,
          audioUrl: url,
          duration: durationRef.current,
        }));
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorder.start(100);

      setState((s) => ({
        ...s,
        isRecording: true,
        duration: 0,
        audioBlob: null,
        audioUrl: null,
        error: null,
        hasPermission: true,
      }));

      timerRef.current = setInterval(() => {
        durationRef.current += 1;
        setState((s) => ({ ...s, duration: durationRef.current }));
      }, 1000);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Error al acceder al micrófono.";
      setState((s) => ({ ...s, error: msg, hasPermission: false }));
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, []);

  const cancelRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.ondataavailable = null;
      mediaRecorderRef.current.onstop = () => {};
      if (mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
    }
    streamRef.current?.getTracks().forEach((t) => t.stop());
    if (timerRef.current) clearInterval(timerRef.current);
    durationRef.current = 0;
    setState((s) => ({
      ...s,
      isRecording: false,
      duration: 0,
      audioBlob: null,
      audioUrl: null,
    }));
  }, []);

  const clearAudio = useCallback(() => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    durationRef.current = 0;
    setState((s) => ({ ...s, audioBlob: null, audioUrl: null, duration: 0 }));
  }, []);

  // Resets state after sending without revoking the URL
  // (the message bubble keeps the URL alive for playback)
  const resetAfterSend = useCallback(() => {
    audioUrlRef.current = null;
    durationRef.current = 0;
    setState((s) => ({ ...s, audioBlob: null, audioUrl: null, duration: 0 }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return {
    ...state,
    startRecording,
    stopRecording,
    cancelRecording,
    clearAudio,
    resetAfterSend,
    checkPermission,
  };
}
