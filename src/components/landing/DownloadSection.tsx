import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, Cpu, Download, Monitor, Sparkles } from "lucide-react";


type OSKey = "windows" | "mac-intel" | "mac-arm";

const platforms: Array<{
  key: OSKey;
  name: string;
  badge: string;
  support: string;
  version: string;
  size: string;
  cta: string;
  Icon: typeof Apple;
}> = [
  {
    key: "windows",
    name: "Windows",
    badge: ".EXE INSTALLER",
    support: "Windows 10 / 11 (64-bit)",
    version: "v1.9.0",
    size: "116 MB",
    cta: "Download for Windows",
    Icon: Monitor,
  },
  {
    key: "mac-intel",
    name: "macOS Intel",
    badge: "INTEL CHIP",
    support: "macOS 11 Big Sur or later",
    version: "v1.6.3",
    size: "112 MB",
    cta: "Download for macOS Intel",
    Icon: Apple,
  },
  {
    key: "mac-arm",
    name: "macOS Apple Silicon",
    badge: "M-CHIP NATIVE",
    support: "macOS 12 Monterey or later",
    version: "v1.6.3",
    size: "104 MB",
    cta: "Download for macOS Apple Silicon",
    Icon: Cpu,
  },
];

export function DownloadSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section ref={ref} id="download" className="relative py-32 sm:py-44">
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60 blur-3xl"
      >
        <div
          className="h-full w-full"
          style={{ background: "radial-gradient(ellipse at center top, oklch(0.7 0.22 45 / 30%), transparent 60%)" }}
        />
      </motion.div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" /> Choose your install
          </span>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Choose Your <span className="text-ember">Platform</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Native builds optimized for every desktop experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {platforms.map((p, i) => {
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl glass-strong p-7 transition-all duration-500 hover:ring-glow-sm"
              >
                <div
                  className="pointer-events-none absolute -inset-px -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, oklch(0.7 0.22 45 / 35%), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass ring-glow-sm">
                  <p.Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>

                <div className="mt-6">
                  <span className="inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.badge}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.support}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Version</p>
                    <p className="mt-0.5 font-display text-sm font-semibold">{p.version}</p>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Size</p>
                    <p className="mt-0.5 font-display text-sm font-semibold">{p.size}</p>
                  </div>
                </div>

                <button
                  className="btn-glow mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all"
                >
                  <Download className="h-4 w-4" />
                  {p.cta}
                </button>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
