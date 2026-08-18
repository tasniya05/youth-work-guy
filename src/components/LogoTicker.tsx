"use client";

import { siteContent } from "@/data/content";
import { motion } from "framer-motion";

export default function LogoTicker() {
  const orgs = siteContent.organisations;

  return (
    <section className="py-16 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10">
          Trusted By Leading Organisations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {orgs.map((org, i) => (
            <motion.div
              key={org}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 w-full text-center">
                <span className="text-gray-400 text-sm font-medium">
                  {org}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
