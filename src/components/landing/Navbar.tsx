import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import logo from "@/assets/logo01.png";

const links = [
  { label: "Download", href: "#download" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[min(1180px,calc(100%-2rem))] -translate-x-1/2"
    >
      <div
        className={`glass-strong flex items-center justify-between rounded-full px-3 py-2.5 pl-5 transition-all duration-500 ${
          scrolled ? "ring-glow-sm" : ""
        }`}
        style={{ borderColor: scrolled ? "oklch(0.74 0.18 55 / 30%)" : undefined }}
      >
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="PEEP SHARE logo"
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            PEEP <span className="text-ember">SHARE</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="btn-glow inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download App</span>
        </a>
      </div>
    </motion.header>
  );
}
