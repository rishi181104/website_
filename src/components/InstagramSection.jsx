import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const INSTAGRAM_URL =
  "https://www.instagram.com/agastya_poweryoga?igsh=MWU5M2h4bDhhaGlybA==";

const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DXz6sqYkS6g/",
  "https://www.instagram.com/p/DU9dJqRkVER/",
  "https://www.instagram.com/p/DX5KvisEb6A/",
  "https://www.instagram.com/p/C6FYyngronC/",
];

function InstagramIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export { InstagramIcon, INSTAGRAM_URL };

function InstagramEmbed({ postUrl, index }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    const loadScript = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadScript, 100 + index * 200);
    return () => clearTimeout(timer);
  }, [postUrl, index]);

  return (
    <div
      ref={containerRef}
      className="ig-embed-wrapper"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid rgba(78,95,69,0.08)",
        boxShadow: "0 4px 24px rgba(78,95,69,0.06)",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned={false}
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "0",
          boxShadow: "none",
          margin: "0",
          padding: "0",
          width: "100%",
          minWidth: "0",
          maxWidth: "100%",
        }}
      >
        {/* Placeholder while loading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
            minHeight: "300px",
            gap: "0.75rem",
          }}
        >
          <div className="ig-loading-spinner" />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "#bbb",
              fontWeight: 400,
            }}
          >
            Loading post…
          </span>
        </div>
      </blockquote>
    </div>
  );
}

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, var(--color-warm-white) 0%, var(--color-cream) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          top: "-6rem",
          right: "-6rem",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(225,48,108,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-4rem",
          left: "-4rem",
          width: "16rem",
          height: "16rem",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(131,58,180,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {/* Section label */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#C13584",
                marginBottom: "0.5rem",
              }}
            >
              Follow Our Journey
            </p>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.35rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                lineHeight: 1.25,
                marginBottom: "0.75rem",
              }}
            >
              @agastya_poweryoga on Instagram
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.85rem, 2.2vw, 1rem)",
                color: "#666",
                lineHeight: 1.65,
                fontWeight: 300,
                maxWidth: "550px",
                margin: "0 auto 2rem",
              }}
            >
              Daily yoga inspiration, wellness tips, behind-the-scenes moments,
              and our growing community of yogis.
            </p>
          </div>
        </ScrollReveal>

        {/* Embedded Posts Grid */}
        <ScrollReveal>
          <div className="ig-posts-grid">
            {INSTAGRAM_POSTS.map((url, i) => (
              <InstagramEmbed key={url} postUrl={url} index={i} />
            ))}
          </div>
        </ScrollReveal>

        {/* Follow CTA */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-follow-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background:
                  "linear-gradient(135deg, #833AB4, #E1306C, #F77737)",
                color: "#fff",
                padding: "0.85rem clamp(1.75rem, 5vw, 2.5rem)",
                borderRadius: "9999px",
                fontSize: "clamp(0.88rem, 2.2vw, 1rem)",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(225,48,108,0.25)",
                minHeight: "48px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(225,48,108,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(225,48,108,0.25)";
              }}
            >
              <InstagramIcon size={20} />
              Follow Us on Instagram
            </a>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.72rem, 2vw, 0.82rem)",
                color: "#bbb",
                marginTop: "0.75rem",
                fontWeight: 400,
              }}
            >
              Join our community for daily inspiration ✨
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
