import { o as SKILL_CATEGORIES } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useMatches, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-BcPPwUUl.js
var import_jsx_runtime = require_jsx_runtime();
function SkillsLayout() {
	const isChild = useMatches().some((m) => m.routeId === "/skills/$slug");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-prose py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Technical Skills"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "A working toolbox."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted-foreground",
					children: "Organized by domain. Hover any chip to highlight; click a category to dive in."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-10 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/skills",
					className: "chip",
					activeProps: { className: "chip" },
					activeOptions: { exact: true },
					children: "All"
				}), SKILL_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/skills/$slug",
					params: { slug: c.slug },
					className: "chip",
					activeProps: { className: "chip" },
					children: c.name
				}, c.slug))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: isChild ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllSkills, {})
			})
		]
	});
}
function AllSkills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-16",
		children: SKILL_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid md:grid-cols-12 gap-8 pt-10 hairline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/skills/$slug",
						params: { slug: c.slug },
						className: "group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl group-hover:text-ember transition-colors",
							children: c.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs font-mono text-muted-foreground",
						children: [c.skills.length, " skills"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-8 flex flex-wrap gap-2",
				children: c.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "chip",
					children: s
				}, s))
			})]
		}, c.slug))
	});
}
//#endregion
export { SkillsLayout as component };
