import { motion } from "framer-motion";
import { whatsappLink, trackWhatsAppClick } from "../utils/whatsapp";
import ScrollReveal from "./ScrollReveal";
import agastyaLogo from "../assets/agastya_mianlogo.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(180deg, var(--color-cream) 0%, var(--color-warm-white) 100%)",
        minHeight: "min(80vh, 600px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(2.5rem, 6vw, 4rem) 1rem clamp(2rem, 5vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          width: "min(55vw, 500px)",
          height: "auto",
          opacity: 0.06,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-8rem",
          right: "-8rem",
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(78,95,69,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-6rem",
          left: "-6rem",
          width: "18rem",
          height: "18rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(78,95,69,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1, width: "100%" }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "var(--color-primary-dark)",
            lineHeight: 1.2,
            marginBottom: "1rem",
            padding: "0 0.25rem",
          }}
        >
          Empower Your Mind &amp; Body Through Hatha Yoga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
            color: "#666",
            lineHeight: 1.65,
            maxWidth: "650px",
            margin: "0 auto 1.75rem",
            fontWeight: 300,
            padding: "0 0.25rem",
          }}
        >
          Online hatha yoga sessions designed for women and students to build strength,
          flexibility, confidence, and inner peace from the comfort of home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hero-cta-buttons"
        >
          <a
            href={whatsappLink("Hi, I want to start my journey with Agastya Hatha Yoga")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero_start_journey")}
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "9999px",
              fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(78,95,69,0.25)",
              whiteSpace: "nowrap",
              minHeight: "48px",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--color-primary-dark)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 28px rgba(78,95,69,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--color-primary)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 20px rgba(78,95,69,0.25)";
            }}
          >
            Start Your Journey
          </a>
          <a
            href={whatsappLink("Hi, I want to learn more about Agastya Hatha Yoga")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero_chat_whatsapp")}
            style={{
              background: "transparent",
              color: "var(--color-primary)",
              padding: "0.8rem 1.5rem",
              borderRadius: "9999px",
              fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
              fontWeight: 600,
              textDecoration: "none",
              border: "2px solid var(--color-primary)",
              transition: "all 0.3s",
              whiteSpace: "nowrap",
              minHeight: "48px",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--color-primary)";
              e.target.style.color = "#fff";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "var(--color-primary)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
