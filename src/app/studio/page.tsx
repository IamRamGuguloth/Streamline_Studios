import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, SectionLabel, ImagePlaceholder, LargeText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Streamline Studios — a product innovation studio working across industrial design, engineering, electronics and manufacturing.",
};

const whatWeBuild = [
  {
    title: "Consumer Products",
    description: "Physical products designed for daily use — requiring the highest standards of ergonomics, material quality, and manufacturing precision.",
  },
  {
    title: "Connected Devices",
    description: "Hardware with embedded intelligence — sensors, firmware, connectivity, and companion software designed as a unified system.",
  },
  {
    title: "Furniture",
    description: "Functional objects for living and working environments — where structure, material honesty, and manufacturing process are the design.",
  },
  {
    title: "Custom Hardware",
    description: "Purpose-built physical systems for specific applications — where off-the-shelf products do not exist or are not sufficient.",
  },
];

const howWeWork = [
  {
    phase: "Research",
    description: "We observe actual behavior in real environments before forming any opinions about what a product should do.",
  },
  {
    phase: "Prototype",
    description: "We build physical and functional prototypes to answer specific questions — not to generate renders.",
  },
  {
    phase: "Validate",
    description: "We test with real users in real conditions. We document what we learn and feed it back into the design.",
  },
  {
    phase: "Manufacture",
    description: "We stay involved through production. Design decisions and manufacturing decisions are not separate conversations.",
  },
];

const whatWeValue = [
  {
    value: "Clarity",
    description: "If a decision cannot be explained in plain terms, it has not been made clearly enough.",
  },
  {
    value: "Evidence",
    description: "Opinions that cannot be tested are not useful. We build the tests.",
  },
  {
    value: "Function",
    description: "A product that does not work as intended is not a designed product. It is an artifact.",
  },
  {
    value: "Longevity",
    description: "Products designed to last reduce waste, build trust, and justify the investment that making them requires.",
  },
];

export default function StudioPage() {
  return (
    <div className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">

        {/* Header */}
        <FadeIn>
          <SectionLabel className="mb-6">Studio</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] mb-10 max-w-4xl">
            We build products, not presentations.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl font-light text-secondary leading-snug max-w-reading mb-20">
            Streamline Studios is a product innovation studio. We work with founders, brands and hardware teams to design and build physical products — from the first concept to the manufacturing floor.
          </p>
        </FadeIn>

        {/* Studio Image */}
        <FadeIn delay={0.15}>
          <div className="mb-4">
            <ImagePlaceholder
              aspectRatio="aspect-[21/9]"
              label="Studio — Workshop, prototyping environment"
              className="rounded-xl"
            />
          </div>
          <p className="text-xs text-secondary mb-20">Our studio in Bangalore.</p>
        </FadeIn>

        {/* What We Build */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>What We Build</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {whatWeBuild.map((item) => (
                <div key={item.title} className="bg-background p-8 md:p-10">
                  <h3 className="text-xl font-light tracking-tight mb-4">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* How We Work */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>How We Work</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-3xl">
              We are not a handoff studio. We stay with the project until it is in production.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((item, i) => (
                <div key={item.phase} className="flex flex-col">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-xs text-secondary tabular-nums">0{i + 1}</span>
                    <h3 className="text-lg font-light">{item.phase}</h3>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImagePlaceholder
                aspectRatio="aspect-[16/9]"
                label="Studio — PCB testing session"
                dark
                className="rounded-xl"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[16/9]"
                label="Studio — Prototype review"
                className="rounded-xl"
              />
            </div>
          </FadeIn>
        </section>

        {/* Capabilities */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Capabilities</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
                  Everything a physical product requires.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  We work across the full product development stack — from concept sketches to production-ready technical packages. This lets us make design decisions that account for engineering reality, and engineering decisions that serve design intent.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  We do not operate as separate design and engineering teams. These disciplines work together from day one.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Industrial Design",
                  "Mechanical Design",
                  "Electronics Design",
                  "Embedded Firmware",
                  "IoT Architecture",
                  "Product Strategy",
                  "Prototyping",
                  "Manufacturing Support",
                  "App Development",
                  "Supply Chain",
                ].map((cap) => (
                  <div key={cap} className="border border-border rounded-lg px-4 py-3">
                    <p className="text-sm text-text">{cap}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* What We Value */}
        <section className="mb-20">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>What We Value</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {whatWeValue.map((item) => (
                <div key={item.value}>
                  <h3 className="text-2xl font-light tracking-tight mb-4">{item.value}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <FadeIn>
          <div className="border-t border-border pt-16 mt-8 pb-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-xl font-light max-w-sm">
              Building something that needs to exist in the physical world?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-text text-background text-sm font-medium px-7 py-3.5 rounded-full hover:bg-text/80 transition-colors duration-200 flex-shrink-0"
            >
              Get in touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
