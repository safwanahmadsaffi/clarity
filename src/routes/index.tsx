import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Layout,
  Menu,
  Shield,
  Sparkles,
  X,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const features = [
  {
    title: "Simple task boards",
    description: "Organize work with drag-and-drop boards that stay out of your way.",
  },
  {
    title: "Fast prioritization",
    description: "Focus on what matters today with clear priorities and due dates.",
  },
  {
    title: "Team collaboration",
    description: "Comment, assign, and mention teammates to keep everyone aligned.",
  },
  {
    title: "Clear progress",
    description: "See project health at a glance with lightweight progress tracking.",
  },
  {
    title: "Private by default",
    description: "Your data is encrypted and only visible to people you invite.",
  },
  {
    title: "Zero setup",
    description: "Create a project in seconds and invite your team with one link.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create a workspace",
    description:
      "Sign up and create a workspace for your team in under a minute.",
  },
  {
    step: "02",
    title: "Add your projects",
    description:
      "Break work into projects and tasks that everyone can see and own.",
  },
  {
    step: "03",
    title: "Ship together",
    description:
      "Track progress, remove blockers, and celebrate wins as a team.",
  },
];

const pricingCards = [
  {
    name: "Starter",
    price: "$0",
    period: "",
    description: "For individuals and small side projects.",
    features: ["Up to 3 projects", "2 team members", "Basic task boards"],
    cta: "Get started free",
    highlight: false,
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
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
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
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

const faqItems = [
  "Is there a free trial?",
  "Can I change plans later?",
  "How do I cancel?",
  "Where is my data stored?",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clarity — Project management without the noise" },
      {
        name: "description",
        content:
          "Clarity gives small teams a clean, focused workspace to plan tasks, track progress, and ship work together.",
      },
      {
        property: "og:title",
        content: "Clarity — Project management without the noise",
      },
      {
        property: "og:description",
        content:
          "Clarity gives small teams a clean, focused workspace to plan tasks, track progress, and ship work together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="page-shell flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 font-semibold tracking-tight text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-[1rem] border border-border bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Layout className="h-4 w-4" />
            </div>
            <span className="text-base">Clarity</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how-it-works" className="hover:text-foreground">How it works</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Start free trial</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/70 bg-background/95 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <hr className="border-border/70" />
              <a href="#" className="text-foreground">Log in</a>
              <a href="#" className="text-foreground">Start free trial</a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="hero-section relative overflow-hidden">
          <div className="hero-orb hero-orb-a" aria-hidden="true" />
          <div className="hero-orb hero-orb-b" aria-hidden="true" />
          <div className="hero-gridline" aria-hidden="true" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-18">
            <div className="hero-copy">
              <div className="hero-kicker">Clarity</div>
              <h1 className="hero-title">
                Project management
                <span>without the noise</span>
              </h1>
              <p className="hero-lead">
                Clarity gives small teams a clean, focused workspace to plan tasks, track progress,
                and ship work together. No bloat, no steep learning curve.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    aria-label="Enter your work email"
                    className="h-12 flex-1"
                  />
                  <Button size="lg" className="hero-button">
                    <span>Get started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Free 14-day trial. No credit card required.
              </p>
            </div>

            <div className="hero-deck">
              <div className="hero-frame hero-frame-main">
                <div className="hero-frame-topline">
                  <span>Clarity / live board</span>
                  <span>Focused mode</span>
                </div>

                <div className="hero-dashboard">
                  <div className="hero-sidebar">
                    <div className="hero-sidebar-label">Active goals</div>
                    <div className="hero-sidebar-item hero-sidebar-item--active">Launch project</div>
                    <div className="hero-sidebar-item">Review backlog</div>
                    <div className="hero-sidebar-item">Weekly sync</div>
                  </div>

                  <div className="hero-focus-panel">
                    <div className="hero-chip">Work in progress</div>
                    <h2>Clean planning space</h2>
                    <div className="hero-timer">01:14:22</div>
                    <p>
                      One clear workspace for tasks, progress, and collaboration, designed to keep the
                      team aligned.
                    </p>

                    <div className="hero-controls">
                      <Button variant="outline" size="sm">Pause</Button>
                      <Button size="sm">Complete</Button>
                    </div>
                  </div>

                  <div className="hero-signal-panel">
                    <div className="hero-sidebar-label">Progress</div>
                    <div className="hero-signal-value">22.5h</div>
                    <div className="hero-bars" aria-hidden="true">
                      <span />
                      <span />
                      <span className="is-active" />
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-chips-row">
                <div className="hero-floating hero-floating-left">
                  <Clock3 className="h-4 w-4" />
                  <span>Fast prioritization</span>
                </div>
                <div className="hero-floating hero-floating-top">
                  <Sparkles className="h-4 w-4" />
                  <span>Zero setup</span>
                </div>
                <div className="hero-floating hero-floating-right">
                  <Shield className="h-4 w-4" />
                  <span>Private by default</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="section-kicker">Features</div>
            <h2 className="section-title">Everything you need, nothing more</h2>
            <p className="section-copy mt-5">
              Built for teams that want to move fast without getting lost in complex workflows.
            </p>
          </div>

          <div className="feature-grid mt-12">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="feature-card feature-card--slide border-border/70 bg-background/80"
              >
                <CardContent className="p-6">
                  <div className="feature-card-top">
                    <div className="feature-mark">0{index + 1}</div>
                    <div className="feature-card-line" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="workflow-section border-y border-border/70 bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="section-kicker">How it works</div>
              <h2 className="section-title">Get your team up and running in minutes</h2>
              <p className="section-copy mt-5">
                A simple workflow that keeps the team aligned without adding unnecessary process.
              </p>
            </div>

            <div className="workflow-track mt-12">
              {steps.map((step) => (
                <Card key={step.step} className="workflow-step border-border/70 bg-background/85">
                  <CardContent className="p-6">
                    <div className="workflow-step-index">{step.step}</div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="proof-panel">
              <div className="proof-label">Customer quote</div>
              <div className="proof-value text-3xl leading-tight sm:text-4xl">
                “We tried three other tools before Clarity. It is the first one our team actually
                wanted to keep using.”
              </div>
              <p className="mt-5 text-sm font-semibold text-foreground">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">Product Lead, Northwind Studios</p>
            </div>

            <div>
              <div className="section-kicker">Accountability</div>
              <h2 className="section-title">Clear progress, clear responsibility.</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Weekly heatmaps help teams see where work actually happened.",
                  "Exports are simple enough to share with clients or leadership.",
                  "The system makes the next step easy to see.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-foreground/85"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="section-kicker">Pricing</div>
            <h2 className="section-title">Straightforward pricing</h2>
            <p className="section-copy mt-5">
              Start free, then scale as your team grows.
            </p>
          </div>

          <div className="pricing-grid mt-12">
            {pricingCards.map((card) => (
              <Card
                key={card.name}
                className={`pricing-card border-border/70 bg-background/85 ${card.highlight ? "pricing-card--featured" : ""}`}
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {card.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                    {card.highlight && <div className="pricing-badge">Popular</div>}
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-tight text-foreground">
                      {card.price}
                    </span>
                    {card.period ? (
                      <span className="pb-1 text-sm text-muted-foreground">{card.period}</span>
                    ) : null}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-foreground/85"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="mt-8 w-full" variant={card.highlight ? "default" : "outline"}>
                    {card.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="border-y border-border/70 bg-muted/18">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-28">
            <div>
              <div className="section-kicker">FAQ</div>
              <h2 className="section-title">Frequently asked questions</h2>
            </div>

            <Accordion type="single" collapsible className="faq-accordion">
              {faqItems.map((item, index) => (
                <AccordionItem key={item} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item}</AccordionTrigger>
                  <AccordionContent>
                    {index === 0 && "Yes — 14 days. No credit card required."}
                    {index === 1 && "Yes — changes apply on the next billing cycle."}
                    {index === 2 && "Cancel any time from workspace settings."}
                    {index === 3 && "Secure, encrypted, and visible only to invited users."}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="cta-panel border border-border/70 bg-background/85 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="section-kicker">Ready to begin</div>
                <h2 className="section-title">Ready to bring clarity to your work?</h2>
                <p className="section-copy mt-4 max-w-2xl">
                  Join hundreds of teams who have simplified the way they manage projects.
                </p>
              </div>

              <div className="cta-form">
                <Button size="lg">Start your free trial</Button>
                <Button size="lg" variant="outline">Talk to sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-border bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Layout className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold tracking-tight">Clarity</div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how-it-works" className="hover:text-foreground">How it works</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>

          <div className="text-sm text-muted-foreground">© 2026 Clarity, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
