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
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.5rem 4rem",
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

      <div style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "var(--color-primary-dark)",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Empower Your Mind &amp; Body Through Power Yoga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "#666",
            lineHeight: 1.7,
            maxWidth: "650px",
            margin: "0 auto 2.5rem",
            fontWeight: 300,
          }}
        >
          Online power yoga sessions designed for women and students to build strength,
          flexibility, confidence, and inner peace from the comfort of home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={whatsappLink("Hi, I want to start my journey with Agastya Power Yoga")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero_start_journey")}
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              padding: "0.9rem 2rem",
              borderRadius: "9999px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(78,95,69,0.25)",
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
            href={whatsappLink("Hi, I want to learn more about Agastya Power Yoga")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero_chat_whatsapp")}
            style={{
              background: "transparent",
              color: "var(--color-primary)",
              padding: "0.9rem 2rem",
              borderRadius: "9999px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              border: "2px solid var(--color-primary)",
              transition: "all 0.3s",
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
