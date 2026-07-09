import { i as PROJECTS, o as SKILL_CATEGORIES, r as EXPERIENCE, t as CONTACT } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-7RON9x.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = EXPERIENCE[0];
	const featuredProjects = PROJECTS.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none",
					"aria-hidden": true,
					style: { background: "radial-gradient(1200px 600px at 85% -10%, color-mix(in oklab, var(--ember) 22%, transparent), transparent 60%), radial-gradient(900px 500px at 0% 10%, color-mix(in oklab, var(--sage) 18%, transparent), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none opacity-[0.35]",
					"aria-hidden": true,
					style: {
						backgroundImage: "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
						maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-prose relative pt-20 pb-24 md:pt-28 md:pb-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Portfolio · 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]",
							children: [
								"Machine learning,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-ember",
									children: "shipped to production."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed",
							children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink font-medium",
									children: "Corey Heckel"
								}),
								" — a Machine Learning Engineer II at Nike and a full-stack developer based in ",
								CONTACT.location,
								". I build recommendation systems, search infrastructure, and the web around them. Currently taking select freelance work."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects",
									className: "rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-ember transition-colors",
									children: "See projects →"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "rounded-md border border-input px-5 py-3 text-sm font-medium hover:border-ember hover:text-ember transition-colors",
									children: "Hire me for freelance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.resume,
									className: "px-3 py-3 text-sm font-medium underline underline-offset-4 hover:text-ember",
									children: "Download résumé ↓"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-4",
								children: "Impact at Nike"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: "$245M",
										l: "incremental revenue",
										sub: "from 0→1 rec models"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: "600K+",
										l: "AE hours saved / yr",
										sub: "AI Draft Order tool"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: "90%",
										l: "infra cost reduction",
										sub: "Databricks → AWS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: "95%",
										l: "search coverage",
										sub: "dead-end searches → 0"
									})
								]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-prose py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 gap-10 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What I do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl md:text-5xl",
						children: "A wide stack, used deliberately."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-8 grid sm:grid-cols-2 gap-6",
					children: SKILL_CATEGORIES.slice(0, 6).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/skills/$slug",
						params: { slug: c.slug },
						className: "group block p-6 border border-border rounded-lg bg-card hover:border-ember transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl group-hover:text-ember transition-colors",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: c.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 text-xs text-muted-foreground font-mono",
								children: [c.skills.slice(0, 4).join(" · "), "…"]
							})
						]
					}, c.slug))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/skills",
					className: "text-sm underline underline-offset-4 hover:text-ember",
					children: "View all skill categories →"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose py-20 grid md:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Currently"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl",
							children: featured.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg",
							children: featured.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: featured.period
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "md:col-span-8 space-y-4",
					children: featured.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-ember pt-1.5 tabular-nums",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[15px] leading-relaxed",
							children: b
						})]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-prose py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Selected work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: "Featured projects."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					className: "text-sm underline underline-offset-4 hover:text-ember hidden sm:inline",
					children: "All projects →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: featuredProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group p-6 border border-border rounded-lg bg-card hover:border-ember transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl group-hover:text-ember transition-colors",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground font-mono whitespace-nowrap",
								children: p.period
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [p.role, p.metric ? ` · ${p.metric}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[15px] leading-relaxed",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: p.tech.slice(0, 6).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip",
								children: t
							}, t))
						})
					]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-prose py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-ink text-paper p-10 md:p-16 relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							style: { color: "color-mix(in oklab, var(--paper) 70%, transparent)" },
							children: "Available for freelance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Need a marketing site, an AI feature, or both?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-paper/70",
							children: "I take a small number of freelance engagements — web builds, custom AI/ML features, and rescue projects. Drop a note and I'll get back within 48 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-md bg-ember px-5 py-3 text-sm font-medium text-paper hover:opacity-90",
								children: "Start a conversation →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${CONTACT.email}`,
								className: "rounded-md border border-paper/30 px-5 py-3 text-sm font-medium hover:border-paper",
								children: CONTACT.email
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-20",
					style: { background: "radial-gradient(circle, var(--ember) 0%, transparent 70%)" },
					"aria-hidden": true
				})]
			})
		})
	] });
}
function Stat({ n, l, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-ember",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-3xl md:text-4xl text-ember tracking-tight",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-xs font-medium uppercase tracking-wider text-ink/80",
				children: l
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[11px] font-mono text-muted-foreground",
				children: sub
			})
		]
	});
}
//#endregion
export { Home as component };
