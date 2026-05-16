import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { navItems, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-xl border border-blue-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#eff8ff_46%,#dbeeff_100%)] shadow-lg shadow-blue-300/30 ring-1 ring-white/80">
              <Image
                alt="Opticore Solutions logo"
                className="object-contain"
                fill
                sizes="48px"
                src="/brand/op-core-logo.png"
              />
            </span>
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">Opticore Solutions</h2>
          </div>
          <p className="mt-4 max-w-sm leading-7">
            Premium software, automation, CRM, inventory, billing, and web solutions for ambitious businesses.
          </p>
          <div className="mt-5 flex gap-3">
            {[BriefcaseBusiness, MessageCircle, Mail].map((Icon, index) => (
              <a
                aria-label="Social link"
                className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:-translate-y-0.5 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                href="#"
                key={index}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-950 dark:text-white">Company</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link className="hover:text-cyan-500" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-950 dark:text-white">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link className="hover:text-cyan-500" href="/services" key={service.title}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-950 dark:text-white">Contact</h3>
          <div className="mt-4 grid gap-4 text-sm">
            <span className="flex items-center gap-3">
              <Mail className="size-4 text-cyan-500" />
              chinna@opticoresolution.com
            </span>
            <span className="flex items-center gap-3">
              <Phone className="size-4 text-cyan-500" />
              +91 7337375742
            </span>
            <span className="flex items-center gap-3">
              <MapPin className="size-4 text-cyan-500" />
              India, serving global clients
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-5 text-center text-sm dark:border-white/10">
        Copyright 2026 Opticore Solutions. All rights reserved.
      </div>
    </footer>
  );
}
