"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Mic } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-yellow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mic className="w-12 h-12 text-black mx-auto mb-6" />

          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Ready to Inspire Your Audience?
          </h2>

          <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
            Book Nahim as a keynote speaker for your next conference, event, or
            team development day. Bespoke talks tailored to your organisation&apos;s
            goals and challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-black text-yellow px-8 py-4 text-base font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Book Nahim to Speak
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-black/10 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
