import ScrollReveal from "./ScrollReveal";

const DIFFERENTIATORS = [
  { icon: "🏠", title: "100% Online", desc: "Join from the comfort of your home — all you need is a mat and a screen." },
  { icon: "👩‍👩‍👧‍👧", title: "Women-Only Batches", desc: "A safe, supportive, judgment-free space designed exclusively for women." },
  { icon: "🎓", title: "Expert-Led", desc: "Guided by a certified instructor with 6+ years of teaching experience." },
  { icon: "⏰", title: "Flexible Timings", desc: "Morning sessions that fit perfectly into your daily routine." },
];

export default function Differentiators() {
  return (
    <section id="why-choose-us" className="section-padding" style={{ background: "var(--color-cream)" }}>
      <div className="container-main">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "var(--color-primary-dark)", marginBottom: "0.5rem" }}>
              Why Choose AGASTYA
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#888", fontSize: "clamp(0.82rem, 2vw, 0.95rem)", fontWeight: 300 }}>
              We are not just another yoga class.
            </p>
          </div>
        </ScrollReveal>

        <div className="differentiators-grid">
          {DIFFERENTIATORS.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.1}>
              <div className="card-hover" style={{
                background: "#fff",
                borderRadius: "clamp(0.75rem, 2vw, 1rem)",
                padding: "clamp(1rem, 3vw, 1.5rem) clamp(0.875rem, 2.5vw, 1.25rem)",
                textAlign: "center",
                border: "1px solid rgba(78,95,69,0.06)",
              }}>
                <span style={{ display: "block", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", marginBottom: "0.5rem" }} aria-hidden="true">{d.icon}</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)", fontWeight: 700, color: "var(--color-primary-dark)", marginBottom: "0.35rem" }}>{d.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.75rem, 2vw, 0.85rem)", color: "#666", lineHeight: 1.55, fontWeight: 300 }}>{d.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
