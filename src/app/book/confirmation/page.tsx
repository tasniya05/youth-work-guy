"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <section className="pt-24 lg:pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center"
        >
          <CheckCircle className="w-16 h-16 text-yellow mx-auto mb-6" />

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Payment Confirmed
          </h1>

          <p className="text-gray-400 text-lg mb-4">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>

          {sessionId && (
            <p className="text-gray-600 text-sm mb-8">
              Session reference: {sessionId.slice(0, 20)}...
            </p>
          )}

          <p className="text-gray-400 mb-8">
            Nahim will be in touch shortly to confirm your session details and
            scheduling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-yellow text-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 text-base font-semibold rounded-lg hover:border-yellow hover:text-yellow transition-colors duration-200"
            >
              Browse More Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <section className="pt-24 lg:pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </section>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
