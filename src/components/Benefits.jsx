import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  { icon: "💪", title: "Build Strength", desc: "Develop functional muscle strength through guided hatha yoga flows." },
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
          <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "0.5rem",
              }}
            >
              What Hatha Yoga Will Do For You
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#888",
                fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
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
                  borderRadius: "clamp(0.75rem, 2vw, 1rem)",
                  padding: "clamp(1rem, 3vw, 1.5rem) clamp(0.875rem, 2.5vw, 1.25rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                  cursor: "default",
                  border: "1px solid rgba(78,95,69,0.06)",
                }}
              >
                <span style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.75rem)" }} aria-hidden="true">
                  {b.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                    fontWeight: 700,
                    color: "var(--color-primary-dark)",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
                    color: "#666",
                    lineHeight: 1.55,
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
