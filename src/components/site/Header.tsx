import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Briefcase, Layers, User, GraduationCap } from "lucide-react";
import { Button } from "../../design-system";

const NAV = [
  { label: "Work", href: "#work", Icon: Briefcase },
  { label: "Skills", href: "#skills", Icon: Layers },
  { label: "About", href: "#about", Icon: User },
  { label: "Experience", href: "#experience", Icon: GraduationCap },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetHeight * 0.5 : window.innerHeight * 0.5;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{
        position: scrolled ? "fixed" : "absolute",
        top: "var(--space-4)",
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 var(--space-6)",
        pointerEvents: "none",
      }}
    >
      <div
        className="header-bar"
        data-scrolled={scrolled}
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: scrolled ? "360px" : "var(--container-max)",
          justifyContent: "space-between",
          borderRadius: "var(--radius-full)",
          border: "1px solid transparent",
          background: scrolled
            ? "color-mix(in srgb, var(--color-bg-surface) 70%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition:
            "max-width 0.7s var(--ease-out), background 0.6s var(--ease-out), box-shadow 0.6s var(--ease-out), border-color 0.6s var(--ease-out), backdrop-filter 0.6s var(--ease-out)",
        }}
      >
        <nav className="header-nav">
          {NAV.map(({ label, href, Icon }) => (
            <a key={href} href={href} className="nav-pill" aria-label={label}>
              <Icon size={17} strokeWidth={1.75} />
              <span className="nav-pill-label">{label}</span>
            </a>
          ))}
        </nav>

        <Button href="#contact" intent="gradient" size="sm">
          Contact me
        </Button>
      </div>
    </motion.header>
  );
}
