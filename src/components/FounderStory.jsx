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
                alt="Rashmitha — Founder of AGASTYA Hatha Yoga"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "clamp(1rem, 3vw, 1.5rem)",
                  margin: "0 auto",
                  display: "block",
                  objectFit: "cover",
                  boxShadow: "0 12px 40px rgba(78,95,69,0.18)",
                }}
              />
            </div>

            {/* Story Text */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.5rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                The Founder
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.35rem, 3.5vw, 2.4rem)",
                  fontWeight: 700,
                  color: "var(--color-primary-dark)",
                  marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
                }}
              >
                My Journey to AGASTYA
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.88rem, 2.2vw, 1rem)",
                  lineHeight: 1.8,
                  color: "#555",
                  fontWeight: 300,
                }}
              >
                <p style={{ marginBottom: "0.9rem" }}>
                  A few years ago, I was running on empty. Long hours, constant stress, and
                  this nagging feeling that I'd completely lost touch with my own body. I wasn't
                  sleeping well, my energy was gone, and honestly — I didn't feel like myself
                  anymore. A friend suggested I try a yoga class. I almost didn't go. But
                  something told me I needed to.
                </p>
                <p style={{ marginBottom: "0.9rem" }}>
                  That first class humbled me. I couldn't hold a plank, my balance was all over
                  the place, and I left drenched in sweat. But I also left feeling something I
                  hadn't felt in a long time — <em>alive</em>. So I went back. And again. And
                  again. Slowly, the changes crept in — not just the physical ones (though my
                  body transformed in ways I didn't think were possible), but something deeper.
                  I started sleeping better, thinking clearer, and carrying myself with a quiet
                  confidence I'd never had before. Yoga didn't just give me strength; it gave
                  me back <em>myself</em>.
                </p>
                <p style={{ marginBottom: "0.9rem" }}>
                  As I grew in my practice and earned my certifications, I kept noticing the
                  same thing — so many women around me were fighting the exact same battles I'd
                  been through. The exhaustion, the self-doubt, the feeling of being stuck. And
                  most of them had no idea that yoga could help, or they didn't know where to
                  start.
                </p>
                <p>
                  That's why I created <strong>AGASTYA</strong>. Not as a business plan or a
                  brand exercise, but because I genuinely believe every woman deserves to feel
                  what I felt on that mat — that spark of "I can do this." AGASTYA is my way of
                  holding that door open for you, wherever you are, whatever your level. This
                  isn't just yoga classes. It's the community I wish I'd had when I was
                  starting out. 💛
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
