"use client";

import Link from "next/link";
import { FadeIn, SectionLabel } from "@/components/ui";

const principles = [
  {
    title: "Observe\nReality",
    description:
      "We start with the environment, not the brief. What does the problem look like in actual use? Where does the current solution fail? Evidence begins with observation.",
  },
  {
    title: "Define What\nMatters",
    description:
      "Not everything can be solved. We identify the one thing that, if changed, changes everything else. Good design decisions are made once and felt everywhere.",
  },
  {
    title: "Build\nEvidence",
    description:
      "Opinions are cheap. We prototype, test, and document what we learn. Every decision we make comes with a reason. Every reason comes with evidence.",
  },
  {
    title: "Refine\nRelentlessly",
    description:
      "The first solution is never the final one. We iterate until the product feels inevitable — until there is no obvious way to make it simpler, or better, or more precise.",
  },
];

export function ProcessPrinciples() {
  return (
    <section className="mt-40 md:mt-56 border-t border-border pt-20 md:pt-28">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
            <div>
              <SectionLabel className="mb-4">How We Work</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-light tracking-display leading-[0.95]">
                Process is not a
                <br />
                methodology.
                <br />
                It is a habit.
              </h2>
            </div>
            <Link
              href="/process"
              className="text-xs text-secondary hover:text-text transition-colors uppercase tracking-widest flex-shrink-0"
            >
              Read more →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {principles.map((principle, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-background p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
                <p className="text-[2rem] md:text-[2.25rem] font-light tracking-tight leading-[1.1] whitespace-pre-line text-text">
                  {principle.title}
                </p>
                <p className="text-sm text-secondary leading-relaxed mt-8">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
