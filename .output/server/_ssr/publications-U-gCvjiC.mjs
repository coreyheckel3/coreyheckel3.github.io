import { a as PUBLICATIONS } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publications-U-gCvjiC.js
var import_jsx_runtime = require_jsx_runtime();
function PublicationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-prose py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "Publications"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-5xl md:text-6xl",
			children: "Peer-reviewed work."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 space-y-10",
			children: PUBLICATIONS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "pt-8 hairline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-12 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground",
							children: p.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ember",
							children: p.venue
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl md:text-3xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.authors
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[15px] leading-relaxed",
								children: p.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: p.url,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-block text-sm underline underline-offset-4 hover:text-ember",
								children: [
									"Read on ",
									p.venue,
									" ↗"
								]
							})
						]
					})]
				})
			}, p.url))
		})]
	});
}
//#endregion
export { PublicationsPage as component };
