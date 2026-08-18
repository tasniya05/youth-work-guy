"use client";

import Link from "next/link";
import { siteContent } from "@/data/content";
import { ChevronRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow/0 via-yellow to-yellow/0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow text-sm font-semibold tracking-widest uppercase mb-6">
              {siteContent.brand}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {siteContent.hero.headline.split("'").map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="text-yellow">
                    &apos;{part}&apos;
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 font-light mb-4">
              {siteContent.hero.subheadline}
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              {siteContent.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-yellow text-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200"
              >
                {siteContent.hero.cta}
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 text-base font-semibold rounded-lg hover:border-yellow hover:text-yellow transition-colors duration-200"
              >
                {siteContent.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow text-4xl font-bold">NA</span>
                  </div>
                  <p className="text-gray-500 text-sm">Photo placeholder</p>
                  <p className="text-gray-600 text-xs mt-1">Add Nahim&apos;s photo</p>
                </div>
              </div>
              {/* Yellow accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
