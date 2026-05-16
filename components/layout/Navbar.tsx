"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-2xl dark:bg-slate-950/70"
      initial={{ y: -24, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2" href="/" onClick={() => setOpen(false)}>
          <span className="relative size-10 overflow-hidden rounded-xl border border-blue-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#eff8ff_46%,#dbeeff_100%)] shadow-lg shadow-blue-300/30 ring-1 ring-white/80">
            <Image
              alt="Opticore Solutions logo"
              className="object-contain"
              fill
              priority
              sizes="40px"
              src="/brand/op-core-logo.png"
            />
          </span>
          <span className="text-base font-bold tracking-tight text-slate-950 dark:text-white">
            Opticore Solutions
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white",
                pathname === item.href &&
                  "bg-slate-950 text-white dark:bg-white dark:text-slate-950",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
            size="icon"
            type="button"
            variant="ghost"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 px-4 pb-4 dark:border-white/10 dark:bg-slate-950/95 md:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
