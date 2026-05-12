import ScrollReveal from "./ScrollReveal";
import rashmithaPortrait from "../assets/rashmitha-portrait.png";

export default function FounderStory() {
  return (
    <section
      id="founder-story"
      className="section-padding"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="founder-grid">
            {/* Photo */}
            <div className="founder-photo-col">
              <img
                src={rashmithaPortrait}
                alt="Rashmitha — Founder of AGASTYA Power Yoga"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "1.5rem",
                  margin: "0 auto",
                  display: "block",
                  objectFit: "cover",
                  boxShadow: "0 20px 60px rgba(78,95,69,0.2)",
                }}
              />
            </div>

            {/* Story Text */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                The Founder
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
                Why I Built AGASTYA
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "#555",
                  fontWeight: 300,
                }}
              >
                <p style={{ marginBottom: "1rem" }}>
                  {/* PLACEHOLDER: Replace with Rashmitha's actual transformation story */}
                  My journey with yoga began during a time when I needed it most. Dealing with
                  stress, low energy, and a disconnect from my own body, I turned to power yoga
                  as a last resort — and it changed everything.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Over the years, yoga gave me not just physical strength, but a deep sense of
                  confidence and peace that I never thought possible. I realized that so many
                  women around me were facing the same struggles, yet didn't have access to
                  quality, personal yoga guidance.
                </p>
                <p>
                  That's why I created AGASTYA — to bring the transformative power of yoga to
                  every woman, regardless of where she is. This is more than a class; it's a
                  community built on strength, support, and self-discovery.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
