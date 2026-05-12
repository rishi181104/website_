const WHATSAPP_NUMBER = "918978798457";

/**
 * Generate a WhatsApp chat link with a pre-filled message.
 * @param {string} message - The pre-filled message text.
 * @returns {string} Full WhatsApp URL.
 */
export function whatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Track a WhatsApp CTA click in GA4 (if gtag is loaded).
 * @param {string} label - A label for the event, e.g. "hero_start_journey".
 */
export function trackWhatsAppClick(label) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
}
