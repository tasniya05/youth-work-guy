"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Calendar from "@/components/Calendar";
import BookingForm from "@/components/BookingForm";
import type { BookingFormData } from "@/components/BookingForm";

function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  const h = parseInt(hours);
  const ampm = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingFormData | null>(
    null
  );

  const handleSlotSelect = (date: string, time: string) => {
    setSelectedDate(date);
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleProceed = () => {
    if (selectedDate && selectedTime) {
      setShowForm(true);
    }
  };

  const handleBack = () => {
    setShowForm(false);
  };

  const handleSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: "keynote-booking",
          productName: "Keynote Booking",
          price: 0,
          date: selectedDate,
          time: selectedTime,
          ...data,
        }),
      });
      if (res.ok) {
        setBookingDetails({
          ...data,
          eventDate: selectedDate,
        });
        setIsComplete(true);
      }
    } catch (err) {
      console.error("Booking submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formattedDate = selectedDate
    ? new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

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
              Booking
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Book Nahim <span className="text-yellow">to Speak</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choose a date and time that works for you, then fill in your
              details. Nahim will get back to you to confirm your booking and
              discuss your event requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-yellow mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Booking Request Received
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Thanks, {bookingDetails?.name}. Nahim will review your request
                and get back to you at <span className="text-yellow">{bookingDetails?.email}</span> to
                confirm the details.
              </p>

              <div className="bg-black border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-left mb-8">
                <h3 className="text-white font-semibold mb-4">
                  Booking Summary
                </h3>
                <div className="space-y-3 text-sm">
                  {bookingDetails?.eventDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date</span>
                      <span className="text-gray-300">
                        {bookingDetails.eventDate}
                      </span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time</span>
                      <span className="text-gray-300">
                        {formatTime(selectedTime)}
                      </span>
                    </div>
                  )}
                  {bookingDetails?.organisation && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Organisation</span>
                      <span className="text-gray-300">
                        {bookingDetails.organisation}
                      </span>
                    </div>
                  )}
                  {bookingDetails?.topic && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Topic</span>
                      <span className="text-gray-300">
                        {bookingDetails.topic}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setIsComplete(false);
                  setSelectedDate("");
                  setSelectedTime("");
                  setShowForm(false);
                  setBookingDetails(null);
                }}
                className="text-yellow font-semibold hover:underline cursor-pointer"
              >
                Make another booking
              </button>
            </motion.div>
          ) : showForm ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow transition-colors mb-8 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to calendar
              </button>

              <div className="mb-8 flex flex-wrap gap-4 text-sm">
                {selectedDate && (
                  <span className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-gray-300">
                    {formattedDate}
                  </span>
                )}
                {selectedTime && (
                  <span className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-gray-300">
                    {formatTime(selectedTime)}
                  </span>
                )}
              </div>

              <BookingForm
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key="calendar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Calendar
                  onSlotSelect={handleSlotSelect}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />

                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 flex justify-end"
                  >
                    <button
                      onClick={handleProceed}
                      className="inline-flex items-center gap-2 bg-yellow text-black px-8 py-4 text-base font-semibold rounded-lg hover:bg-yellow-dark transition-colors duration-200 cursor-pointer"
                    >
                      Continue to Details
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </>
  );
}
