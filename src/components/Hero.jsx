import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: "3+", label: "Years crafting" },
  { value: "20+", label: "Projects shipped" },
  { value: "95%", label: "Client satisfaction" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg-tint pt-40 pb-24 md:pt-48 md:pb-32"
    >
      {/* Decorative color blobs — these give the glass cards something to refract */}
      <div className="blob w-72 h-72 bg-blob-blue -top-10 -left-16" />
      <div className="blob w-80 h-80 bg-blob-violet top-40 -right-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
          Web design &amp; frontend development
        </p>

        <h1 className="font-heading text-4xl font-semibold leading-[1.15] text-text-primary md:text-6xl">
          Digital experiences,
          <br />
          crafted clean.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base text-text-muted leading-relaxed">
          Ryvora is an independent studio building fast, thoughtful websites
          for brands that care about how they're perceived.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#work"
            className="glass-card !rounded-full inline-flex items-center px-6 py-3 text-sm font-medium text-text-primary hover:bg-white/80 transition-colors"
          >
            View work
          </a>
        </div>

        <div className="glass-card mx-auto mt-14 flex max-w-lg items-center justify-between px-6 py-5 md:px-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-semibold text-text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}