import { createFileRoute } from "@tanstack/react-router";
import { EDUCATION } from "@/lib/portfolio-data";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Corey Heckel" },
      { name: "description", content: "Master's in Machine Learning and B.E. in Software Engineering at Stevens Institute of Technology." },
      { property: "og:title", content: "Education — Corey Heckel" },
      { property: "og:description", content: "MS Machine Learning & BE Software Engineering, Stevens Institute of Technology." },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <div className="container-prose py-16 md:py-24">
      <header>
        <p className="eyebrow">Education</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Stevens Institute of Technology.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Five years on the Hudson — undergraduate software engineering followed by a graduate
          program in machine learning.
        </p>
      </header>

      <div className="mt-16 space-y-20">
        {EDUCATION.map((e) => (
          <section key={e.degree} className="pt-10 hairline">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                <h2 className="mt-2 font-display text-3xl leading-tight">{e.degree}</h2>
                <p className="mt-2 text-base text-ember">{e.school}</p>
                <p className="mt-4 text-sm">
                  <span className="eyebrow">GPA</span>{" "}
                  <span className="font-mono ml-2">{e.gpa}</span>
                </p>
                <div className="mt-4">
                  <p className="eyebrow mb-2">Honors</p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.awards.map((a) => (
                      <span key={a} className="chip">{a}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-8">
                {e.courses.map((g) => (
                  <div key={g.group}>
                    <p className="eyebrow mb-3">{g.group}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[15px]">
                      {g.items.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span className="text-ember">·</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
