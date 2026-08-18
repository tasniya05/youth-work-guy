"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  audience: string;
  duration: string;
  index: number;
}

export default function TopicCard({
  title,
  description,
  audience,
  duration,
  index,
}: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-yellow/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-yellow text-sm font-mono">
          0{index + 1}
        </span>
        <span className="text-gray-500 text-xs bg-gray-800 px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>

      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-yellow transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span className="font-medium text-gray-400">Ideal for:</span>
        {audience}
      </div>

      <Link
        href="/book"
        className="inline-flex items-center gap-2 text-yellow text-sm font-semibold hover:gap-3 transition-all duration-200"
      >
        Book This Talk
        <ChevronRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
