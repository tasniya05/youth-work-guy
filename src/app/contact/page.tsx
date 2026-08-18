"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsComplete(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="text-yellow">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question, want to collaborate, or ready to book Nahim for
              your next event? Drop a message below and we&apos;ll get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {isComplete ? (
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-yellow mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Thanks for reaching out. Nahim will get back to you as
                    soon as possible.
                  </p>
                  <button
                    onClick={() => setIsComplete(false)}
                    className="mt-8 text-yellow font-semibold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-gray-400 text-sm mb-2 block"
                      >
                        Name <span className="text-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-gray-400 text-sm mb-2 block"
                      >
                        Email <span className="text-yellow">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-gray-400 text-sm mb-2 block"
                    >
                      Subject <span className="text-yellow">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="keynote-booking">
                        Keynote Booking Enquiry
                      </option>
                      <option value="youth-development">
                        Youth Development Programme
                      </option>
                      <option value="consultation">
                        Consultation / Call Booking
                      </option>
                      <option value="media">Media / Interview</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-gray-400 text-sm mb-2 block"
                    >
                      Message <span className="text-yellow">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your enquiry..."
                      className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-yellow text-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-white font-semibold mb-4">Email</h3>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{siteContent.contact.email}</span>
                </a>
              </div>

              {/* Socials */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-white font-semibold mb-4">Follow Nahim</h3>
                <div className="space-y-4">
                  <a
                    href={siteContent.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors"
                  >
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteContent.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={siteContent.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-sm font-bold">
                      T
                    </span>
                    <span>TikTok</span>
                  </a>
                  <a
                    href={siteContent.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-xs font-bold">X</span>
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
