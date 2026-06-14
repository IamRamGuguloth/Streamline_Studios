"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// To use real images here, drop files into /public/images/ and set
// these two paths. Leave as `null` to keep the placeholder color blocks.
const HERO_BACKGROUND_SRC: string | null = null; // e.g. "/images/hero-background.jpg"
const HERO_CORNER_SRC: string | null = null; // e.g. "/images/thotha-context.jpg"

export function HomepageHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32 pt-32 overflow-hidden">
      {/* Background Hero Image — editorial crop */}
      <div className="absolute inset-0 z-0">
        {HERO_BACKGROUND_SRC ? (
          <Image
            src={HERO_BACKGROUND_SRC}
            alt="Streamline Studios — hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#E2E0DC]" />
        )}
        {/* Overlay for text legibility at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Top-right editorial image element */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute top-0 right-0 w-[55%] md:w-[48%] h-[75%] z-0"
      >
        {HERO_CORNER_SRC ? (
          <Image
            src={HERO_CORNER_SRC}
            alt="Thotha — Air Quality Monitor"
            fill
            priority
            sizes="(max-width: 768px) 55vw, 48vw"
            className="object-cover"
          />
        ) : (
          <>
            <div className="w-full h-full bg-[#CFCDC8]" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs text-[#AAA8A0] uppercase tracking-widest">
                Thotha — Air Quality Monitor
              </p>
            </div>
          </>
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-8 md:px-12 lg:px-16 w-full">
        <div className="max-w-reading">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs text-secondary uppercase tracking-widest mb-10">
              Product Innovation Studio
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] text-balance mb-8"
          >
            Products that make complex systems feel natural.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base md:text-lg text-secondary max-w-md mb-12 leading-relaxed"
          >
            We design physical products from concept to production — combining
            industrial design, engineering, electronics and manufacturing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center gap-6"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-text text-background text-sm font-medium px-7 py-3.5 rounded-full hover:bg-text/80 transition-colors duration-200"
            >
              View Work
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
            <Link
              href="/studio"
              className="text-sm text-secondary hover:text-text transition-colors duration-200"
            >
              About the studio
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-0 right-8 md:right-12 lg:right-16 flex items-center gap-3"
        >
          <div className="w-px h-12 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
