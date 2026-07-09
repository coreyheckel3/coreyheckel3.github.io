import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./skills._slug-XrDbK6s4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills._slug-CBdquLFk.js
var import_jsx_runtime = require_jsx_runtime();
function SkillCategoryPage() {
	const cat = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid md:grid-cols-12 gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: cat.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: cat.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs font-mono text-muted-foreground",
					children: [cat.skills.length, " skills tracked"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:col-span-8 flex flex-wrap gap-2",
			children: cat.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "chip text-sm",
				children: s
			}, s))
		})]
	});
}
//#endregion
export { SkillCategoryPage as component };
