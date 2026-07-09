import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT, EXPERIENCE, PROJECTS, SKILL_CATEGORIES } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corey Heckel — Machine Learning Engineer" },
      { name: "description", content: "Machine Learning Engineer II at Nike. Full-stack developer. Freelance availability for web and AI engagements." },
      { property: "og:title", content: "Corey Heckel — ML Engineer & Full-Stack Developer" },
      { property: "og:description", content: "Machine Learning Engineer II at Nike. Full-stack developer. Freelance availability." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = EXPERIENCE[0];
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle gradient/grid backdrop, no image */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(1200px 600px at 85% -10%, color-mix(in oklab, var(--ember) 22%, transparent), transparent 60%), radial-gradient(900px 500px at 0% 10%, color-mix(in oklab, var(--sage) 18%, transparent), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="container-prose relative pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="eyebrow">Portfolio · 2026</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Machine learning,
            <br />
            <span className="italic text-ember">shipped to production.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-ink font-medium">Corey Heckel</span> — a Machine Learning Engineer II
            at Nike and a full-stack developer based in {CONTACT.location}. I build recommendation systems,
            search infrastructure, and the web around them. Currently taking select freelance work.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-ember transition-colors"
            >
              See projects →
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-input px-5 py-3 text-sm font-medium hover:border-ember hover:text-ember transition-colors"
            >
              Hire me for freelance
            </Link>
            <a
              href={CONTACT.resume}
              className="px-3 py-3 text-sm font-medium underline underline-offset-4 hover:text-ember"
            >
              Download résumé ↓
            </a>
          </div>

          {/* Impact stats */}
          <div className="mt-16">
            <p className="eyebrow mb-4">Impact at Nike</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat n="$245M" l="incremental revenue" sub="from 0→1 rec models" />
              <Stat n="600K+" l="AE hours saved / yr" sub="AI Draft Order tool" />
              <Stat n="90%" l="infra cost reduction" sub="Databricks → AWS" />
              <Stat n="95%" l="search coverage" sub="dead-end searches → 0" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="container-prose py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="eyebrow">What I do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A wide stack, used deliberately.</h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                to="/skills/$slug"
                params={{ slug: c.slug }}
                className="group block p-6 border border-border rounded-lg bg-card hover:border-ember transition-colors"
              >
                <div className="font-display text-xl group-hover:text-ember transition-colors">
                  {c.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <div className="mt-4 text-xs text-muted-foreground font-mono">
                  {c.skills.slice(0, 4).join(" · ")}…
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Link to="/skills" className="text-sm underline underline-offset-4 hover:text-ember">
            View all skill categories →
          </Link>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="border-y border-border bg-card">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">Currently</p>
            <h2 className="mt-3 font-display text-4xl">{featured.role}</h2>
            <p className="mt-1 text-lg">{featured.company}</p>
            <p className="mt-1 text-sm text-muted-foreground">{featured.period}</p>
          </div>
          <ul className="md:col-span-8 space-y-4">
            {featured.bullets.map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-xs text-ember pt-1.5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-prose py-20 md:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Featured projects.</h2>
          </div>
          <Link to="/projects" className="text-sm underline underline-offset-4 hover:text-ember hidden sm:inline">
            All projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <article key={p.slug} className="group p-6 border border-border rounded-lg bg-card hover:border-ember transition-colors">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl group-hover:text-ember transition-colors">{p.name}</h3>
                <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.role}{p.metric ? ` · ${p.metric}` : ""}</p>
              <p className="mt-4 text-[15px] leading-relaxed">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 6).map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-20">
        <div className="rounded-xl border border-border bg-ink text-paper p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow" style={{ color: "color-mix(in oklab, var(--paper) 70%, transparent)" }}>
              Available for freelance
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Need a marketing site, an AI feature, or both?
            </h2>
            <p className="mt-4 text-paper/70">
              I take a small number of freelance engagements — web builds, custom AI/ML features,
              and rescue projects. Drop a note and I'll get back within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-ember px-5 py-3 text-sm font-medium text-paper hover:opacity-90"
              >
                Start a conversation →
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-md border border-paper/30 px-5 py-3 text-sm font-medium hover:border-paper"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
          <div
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--ember) 0%, transparent 70%)" }}
            aria-hidden
          />
        </div>
      </section>
    </>
  );
}

function Stat({ n, l, sub }: { n: string; l: string; sub?: string }) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-ember">
      <div className="font-display text-3xl md:text-4xl text-ember tracking-tight">{n}</div>
      <div className="mt-2 text-xs font-medium uppercase tracking-wider text-ink/80">{l}</div>
      {sub && (
        <div className="mt-1 text-[11px] font-mono text-muted-foreground">{sub}</div>
      )}
    </div>
  );
}
