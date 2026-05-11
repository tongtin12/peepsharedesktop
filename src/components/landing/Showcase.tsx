import { motion } from "framer-motion";
import desktopMockup from "@/assets/desktop-mockup.jpg";

export function Showcase() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Cinematic by design.
            <br />
            <span className="text-ember">Made for focus.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            A desktop interface so refined it disappears — leaving only your work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div
            className="absolute -inset-x-10 -inset-y-10 -z-10 blur-3xl opacity-60"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.7 0.22 45 / 30%), transparent 60%)" }}
          />
          <div className="overflow-hidden rounded-[2rem] glass-strong p-2 ring-glow">
            <img
              src={desktopMockup}
              alt="PEEP SHARE workspace"
              loading="lazy"
              width={1600}
              height={1024}
              className="rounded-[1.6rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
