import { Palette, Code2, Sparkles } from "lucide-react";

const SERVICES = [
    {
        icon: Palette,
        title: "Web design",
        desc: "Visual identity and UI system that feel intentional, not templated.",
    },
    {
        icon: Code2,
        title: "Frontend development",
        desc: "Fast, responsive React builds with clean, maintainable code.",
    },
    {
        icon: Sparkles,
        title: "Branding",
        desc: "Logo, typography, and guidelines that carry across every touchpoint.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative bg-white py-24 md-32">
            <div className="blob w-64 h-64 bg-blob-blue top-0 right-0" />
            <div className="mx-auto max-w-5x1 px-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                    What I do
                </p>
                <h2 className="font-heading max-w-md text-3x1 font-semibold leading-tight text-text-primary md:text-4x1">
                    Focused services, done properly.
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {SERVICES.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="glass-card group p-7 transition-transform hover:-translate-y-1"
                        >
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-text-primary/5">
                                <Icon size={20} className="text-text-primary" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-text-primary">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}