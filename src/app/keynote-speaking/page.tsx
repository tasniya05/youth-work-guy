"use client";

import { siteContent } from "@/data/content";
import TopicCard from "@/components/TopicCard";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export default function KeynoteSpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-yellow text-sm font-semibold tracking-widest uppercase mb-4">
              Keynote Speaking
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Keynote <span className="text-yellow">Speaking</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Nahim&apos;s keynotes are built on lived experience, academic insight,
              and over 15 years of frontline youth work. Every talk is designed
              to challenge thinking, spark action, and leave a lasting impact on
              your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <Mic className="w-6 h-6 text-yellow shrink-0 mt-1" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you&apos;re hosting a national conference, a leadership
              retreat, or a staff development day — Nahim tailors every keynote
              to your audience, objectives, and context. His talks combine
              storytelling, research, and practical frameworks that people can
              take away and use immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.topics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                description={topic.description}
                audience={topic.audience}
                duration={topic.duration}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
