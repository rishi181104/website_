import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink, trackWhatsAppClick } from "../utils/whatsapp";
import { InstagramIcon, INSTAGRAM_URL } from "./InstagramSection";
import agastyaLogo from "../assets/agastya_mianlogo.jpg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Instructor", href: "#instructor" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    fontFamily: "var(--font-body)",
    transition: "all 0.3s ease",
    background: scrolled ? "rgba(250, 250, 247, 0.95)" : "var(--color-warm-white)",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    boxShadow: scrolled ? "0 2px 20px rgba(78,95,69,0.08)" : "none",
    borderBottom: scrolled ? "1px solid rgba(78,95,69,0.08)" : "1px solid transparent",
  };

  return (
    <nav id="navbar" style={navStyle}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
            flexShrink: 0,
          }}
        >
          <img
            src={agastyaLogo}
            alt="AGASTYA Logo"
            style={{
              height: "36px",
              width: "auto",
              borderRadius: "4px",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--color-primary)",
              letterSpacing: "0.05em",
            }}
          >
            AGASTYA
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="nav-desktop-links"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#555",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            style={{
              color: "#555",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              transition: "all 0.25s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E1306C";
              e.currentTarget.style.background = "rgba(225,48,108,0.08)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={whatsappLink("Hi, I want to book my free trial class with Agastya Hatha Yoga")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("navbar_cta")}
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              padding: "0.6rem 1.4rem",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--color-primary-dark)";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--color-primary)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Book Free Trial
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
            zIndex: 51,
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-primary)",
              transition: "all 0.3s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-primary)",
              transition: "all 0.3s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-primary)",
              transition: "all 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
              background: "var(--color-warm-white)",
              borderTop: "1px solid rgba(78,95,69,0.1)",
            }}
            className="nav-mobile-menu"
          >
            <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    // Delay scroll to allow menu close & body overflow reset
                    setTimeout(() => {
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 350);
                  }}
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    fontSize: "1rem",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(78,95,69,0.06)",
                    fontWeight: 400,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "linear-gradient(135deg, #833AB4, #E1306C, #F77737)",
                  color: "#fff",
                  padding: "0.85rem",
                  borderRadius: "9999px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                <InstagramIcon size={18} />
                Follow on Instagram
              </a>
              <a
                href={whatsappLink("Hi, I want to book my free trial class with Agastya Hatha Yoga")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick("navbar_mobile_cta");
                  setMobileOpen(false);
                }}
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  padding: "0.85rem",
                  borderRadius: "9999px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "0.25rem",
                }}
              >
                Book Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
