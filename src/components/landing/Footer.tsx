import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo01.png";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7.05a4.85 4.85 0 0 1-1.84-.36z" />
    </svg>
  );
}

// Edit href values to point to your real profile URLs.
const socials = [
  { name: "TikTok", href: "https://www.tiktok.com/@peepshare?_r=1&_t=ZS-96I17nsKA8T", Icon: TikTokIcon },
  { name: "Instagram", href: "https://www.instagram.com/peepshare?igsh=NTk5d2dpbWhzNjR1", Icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/PeepShares ", Icon: Facebook },
];

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
            <img
              src={logo}
              alt="PEEP SHARE logo"
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="font-display text-sm font-semibold">PEEP SHARE</span>
          </div>
          {
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PEEP SHARE. All rights reserved.
        </p>
          /* <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#download" className="hover:text-foreground">Download</a>
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#requirements" className="hover:text-foreground">Requirements</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </nav> */}
          <div className="flex items-center gap-2">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
