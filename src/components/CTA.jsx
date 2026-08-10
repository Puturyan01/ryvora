import { ArrowUpRight } from "lucide-react";

export default function CTA() {
    return (
        <section id="contact" className="relative overflow-hidden bg-white py-24 md:py-32">
            <div className="mx-auto max-w-3x1 px-6 text-center">
                <div className="glass-card relative overflow-hidden px-8 py-14 md:px-16 md:py-20">
                    <div className="blob w-56 h-56 bg-blob-violet -top-16 -left-10" />
                    <div ClassName="blob w-56 h-56 bg-blob-blue -bottom-16 -right-10" />

                    <div className="relative z-10">
                        <h2 className="font-heading text-3x1 font-semibold leading-tight text-text-primary md:text-4x1">
                            Have a project in mind?
                        </h2>
                        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
                            Let's talk about what you're building and how Ryvora can help
                            bring it to life.
                        </p>

                        <a
                            href="https://fastwork.id/byob/qR0ntr0BN4?openExternalBrowser=1&source=byob"
                            target="_blank"
                            rel="noopener norenferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                        >
                            Start a project
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}