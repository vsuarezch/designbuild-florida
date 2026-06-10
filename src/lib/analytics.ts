export function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof (window as unknown as { gtag?: unknown }).gtag !== "function") return;
  (window as unknown as { gtag: (cmd: string, event: string, params: Record<string, unknown>) => void }).gtag(
    "event",
    eventName,
    params ?? {},
  );
}
