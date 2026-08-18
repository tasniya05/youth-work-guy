export interface TimeSlot {
  time: string;
  duration: number; // minutes
  available: boolean;
}

export interface DayAvailability {
  date: string; // YYYY-MM-DD
  slots: TimeSlot[];
}

export const defaultSlots: TimeSlot[] = [
  { time: "09:00", duration: 60, available: true },
  { time: "10:00", duration: 60, available: true },
  { time: "11:00", duration: 60, available: true },
  { time: "13:00", duration: 60, available: true },
  { time: "14:00", duration: 60, available: true },
  { time: "15:00", duration: 60, available: true },
  { time: "16:00", duration: 60, available: true },
];

// Generate availability for the next 60 days (excluding weekends)
export function generateAvailability(): DayAvailability[] {
  const availability: DayAvailability[] = [];
  const today = new Date();

  for (let i = 1; i <= 60; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    const dateString = date.toISOString().split("T")[0];

    // Make some random slots unavailable to simulate real bookings
    const slots = defaultSlots.map((slot) => ({
      ...slot,
      available: Math.random() > 0.3,
    }));

    availability.push({ date: dateString, slots });
  }

  return availability;
}

export const availability = generateAvailability();
