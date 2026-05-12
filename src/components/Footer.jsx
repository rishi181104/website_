import agastyaLogo from "../assets/agastya_mianlogo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    color: "rgba(244,240,230,0.7)",
    textDecoration: "none",
    fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
    fontWeight: 300,
    transition: "color 0.2s",
    minHeight: "44px",
    display: "inline-flex",
    alignItems: "center",
  };

  return (
    <footer
      id="contact"
      style={{
        background: "var(--color-primary-dark)",
        padding: "clamp(2.5rem, 6vw, 3.5rem) clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 4vw, 2rem)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        className="container-main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            minHeight: "48px",
          }}
        >
          <img
            src={agastyaLogo}
            alt="AGASTYA Logo"
            style={{
              height: "clamp(36px, 6vw, 44px)",
              width: "auto",
              borderRadius: "4px",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              letterSpacing: "0.06em",
            }}
          >
            AGASTYA
          </span>
        </a>

        {/* Links */}
        <div style={{ display: "flex", gap: "clamp(0.75rem, 3vw, 1.5rem)", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#programs" style={linkStyle}>Programs</a>
          <a href="#instructor" style={linkStyle}>Instructor</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        {/* Social & Contact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <a
            href="https://instagram.com/agastya_poweryoga"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkStyle,
              gap: "0.4rem",
            }}
          >
            📸 @agastya_poweryoga
          </a>
          <a
            href="https://wa.me/918978798457"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkStyle,
              gap: "0.4rem",
            }}
          >
            📞 +91 89787 98457
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(244,240,230,0.1)",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            color: "rgba(244,240,230,0.4)",
            fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
            fontWeight: 300,
            textAlign: "center",
          }}
        >
          © {currentYear} AGASTYA Hatha Yoga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
