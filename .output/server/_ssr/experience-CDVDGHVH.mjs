import { r as EXPERIENCE } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-CDVDGHVH.js
var import_jsx_runtime = require_jsx_runtime();
function ExperiencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-prose py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Professional Experience"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl md:text-6xl",
				children: "Where I've shipped."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted-foreground",
				children: "Production ML at Nike, freelance web work for Posh, and several years of research at Stevens."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-16 space-y-16",
			children: EXPERIENCE.map((e, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid md:grid-cols-12 gap-8 pt-10 hairline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground",
							children: e.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl",
							children: e.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-base text-ember",
							children: e.company
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-8 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: e.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground pt-1.5 tabular-nums",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15px] leading-relaxed",
									children: b
								})]
							}, i))
						}),
						e.tech && e.tech.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2",
								children: "Tech"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: e.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip",
									children: t
								}, t))
							})]
						}),
						e.sites && e.sites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2",
								children: "Selected sites built via Posh"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: e.sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: s.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1 rounded-full border border-ember/40 px-3 py-1 text-xs text-ember hover:bg-ember hover:text-paper transition-colors",
									children: [
										s.label,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: "→"
										})
									]
								}, s.url))
							})]
						})
					]
				})]
			}, `${e.company}-${idx}`))
		})]
	});
}
//#endregion
export { ExperiencePage as component };
