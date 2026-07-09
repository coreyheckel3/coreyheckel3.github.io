import { createFileRoute } from "@tanstack/react-router";
import { PUBLICATIONS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Corey Heckel" },
      { name: "description", content: "Peer-reviewed publications by Corey Heckel, including IEEE Xplore." },
      { property: "og:title", content: "Publications — Corey Heckel" },
      { property: "og:description", content: "Peer-reviewed publications including IEEE Xplore." },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  return (
    <div className="container-prose py-16 md:py-24">
      <header>
        <p className="eyebrow">Publications</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Peer-reviewed work.</h1>
      </header>

      <div className="mt-16 space-y-10">
        {PUBLICATIONS.map((p) => (
          <article key={p.url} className="pt-8 hairline">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground">{p.year}</p>
                <p className="mt-1 text-sm text-ember">{p.venue}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl md:text-3xl">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
                <p className="mt-4 text-[15px] leading-relaxed">{p.summary}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-ember"
                >
                  Read on {p.venue} ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
