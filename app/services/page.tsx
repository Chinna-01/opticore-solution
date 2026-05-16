import type { Metadata } from "next";
import Image from "next/image";

import { ServiceCard } from "@/components/cards/ServiceCard";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Opticore Solutions services including web development, inventory management, CRM/SFA, billing software, business automation, hosting, and API integration.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Startup-ready software services for modern business operations"
            description="Choose a focused solution or combine services into a complete digital operating system for your startup, manufacturing, trading, or growing service company."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.04]">
            <Image
              alt="Opticore Solutions services for manufacturing and trading businesses"
              className="h-auto w-full rounded-2xl object-cover"
              height={950}
              priority
              sizes="100vw"
              src="/brand/opticore-cover.png"
              width={1900}
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard index={index} key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
