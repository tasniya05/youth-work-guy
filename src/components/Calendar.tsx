"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, CalendarDays } from "lucide-react";
import { availability } from "@/data/availability";

interface CalendarProps {
  onSlotSelect: (date: string, time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
}

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function isPastDate(year: number, month: number, day: number): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(year, month, day);
  return date < today;
}

function isWeekend(year: number, month: number, day: number): boolean {
  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  const h = parseInt(hours);
  const ampm = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export default function Calendar({
  onSlotSelect,
  selectedDate,
  selectedTime,
}: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [direction, setDirection] = useState(0);

  const availabilityMap = useMemo(() => {
    const map: Record<string, typeof availability[0]> = {};
    for (const entry of availability) {
      map[entry.date] = entry;
    }
    return map;
  }, []);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const calendarDays: (number | null)[] = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  }, [firstDay, daysInMonth]);

  const goToPreviousMonth = () => {
    setDirection(-1);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    setDirection(1);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    if (isPastDate(currentYear, currentMonth, day)) return;
    if (isWeekend(currentYear, currentMonth, day)) return;
    const dateStr = formatDate(currentYear, currentMonth, day);
    if (!availabilityMap[dateStr]) return;
    onSlotSelect(dateStr, selectedTime || "");
  };

  const handleSlotClick = (time: string) => {
    if (!selectedDate) return;
    onSlotSelect(selectedDate, time);
  };

  const selectedDayAvailability = selectedDate
    ? availabilityMap[selectedDate]
    : null;

  const availableSlotsForDate = selectedDayAvailability
    ? selectedDayAvailability.slots.filter((s) => s.available)
    : [];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-8">
        <CalendarDays className="w-6 h-6 text-yellow" />
        <h2 className="text-xl lg:text-2xl font-bold text-white">
          Pick a Date & Time
        </h2>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </button>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.h3
            key={`${currentYear}-${currentMonth}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.25 }}
            className="text-lg font-semibold text-white"
          >
            {MONTH_NAMES[currentMonth]} {currentYear}
          </motion.h3>
        </AnimatePresence>

        <button
          onClick={goToNextMonth}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES.map((name) => (
          <div
            key={name}
            className="text-center text-xs font-mono text-gray-500 py-2"
          >
            {name}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${currentYear}-${currentMonth}`}
          custom={direction}
          initial={{ opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -30 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-7 gap-1.5"
        >
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const dateStr = formatDate(currentYear, currentMonth, day);
            const past = isPastDate(currentYear, currentMonth, day);
            const weekend = isWeekend(currentYear, currentMonth, day);
            const hasAvailability = !!availabilityMap[dateStr];
            const isSelected = selectedDate === dateStr;
            const isDisabled = past || weekend || !hasAvailability;

            return (
              <button
                key={dateStr}
                onClick={() => handleDateClick(day)}
                disabled={isDisabled}
                className={`
                  aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                  transition-all duration-200 cursor-pointer
                  ${isSelected
                    ? "bg-yellow text-black font-semibold"
                    : past || weekend
                      ? "text-gray-600 cursor-not-allowed"
                      : hasAvailability
                        ? "text-white hover:border hover:border-yellow"
                        : "text-gray-600 cursor-not-allowed"
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-6 mt-6 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-yellow" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded border border-yellow" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-gray-600" />
          <span>Unavailable</span>
        </div>
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-yellow" />
            <h4 className="text-sm font-semibold text-white">
              Available times for{" "}
              <span className="text-yellow">
                {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </h4>
          </div>

          {availableSlotsForDate.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {availableSlotsForDate.map((slot) => {
                const slotSelected = selectedTime === slot.time;
                return (
                  <button
                    key={slot.time}
                    onClick={() => handleSlotClick(slot.time)}
                    className={`
                      px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                      ${slotSelected
                        ? "bg-yellow text-black font-semibold"
                        : "bg-gray-800 border border-gray-700 text-gray-400 hover:border-yellow hover:text-white"
                      }
                    `}
                  >
                    {formatTime(slot.time)}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No available time slots for this date.</p>
          )}
        </motion.div>
      )}
    </div>
  );
}
