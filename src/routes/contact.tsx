import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CONTACT } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Corey Heckel" },
      { name: "description", content: "Reach out to Corey Heckel for freelance web development, AI/ML features, or general inquiries." },
      { property: "og:title", content: "Contact — Corey Heckel" },
      { property: "og:description", content: "Freelance availability for web and AI engagements." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [subject, setSubject] = useState("Freelance: ");
  const [body, setBody] = useState("");

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="container-prose py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Let's build something.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            I take a small number of freelance engagements — custom web builds,
            AI/ML features, and rescue projects. I usually reply within 48 hours.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <Field label="Email">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ember">{CONTACT.email}</a>
            </Field>
            <Field label="Phone">{CONTACT.phone}</Field>
            <Field label="Location">{CONTACT.location}</Field>
            <Field label="GitHub">
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-ember">github.com/coreyheckel3 ↗</a>
            </Field>
            <Field label="LinkedIn">
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-ember">linkedin.com/in/corey-heckel ↗</a>
            </Field>
            <Field label="Résumé">
              <a href={CONTACT.resume} className="hover:text-ember">Download PDF ↓</a>
            </Field>
          </dl>

          <p className="mt-10 text-xs text-muted-foreground">
            Drop your résumé PDF at <code className="font-mono">public/resume.pdf</code> and it'll
            be served from <code className="font-mono">/resume.pdf</code>.
          </p>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <p className="eyebrow">Quick message</p>
            <h2 className="mt-2 font-display text-3xl">Tell me about your project.</h2>

            <div className="mt-6 space-y-5">
              <Input label="Subject" value={subject} onChange={setSubject} placeholder="Freelance: marketing site redesign" />
              <Textarea
                label="Message"
                value={body}
                onChange={setBody}
                placeholder="Project type, timeline, budget range, and anything I should know upfront."
              />
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-ember transition-colors"
                >
                  Send via email →
                </button>
                <span className="text-xs text-muted-foreground">
                  Opens your mail client. No data leaves the browser.
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="eyebrow mb-3">What I take on</p>
              <ul className="text-sm space-y-1.5">
                <li>· Marketing sites & landing pages (React / Webflow)</li>
                <li>· Custom AI features — RAG, agents, recommendation</li>
                <li>· Data pipelines & ML model integration</li>
                <li>· Project rescues & technical audits</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-paper px-4 py-2.5 text-sm outline-none focus:border-ember focus:ring-1 focus:ring-ember"
      />
    </label>
  );
}

function Textarea({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={7}
        className="mt-2 w-full rounded-md border border-input bg-paper px-4 py-2.5 text-sm outline-none focus:border-ember focus:ring-1 focus:ring-ember resize-y"
      />
    </label>
  );
}
