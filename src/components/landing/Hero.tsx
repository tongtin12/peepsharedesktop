import { motion } from "framer-motion";
import { Download, Sparkles, ArrowRight } from "lucide-react";


export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-52 sm:pb-32">
      {/* Background glows */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="pointer-events-none absolute left-1/2 top-32 h-[680px] w-[680px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.22 45 / 50%), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.24 30 / 60%), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Version 2.0.1 — now with AI Quick Actions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display mx-auto max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-[88px]"
        >
          PEEP SHARE
          <br />
          <span className="text-ember">Desktop Version</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Fast sharing, seamless syncing, and smarter collaboration —
          built for modern creators and teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#download"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold"
          >
            <Download className="h-5 w-5" />
            Download Now
          </a>
          <a
            href="#features"
            className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-medium text-foreground"
          >
            See What's New
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

