import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills/$slug")({
  head: ({ params }) => {
    const cat = SKILL_CATEGORIES.find((c) => c.slug === params.slug);
    const title = cat ? `${cat.name} — Skills` : "Skills";
    return {
      meta: [
        { title: `${title} — Corey Heckel` },
        { name: "description", content: cat?.blurb ?? "Technical skills." },
        { property: "og:title", content: title },
        { property: "og:description", content: cat?.blurb ?? "Technical skills." },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = SKILL_CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return cat;
  },
  notFoundComponent: () => (
    <div className="py-10">
      <p className="text-muted-foreground">Skill category not found.</p>
      <Link to="/skills" className="mt-4 inline-block underline hover:text-ember">← Back to skills</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="py-10">
      <p>Something went wrong loading this category.</p>
      <pre className="mt-2 text-xs text-muted-foreground">{error.message}</pre>
    </div>
  ),
  component: SkillCategoryPage,
});

function SkillCategoryPage() {
  const cat = Route.useLoaderData();
  return (
    <section className="grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <h2 className="font-display text-4xl">{cat.name}</h2>
        <p className="mt-3 text-muted-foreground">{cat.blurb}</p>
        <p className="mt-4 text-xs font-mono text-muted-foreground">
          {cat.skills.length} skills tracked
        </p>
      </div>
      <div className="md:col-span-8 flex flex-wrap gap-2">
        {cat.skills.map((s: string) => (
          <span key={s} className="chip text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
