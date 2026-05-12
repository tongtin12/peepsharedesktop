import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  ArrowUpRight,
  X,
} from "lucide-react";
import qrPeepshare from "@/assets/_oa-peep.png";

type ContactCard = {
  icon: typeof Mail;
  label: string;
  value: string;
} & ({ kind: "link"; href: string } | { kind: "qr" });

const contactCards: ContactCard[] = [
  {
    kind: "link",
    icon: Mail,
    label: "Email Support",
    value: "support@peepshare.ai",
    href: "mailto:support@peepshare.ai",
  },
  {
    kind: "qr",
    icon: MessageCircle,
    label: "PEEPS Admin",
    value: "PEEP SHARE Official",
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const shapesY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    if (!qrOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [qrOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 2400);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden py-32 sm:py-44">
      {/* Ambient orange radial glow */}
      <motion.div
        style={{ y: leftGlowY }}
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full opacity-50 blur-[140px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.22 45 / 55%), transparent 70%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: rightGlowY }}
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[460px] w-[460px] rounded-full opacity-40 blur-[140px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.22 35 / 50%), transparent 70%)" }}
        />
      </motion.div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />

      {/* Floating glass shapes */}
      <motion.div
        style={{ y: shapesY }}
        className="pointer-events-none absolute left-[8%] top-24 -z-10 h-24 w-24 animate-float rounded-3xl glass opacity-60"
      />
      <motion.div
        style={{ y: shapesY, animationDelay: "1.4s" }}
        className="pointer-events-none absolute right-[12%] top-40 -z-10 h-16 w-16 animate-float rounded-2xl glass opacity-50"
      />
      <motion.div
        style={{ y: shapesY, animationDelay: "2.2s" }}
        className="pointer-events-none absolute bottom-24 left-[18%] -z-10 h-20 w-20 animate-float rounded-full glass opacity-50"
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute -z-10 h-1 w-1 rounded-full bg-primary/60 animate-pulse-glow"
          style={{
            top: `${(i * 73) % 95}%`,
            left: `${(i * 41) % 95}%`,
            animationDelay: `${(i % 5) * 0.6}s`,
            boxShadow: "0 0 12px 2px oklch(0.74 0.2 50 / 60%)",
          }}
        />
      ))}

      {/* Thin glowing divider above */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.74 0.2 50 / 60%), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Contact Us
          </span>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Let's Build <span className="text-ember">Faster Together</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have questions about PEEP SHARE Desktop? Reach out to our team and
              we'll help you get started.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((c, i) => {
                const inner = (
                  <>
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                      style={{ background: "oklch(0.74 0.2 50 / 60%)" }}
                    />
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl glass ring-glow-sm transition-all group-hover:scale-105">
                        <c.icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
                        strokeWidth={1.75}
                      />
                    </div>
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="font-display mt-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {c.value}
                    </p>
                  </>
                );

                const cardClass =
                  "group relative overflow-hidden rounded-2xl glass-strong p-5 text-left transition-all hover:border-primary/40";
                const motionProps = {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 + i * 0.07 },
                  whileHover: { y: -3 },
                } as const;

                if (c.kind === "qr") {
                  return (
                    <motion.button
                      key={c.label}
                      type="button"
                      onClick={() => setQrOpen(true)}
                      className={cardClass}
                      {...motionProps}
                    >
                      {inner}
                    </motion.button>
                  );
                }

                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className={cardClass}
                    {...motionProps}
                  >
                    {inner}
                  </motion.a>
                );
              })}
            </div>

            <div
              className="mt-10 hidden h-px w-2/3 lg:block"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.74 0.2 50 / 45%), transparent)",
              }}
            />
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-px -z-10 rounded-[28px] opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 0%, oklch(0.74 0.2 50 / 40%), transparent 60%)",
              }}
            />
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl glass-strong p-7 sm:p-9"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "oklch(0.74 0.2 50 / 60%)" }}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Jane Cooper" required />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                />
              </div>

      
              <div className="mt-5">
                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="peer w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 hover:border-white/20 focus:border-primary/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_oklch(0.74_0.2_50_/_12%),0_0_40px_-10px_oklch(0.7_0.22_45_/_60%)]"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-glow group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 text-sm font-semibold tracking-tight disabled:opacity-80"
              >
                <span>
                  {sent ? "Message Sent" : sending ? "Sending…" : "Send Message"}
                </span>
                <Send
                  className={`h-4 w-4 transition-transform duration-500 ${
                    sending ? "translate-x-0.5 -translate-y-0.5" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`}
                  strokeWidth={2.25}
                />
              </button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                We typically reply within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {qrOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            onClick={() => setQrOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
            <div
              className="pointer-events-none absolute inset-0 -z-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, oklch(0.7 0.22 45 / 35%), transparent 55%)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl glass-strong p-7 ring-glow-sm"
              role="dialog"
              aria-modal="true"
              aria-label="Scan QR to add PEEPS Admin"
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{ background: "oklch(0.74 0.2 50 / 70%)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "oklch(0.62 0.22 35 / 60%)" }}
              />

              <button
                type="button"
                onClick={() => setQrOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all hover:border-primary/40 hover:bg-white/[0.08] hover:text-primary"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl glass ring-glow-sm">
                  <MessageCircle className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    PEEPS Admin
                  </p>
                  <p className="font-display text-sm font-semibold">
                    PEEP SHARE <span className="text-ember">Official</span>
                  </p>
                </div>
              </div>

              <div className="relative mt-6">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-3xl opacity-70 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.74 0.2 50 / 40%), transparent 70%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                  <img
                    src={qrPeepshare}
                    alt="PEEPS Admin QR code"
                    className="block aspect-square w-full select-none"
                    draggable={false}
                  />
                </div>
              </div>

              <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
                Scan with your camera to connect with the PEEP SHARE Official admin.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 hover:border-white/20 focus:border-primary/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_oklch(0.74_0.2_50_/_12%),0_0_40px_-10px_oklch(0.7_0.22_45_/_60%)]"
      />
    </div>
  );
}
