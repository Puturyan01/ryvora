import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Kanoo Kidswear",
    category: "E-commerce · Web design",
    desc: "A playful, product-focused storefront built for a kids' fashion brand.",
    image: "/images/portfolio-kanoo.png",
    link: "https://kanoo-kidswear.netlify.app/",
  },
  {
    title: "Kaja Padma Bar & Eatery",
    category: "Hospitality · Web design",
    desc: "A warm, editorial site for a bar and eatery brand.",
    image: "/images/portfolio-kaja.png",
    link: "https://drive.google.com/file/d/1DQd2h5LNKfh9nThNMHIYehmtIQzbnHGv/view?usp=drive_link",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative overflow-hidden bg-bg-tint py-24 md:py-32">
      <div className="blob w-72 h-72 bg-blob-violet -bottom-20 -left-20" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
          Selected work
        </p>
        <h2 className="font-heading max-w-md text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          Projects I'm proud of.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group block overflow-hidden"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between p-6">
                <div>
                  <p className="text-xs text-text-muted">{project.category}</p>
                  <h3 className="font-heading mt-1 text-lg font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                    {project.desc}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}