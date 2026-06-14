import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, SectionLabel, ImagePlaceholder, ProjectMeta, LargeText } from "@/components/ui";

export const metadata: Metadata = {
  title: "NOTY — Reusable Notes",
  description:
    "A reusable note-taking system designed to reduce paper waste. What if everyday notes did not require paper?",
};

export default function NotyPage() {
  return (
    <article className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">

        {/* Breadcrumb */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-16 text-xs text-secondary">
            <Link href="/work" className="hover:text-text transition-colors">Work</Link>
            <span>/</span>
            <span>NOTY</span>
          </div>
        </FadeIn>

        {/* Hero */}
        <FadeIn>
          <SectionLabel className="mb-6">03 — 2023</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] mb-10">
            What If Notes
            <br />
            Didn&apos;t Need Paper?
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl font-light text-secondary leading-snug max-w-reading mb-16">
            50 billion adhesive notes are produced every year. Nearly all of them are used once and thrown away. We asked whether the entire format needed to be reconsidered.
          </p>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={0.15}>
          <div className="mb-8">
            <ImagePlaceholder
              aspectRatio="aspect-[21/9]"
              label="NOTY — desk environment, editorial crop"
              className="rounded-xl"
            />
          </div>
          <p className="text-xs text-secondary">NOTY in a working environment. No paper required.</p>
        </FadeIn>

        {/* Meta */}
        <FadeIn>
          <div className="mt-20 pt-12 border-t border-border mb-20">
            <ProjectMeta
              items={[
                { label: "Year", value: "2023" },
                { label: "Status", value: "Ready for Sale" },
                { label: "Material", value: "Stone Paper" },
                { label: "Surface", value: "Write & Erase" },
              ]}
            />
          </div>
        </FadeIn>

        {/* Section 1 — The Problem With Disposable Notes */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>The Problem with Disposable Notes</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  The format has not changed since 1980. The consequences have.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  The adhesive note is a genuinely clever invention. The problem is not the concept — it is the material. Wood-pulp paper coated in acrylic adhesive is not recyclable in most municipalities. It goes to landfill.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  Our starting point was not to create a sustainable version of an adhesive note. It was to ask whether a note needs to be adhesive, or paper, or disposable at all.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="border border-border rounded-xl p-8">
                  <p className="text-5xl font-light tracking-tight mb-2">50B</p>
                  <p className="text-sm text-secondary">adhesive notes produced annually worldwide</p>
                </div>
                <div className="border border-border rounded-xl p-8">
                  <p className="text-5xl font-light tracking-tight mb-2">~0%</p>
                  <p className="text-sm text-secondary">recycling rate for adhesive-backed paper</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 2 — Designing For Reuse */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Designing for Reuse</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-3xl">
              If a note can be erased, it never needs to be thrown away.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  NOTY uses a write-and-erase surface that accepts dry-erase markers, erasable ink, and standard pencil. The notes clean fully with a damp cloth. They have no adhesive — they use a static cling mechanism that works on smooth surfaces without leaving residue.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  The ergonomics were important. A note that feels worse to write on than paper will not be used. We tested twelve surface materials before settling on the final formulation — a stone paper composite with a micro-textured top layer that accepts ink with enough friction to feel intentional.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder
                  aspectRatio="aspect-[3/4]"
                  label="NOTY — write state"
                  className="rounded-xl"
                />
                <ImagePlaceholder
                  aspectRatio="aspect-[3/4]"
                  label="NOTY — erase state"
                  className="rounded-xl"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 3 — Material Decisions */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Material Decisions</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  Stone paper. Not a compromise.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Stone paper is made from calcium carbonate — essentially fine limestone — bound with a small quantity of resin. It requires no trees, no water in the manufacturing process, and no bleach. It is also more durable than wood-pulp paper and waterproof.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  We chose stone paper not because it is sustainable, but because it is better for this application. The sustainability is a consequence of the material being correct, not a compromise made in its name.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="Material study — stone paper vs. alternatives"
                  className="rounded-xl"
                />
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="Surface texture — 40x magnification"
                  dark
                  className="rounded-xl"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 4 — Packaging */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Packaging</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  The packaging should not outlast the product problem.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  NOTY ships in a sleeve of recycled card. No plastic. No laminate. No heat-sealed blister. The sleeve can be composted.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  Packaging design for a reusable product carries a specific responsibility. If the packaging is wasteful, the product's case is undermined before it has been opened.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="NOTY packaging — retail sleeve, unboxing sequence"
                className="rounded-xl"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 5 — Ready For Sale */}
        <section className="mb-20">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Ready for Sale</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-3xl">
              Available in three sizes. Ready to ship.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {["Small — 75×75mm", "Standard — 100×100mm", "Large — 150×100mm"].map((size) => (
                <div key={size} className="border border-border rounded-xl p-8">
                  <ImagePlaceholder
                    aspectRatio="aspect-square"
                    label={size}
                    className="rounded-lg mb-4"
                  />
                  <p className="text-sm">{size}</p>
                  <p className="text-xs text-secondary mt-1">Pack of 30</p>
                </div>
              ))}
            </div>
            <p className="text-base text-secondary leading-relaxed max-w-reading">
              NOTY is fully designed, tested, and ready for retail distribution. We are seeking distribution partners and direct retail opportunities. Each pack contains 30 notes of the same size, with a fabric eraser included.
            </p>
          </FadeIn>
        </section>

        {/* Next Project */}
        <div className="border-t border-border pt-12 pb-8 mt-20">
          <FadeIn>
            <div className="flex justify-between items-center">
              <Link href="/work/kage" className="text-xs text-secondary hover:text-text transition-colors uppercase tracking-widest flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M5 3l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Prev: Kage
              </Link>
              <Link href="/work" className="text-xs text-secondary hover:text-text transition-colors uppercase tracking-widest">
                All Work →
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </article>
  );
}
