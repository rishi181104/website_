import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Lakshmi",
    program: "Fertility Yoga",
    duration: "4 months",
    rating: 5,
    review:
      "I attended the fertility yoga program for 4 months and had a very positive experience. The sessions were well-structured, relaxing, and focused on improving overall well-being. I learned breathing techniques, gentle stretches, and stress-management practices that helped me feel healthier and more balanced. The instructor Rashmitha was supportive and knowledgeable. I would recommend this program to anyone looking to incorporate yoga into their fertility journey.",
    initial: "L",
    color: "#7B8F6B",
  },
  {
    name: "Annu",
    program: "Postnatal Yoga",
    duration: "3 months",
    rating: 5,
    review:
      "I joined Rashmita's classes three months ago after my delivery, and I can already feel a positive change in myself. I feel more relaxed, calm, and balanced. Thank you for creating such a wonderful and supportive environment.",
    initial: "A",
    color: "#8B6F5E",
  },
  {
    name: "Prasanna",
    program: "Weight Loss & Stress Management",
    duration: "3 months",
    rating: 5,
    review:
      "I originally started these virtual classes to lose weight and manage stress, and it has been an amazing journey. The instructor Rashmita structures the classes perfectly, combining a great physical workout with deep mindfulness. The sessions are incredibly enjoyable, and after just three months, I can truly see and feel the results. Physically, I feel leaner, stronger, and more energized. Mentally, I have gained valuable tools to stay calm and focused during stressful days. It has completely transformed my daily routine. Highly recommend!",
    initial: "P",
    color: "#6B7D8F",
  },
  {
    name: "Jyothi Priya",
    program: "Postpartum Yoga",
    duration: "3 months",
    rating: 5,
    review:
      "I found this postpartum yoga class very supportive and easy to follow. Rashmitha provided clear explanations and offered modifications for different recovery stages, which made me feel comfortable participating. The pacing was gentle yet effective, helping improve my flexibility, core awareness, and relaxation. I especially appreciated the focus on breathing and pelvic floor engagement. I would recommend this class to new mothers looking for a safe and convenient way to return to exercise.",
    initial: "J",
    color: "#7B6B8F",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.92,
  }),
};

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "0.2rem", marginBottom: "0.75rem" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "#D4A853" : "#E0DDD4"}
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: "fill 0.3s ease" }}
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.12, marginBottom: "0.5rem" }}
    >
      <path
        d="M11 7H7.5C6.12 7 5 8.12 5 9.5V10C5 10.83 5.67 11.5 6.5 11.5H8C8.83 11.5 9.5 10.83 9.5 10V9.5C9.5 8.67 10.17 8 11 8V7ZM19 7H15.5C14.12 7 13 8.12 13 9.5V10C13 10.83 13.67 11.5 14.5 11.5H16C16.83 11.5 17.5 10.83 17.5 10V9.5C17.5 8.67 18.17 8 19 8V7Z"
        fill="var(--color-primary-dark)"
      />
      <path
        d="M6.5 13C5.67 13 5 13.67 5 14.5V15C5 16.38 6.12 17.5 7.5 17.5H11V16.5C11 14.57 9.43 13 7.5 13H6.5ZM14.5 13C13.67 13 13 13.67 13 14.5V15C13 16.38 14.12 17.5 15.5 17.5H19V16.5C19 14.57 17.43 13 15.5 13H14.5Z"
        fill="var(--color-primary-dark)"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const paginate = useCallback(
    (newDirection) => {
      setSlide(([prev]) => {
        const next =
          (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const goToSlide = (index) => {
    setSlide(([prev]) => [index, index > prev ? 1 : -1]);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1);
    }
  };

  const t = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "var(--color-warm-white)" }}
    >
      <div className="container-main">
        <ScrollReveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--color-primary)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Testimonials
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                marginBottom: "0.5rem",
              }}
            >
              What Our Students Say
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#888",
                fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
                fontWeight: 300,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Real stories from real women who transformed their lives with
              AGASTYA.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div
            className="testimonials-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              position: "relative",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="testimonial-nav-btn testimonial-nav-prev"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={() => paginate(1)}
              className="testimonial-nav-btn testimonial-nav-next"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Carousel Card */}
            <div
              style={{
                overflow: "hidden",
                borderRadius: "clamp(1rem, 2.5vw, 1.5rem)",
                minHeight: "clamp(280px, 50vw, 360px)",
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 280, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="testimonial-card"
                  style={{
                    background: "#fff",
                    borderRadius: "clamp(1rem, 2.5vw, 1.5rem)",
                    padding: "clamp(1.5rem, 4vw, 2.5rem)",
                    border: "1px solid rgba(78, 95, 69, 0.08)",
                    boxShadow:
                      "0 4px 30px rgba(78, 95, 69, 0.06), 0 1px 4px rgba(78, 95, 69, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <QuoteIcon />

                  <StarRating rating={t.rating} />

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
                      color: "#555",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      marginBottom: "1.5rem",
                      fontStyle: "italic",
                      maxWidth: "560px",
                    }}
                  >
                    "{t.review}"
                  </p>

                  {/* Author */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        flexShrink: 0,
                        boxShadow: `0 4px 12px ${t.color}33`,
                      }}
                    >
                      {t.initial}
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                          color: "var(--color-primary-dark)",
                          lineHeight: 1.3,
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "clamp(0.7rem, 1.6vw, 0.78rem)",
                          color: "#999",
                          fontWeight: 400,
                        }}
                      >
                        {t.program} · {t.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Navigation */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "1.25rem",
              }}
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="testimonial-dot"
                  style={{
                    width: currentIndex === i ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    background:
                      currentIndex === i
                        ? "var(--color-primary)"
                        : "rgba(78, 95, 69, 0.2)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
