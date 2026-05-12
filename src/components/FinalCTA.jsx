import { whatsappLink, trackWhatsAppClick } from "../utils/whatsapp";
import ScrollReveal from "./ScrollReveal";
import agastyaLogo from "../assets/agastya_mianlogo.jpg";

export default function FinalCTA() {
  return (
    <section
      id="free-trial"
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-4rem",
          left: "-4rem",
          width: "16rem",
          height: "16rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5rem",
          right: "-5rem",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}
      />

      {/* Logo Watermark */}
      <img
        src={agastyaLogo}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(45vw, 380px)",
          height: "auto",
          opacity: 0.07,
          mixBlendMode: "soft-light",
          pointerEvents: "none",
          userSelect: "none",
          filter: "invert(1)",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto", padding: "0 0.25rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.35rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "var(--color-cream)",
                marginBottom: "0.85rem",
                lineHeight: 1.25,
              }}
            >
              Start With a Free Class — No Commitment
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.88rem, 2.2vw, 1.05rem)",
                color: "rgba(244,240,230,0.8)",
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              Join our Founding Batch and experience the AGASTYA difference before
              you commit.
            </p>

            <a
              href={whatsappLink("Hi, I want to book my free trial class with Agastya Hatha Yoga")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("final_cta_free_trial")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-cream)",
                color: "var(--color-primary-dark)",
                padding: "0.85rem clamp(1.5rem, 5vw, 2.5rem)",
                borderRadius: "9999px",
                fontSize: "clamp(0.88rem, 2.2vw, 1rem)",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                minHeight: "48px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px) scale(1.02)";
                e.target.style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 4px 24px rgba(0,0,0,0.15)";
              }}
            >
              Book My Free Trial
            </a>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.72rem, 2vw, 0.82rem)",
                color: "rgba(244,240,230,0.55)",
                marginTop: "0.85rem",
                fontWeight: 300,
              }}
            >
              ⏳ Only a few seats left in the Founding Batch
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
