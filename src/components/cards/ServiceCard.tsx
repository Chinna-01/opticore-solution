"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CheckCircle2,
  Cloud,
  Code2,
  PlugZap,
  ReceiptText,
  UsersRound,
  Workflow,
} from "lucide-react";

import type { Service } from "@/types/site";

const iconMap = {
  Boxes,
  Cloud,
  Code2,
  PlugZap,
  ReceiptText,
  UsersRound,
  Workflow,
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code2;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-white/10 dark:bg-white/[0.04]"
      initial={{ opacity: 0, y: 24 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-blue-500/0 to-violet-500/0 opacity-0 transition group-hover:from-cyan-400/10 group-hover:via-blue-500/10 group-hover:to-violet-500/10 group-hover:opacity-100" />
      <div className="relative">
        <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
          <Icon className="size-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">
          {service.description}
        </p>
        <div className="mt-5 grid gap-2">
          {service.features.map((feature) => (
            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300" key={feature}>
              <CheckCircle2 className="size-4 text-cyan-500" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
