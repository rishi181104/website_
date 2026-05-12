import ScrollReveal from "./ScrollReveal";
import agastyaLogo from "../assets/agastya_mianlogo.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--color-warm-white)", position: "relative", overflow: "hidden" }}
    >
      {/* Logo Watermark */}
      <img
        src={agastyaLogo}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "-5%",
          transform: "translateY(-50%)",
          width: "min(35vw, 320px)",
          height: "auto",
          opacity: 0.04,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      <div className="container-main">
        <ScrollReveal>
          <div
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Decorative leaf */}
            <span
              style={{
                display: "block",
                fontSize: "2.5rem",
                marginBottom: "1rem",
                opacity: 0.7,
              }}
              aria-hidden="true"
            >
              🌿
            </span>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "1.5rem",
              }}
            >
              About Agastya
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#555",
                fontWeight: 300,
              }}
            >
              Agastya is an online power yoga platform created to help women feel
              stronger, healthier, and more confident through guided yoga practices.
              We believe that every woman deserves a space to reconnect with her body,
              build inner strength, and discover the transformative power of consistent
              yoga practice — all from the comfort of home.
            </p>

            {/* Accent line */}
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "var(--color-primary)",
                borderRadius: "2px",
                margin: "2rem auto 0",
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
