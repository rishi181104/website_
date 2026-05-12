import { whatsappLink, trackWhatsAppClick } from "../utils/whatsapp";
import ScrollReveal from "./ScrollReveal";

const PROGRAMS = [
  {
    title: "Daily Morning Power Yoga",
    features: [
      "1-hour live Zoom session every morning",
      "Women-focused batch, beginner friendly",
      "Small group for personal attention",
    ],
    cta: "Inquire on WhatsApp",
    message: "Hi, I am interested in the Daily Morning Power Yoga batch",
    label: "program_daily_morning",
  },
  {
    title: "Premium 3-Month Program",
    features: [
      "Structured 3-month transformation journey",
      "Personalized attention & progress tracking",
      "Small, intimate group sessions",
    ],
    cta: "Know Pricing on WhatsApp",
    message: "Hi, I would like to know the pricing for the 3-month Premium Yoga Program",
    label: "program_premium_3mo",
    featured: true,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-padding" style={{ background: "var(--color-cream)" }}>
      <div className="container-main">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "var(--color-primary-dark)", marginBottom: "0.75rem" }}>
              Our Programs
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "#888", fontSize: "0.95rem", fontWeight: 300 }}>
              Choose the path that fits your lifestyle.
            </p>
          </div>
        </ScrollReveal>

        <div className="programs-grid">
          {PROGRAMS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12}>
              <div className="card-hover" style={{ background: p.featured ? "var(--color-primary-dark)" : "#fff", color: p.featured ? "#fff" : "inherit", borderRadius: "1.25rem", padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", border: p.featured ? "none" : "1px solid rgba(78,95,69,0.1)", position: "relative", overflow: "hidden" }}>
                {p.featured && (
                  <span style={{ position: "absolute", top: "1rem", right: "-2rem", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "0.65rem", fontWeight: 600, padding: "0.25rem 2.5rem", transform: "rotate(45deg)", fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}>
                    POPULAR
                  </span>
                )}
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: p.featured ? "#fff" : "var(--color-primary-dark)" }}>{p.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: p.featured ? "rgba(255,255,255,0.85)" : "#666", display: "flex", alignItems: "flex-start", gap: "0.5rem", lineHeight: 1.5, fontWeight: 300 }}>
                      <span style={{ color: p.featured ? "#B8D4A8" : "var(--color-primary)", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={whatsappLink(p.message)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(p.label)} style={{ display: "block", textAlign: "center", padding: "0.8rem", borderRadius: "9999px", fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", transition: "all 0.3s", background: p.featured ? "#fff" : "var(--color-primary)", color: p.featured ? "var(--color-primary-dark)" : "#fff", marginTop: "0.5rem" }}
                  onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"; }}
                  onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
                >
                  {p.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
