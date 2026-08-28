import { useState, type FormEvent } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";
import { Button, Field, Badge, Chip } from "../../design-system";
import { PROFILE } from "../../data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\nFrom ${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="section" style={{ paddingBottom: "var(--space-12)" }}>
      <div className="container">
        <Reveal>
          <Badge dot="accent">Get in touch</Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            style={{
              marginTop: "var(--space-5)",
              fontSize: "clamp(3rem, 11vw, 9rem)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking)",
              lineHeight: 0.95,
            }}
          >
            Let's <span className="gradient-text">talk</span>
          </h2>
        </Reveal>

        <ScrollText
          text="Have something in mind? Send a message and I'll get back to you."
          style={{
            marginTop: "var(--space-6)",
            fontSize: "var(--text-xl)",
            color: "var(--color-text-primary)",
            maxWidth: "40ch",
          }}
        />

        {/* Form */}
        <Reveal delay={0.18}>
          <form
            onSubmit={onSubmit}
            style={{
              marginTop: "var(--space-12)",
              display: "grid",
              gap: "var(--space-4)",
              gridTemplateColumns: "1fr 1fr",
              maxWidth: 720,
            }}
            className="contact-form"
          >
            <Field
              label="Your name"
              hideLabel
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Field
              label="Your email"
              hideLabel
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Field
              as="textarea"
              label="Your message"
              hideLabel
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ gridColumn: "1 / -1" }}
            />
            <div style={{ gridColumn: "1 / -1" }}>
              <Button type="submit" intent="gradient" iconRight={ArrowUpRight}>
                Send message
              </Button>
            </div>
          </form>
        </Reveal>

        {/* Footer bar */}
        <div
          style={{
            marginTop: "var(--space-28)",
            paddingTop: "var(--space-8)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-6)",
          }}
        >
          <a
            href={`mailto:${PROFILE.email}`}
            className="gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 4vw, var(--text-3xl))",
              fontWeight: "var(--weight-medium)",
              textDecoration: "none",
            }}
          >
            {PROFILE.email}
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            {[
              ...PROFILE.socials,
              { label: "GitHub", href: PROFILE.github },
            ].map((s) => (
              <Chip
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{ height: 40, padding: "0 var(--space-4)" }}
              >
                {s.label}
              </Chip>
            ))}
            <Button
              href="#top"
              intent="secondary"
              fill="outline"
              size="sm"
              iconRight={ArrowUp}
            >
              Back to top
            </Button>
          </div>
        </div>

        <div
          style={{
            marginTop: "var(--space-8)",
            fontSize: "var(--text-sm)",
            color: "var(--color-text-muted)",
          }}
        >
          © {new Date().getFullYear()} {PROFILE.name}. Designed & built from scratch.
        </div>
      </div>
    </footer>
  );
}
