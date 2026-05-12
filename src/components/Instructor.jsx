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
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "1rem",
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
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(78,95,69,0.08)",
              boxShadow: "0 8px 40px rgba(78,95,69,0.08)",
            }}
          >
            {/* Photo */}
            <img
              src={rashmithaInstructor}
              alt="Rashmitha practicing power yoga"
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Bio */}
            <div style={{ padding: "1.5rem 1.25rem 2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "40px",
                    background: "var(--color-primary)",
                    borderRadius: "2px",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.4rem",
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
                      fontSize: "0.85rem",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                    }}
                  >
                    Certified Power Yoga Instructor · 6+ Years
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "#666",
                  fontWeight: 300,
                }}
              >
                Rashmitha is a certified power yoga instructor with over 6 years of
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
