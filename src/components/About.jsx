const TOOLS = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-tint py-24 md:py-32">
      <div className="blob w-64 h-64 bg-blob-blue top-10 -right-16" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
              About Ryvora
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
              A studio built around clarity and craft.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-muted">
              Ryvora is an independent studio focused on web design and
              frontend development. Every project starts with understanding
              what the brand actually needs — then it's designed and built
              with the same care, from the first sketch to the last line of
              code.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              No templates, no shortcuts. Just clean, considered work that
              holds up.
            </p>
          </div>

          <div className="glass-card p-8">
            <p className="font-heading text-xl font-medium leading-snug text-text-primary">
              "Design that's clean isn't simple — it's what's left after
              everything unnecessary is removed."
            </p>

            <div className="mt-8 border-t border-black/5 pt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                Tools I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-medium text-text-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}