import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Globe2,
  LayoutGrid,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: Zap, title: "Faster File Sync", desc: "Delta-sync engine moves only what changed — across gigabytes in seconds." },
  { icon: ShieldCheck, title: "Secure Share System", desc: "End-to-end encrypted links with granular access and expiry control." },
  { icon: Globe2, title: "Cross Platform Access", desc: "Identical experience on Windows, macOS Intel, and Apple Silicon." },
  { icon: LayoutGrid, title: "Smart Workspace", desc: "Pin projects, tag assets, and build the layout that fits your flow." },
  { icon: Users, title: "Real-time Collaboration", desc: "Live cursors, presence, and instant comments — no refresh needed." },
  { icon: Sparkles, title: "AI Quick Actions", desc: "Summarize, rename, and route files automatically with on-device AI." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Built for the way <span className="text-ember">teams ship</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every detail engineered for speed, clarity, and trust.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-7 transition-all hover:border-primary/30"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                style={{ background: "oklch(0.74 0.2 50 / 60%)" }}
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl glass ring-glow-sm">
                <f.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
