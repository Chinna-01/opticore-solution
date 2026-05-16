import type { Metadata } from "next";
import { Crown, Goal, Lightbulb, Target } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutTimeline, technologies, trustSignals } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Opticore Solutions' mission, vision, founder mindset, technology stack, business goals, and delivery principles.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About"
            title="A software company built around useful digital transformation"
            description="Opticore Solutions partners with growing businesses to turn scattered workflows into clean, connected, and scalable software."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Mission",
                icon: Target,
                text: "Build smart digital solutions that simplify operations and give business owners better control.",
              },
              {
                title: "Vision",
                icon: Lightbulb,
                text: "Become a trusted software partner for companies that want premium systems without enterprise complexity.",
              },
              {
                title: "Business Goals",
                icon: Goal,
                text: "Deliver reliable websites, SaaS platforms, automation tools, and integrations that create measurable value.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                  key={item.title}
                >
                  <Icon className="size-7 text-cyan-500" />
                  <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div className="grid size-40 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-2xl shadow-cyan-500/20">
            <Crown className="size-16" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-500">
              Founder section
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Built with product taste and engineering discipline</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Opticore Solutions is shaped by a founder-led mindset: understand the business first,
              design the workflow clearly, then build software that feels fast, polished, and maintainable.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Technology" title="Tools we use to ship dependable products" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Timeline" title="The journey toward a stronger software studio" />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {aboutTimeline.map((item) => (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]" key={item.year}>
                <p className="text-2xl font-semibold text-cyan-500">{item.year}</p>
                <p className="mt-3 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Trust" title="Why clients trust us" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]" key={signal.title}>
                  <Icon className="size-6 text-violet-500" />
                  <p className="mt-4 font-semibold">{signal.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
