const STEPS = [
  {
    number: "01",
    title: "Discovery call",
    desc: "We talk through your goals, audience, and what success looks like for the project.",
  },
  {
    number: "02",
    title: "Design concept",
    desc: "I put together a visual direction, typography, and layout before any code is written.",
  },
  {
    number: "03",
    title: "Development",
    desc: "The approved design gets built in React, responsive and tested across devices.",
  },
  {
    number: "04",
    title: "Review & handoff",
    desc: "We review together, refine details, and I hand off the finished site ready to launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,280px)_1fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
              How I work
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
              A simple, transparent process.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              No surprises. You'll know exactly what's happening at every stage.
            </p>
          </div>

          <div>
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6 border-b border-black/5 py-7 first:pt-0 last:border-none last:pb-0"
              >
                <span className="font-heading text-sm font-semibold text-text-muted">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-muted">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}