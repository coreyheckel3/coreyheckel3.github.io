import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PROJECTS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Corey Heckel" },
      { name: "description", content: "Selected projects across machine learning, full-stack web, games, and hardware." },
      { property: "og:title", content: "Projects — Corey Heckel" },
      { property: "og:description", content: "ML models, full-stack web apps, games, and hardware projects." },
    ],
  }),
  component: ProjectsPage,
});

const FILTERS = ["All", "ML", "Web", "Game", "Hardware"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="container-prose py-16 md:py-24">
      <header>
        <p className="eyebrow">Projects</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Things I've built.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A mix of production ML, university projects, freelance builds, and side projects.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={
              "px-3.5 py-1.5 text-sm rounded-full border transition-colors " +
              (filter === f
                ? "bg-ink text-paper border-ink"
                : "border-border hover:border-ember hover:text-ember")
            }
          >
            {f}
            <span className="ml-1.5 text-xs opacity-60">
              {f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        {visible.map((p) => (
          <article key={p.slug} className="pt-8 hairline grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">{p.period}</p>
              <h2 className="mt-2 font-display text-3xl">{p.name}</h2>
              <p className="mt-1 text-sm text-ember">{p.role}</p>
              {p.metric && (
                <p className="mt-3 inline-block font-mono text-xs px-2 py-1 bg-ember/10 text-ember rounded">
                  {p.metric}
                </p>
              )}
            </div>
            <div className="md:col-span-8">
              <p className="text-[15px] leading-relaxed">{p.details}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
