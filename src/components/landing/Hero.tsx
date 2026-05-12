import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Sparkles, ArrowRight } from "lucide-react";


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.55]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-40 pb-32 sm:pt-52 sm:pb-48">
      {/* Background glows */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-32 h-[680px] w-[680px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.22 45 / 50%), transparent 65%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.6 0.24 30 / 60%), transparent 70%)" }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-6xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Version 1.6.3 beta </span>
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
          PEEP SHARE is a smart desktop collaboration platform designed for fast file sharing, seamless syncing, and efficient teamwork — built for modern creators and teams.
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
      </motion.div>
    </section>
  );
}

