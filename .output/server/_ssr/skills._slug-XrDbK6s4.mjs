import { o as SKILL_CATEGORIES } from "./portfolio-data-BCCwOTCb.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills._slug-XrDbK6s4.js
var $$splitComponentImporter = () => import("./skills._slug-CBdquLFk.mjs");
var $$splitErrorComponentImporter = () => import("./skills._slug-CqqNAxHq.mjs");
var $$splitNotFoundComponentImporter = () => import("./skills._slug-DCjK-UQD.mjs");
var Route = createFileRoute("/skills/$slug")({
	head: ({ params }) => {
		const cat = SKILL_CATEGORIES.find((c) => c.slug === params.slug);
		const title = cat ? `${cat.name} — Skills` : "Skills";
		return { meta: [
			{ title: `${title} — Corey Heckel` },
			{
				name: "description",
				content: cat?.blurb ?? "Technical skills."
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: cat?.blurb ?? "Technical skills."
			}
		] };
	},
	loader: ({ params }) => {
		const cat = SKILL_CATEGORIES.find((c) => c.slug === params.slug);
		if (!cat) throw notFound();
		return cat;
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
