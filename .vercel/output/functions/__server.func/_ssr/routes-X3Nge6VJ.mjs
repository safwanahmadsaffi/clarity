import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, o as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Clock3, c as ArrowRight, i as Menu, n as Shield, o as ChevronDown, r as PanelsTopLeft, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-X3Nge6VJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var features = [
	{
		title: "Simple task boards",
		description: "Organize work with drag-and-drop boards that stay out of your way."
	},
	{
		title: "Fast prioritization",
		description: "Focus on what matters today with clear priorities and due dates."
	},
	{
		title: "Team collaboration",
		description: "Comment, assign, and mention teammates to keep everyone aligned."
	},
	{
		title: "Clear progress",
		description: "See project health at a glance with lightweight progress tracking."
	},
	{
		title: "Private by default",
		description: "Your data is encrypted and only visible to people you invite."
	},
	{
		title: "Zero setup",
		description: "Create a project in seconds and invite your team with one link."
	}
];
var steps = [
	{
		step: "01",
		title: "Create a workspace",
		description: "Sign up and create a workspace for your team in under a minute."
	},
	{
		step: "02",
		title: "Add your projects",
		description: "Break work into projects and tasks that everyone can see and own."
	},
	{
		step: "03",
		title: "Ship together",
		description: "Track progress, remove blockers, and celebrate wins as a team."
	}
];
var pricingCards = [
	{
		name: "Starter",
		price: "$0",
		period: "",
		description: "For individuals and small side projects.",
		features: [
			"Up to 3 projects",
			"2 team members",
			"Basic task boards"
		],
		cta: "Get started free",
		highlight: false
	},
	{
		name: "Team",
		price: "$12",
		period: "/user/month",
		description: "For growing teams that need to move faster.",
		features: [
			"Unlimited projects",
			"Unlimited team members",
			"Advanced progress tracking",
			"Priority support"
		],
		cta: "Start free trial",
		highlight: true
	},
	{
		name: "Business",
		price: "$29",
		period: "/user/month",
		description: "For organizations with advanced needs.",
		features: [
			"Everything in Team",
			"SSO and audit logs",
			"Custom workflows",
			"Dedicated account manager"
		],
		cta: "Contact sales",
		highlight: false
	}
];
var faqItems = [
	"Is there a free trial?",
	"Can I change plans later?",
	"How do I cancel?",
	"Where is my data stored?"
];
function Index() {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-shell flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							className: "flex items-center gap-3 font-semibold tracking-tight text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-[1rem] border border-border bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "Clarity"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how-it-works",
									className: "hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pricing",
									className: "hover:text-foreground",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									className: "hover:text-foreground",
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-3 md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								children: "Log in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								children: "Start free trial"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "md:hidden",
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							"aria-label": "Toggle menu",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/70 bg-background/95 px-4 py-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-3 text-sm font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								onClick: () => setMobileMenuOpen(false),
								children: "Features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how-it-works",
								onClick: () => setMobileMenuOpen(false),
								children: "How it works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								onClick: () => setMobileMenuOpen(false),
								children: "Pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								onClick: () => setMobileMenuOpen(false),
								children: "FAQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-border/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-foreground",
								children: "Log in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-foreground",
								children: "Start free trial"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "hero-section relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-orb hero-orb-a",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-orb hero-orb-b",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-gridline",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-18",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "hero-kicker",
											children: "Clarity"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "hero-title",
											children: ["Project management", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "without the noise" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "hero-lead",
											children: "Clarity gives small teams a clean, focused workspace to plan tasks, track progress, and ship work together. No bloat, no steep learning curve."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-8 flex flex-col gap-3 sm:flex-row",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full max-w-xl flex-col gap-3 sm:flex-row",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "email",
													placeholder: "Enter your work email",
													"aria-label": "Enter your work email",
													className: "h-12 flex-1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "lg",
													className: "hero-button",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get started" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm text-muted-foreground",
											children: "Free 14-day trial. No credit card required."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-deck",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hero-frame hero-frame-main",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "hero-frame-topline",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Clarity / live board" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Focused mode" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "hero-dashboard",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "hero-sidebar",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-sidebar-label",
																children: "Active goals"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-sidebar-item hero-sidebar-item--active",
																children: "Launch project"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-sidebar-item",
																children: "Review backlog"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-sidebar-item",
																children: "Weekly sync"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "hero-focus-panel",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-chip",
																children: "Work in progress"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Clean planning space" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-timer",
																children: "01:14:22"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One clear workspace for tasks, progress, and collaboration, designed to keep the team aligned." }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "hero-controls",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	variant: "outline",
																	size: "sm",
																	children: "Pause"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	children: "Complete"
																})]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "hero-signal-panel",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-sidebar-label",
																children: "Progress"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "hero-signal-value",
																children: "22.5h"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "hero-bars",
																"aria-hidden": "true",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "is-active" }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
																]
															})
														]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hero-floating hero-floating-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fast prioritization" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hero-floating hero-floating-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Private by default" })]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "features",
						className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "section-kicker",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title",
									children: "Everything you need, nothing more"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-copy mt-5",
									children: "Built for teams that want to move fast without getting lost in complex workflows."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "feature-grid mt-12",
							children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "feature-card feature-card--slide border-border/70 bg-background/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "feature-card-top",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "feature-mark",
												children: ["0", index + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "feature-card-line",
												"aria-hidden": "true"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 text-xl font-semibold tracking-tight text-foreground",
											children: feature.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-6 text-muted-foreground",
											children: feature.description
										})
									]
								})
							}, feature.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "how-it-works",
						className: "workflow-section border-y border-border/70 bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "section-kicker",
									children: "How it works"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title",
									children: "Get your team up and running in minutes"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-copy max-w-2xl lg:ml-auto",
									children: "A simple workflow that keeps the team aligned without adding unnecessary process."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "workflow-track mt-12",
								children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									className: "workflow-step border-border/70 bg-background/85",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "workflow-step-index",
												children: step.step
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-5 text-xl font-semibold tracking-tight text-foreground",
												children: step.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-6 text-muted-foreground",
												children: step.description
											})
										]
									})
								}, step.step))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "proof-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "proof-label",
										children: "Customer quote"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "proof-value text-3xl leading-tight sm:text-4xl",
										children: "“We tried three other tools before Clarity. It is the first one our team actually wanted to keep using.”"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm font-semibold text-foreground",
										children: "Sarah Chen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Product Lead, Northwind Studios"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "section-kicker",
									children: "Accountability"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title",
									children: "Clear progress, clear responsibility."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-4",
									children: [
										"Weekly heatmaps help teams see where work actually happened.",
										"Exports are simple enough to share with clients or leadership.",
										"The system makes the next step easy to see."
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm leading-6 text-foreground/85",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "pricing",
						className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "section-kicker",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title",
									children: "Straightforward pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-copy mt-5",
									children: "Start free, then scale as your team grows."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pricing-grid mt-12",
							children: pricingCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: `pricing-card border-border/70 bg-background/85 ${card.highlight ? "pricing-card--featured" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "flex h-full flex-col p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-semibold tracking-tight text-foreground",
												children: card.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-muted-foreground",
												children: card.description
											})] }), card.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pricing-badge",
												children: "Popular"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex items-end gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-5xl font-semibold tracking-tight text-foreground",
												children: card.price
											}), card.period ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "pb-1 text-sm text-muted-foreground",
												children: card.period
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 space-y-3",
											children: card.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-sm leading-6 text-foreground/85",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
											}, feature))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "mt-8 w-full",
											variant: card.highlight ? "default" : "outline",
											children: card.cta
										})
									]
								})
							}, card.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "faq",
						className: "border-y border-border/70 bg-muted/18",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "section-kicker",
								children: "FAQ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title",
								children: "Frequently asked questions"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
								type: "single",
								collapsible: true,
								className: "faq-accordion",
								children: faqItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: `item-${index + 1}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, { children: [
										index === 0 && "Yes — 14 days. No credit card required.",
										index === 1 && "Yes — changes apply on the next billing cycle.",
										index === 2 && "Cancel any time from workspace settings.",
										index === 3 && "Secure, encrypted, and visible only to invited users."
									] })]
								}, item))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cta-panel border border-border/70 bg-background/85 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "section-kicker",
										children: "Ready to begin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "section-title",
										children: "Ready to bring clarity to your work?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "section-copy mt-4 max-w-2xl",
										children: "Join hundreds of teams who have simplified the way they manage projects."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "cta-form",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										children: "Start your free trial"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "outline",
										children: "Talk to sales"
									})]
								})]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/70 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-[1rem] border border-border bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold tracking-tight",
								children: "Clarity"
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-wrap gap-5 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how-it-works",
									className: "hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pricing",
									className: "hover:text-foreground",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									className: "hover:text-foreground",
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "© 2026 Clarity, Inc. All rights reserved."
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
