export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in pence
  priceLabel: string;
  duration: string;
  features: string[];
  stripePriceId?: string; // Set in Stripe Dashboard
}

export const products: Product[] = [
  {
    id: "clarity-call",
    name: "Clarity Call",
    description: "A focused 30-minute session for quick clarity on a specific challenge in youth work, leadership, or community engagement.",
    longDescription:
      "A focused 30-minute session for youth professionals and leaders who want quick clarity on a specific issue. Whether you're navigating a difficult conversation, facing a leadership challenge, or need a fresh perspective on youth engagement — this is a practical consultation to get you unstuck.",
    price: 12500,
    priceLabel: "£125",
    duration: "30 Minutes",
    features: [
      "30-minute focused session",
      "Video or phone call",
      "Practical, actionable advice",
      "Follow-up summary email",
    ],
  },
  {
    id: "strategy-session",
    name: "Strategy Session",
    description: "A one-hour session for leaders who want space to explore a complex challenge, test ideas, or get strategic guidance.",
    longDescription:
      "A one-hour session for leaders who want space to explore a complex challenge, test ideas, or get strategic guidance on youth work, leadership, or community change. This is deeper work — ideal for organisations looking to strengthen their approach or leaders navigating transition.",
    price: 25000,
    priceLabel: "£250",
    duration: "60 Minutes",
    features: [
      "60-minute deep-dive session",
      "Video or phone call",
      "Strategic guidance & frameworks",
      "Follow-up summary email",
      "Email support for 7 days after",
    ],
  },
  {
    id: "keynote-booking",
    name: "Keynote Booking",
    description: "Book Nahim as a keynote speaker for your conference, event, or organisation. Bespoke pricing based on your needs.",
    longDescription:
      "Bring Nahim's energy, storytelling, and powerful message to your next event. Whether it's a conference keynote, staff development day, or leadership retreat — Nahim tailors every talk to your audience and objectives. Get in touch to discuss your event and receive a custom quote.",
    price: 0,
    priceLabel: "Enquire",
    duration: "45-60 Minutes",
    features: [
      "Bespoke keynote tailored to your audience",
      "Pre-event consultation",
      "Engaging, research-backed content",
      "Post-event follow-up available",
      "Virtual or in-person delivery",
    ],
  },
];
