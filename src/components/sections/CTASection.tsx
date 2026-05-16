import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl shadow-cyan-500/10 dark:bg-white/[0.04] sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Ready to modernize
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Launch software that makes your operations faster, clearer, and easier to grow.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                <CalendarCheck />
                Book a call
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">
                Explore services
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
