"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function ShopPage() {
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
              Resources & Calls
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Resources <span className="text-yellow">&</span> Calls
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Book a focused consultation call with Nahim, or enquire about
              having him speak at your next event. Every product is designed to
              give you practical value and real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-yellow/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">
                    {product.name}
                  </h3>
                  <span className="text-yellow font-mono text-sm bg-yellow/10 px-3 py-1 rounded-full">
                    {product.duration}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-yellow shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800">
                  <span className="text-2xl font-bold text-white">
                    {product.priceLabel}
                  </span>

                  {product.id === "keynote-booking" ? (
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-2 bg-yellow text-black px-6 py-3 text-sm font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200"
                    >
                      Enquire
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      onClick={async () => {
                        try {
                          const res = await fetch("/api/checkout", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              productId: product.id,
                              productName: product.name,
                              price: product.price,
                            }),
                          });
                          const data = await res.json();
                          if (data.url) {
                            window.location.href = data.url;
                          }
                        } catch (err) {
                          console.error("Checkout error:", err);
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-yellow text-black px-6 py-3 text-sm font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200 cursor-pointer"
                    >
                      Buy Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
