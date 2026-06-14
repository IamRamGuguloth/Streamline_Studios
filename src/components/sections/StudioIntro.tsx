"use client";

import Link from "next/link";
import { FadeIn, SectionLabel, ImagePlaceholder } from "@/components/ui";

const capabilities = [
  "Industrial Design",
  "Mechanical Design",
  "Electronics",
  "Embedded Systems",
  "Firmware",
  "IoT",
  "Product Strategy",
  "Prototyping",
  "Manufacturing Support",
];

export function StudioIntro() {
  return (
    <section className="mt-40 md:mt-56">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left — Text */}
          <div>
            <FadeIn>
              <SectionLabel className="mb-8">The Studio</SectionLabel>
              <p className="text-2xl md:text-3xl font-light tracking-tight leading-snug mb-10 text-balance">
                We work at the intersection of industrial design and engineering — building products that are shaped by how they are made, and how they are used.
              </p>
              <p className="text-base text-secondary leading-relaxed mb-12 max-w-reading">
                Streamline Studios is not a consultancy that hands off work. We stay involved from the first sketch to the manufacturing floor. That means we are responsible for how a product performs, not just how it looks.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-12">
                <p className="text-xs text-secondary uppercase tracking-widest mb-6">
                  Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs border border-border px-3 py-1.5 rounded-full text-text"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-text transition-colors duration-200"
              >
                Learn about the studio
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Right — Image */}
          <FadeIn delay={0.1}>
            <div className="relative">
              <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label="Studio — Workshop"
                className="rounded-xl"
              />
              {/* Small offset image */}
              <div className="absolute -bottom-8 -left-8 w-2/5 hidden lg:block">
                <ImagePlaceholder
                  aspectRatio="aspect-square"
                  label="Detail"
                  dark
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
