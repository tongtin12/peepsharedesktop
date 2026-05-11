import { motion } from "framer-motion";

const rows = [
  { label: "Operating System", win: "Windows 10 / 11 (64-bit)", intel: "macOS 11 Big Sur+", arm: "macOS 12 Monterey+" },
  { label: "Processor", win: "Intel / AMD x64", intel: "Intel Core i5+", arm: "Apple M1 / M2 / M3" },
  { label: "Memory", win: "4 GB RAM", intel: "8 GB RAM", arm: "8 GB RAM" },
  { label: "Disk Space", win: "500 MB", intel: "600 MB", arm: "550 MB" },
  { label: "GPU", win: "DirectX 11", intel: "Metal 2", arm: "Metal 3" },
  { label: "Network", win: "Broadband", intel: "Broadband", arm: "Broadband" },
];

export function Requirements() {
  return (
    <section id="requirements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            System <span className="text-ember">Requirements</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            What you need to run PEEP SHARE Desktop at full speed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-3xl glass-strong"
        >
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.02] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div></div>
            <div>Windows</div>
            <div>macOS Intel</div>
            <div className="text-primary">macOS Apple Silicon</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-4 items-center px-6 py-5 text-sm transition-colors hover:bg-white/[0.03] ${
                i !== rows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="font-medium text-muted-foreground">{r.label}</div>
              <div>{r.win}</div>
              <div>{r.intel}</div>
              <div className="text-foreground">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-primary ring-1 ring-primary/30">
                  {r.arm}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
