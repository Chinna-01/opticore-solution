"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { portfolioProjects } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Automation", "SaaS", "Commerce"] as const;

export function PortfolioFilterGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const projects = useMemo(
    () =>
      active === "All"
        ? portfolioProjects
        : portfolioProjects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            className={cn(
              "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
              active === category &&
                "border-cyan-400 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200",
            )}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              initial={{ opacity: 0, scale: 0.96 }}
              key={project.title}
              layout
            >
              <PortfolioCard index={index} project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
