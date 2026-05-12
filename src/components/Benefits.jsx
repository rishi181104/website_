import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  { icon: "💪", title: "Build Strength", desc: "Develop functional muscle strength through guided power yoga flows." },
  { icon: "🧘‍♀️", title: "Improve Flexibility", desc: "Gradually increase your range of motion with safe, progressive stretches." },
  { icon: "✨", title: "Boost Confidence", desc: "Watch your self-esteem soar as you achieve poses you never thought possible." },
  { icon: "🕊️", title: "Find Inner Peace", desc: "Calm your mind with breathwork and mindfulness integrated into every session." },
  { icon: "🦴", title: "Fix Your Posture", desc: "Correct alignment issues and relieve back pain from desk-bound lifestyles." },
  { icon: "⚡", title: "Increase Energy", desc: "Start your mornings with a natural energy boost that lasts all day." },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="section-padding"
      style={{ background: "var(--color-warm-white)" }}
    >
      <div className="container-main">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "0.75rem",
              }}
            >
              What Power Yoga Will Do For You
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#888",
                fontSize: "0.95rem",
                fontWeight: 300,
              }}
            >
              Transform your body and mind, one session at a time.
            </p>
          </div>
        </ScrollReveal>

        <div className="benefits-grid">
          {BENEFITS.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.08}>
              <div
                className="card-hover"
                style={{
                  background: "var(--color-cream)",
                  borderRadius: "1rem",
                  padding: "1.5rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  cursor: "default",
                  border: "1px solid rgba(78,95,69,0.06)",
                }}
              >
                <span style={{ fontSize: "1.75rem" }} aria-hidden="true">
                  {b.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--color-primary-dark)",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
