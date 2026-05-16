import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  portfolioProjects,
  processSteps,
  services,
  technologies,
  testimonials,
  trustSignals,
} from "@/data/site";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Everything your business needs to run with digital clarity"
            description="From customer acquisition to stock, billing, and reporting, Opticore Solutions builds practical systems that fit how your business works."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard index={index} key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technologies"
            title="Modern stack for reliable, scalable delivery"
            description="We choose proven tools for fast interfaces, secure APIs, clear data models, and production-ready hosting."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Portfolio"
              title="Recent solution concepts"
              description="Sample builds showing the kind of business workflows and product experiences we create."
            />
            <Button asChild variant="outline">
              <Link href="/portfolio">
                View portfolio
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {portfolioProjects.slice(0, 2).map((project, index) => (
              <PortfolioCard index={index} key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why choose us"
            title="Premium design with practical engineering discipline"
            description="We build software around business outcomes, not just screens. Every workflow, report, and automation is designed to reduce friction."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.slice(0, 6).map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]"
                  key={signal.title}
                >
                  <Icon className="size-5 text-cyan-500" />
                  <span className="font-semibold">{signal.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="A clear path from idea to launch"
            description="A simple, accountable delivery model keeps momentum high and surprises low."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-950/60"
                key={step}
              >
                <span className="text-sm font-semibold text-cyan-500">0{index + 1}</span>
                <h3 className="mt-3 font-semibold">{step}</h3>
                <CheckCircle2 className="mt-6 size-5 text-violet-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Client voice" title="Trusted for clarity and execution" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]" key={item.author}>
                <blockquote className="leading-7 text-slate-600 dark:text-slate-300">
                  &quot;{item.quote}&quot;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
