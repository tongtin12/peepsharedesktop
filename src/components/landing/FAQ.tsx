import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is PEEP SHARE Desktop free to download?", a: "Yes. The desktop app is free to install and use with a generous free tier. Pro features unlock with a workspace plan." },
  { q: "Which version should I choose for my Mac?", a: "If your Mac has an M1, M2, M3, or newer chip, choose Apple Silicon for the best performance. For 2019 and earlier Intel Macs, choose macOS Intel." },
  { q: "Can I use PEEP SHARE on multiple devices?", a: "Absolutely. Sign in once and your workspace, files, and settings sync across every desktop." },
  { q: "How are my files protected?", a: "Files are encrypted at rest and in transit with AES-256 and TLS 1.3. Share links support expiry, passwords, and revocation at any time." },
  { q: "Does the app work offline?", a: "Yes. Your synced workspace stays available offline and re-syncs automatically when you reconnect." },
  { q: "How do I update to a new version?", a: "PEEP SHARE Desktop updates silently in the background. You'll get a subtle notification when a restart is ready." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Frequently <span className="text-ember">Asked</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Everything you need to know before you install.</p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`overflow-hidden rounded-2xl glass-strong transition-all ${
                  isOpen ? "ring-glow-sm" : ""
                }`}
                style={isOpen ? { borderColor: "oklch(0.74 0.18 55 / 40%)" } : undefined}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-medium sm:text-lg">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen ? "btn-glow rotate-45" : "border border-white/10 bg-white/5 text-muted-foreground"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
