import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills._slug-CqqNAxHq.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "py-10",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Something went wrong loading this category." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "mt-2 text-xs text-muted-foreground",
		children: error.message
	})]
});
//#endregion
export { SplitErrorComponent as errorComponent };
