import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

const TOP_LINKS = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Professional Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-border">
      <div className="container-prose flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-ink hover:text-ember transition-colors"
        >
          Corey<span className="text-ember">.</span>Heckel
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" label="Home" />
          <div
            className="relative"
            onMouseEnter={() => setSkillsOpen(true)}
            onMouseLeave={() => setSkillsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSkillsOpen((o) => !o)}
              className="px-3 py-2 text-sm text-ink hover:text-ember transition-colors inline-flex items-center gap-1"
              aria-expanded={skillsOpen}
              aria-haspopup="true"
            >
              Technical Skills
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {skillsOpen && (
              <div className="absolute right-0 top-full pt-2 w-72">
                <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                  <Link
                    to="/skills"
                    className="block px-4 py-2.5 text-sm font-medium border-b border-border hover:bg-muted"
                    onClick={() => setSkillsOpen(false)}
                  >
                    All Skills →
                  </Link>
                  <ul className="py-1 max-h-[60vh] overflow-y-auto">
                    {SKILL_CATEGORIES.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to="/skills/$slug"
                          params={{ slug: c.slug }}
                          className="block px-4 py-2 text-sm text-ink hover:bg-muted hover:text-ember transition-colors"
                          onClick={() => setSkillsOpen(false)}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {TOP_LINKS.slice(1).map((l) => (
            <NavLink key={l.to} to={l.to} label={l.label} />
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-paper">
          <div className="container-prose py-4 flex flex-col gap-1">
            <MobileLink to="/" label="Home" close={() => setMobileOpen(false)} />
            <div className="py-2">
              <div className="eyebrow mb-2">Technical Skills</div>
              <Link
                to="/skills"
                className="block py-1.5 text-sm hover:text-ember"
                onClick={() => setMobileOpen(false)}
              >
                All Skills
              </Link>
              {SKILL_CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/skills/$slug"
                  params={{ slug: c.slug }}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-ember"
                  onClick={() => setMobileOpen(false)}
                >
                  {c.name}
                </Link>
              ))}
            </div>
            {TOP_LINKS.slice(1).map((l) => (
              <MobileLink key={l.to} to={l.to} label={l.label} close={() => setMobileOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 text-sm text-ink hover:text-ember transition-colors"
      activeProps={{ className: "px-3 py-2 text-sm text-ember" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}

function MobileLink({ to, label, close }: { to: string; label: string; close: () => void }) {
  return (
    <Link
      to={to}
      className="py-2 text-base hover:text-ember"
      onClick={close}
    >
      {label}
    </Link>
  );
}
