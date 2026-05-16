"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, MessageSquareText } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PortfolioProject } from "@/types/site";

export function PortfolioCard({
  project,
  index = 0,
}: {
  project: PortfolioProject;
  index?: number;
}) {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
      initial={{ opacity: 0, y: 28 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={`relative h-56 bg-gradient-to-br ${project.image}`}>
        <div className="absolute inset-6 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md transition group-hover:scale-[1.03]">
          <div className="h-4 w-28 rounded-full bg-white/70" />
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="col-span-2 h-24 rounded-xl bg-white/25" />
            <div className="h-24 rounded-xl bg-white/15" />
          </div>
          <div className="mt-3 h-3 rounded-full bg-white/35" />
          <div className="mt-2 h-3 w-2/3 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-200"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href="/contact">
              <MessageSquareText />
              Request similar
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href={project.live}>
              <ExternalLink />
              Live demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
