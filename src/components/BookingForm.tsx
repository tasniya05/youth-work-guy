"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { Calendar, MapPin } from "lucide-react";

export interface BookingFormData {
  name: string;
  email: string;
  organisation: string;
  eventDate: string;
  location: string;
  topic: string;
  message: string;
}

interface BookingFormProps {
  selectedDate?: string;
  selectedTime?: string;
  onSubmit: (data: BookingFormData) => void;
  isSubmitting?: boolean;
}

const topicOptions = [
  ...siteContent.topics.map((t) => t.title),
  "Other (Bespoke)",
];

export default function BookingForm({
  selectedDate,
  selectedTime,
  onSubmit,
  isSubmitting = false,
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    organisation: "",
    eventDate: selectedDate ?? "",
    location: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      {(selectedDate || selectedTime) && (
        <div className="mb-8 flex flex-wrap gap-4 text-sm text-gray-300">
          {selectedDate && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow" />
              <span>{selectedDate}</span>
            </div>
          )}
          {selectedTime && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow" />
              <span>{selectedTime}</span>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="text-gray-400 text-sm mb-2 block">
              Full Name <span className="text-yellow">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
            />
          </div>

          {/* Email */}
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
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
            />
          </div>

          {/* Organisation */}
          <div>
            <label
              htmlFor="organisation"
              className="text-gray-400 text-sm mb-2 block"
            >
              Organisation / Company
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Your organisation or company"
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
            />
          </div>

          {/* Event Date */}
          <div>
            <label
              htmlFor="eventDate"
              className="text-gray-400 text-sm mb-2 block"
            >
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="text-gray-400 text-sm mb-2 block"
            >
              Location (City / Venue)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City or venue"
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
            />
          </div>

          {/* Topic */}
          <div>
            <label
              htmlFor="topic"
              className="text-gray-400 text-sm mb-2 block"
            >
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors"
            >
              <option value="">Select a topic</option>
              {topicOptions.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-gray-400 text-sm mb-2 block"
            >
              Message / Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your event, audience size, or any specific requirements..."
              className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 w-full focus:border-yellow focus:ring-1 focus:ring-yellow outline-none transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
