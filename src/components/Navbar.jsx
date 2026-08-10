import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <nav className="glass-card !rounded-full flex items-center justify-between px-6 py-3 md:px-3 md:py-3">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <img src="/logo.png" alt="Ryvora" className="h-7 w-auto" />
          <span className="font-heading text-lg font-semibold tracking-tight text-text-primary">
            Ryvora
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>
        </div >

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav >

      {open && (
        <div className="glass-card mt-2 flex flex-col gap-1 rounded-3x1 p-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-3 py-2.5 text-sm text-text-primary hover:bg-white/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-text-primary px-3 py-2.5 text-center text-sm font-medium text-white"
          >
            Hire me
          </a>
        </div>
      )
      }
    </header >
  );
}
