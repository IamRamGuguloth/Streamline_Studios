"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui";

export function ContactCTA() {
  return (
    <section className="mt-40 md:mt-56 border-t border-border pt-20 md:pt-28 pb-0">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-display leading-[0.95] mb-6">
                Have a product
                <br />
                to build?
              </h2>
              <p className="text-base text-secondary max-w-sm leading-relaxed">
                We work with founders, brands and hardware teams to take physical products from idea to production.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-start md:items-end flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-text text-background text-sm font-medium px-7 py-3.5 rounded-full hover:bg-text/80 transition-colors duration-200"
              >
                Start a conversation
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
              <a
                href="mailto:hello@streamlinestudios.co"
                className="text-xs text-secondary hover:text-text transition-colors"
              >
                hello@streamlinestudios.co
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
