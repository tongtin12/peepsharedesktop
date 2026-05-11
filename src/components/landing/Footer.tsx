import { Flame, Github, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-24 pb-12">
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-[500px] -z-10 opacity-50 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.7 0.22 45 / 35%), transparent 65%)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-center text-6xl font-semibold tracking-tight sm:text-8xl md:text-[140px] md:leading-[0.9]">
          PEEP <span className="text-ember">SHARE</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-muted-foreground">
          The desktop app for modern creators and teams. Cinematic by design, fast by default.
        </p>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg btn-glow">
              <Flame className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-semibold">PEEP SHARE</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#download" className="hover:text-foreground">Download</a>
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#requirements" className="hover:text-foreground">Requirements</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </nav>

          <div className="flex items-center gap-2">
            {[Twitter, Github, Linkedin, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PEEP SHARE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
