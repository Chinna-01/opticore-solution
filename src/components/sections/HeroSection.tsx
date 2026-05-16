"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { stats } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
        className="absolute left-1/2 top-10 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28),rgba(139,92,246,0.18),transparent_68%)] blur-2xl"
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 backdrop-blur dark:text-cyan-200"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Software, automation, and digital growth systems
          </motion.p>
          <motion.h1
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Building Smart Digital Solutions
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Opticore Solutions designs business automation, inventory systems, CRM/SFA tools,
            billing software, websites, hosting, and API integrations that help teams work smarter.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <MessageCircle />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-3 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl dark:bg-white/[0.06] dark:shadow-cyan-500/10">
            <Image
              alt="Opticore Solutions custom software solutions cover"
              className="h-auto w-full rounded-2xl object-cover"
              height={950}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/brand/opticore-cover.png"
              width={1900}
            />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + index * 0.07 }}
            key={stat.label}
          >
            <p className="text-3xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
