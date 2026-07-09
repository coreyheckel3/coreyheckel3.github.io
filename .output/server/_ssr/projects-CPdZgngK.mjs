import { r as __toESM } from "../_runtime.mjs";
import { i as PROJECTS } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-CPdZgngK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"ML",
	"Web",
	"Game",
	"Hardware"
];
function ProjectsPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-prose py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "Things I've built."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted-foreground",
					children: "A mix of production ML, university projects, freelance builds, and side projects."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFilter(f),
					className: "px-3.5 py-1.5 text-sm rounded-full border transition-colors " + (filter === f ? "bg-ink text-paper border-ink" : "border-border hover:border-ember hover:text-ember"),
					children: [f, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 text-xs opacity-60",
						children: f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length
					})]
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-10",
				children: visible.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "pt-8 hairline grid md:grid-cols-12 gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted-foreground",
								children: p.period
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ember",
								children: p.role
							}),
							p.metric && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 inline-block font-mono text-xs px-2 py-1 bg-ember/10 text-ember rounded",
								children: p.metric
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-relaxed",
							children: p.details
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-1.5",
							children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip",
								children: t
							}, t))
						})]
					})]
				}, p.slug))
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
