"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <motion.form
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20"
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input className="form-field" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input className="form-field" name="email" placeholder="you@company.com" type="email" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium">
        Company
        <input className="form-field" name="company" placeholder="Company name" />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-medium">
        Project Type
        <select className="form-field" defaultValue="Business Automation" name="service">
          <option>Business Automation</option>
          <option>Web Development</option>
          <option>Inventory Software</option>
          <option>CRM/SFA Solution</option>
          <option>Billing Software</option>
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-medium">
        Message
        <textarea
          className="form-field min-h-32 resize-none"
          name="message"
          placeholder="Tell us what you want to build."
        />
      </label>
      <Button className="mt-6 w-full sm:w-auto" size="lg" type="submit">
        <Send />
        Send message
      </Button>
    </motion.form>
  );
}
