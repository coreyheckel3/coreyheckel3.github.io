import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Technical Skills — Corey Heckel" },
      { name: "description", content: "An organized catalog of Corey Heckel's technical skills across ML, AI, cloud, web, data, and DevOps." },
      { property: "og:title", content: "Technical Skills — Corey Heckel" },
      { property: "og:description", content: "Catalog of skills across ML, AI, cloud, web, data, and DevOps." },
    ],
  }),
  component: SkillsLayout,
});

function SkillsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/skills/$slug");

  return (
    <div className="container-prose py-16 md:py-24">
      <header>
        <p className="eyebrow">Technical Skills</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">A working toolbox.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Organized by domain. Hover any chip to highlight; click a category to dive in.
        </p>
      </header>

      <nav className="mt-10 flex flex-wrap gap-2">
        <Link
          to="/skills"
          className="chip"
          activeProps={{ className: "chip" }}
          activeOptions={{ exact: true }}
        >
          All
        </Link>
        {SKILL_CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to="/skills/$slug"
            params={{ slug: c.slug }}
            className="chip"
            activeProps={{ className: "chip" }}
          >
            {c.name}
          </Link>
        ))}
      </nav>

      <div className="mt-12">
        {isChild ? <Outlet /> : <AllSkills />}
      </div>
    </div>
  );
}

function AllSkills() {
  return (
    <div className="space-y-16">
      {SKILL_CATEGORIES.map((c) => (
        <section key={c.slug} className="grid md:grid-cols-12 gap-8 pt-10 hairline">
          <div className="md:col-span-4">
            <Link to="/skills/$slug" params={{ slug: c.slug }} className="group">
              <h2 className="font-display text-3xl group-hover:text-ember transition-colors">
                {c.name}
              </h2>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
            <p className="mt-3 text-xs font-mono text-muted-foreground">
              {c.skills.length} skills
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-2">
            {c.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
