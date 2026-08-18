"use client";

import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export default function AboutPage() {
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
              About
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow">Nahim</span>
            </h1>
            <p className="text-xl text-gray-300">
              {siteContent.credentials}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {siteContent.about.full.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-28"
            >
              <div className="aspect-[3/4] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow text-4xl font-bold">NA</span>
                  </div>
                  <p className="text-gray-500 text-sm">Photo placeholder</p>
                  <p className="text-gray-600 text-xs mt-1">
                    Add Nahim&apos;s photo
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-yellow" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Roles & Positions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteContent.about.roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-black border border-gray-800 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-yellow rounded-full mt-2 shrink-0" />
                  <p className="text-gray-300">{role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-6 h-6 text-yellow" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Awards & Recognition
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800" />

              <div className="space-y-12">
                {siteContent.awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start gap-6 ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full md:w-1/2 flex justify-end md:pr-12 pl-10 md:pl-0">
                      <div className="text-right">
                        <span className="text-yellow font-mono text-sm">
                          {award.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">
                          {award.title}
                        </h3>
                        <p className="text-gray-400 mt-2">
                          {award.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-yellow rounded-full border-4 border-black z-10" />

                    <div className="w-full md:w-1/2 md:pl-12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-yellow" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Education
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteContent.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-black border border-gray-800 rounded-xl p-6"
                >
                  <p className="text-gray-300">{edu}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
