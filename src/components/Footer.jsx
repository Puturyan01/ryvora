const FOOTER_LINKS = [
    { label:"Work", href: "#work" },
    { label:"Services", href: "#services" },
    { label:"Process", href: "#process" },
    { label:"About", href: "#about" },
];

export default function Footer() {
    return (
        <footer className="bg-white px-6 py-10">
            <div className="mx-auto flex max-w-5x1 flex-col items-center gap-6 border-t border-black/5 pt-8 md:flex-row md:justify-between">
            <span className="font-heading text-base font-semibold text-text-primary">
                Ryvora
            </span>

            <ul className="flex flext-wrap items-center justify-center gap-6">
                {FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="text-sm text-text-muted hover:text-textprimary transition-colors"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <p className="text-xs text-text-muted">
                © {new Date().getFullYear()} Ryvora. All right reserved.
            </p>
            </div>
        </footer>
    );
}