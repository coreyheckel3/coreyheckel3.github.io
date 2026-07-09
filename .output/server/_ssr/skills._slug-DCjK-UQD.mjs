import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills._slug-DCjK-UQD.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "py-10",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "Skill category not found."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/skills",
		className: "mt-4 inline-block underline hover:text-ember",
		children: "← Back to skills"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
