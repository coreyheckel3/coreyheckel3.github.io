import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-prose py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">Corey<span className="text-ember">.</span>Heckel</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Machine Learning Engineer & full-stack developer. Available for select freelance work.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Navigate</div>
          <ul className="space-y-1.5">
            <li><Link to="/" className="hover:text-ember">Home</Link></li>
            <li><Link to="/skills" className="hover:text-ember">Technical Skills</Link></li>
            <li><Link to="/experience" className="hover:text-ember">Experience</Link></li>
            <li><Link to="/projects" className="hover:text-ember">Projects</Link></li>
            <li><Link to="/publications" className="hover:text-ember">Publications</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Elsewhere</div>
          <ul className="space-y-1.5">
            <li><a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-ember">GitHub ↗</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-ember">LinkedIn ↗</a></li>
            <li><a href={CONTACT.resume} className="hover:text-ember">Download Résumé ↓</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-ember">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container-prose pb-8 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Corey Heckel. Built with care in TanStack Start.</span>
        <span>{CONTACT.location}</span>
      </div>
    </footer>
  );
}
