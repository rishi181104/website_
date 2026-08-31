import ScrollReveal from "./ScrollReveal";
import rashmithaNews from "../assets/rashmitha_news.jpeg";

export default function NewsFeature() {
  return (
    <section
      id="news"
      className="section-padding"
      style={{ background: "var(--color-cream)", position: "relative", overflow: "hidden" }}
    >
      {/* Background decorative watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(6rem, 18vw, 14rem)",
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          color: "var(--color-primary)",
          opacity: 0.03,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        NEWS
      </div>

      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(78,95,69,0.1)",
                border: "1px solid rgba(78,95,69,0.2)",
                borderRadius: "100px",
                padding: "0.35rem 1rem",
                marginBottom: "1.25rem",
              }}
            >
              <span style={{ fontSize: "1rem" }}>📰</span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                Media Coverage
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "clamp(0.5rem, 1.5vw, 0.875rem)",
              }}
            >
              As Featured in the News
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.85rem, 2.2vw, 1rem)",
                color: "#777",
                fontWeight: 300,
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Rashmitha's work and mission have been recognized beyond the mat — making waves in the media.
            </p>
          </div>
        </ScrollReveal>

        {/* News Card */}
        <ScrollReveal delay={0.15}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <a
              href="https://share.google/VL4y1yBRapGZKjKF1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "block" }}
              aria-label="Read the full news article about Rashmitha"
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "clamp(1rem, 2.5vw, 1.5rem)",
                  overflow: "hidden",
                  border: "1px solid rgba(78,95,69,0.1)",
                  boxShadow: "0 8px 40px rgba(78,95,69,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(78,95,69,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(78,95,69,0.1)";
                }}
              >
                {/* News Image */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={rashmithaNews}
                    alt="Rashmitha featured in news publication"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      maxHeight: "480px",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Floating pill */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "clamp(0.75rem, 2vw, 1rem)",
                      right: "clamp(0.75rem, 2vw, 1rem)",
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      borderRadius: "100px",
                      padding: "0.3rem 0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem" }}>🔗</span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--color-primary-dark)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Read Article
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div
                  style={{
                    padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 2rem)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.78rem)",
                        fontWeight: 600,
                        color: "var(--color-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        marginBottom: "0.3rem",
                      }}
                    >
                      News Publication
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                        fontWeight: 700,
                        color: "var(--color-primary-dark)",
                        lineHeight: 1.3,
                      }}
                    >
                      Rashmitha in the Spotlight
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                        color: "#888",
                        fontWeight: 300,
                        marginTop: "0.25rem",
                      }}
                    >
                      Founder of AGASTYA Hatha Yoga · Certified Yoga Instructor
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: "var(--color-primary)",
                      color: "#fff",
                      borderRadius: "100px",
                      padding: "0.65rem 1.35rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    Read the Full Article →
                  </div>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
