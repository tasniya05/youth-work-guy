"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Heart, Target, Lightbulb, ArrowRight } from "lucide-react";

const approaches = [
  {
    icon: Users,
    title: "Youth Professional Development",
    description:
      "Programmes designed to build the skills, confidence, and resilience of people working with young people — from frontline workers to senior leaders.",
  },
  {
    icon: Heart,
    title: "Wellness & Resilience Training",
    description:
      "Practical workshops that address the emotional reality of high-pressure youth work environments, equipping professionals with tools to sustain themselves and their practice.",
  },
  {
    icon: Target,
    title: "Leadership Pathways",
    description:
      "Structured development journeys for aspiring and emerging leaders in the youth and community sector, combining mentorship, reflection, and real-world application.",
  },
  {
    icon: Lightbulb,
    title: "Bespoke Organisational Support",
    description:
      "Tailored consultancy and training for organisations looking to strengthen their youth engagement, team culture, or strategic approach to community impact.",
  },
];

export default function YouthDevelopmentPage() {
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
              Youth Development
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Youth <span className="text-yellow">Development</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Nahim doesn&apos;t just talk about youth work — he develops the people
              who do it. Through training, mentorship, and bespoke programmes,
              he helps youth professionals become the best versions of themselves
              so they can do the same for the young people they serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Developing People Who{" "}
                <span className="text-yellow">Bring Others With Them</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Over 15 years of frontline youth work has taught Nahim that
                  the quality of youth provision is directly linked to the
                  quality of the people delivering it. When professionals are
                  supported, challenged, and believed in — they do extraordinary
                  things for young people.
                </p>
                <p>
                  Nahim&apos;s approach combines lived experience with academic
                  rigour, creating development experiences that are practical,
                  honest, and transformative. He works with organisations and
                  individuals to build capacity, shift culture, and create
                  environments where both staff and young people thrive.
                </p>
                <p>
                  From half-day workshops to long-term organisational
                  development, every programme is tailored to the specific
                  needs and context of the people and organisations he works
                  with.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow text-3xl font-bold">NA</span>
                  </div>
                  <p className="text-gray-500 text-sm">Photo placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes/Approaches */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How Nahim <span className="text-yellow">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every organisation is different. Nahim adapts his approach to
              meet you where you are and take you where you need to go.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, i) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-yellow/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {approach.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Interested in a <span className="text-yellow">Bespoke Programme</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you&apos;re looking for team training, staff development, or
              organisational consultancy — get in touch to discuss how Nahim
              can support your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-yellow text-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 text-base font-semibold rounded-lg hover:border-yellow hover:text-yellow transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
