"use client";

import { useState, useEffect } from "react";
import { siteContent } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const testimonials = siteContent.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-yellow text-sm font-semibold tracking-widest uppercase mb-4">
          What People Are Saying
        </p>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <Quote className="absolute top-0 left-0 w-12 h-12 text-yellow/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-8"
            >
              <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-yellow font-semibold">
                  {testimonials[current].author}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 border border-gray-700 rounded-full text-gray-400 hover:border-yellow hover:text-yellow transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-yellow" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 border border-gray-700 rounded-full text-gray-400 hover:border-yellow hover:text-yellow transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
