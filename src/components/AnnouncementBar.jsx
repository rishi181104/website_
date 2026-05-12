import { useState, useEffect } from "react";
import { whatsappLink, trackWhatsAppClick } from "../utils/whatsapp";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcement_dismissed");
    if (dismissed === "true") setVisible(false);
  }, []);

  function handleDismiss() {
    setVisible(false);
    sessionStorage.setItem("announcement_dismissed", "true");
  }

  if (!visible) return null;

  return (
    <div
      id="announcement-bar"
      style={{
        background: "var(--color-primary)",
        color: "#fff",
        fontFamily: "var(--font-body)",
        fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
        padding: "0.5rem 2.5rem 0.5rem 0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        position: "relative",
        zIndex: 60,
        textAlign: "center",
        lineHeight: 1.4,
      }}
    >
      <a
        href={whatsappLink("Hi, I want to book my free trial class with Agastya Hatha Yoga")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("announcement_bar")}
        style={{
          color: "#fff",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        🧘‍♀️ Founding Batch — Only 10 Seats. Book Your Free Trial Today.
      </a>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: "0.5rem",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1.3rem",
          cursor: "pointer",
          lineHeight: 1,
          padding: "0.35rem",
          minWidth: "44px",
          minHeight: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ×
      </button>
    </div>
  );
}
