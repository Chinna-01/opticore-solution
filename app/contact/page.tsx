import type { Metadata } from "next";
import { BriefcaseBusiness, Mail, MapPinned, MessageCircle, Phone, Share2 } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Opticore Solutions for web development, automation, inventory, CRM/SFA, billing software, hosting, and API integration projects.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1"
        href="https://wa.me/917337375742"
      >
        <MessageCircle className="size-6" />
      </a>

      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you want to build"
            description="Send a message, request a call, or start with a rough idea. We will help turn it into a clear software plan."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <div className="grid gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <Mail className="size-6 text-cyan-500" />
                <h2 className="mt-4 text-xl font-semibold">Business email</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">chinna@opticoresolution.com</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <Phone className="size-6 text-violet-500" />
                <h2 className="mt-4 text-xl font-semibold">Phone and WhatsApp</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">+91 7337375742</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <h2 className="text-xl font-semibold">Social media</h2>
                <div className="mt-4 flex gap-3">
                  {[BriefcaseBusiness, MessageCircle, Share2].map((Icon, index) => (
                    <a
                      aria-label="Social media"
                      className="grid size-11 place-items-center rounded-lg border border-slate-200 bg-slate-50 transition hover:text-cyan-500 dark:border-white/10 dark:bg-white/5"
                      href="#"
                      key={index}
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="min-h-64 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(139,92,246,0.18)),repeating-linear-gradient(0deg,transparent,transparent_29px,rgba(148,163,184,0.25)_30px),repeating-linear-gradient(90deg,transparent,transparent_29px,rgba(148,163,184,0.25)_30px)] p-6 dark:border-white/10">
                <MapPinned className="size-7 text-cyan-500" />
                <h2 className="mt-4 text-xl font-semibold">Map placeholder</h2>
                <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-300">
                  India-based software studio serving clients remotely and onsite by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
