import { r as __toESM } from "../_runtime.mjs";
import { o as SKILL_CATEGORIES, t as CONTACT } from "./portfolio-data-BCCwOTCb.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$8 } from "./skills._slug-XrDbK6s4.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D4NnpIqw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BQFPd5lg.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var TOP_LINKS = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/experience",
		label: "Professional Experience"
	},
	{
		to: "/education",
		label: "Education"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/publications",
		label: "Publications"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [skillsOpen, setSkillsOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose flex items-center justify-between h-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-2xl tracking-tight text-ink hover:text-ember transition-colors",
					children: [
						"Corey",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ember",
							children: "."
						}),
						"Heckel"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: "/",
							label: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setSkillsOpen(true),
							onMouseLeave: () => setSkillsOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSkillsOpen((o) => !o),
								className: "px-3 py-2 text-sm text-ink hover:text-ember transition-colors inline-flex items-center gap-1",
								"aria-expanded": skillsOpen,
								"aria-haspopup": "true",
								children: ["Technical Skills", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "10",
									height: "10",
									viewBox: "0 0 10 10",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M1 3l4 4 4-4",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5"
									})
								})]
							}), skillsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 top-full pt-2 w-72",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card border border-border rounded-lg shadow-lg overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/skills",
										className: "block px-4 py-2.5 text-sm font-medium border-b border-border hover:bg-muted",
										onClick: () => setSkillsOpen(false),
										children: "All Skills →"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "py-1 max-h-[60vh] overflow-y-auto",
										children: SKILL_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/skills/$slug",
											params: { slug: c.slug },
											className: "block px-4 py-2 text-sm text-ink hover:bg-muted hover:text-ember transition-colors",
											onClick: () => setSkillsOpen(false),
											children: c.name
										}) }, c.slug))
									})]
								})
							})]
						}),
						TOP_LINKS.slice(1).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							to: l.to,
							label: l.label
						}, l.to))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "lg:hidden p-2",
					onClick: () => setMobileOpen((o) => !o),
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "22",
						height: "22",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6L6 18" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18M3 12h18M3 18h18" })
					})
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose py-4 flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
						to: "/",
						label: "Home",
						close: () => setMobileOpen(false)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-2",
								children: "Technical Skills"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/skills",
								className: "block py-1.5 text-sm hover:text-ember",
								onClick: () => setMobileOpen(false),
								children: "All Skills"
							}),
							SKILL_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/skills/$slug",
								params: { slug: c.slug },
								className: "block py-1.5 text-sm text-muted-foreground hover:text-ember",
								onClick: () => setMobileOpen(false),
								children: c.name
							}, c.slug))
						]
					}),
					TOP_LINKS.slice(1).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLink, {
						to: l.to,
						label: l.label,
						close: () => setMobileOpen(false)
					}, l.to))
				]
			})
		})]
	});
}
function NavLink({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "px-3 py-2 text-sm text-ink hover:text-ember transition-colors",
		activeProps: { className: "px-3 py-2 text-sm text-ember" },
		activeOptions: { exact: to === "/" },
		children: label
	});
}
function MobileLink({ to, label, close }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "py-2 text-base hover:text-ember",
		onClick: close,
		children: label
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-32 border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose py-12 grid gap-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-2xl",
					children: [
						"Corey",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ember",
							children: "."
						}),
						"Heckel"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground max-w-xs",
					children: "Machine Learning Engineer & full-stack developer. Available for select freelance work."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-3",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-ember",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/skills",
								className: "hover:text-ember",
								children: "Technical Skills"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/experience",
								className: "hover:text-ember",
								children: "Experience"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								className: "hover:text-ember",
								children: "Projects"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/publications",
								className: "hover:text-ember",
								children: "Publications"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-ember",
								children: "Contact"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-3",
						children: "Elsewhere"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.github,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-ember",
								children: "GitHub ↗"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-ember",
								children: "LinkedIn ↗"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.resume,
								className: "hover:text-ember",
								children: "Download Résumé ↓"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${CONTACT.email}`,
								className: "hover:text-ember",
								children: CONTACT.email
							}) })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose pb-8 text-xs text-muted-foreground flex flex-wrap justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Corey Heckel"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.location })]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-5xl",
					children: "Page not found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-ember transition-colors",
					children: "← Back home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Something broke"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl",
					children: "This page didn't load."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-ember",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input px-4 py-2 text-sm hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Corey Heckel — Machine Learning Engineer & Full-Stack Developer" },
			{
				name: "description",
				content: "Portfolio of Corey Heckel — Machine Learning Engineer at Nike, full-stack developer, and freelance web & AI engineer."
			},
			{
				name: "author",
				content: "Corey Heckel"
			},
			{
				property: "og:title",
				content: "Corey Heckel — ML Engineer & Full-Stack Developer"
			},
			{
				property: "og:description",
				content: "Portfolio, projects, publications, and freelance availability."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./skills-BcPPwUUl.mjs");
var Route$6 = createFileRoute("/skills")({
	head: () => ({ meta: [
		{ title: "Technical Skills — Corey Heckel" },
		{
			name: "description",
			content: "An organized catalog of Corey Heckel's technical skills across ML, AI, cloud, web, data, and DevOps."
		},
		{
			property: "og:title",
			content: "Technical Skills — Corey Heckel"
		},
		{
			property: "og:description",
			content: "Catalog of skills across ML, AI, cloud, web, data, and DevOps."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./publications-U-gCvjiC.mjs");
var Route$5 = createFileRoute("/publications")({
	head: () => ({ meta: [
		{ title: "Publications — Corey Heckel" },
		{
			name: "description",
			content: "Peer-reviewed publications by Corey Heckel, including IEEE Xplore."
		},
		{
			property: "og:title",
			content: "Publications — Corey Heckel"
		},
		{
			property: "og:description",
			content: "Peer-reviewed publications including IEEE Xplore."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-CPdZgngK.mjs");
var Route$4 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects — Corey Heckel" },
		{
			name: "description",
			content: "Selected projects across machine learning, full-stack web, games, and hardware."
		},
		{
			property: "og:title",
			content: "Projects — Corey Heckel"
		},
		{
			property: "og:description",
			content: "ML models, full-stack web apps, games, and hardware projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./experience-CDVDGHVH.mjs");
var Route$3 = createFileRoute("/experience")({
	head: () => ({ meta: [
		{ title: "Professional Experience — Corey Heckel" },
		{
			name: "description",
			content: "Roles, impact, and outcomes — from Nike ML Engineer to freelance work and graduate research at Stevens."
		},
		{
			property: "og:title",
			content: "Professional Experience — Corey Heckel"
		},
		{
			property: "og:description",
			content: "Roles, impact, and outcomes across ML, web, and research."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./education-CV71BY4F.mjs");
var Route$2 = createFileRoute("/education")({
	head: () => ({ meta: [
		{ title: "Education — Corey Heckel" },
		{
			name: "description",
			content: "Master's in Machine Learning and B.E. in Software Engineering at Stevens Institute of Technology."
		},
		{
			property: "og:title",
			content: "Education — Corey Heckel"
		},
		{
			property: "og:description",
			content: "MS Machine Learning & BE Software Engineering, Stevens Institute of Technology."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-9_ewXee_.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Corey Heckel" },
		{
			name: "description",
			content: "Reach out to Corey Heckel for freelance web development, AI/ML features, or general inquiries."
		},
		{
			property: "og:title",
			content: "Contact — Corey Heckel"
		},
		{
			property: "og:description",
			content: "Freelance availability for web and AI engagements."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-C-7RON9x.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Corey Heckel — Machine Learning Engineer" },
		{
			name: "description",
			content: "Machine Learning Engineer II at Nike. Full-stack developer. Freelance availability for web and AI engagements."
		},
		{
			property: "og:title",
			content: "Corey Heckel — ML Engineer & Full-Stack Developer"
		},
		{
			property: "og:description",
			content: "Machine Learning Engineer II at Nike. Full-stack developer. Freelance availability."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SkillsRoute = Route$6.update({
	id: "/skills",
	path: "/skills",
	getParentRoute: () => Route$7
});
var PublicationsRoute = Route$5.update({
	id: "/publications",
	path: "/publications",
	getParentRoute: () => Route$7
});
var ProjectsRoute = Route$4.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$7
});
var ExperienceRoute = Route$3.update({
	id: "/experience",
	path: "/experience",
	getParentRoute: () => Route$7
});
var EducationRoute = Route$2.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var SkillsRouteChildren = { SkillsSlugRoute: Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SkillsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	EducationRoute,
	ExperienceRoute,
	ProjectsRoute,
	PublicationsRoute,
	SkillsRoute: SkillsRoute._addFileChildren(SkillsRouteChildren)
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
