import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircleMore,
  CloudFog,
  Globe2,
  Share2,
  Ticket,
  MessageSquare,
} from "lucide-react";

const features = [
  { icon: MessageCircleMore, title: "PEEPS Chat", desc: "Send messages easily and manage unsent messages within 14 days." },
  { icon: CloudFog, title: "PEEPS Cloud", desc: "Start Your Cloud Storage Get 20 GB free space,keep your files forever." },
  { icon: Globe2, title: "PEEPS AI Translate", desc: "Translate up to 20 languages and talk and connect with anyone." },
  { icon: Ticket, title: "PEEPS Event", desc: "Spotlight on Your Events" },
  { icon: MessageSquare, title: "PEEPS Talk", desc: "Voice & Video Call" },
  { icon: Share2, title: "PEEPS SHARE", desc: "Share Albums on the Cloud." },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="features" className="relative py-32 sm:py-44">
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[520px] w-[520px] rounded-full opacity-40 blur-[140px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.22 45 / 45%), transparent 70%)" }}
        />
      </motion.div>
      <motion.div style={{ y: headingY }} className="mx-auto max-w-7xl px-6">
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
      </motion.div>
    </section>
  );
}
