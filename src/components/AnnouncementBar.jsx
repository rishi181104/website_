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
        fontSize: "0.78rem",
        padding: "0.5rem 2.5rem 0.5rem 0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        position: "relative",
        zIndex: 60,
      }}
    >
      <a
        href={whatsappLink("Hi, I want to book my free trial class with Agastya Power Yoga")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("announcement_bar")}
        style={{
          color: "#fff",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        🧘‍♀️ Founding Batch — Only 10 Seats Available. Book Your Free Trial Class Today.
      </a>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: "0.75rem",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1.2rem",
          cursor: "pointer",
          lineHeight: 1,
          padding: "0.25rem",
        }}
      >
        ×
      </button>
    </div>
  );
}
