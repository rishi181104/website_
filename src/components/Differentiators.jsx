import ScrollReveal from "./ScrollReveal";

const DIFFERENTIATORS = [
  {
    icon: "🏠",
    title: "100% Online",
    desc: "Join from the comfort of your home — all you need is a mat and a screen.",
  },
  {
    icon: "👩‍👩‍👧‍👧",
    title: "Women-Only Batches",
    desc: "A safe, supportive, judgment-free space designed exclusively for women.",
  },
  {
    icon: "🎓",
    title: "Expert-Led",
    desc: "Guided by a certified instructor with 6+ years of teaching experience.",
  },
  {
    icon: "⏰",
    title: "Flexible Timings",
    desc: "Morning sessions that fit perfectly into your daily routine.",
  },
];

export default function Differentiators() {
  return (
    <section
      id="why-choose-us"
      className="section-padding"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container-main">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "1rem",
              }}
            >
              Why Choose AGASTYA
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#888",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              We are not just another yoga class.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {DIFFERENTIATORS.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.1}>
              <div
                className="card-hover"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  border: "1px solid rgba(78,95,69,0.06)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                  }}
                  aria-hidden="true"
                >
                  {d.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--color-primary-dark)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
