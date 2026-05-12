import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

import cert200hr from "../assets/200hoursyoga.jpg";
import cert300hr from "../assets/300hoursofyoga.jpg";
import certPrenatal from "../assets/prenatalyoga.jpg";
import certBala from "../assets/balayogacertificate.jpeg";

const certificates = [
  {
    id: 1,
    image: cert200hr,
    title: "200 Hours Yoga Teacher Training",
    issuer: "Bodhi School of Yoga",
    badge: "Yoga Alliance Registered",
    year: "2023",
  },
  {
    id: 2,
    image: cert300hr,
    title: "300 Hours Yoga Teacher Training",
    issuer: "Bodhi School of Yoga",
    badge: "Yoga Alliance Registered",
    year: "2023",
  },
  {
    id: 3,
    image: certPrenatal,
    title: "Prenatal Yoga Teacher Training",
    issuer: "Bodhi School of Yoga",
    badge: "85 Hours · RPYS Certified",
    year: "2023",
  },
  {
    id: 4,
    image: certBala,
    title: "Bala Yoga Teacher Training",
    issuer: "Bodhi School of Yoga",
    badge: "95 Hours · Kids Yoga",
    year: "2025",
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <section
        id="certifications"
        className="section-padding"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Verified Credentials
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 700,
                  color: "var(--color-primary-dark)",
                  marginBottom: "1rem",
                }}
              >
                Professional Certifications
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "#888",
                  maxWidth: "520px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Internationally recognized certifications ensuring the highest
                standards of yoga instruction.
              </p>
            </div>
          </ScrollReveal>

          {/* Certificates Grid */}
          <div className="certs-grid">
            {certificates.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 0.1}>
                <div
                  className="cert-card card-hover"
                  onClick={() => setLightbox(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${cert.title} certificate`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightbox(cert);
                    }
                  }}
                >
                  {/* Certificate Image */}
                  <div className="cert-img-wrapper">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="cert-overlay">
                      <span className="cert-zoom-icon">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="cert-info">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-badge-row">
                      <span className="cert-badge">{cert.badge}</span>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="cert-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} certificate full view`}
        >
          <div
            className="cert-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close certificate view"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img
              src={lightbox.image}
              alt={`${lightbox.title} certificate full view`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "0.75rem",
                display: "block",
              }}
            />
            <div className="cert-lightbox-info">
              <h3>{lightbox.title}</h3>
              <p>
                {lightbox.issuer} · {lightbox.badge}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
