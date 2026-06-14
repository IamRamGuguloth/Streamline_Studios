import type { Metadata } from "next";
import { FadeIn, SectionLabel, ImagePlaceholder, LargeText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Streamline Studios approaches product design — from observing reality to refining relentlessly.",
};

export default function ProcessPage() {
  return (
    <div className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">

        {/* Header */}
        <FadeIn>
          <SectionLabel className="mb-6">Process</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] mb-10 max-w-4xl">
            Evidence over opinion. Always.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl font-light text-secondary leading-snug max-w-reading mb-20">
            Process is not something we follow. It is how we think. These are the four principles that shape every project we take on.
          </p>
        </FadeIn>

        {/* Principle 1 — Observe Reality */}
        <section className="mt-20 mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <div className="flex items-baseline gap-8">
                <span className="text-xs text-secondary tabular-nums">01</span>
                <SectionLabel>Observe Reality</SectionLabel>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-4xl">
              We start in the field, not the studio.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  The gap between how a product is intended to be used and how it is actually used is where most design failures live. We spend the first weeks of every project observing the environment the product will inhabit — not reading research reports about it.
                </p>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  For Thotha, this meant driving with air quality monitors mounted across three different vehicles for six weeks. We were not looking for data. We were looking for moments where the driver made a decision, or missed something, or noticed something unexpected.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  That observation led directly to the insight that people cannot interpret AQI numbers — and that insight drove everything that followed.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Field observation — Thotha project, week 2"
                className="rounded-xl"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-[#F0EFE9] rounded-xl p-8 md:p-10">
              <p className="text-xs text-secondary uppercase tracking-widest mb-4">From the field notes</p>
              <p className="text-xl md:text-2xl font-light italic leading-snug">
                &ldquo;No participant looked at the AQI reading more than once during a 40-minute commute. Two participants did not know the display existed.&rdquo;
              </p>
              <p className="text-xs text-secondary mt-4">Thotha — Observation Study, Day 12</p>
            </div>
          </FadeIn>
        </section>

        {/* Principle 2 — Define What Matters */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <div className="flex items-baseline gap-8">
                <span className="text-xs text-secondary tabular-nums">02</span>
                <SectionLabel>Define What Matters</SectionLabel>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-4xl">
              A clear problem statement is the hardest deliverable in any project.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Most project briefs describe symptoms, not problems. &ldquo;Users don&apos;t engage with the data&rdquo; is a symptom. The problem is that the data requires interpretation that most users cannot provide. Those are different problems requiring different solutions.
                </p>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  We invest time in defining the right problem before proposing any solution. This is where most of the real design work happens — not in the sketching phase.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  For Kage, the core problem was not &ldquo;people want a shelf.&rdquo; It was: can a manufacturing process be a design tool rather than a constraint? That reframe changed everything about how we approached the project.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border border-border rounded-xl p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-3">Symptom</p>
                  <p className="text-base line-through text-secondary">Users don&apos;t engage with air quality data.</p>
                </div>
                <div className="bg-text text-background rounded-xl p-6">
                  <p className="text-xs text-[#999] uppercase tracking-widest mb-3">Problem</p>
                  <p className="text-base">Air quality data requires interpretation that most people cannot provide in real time.</p>
                </div>
                <div className="border border-accent/20 bg-accent/5 rounded-xl p-6">
                  <p className="text-xs text-accent uppercase tracking-widest mb-3">Direction</p>
                  <p className="text-base">Can air quality communicate itself without any numbers?</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Principle 3 — Build Evidence */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <div className="flex items-baseline gap-8">
                <span className="text-xs text-secondary tabular-nums">03</span>
                <SectionLabel>Build Evidence</SectionLabel>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-4xl">
              Prototypes are questions in physical form.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  We prototype to answer questions — not to show what something might look like. Before we build any prototype, we write down what question it will answer. If we cannot write that question, we do not build the prototype.
                </p>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  For the Kage shelf, prototype one answered: does 1.5mm steel hold 8kg without deflection? Prototype three answered: what is the minimum bend radius that the material tolerates without cracking? Prototype six answered: does the static cling mechanism hold in a vertical orientation?
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  Each prototype made the next one more specific. This is how evidence accumulates into confidence.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="Prototype documentation — Kage, structural test"
                  className="rounded-xl"
                />
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="Load test — 8kg, 72-hour hold"
                  dark
                  className="rounded-xl"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { q: "Does the material hold the load?", p: "Prototype 1", a: "Yes. With 2.3mm deflection at 8kg." },
                { q: "What is the minimum viable bend radius?", p: "Prototype 3", a: "R1.5mm. Below R1.2mm, micro-cracking appears." },
                { q: "Does the wall anchor work on plasterboard?", p: "Prototype 5", a: "Yes. Two M6 anchors, 120mm apart." },
              ].map((item) => (
                <div key={item.p} className="border border-border rounded-xl p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-3">{item.p}</p>
                  <p className="text-sm font-medium mb-4 italic">&ldquo;{item.q}&rdquo;</p>
                  <p className="text-xs text-secondary">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Principle 4 — Refine Relentlessly */}
        <section className="mb-20">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <div className="flex items-baseline gap-8">
                <span className="text-xs text-secondary tabular-nums">04</span>
                <SectionLabel>Refine Relentlessly</SectionLabel>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-4xl">
              Done is when there is nothing left to remove.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  We iterate until the design feels inevitable. Not inevitable in the sense that it was the only possible solution — but in the sense that every decision has a clear reason, and every detail earns its presence.
                </p>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  For Thotha, the bird form went through sixty-three distinct iterations before we arrived at the final silhouette. Not because we were indecisive — because we were precise. Each iteration answered a specific question about proportion, material texture, or movement range.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  Refinement is not a phase. It is a permanent disposition toward the work.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ImagePlaceholder
                  aspectRatio="aspect-[4/3]"
                  label="Iteration wall — Thotha form development"
                  className="rounded-xl"
                />
              </div>
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
