import Link from "next/link";
import { siteContent } from "@/data/content";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import TopicCard from "@/components/TopicCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  const featuredTopics = siteContent.topics.slice(0, 3);

  return (
    <>
      <Hero />
      <LogoTicker />

      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow text-sm font-semibold tracking-widest uppercase mb-4">
                About Nahim
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Turning Lived Experience Into{" "}
                <span className="text-yellow">Leadership</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {siteContent.about.short}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-yellow font-semibold hover:gap-3 transition-all duration-200"
              >
                Read the full story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow text-3xl font-bold">NA</span>
                  </div>
                  <p className="text-gray-500 text-sm">Photo placeholder</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow text-black px-6 py-3 rounded-lg font-bold text-sm">
                {siteContent.credentials}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speaking Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-yellow text-sm font-semibold tracking-widest uppercase mb-4">
              Keynote Speaking
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Talks That{" "}
              <span className="text-yellow">Move People</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From conference keynotes to staff development days, Nahim brings
              energy, authenticity, and powerful storytelling to every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTopics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                description={topic.description}
                audience={topic.audience}
                duration={topic.duration}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/keynote-speaking"
              className="inline-flex items-center gap-2 border border-yellow text-yellow px-8 py-3 text-sm font-semibold rounded-lg hover:bg-yellow hover:text-black transition-all duration-200"
            >
              View All Topics
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
