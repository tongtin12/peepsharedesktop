import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { Features } from "@/components/landing/Features";


import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PEEP SHARE Desktop — Fast Sharing & Smarter Collaboration" },
      {
        name: "description",
        content:
          "Download PEEP SHARE Desktop for Windows, macOS Intel, and Apple Silicon. Fast sharing, seamless syncing, and smarter collaboration for modern creators and teams.",
      },
      { property: "og:title", content: "PEEP SHARE Desktop Version" },
      {
        property: "og:description",
        content:
          "Native desktop builds for Windows and macOS. Cinematic by design, fast by default.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-foreground">
      <Navbar />
      <Hero />
      <DownloadSection />
      <Features />

      <Contact />
      <Footer />
    </main>
  );
}
