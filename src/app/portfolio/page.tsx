import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioFilterGrid } from "@/components/sections/PortfolioFilterGrid";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Opticore Solutions portfolio concepts for web, SaaS, automation, CRM, billing, and inventory software projects.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Software concepts with business substance"
            description="Explore sample projects across automation, SaaS dashboards, web experiences, and commerce workflows."
          />
          <div className="mt-12">
            <PortfolioFilterGrid />
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
