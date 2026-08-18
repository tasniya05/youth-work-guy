"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-yellow font-bold text-xl lg:text-2xl tracking-tight">
              {siteContent.brand}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-yellow transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-2 bg-yellow text-black px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200"
            >
              Book Nahim
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-yellow transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="block bg-yellow text-black px-5 py-3 text-sm font-semibold rounded-lg text-center mt-4"
              >
                Book Nahim to Speak
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
