import ScrollReveal from "./ScrollReveal";
import rashmithaInstructor from "../assets/rashmitha-instructor.jpeg";

export default function Instructor() {
  return (
    <section
      id="instructor"
      className="section-padding"
      style={{ background: "var(--color-warm-white)" }}
    >
      <div className="container-main">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 3rem)" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "0.75rem",
              }}
            >
              Your Instructor
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              background: "#fff",
              borderRadius: "clamp(1rem, 2.5vw, 1.5rem)",
              overflow: "hidden",
              border: "1px solid rgba(78,95,69,0.08)",
              boxShadow: "0 8px 40px rgba(78,95,69,0.08)",
            }}
          >
            {/* Photo */}
            <img
              src={rashmithaInstructor}
              alt="Rashmitha practicing hatha yoga"
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Bio */}
            <div style={{ padding: "clamp(1rem, 3vw, 1.5rem) clamp(1rem, 2.5vw, 1.25rem) clamp(1.25rem, 3.5vw, 2rem)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "36px",
                    background: "var(--color-primary)",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.15rem, 3vw, 1.4rem)",
                      fontWeight: 700,
                      color: "var(--color-primary-dark)",
                      lineHeight: 1.2,
                    }}
                  >
                    Rashmitha
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                    }}
                  >
                    Certified Hatha Yoga Instructor · 6+ Years
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
                  lineHeight: 1.65,
                  color: "#666",
                  fontWeight: 300,
                }}
              >
                Rashmitha is a certified hatha yoga instructor with over 6 years of
                experience helping women improve their physical strength, flexibility,
                and mental wellness. Her teaching style blends challenge with compassion,
                ensuring every student feels seen, supported, and empowered.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
