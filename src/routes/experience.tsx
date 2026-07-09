import { createFileRoute } from "@tanstack/react-router";
import { EXPERIENCE } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Professional Experience — Corey Heckel" },
      { name: "description", content: "Roles, impact, and outcomes — from Nike ML Engineer to freelance work and graduate research at Stevens." },
      { property: "og:title", content: "Professional Experience — Corey Heckel" },
      { property: "og:description", content: "Roles, impact, and outcomes across ML, web, and research." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="container-prose py-16 md:py-24">
      <header>
        <p className="eyebrow">Professional Experience</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Where I've shipped.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Production ML at Nike, freelance web work for Posh, and several years of research at Stevens.
        </p>
      </header>

      <ol className="mt-16 space-y-16">
        {EXPERIENCE.map((e, idx) => (
          <li key={`${e.company}-${idx}`} className="grid md:grid-cols-12 gap-8 pt-10 hairline">
            <div className="md:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h2 className="mt-2 font-display text-3xl">{e.role}</h2>
              <p className="mt-1 text-base text-ember">{e.company}</p>
            </div>
            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-4">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-xs text-muted-foreground pt-1.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              {e.tech && e.tech.length > 0 && (
                <div className="pt-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                    Tech
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              {e.sites && e.sites.length > 0 && (
                <div className="pt-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                    Selected sites built via Posh
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {e.sites.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-ember/40 px-3 py-1 text-xs text-ember hover:bg-ember hover:text-paper transition-colors"
                      >
                        {s.label} <span aria-hidden>→</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
