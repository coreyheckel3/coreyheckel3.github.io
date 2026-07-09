import { r as __toESM } from "../_runtime.mjs";
import { t as CONTACT } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-9_ewXee_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [subject, setSubject] = (0, import_react.useState)("Freelance: ");
	const [body, setBody] = (0, import_react.useState)("");
	const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-prose py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl md:text-6xl",
						children: "Let's build something."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground",
						children: "I take a small number of freelance engagements — custom web builds, AI/ML features, and rescue projects. I usually reply within 48 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${CONTACT.email}`,
									className: "hover:text-ember",
									children: CONTACT.email
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								children: CONTACT.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Location",
								children: CONTACT.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "GitHub",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.github,
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-ember",
									children: "github.com/coreyheckel3 ↗"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-ember",
									children: "linkedin.com/in/corey-heckel ↗"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Résumé",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.resume,
									className: "hover:text-ember",
									children: "Download PDF ↓"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-xs text-muted-foreground",
						children: [
							"Drop your résumé PDF at ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono",
								children: "public/resume.pdf"
							}),
							" and it'll be served from ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono",
								children: "/resume.pdf"
							}),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						window.location.href = mailto;
					},
					className: "bg-card border border-border rounded-xl p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Quick message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl",
							children: "Tell me about your project."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Subject",
									value: subject,
									onChange: setSubject,
									placeholder: "Freelance: marketing site redesign"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									label: "Message",
									value: body,
									onChange: setBody,
									placeholder: "Project type, timeline, budget range, and anything I should know upfront."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-ember transition-colors",
										children: "Send via email →"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Opens your mail client. No data leaves the browser."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 pt-6 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-3",
								children: "What I take on"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "text-sm space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Marketing sites & landing pages (React / Webflow)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Custom AI features — RAG, agents, recommendation" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Data pipelines & ML model integration" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Project rescues & technical audits" })
								]
							})]
						})
					]
				})
			})]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "eyebrow",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1",
			children
		})]
	});
}
function Input({ label, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "text",
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "mt-2 w-full rounded-md border border-input bg-paper px-4 py-2.5 text-sm outline-none focus:border-ember focus:ring-1 focus:ring-ember"
		})]
	});
}
function Textarea({ label, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			rows: 7,
			className: "mt-2 w-full rounded-md border border-input bg-paper px-4 py-2.5 text-sm outline-none focus:border-ember focus:ring-1 focus:ring-ember resize-y"
		})]
	});
}
//#endregion
export { ContactPage as component };
