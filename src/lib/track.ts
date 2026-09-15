export type TrackEvent =
  | "popup_exibido"
  | "roleta_girada"
  | "cupom_copiado"
  | "clique_agendamento_desconto"
  | "popup_fechado";

type TrackParams = Record<string, string | number | boolean>;

type TrackingWindow = Window & {
  dataLayer?: TrackParams[];
  gtag?: (command: "event", event: string, params?: TrackParams) => void;
  fbq?: (command: "trackCustom", event: string, params?: TrackParams) => void;
};

/**
 * Sends an event to whichever tag manager / pixel happens to be installed.
 * Nothing is installed today, so this is a no-op except for the dataLayer
 * queue — GTM replays entries pushed before it loads.
 */
export function track(event: TrackEvent, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  const w = window as TrackingWindow;

  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });

  w.gtag?.("event", event, params);
  w.fbq?.("trackCustom", event, params);
}
