"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionLabel } from "@/components/ui";

const engagementTypes = [
  "New Product Development",
  "Industrial Design",
  "Electronics & Firmware",
  "Manufacturing Support",
  "Product Strategy",
  "Other",
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const toggleType = (type: string) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">

        {/* Header */}
        <FadeIn>
          <SectionLabel className="mb-6">Contact</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] mb-10 max-w-3xl">
            Let&apos;s build something real.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl font-light text-secondary leading-snug max-w-reading mb-20">
            We take on a limited number of projects each year. If you have a product to build, we would like to hear about it.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 pb-20">
          {/* Form */}
          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8"
                >
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-secondary uppercase tracking-widest block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-border pb-3 text-sm text-text placeholder-[#BBB] focus:outline-none focus:border-text transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-secondary uppercase tracking-widest block mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-b border-border pb-3 text-sm text-text placeholder-[#BBB] focus:outline-none focus:border-text transition-colors duration-200"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs text-secondary uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border pb-3 text-sm text-text placeholder-[#BBB] focus:outline-none focus:border-text transition-colors duration-200"
                      placeholder="you@company.co"
                    />
                  </div>

                  {/* Engagement Type */}
                  <div>
                    <label className="text-xs text-secondary uppercase tracking-widest block mb-4">
                      What do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {engagementTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleType(type)}
                          className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                            selected.includes(type)
                              ? "bg-text text-background border-text"
                              : "border-border text-secondary hover:border-text hover:text-text"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-secondary uppercase tracking-widest block mb-2">
                      Tell us about the project
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border pb-3 text-sm text-text placeholder-[#BBB] focus:outline-none focus:border-text transition-colors duration-200 resize-none"
                      placeholder="What are you building? Where are you in the process? What do you need help with?"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-text text-background text-sm font-medium px-7 py-3.5 rounded-full hover:bg-text/80 transition-colors duration-200"
                    >
                      Send message
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6 py-12"
                >
                  <div className="w-10 h-10 rounded-full bg-text flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-light">Message received.</h2>
                  <p className="text-base text-secondary leading-relaxed max-w-sm">
                    We read every message personally. If your project is a good fit, we will be in touch within a few days.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>

          {/* Sidebar Info */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-4">Direct</p>
                <a
                  href="mailto:hello@streamlinestudios.co"
                  className="text-base text-text hover:text-secondary transition-colors"
                >
                  hello@streamlinestudios.co
                </a>
              </div>

              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-4">Based in</p>
                <p className="text-base text-text">Bangalore, India</p>
                <p className="text-sm text-secondary mt-1">Working with clients globally.</p>
              </div>

              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-4">Response time</p>
                <p className="text-base text-text">2 – 3 business days</p>
                <p className="text-sm text-secondary mt-1">We read every message personally.</p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-xs text-secondary uppercase tracking-widest mb-6">What to include</p>
                <div className="flex flex-col gap-4">
                  {[
                    "What you are building or trying to build",
                    "Where you are in the process — concept, development, or production",
                    "Your timeline and budget expectations",
                    "Whether you have existing work to share",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-sm text-secondary leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
