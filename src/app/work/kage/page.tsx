import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, SectionLabel, ImagePlaceholder, ProjectMeta, LargeText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kage — Metal Wall Shelf",
  description:
    "A wall shelf made from a single sheet of metal. Minimal, elegant, and manufacturing-focused.",
};

export default function KagePage() {
  return (
    <article className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">

        {/* Breadcrumb */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-16 text-xs text-secondary">
            <Link href="/work" className="hover:text-text transition-colors">Work</Link>
            <span>/</span>
            <span>Kage</span>
          </div>
        </FadeIn>

        {/* Hero */}
        <FadeIn>
          <SectionLabel className="mb-6">02 — 2023</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] mb-10">
            Can Sheet Metal
            <br />
            Be Beautiful?
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl font-light text-secondary leading-snug max-w-reading mb-16">
            Sheet metal is associated with utility. Industrial. Cold. We wanted to test whether manufacturing constraints could become a design vocabulary.
          </p>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={0.15}>
          <div className="mb-8">
            <ImagePlaceholder
              aspectRatio="aspect-[21/9]"
              label="Kage — Installed, natural light, white wall"
              className="rounded-xl"
            />
          </div>
          <p className="text-xs text-secondary">Kage wall shelf in situ.</p>
        </FadeIn>

        {/* Meta */}
        <FadeIn>
          <div className="mt-20 pt-12 border-t border-border mb-20">
            <ProjectMeta
              items={[
                { label: "Year", value: "2023" },
                { label: "Status", value: "Complete" },
                { label: "Material", value: "1.5mm Steel" },
                { label: "Process", value: "Laser + Bend" },
              ]}
            />
          </div>
        </FadeIn>

        {/* Section 1 — Designing Around Manufacturing */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Designing Around Manufacturing</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  The constraint was the brief.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  From the first conversation, we set a single rule: one sheet of metal. No welding. No joining. No fasteners between structural parts. Everything the shelf needed to be had to come from cuts and bends.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  This constraint sounds limiting. It turned out to be liberating. Instead of designing a shelf and then figuring out how to make it, we started from what the process allowed — and the design emerged from those possibilities.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Flat blank — pre-bend, laser cut geometry"
                dark
                className="rounded-xl"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 2 — One Sheet */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>One Sheet</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16">
              Everything comes from a single flat blank.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="DXF — production cut file"
                dark
                className="rounded-xl"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Blank — post laser cut, pre-bend"
                className="rounded-xl"
              />
            </div>
            <p className="text-xs text-secondary">
              From flat sheet to finished form — no additional material. The negative space left by the cuts becomes part of the visual language.
            </p>
          </FadeIn>
        </section>

        {/* Section 3 — Few Bends */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Few Bends</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  Four bends. Three planes. One object.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  The geometry is defined by four precision bends. Each one serves a structural purpose — the bracket arms, the back plate, the shelf surface, the wall mounting flange. Nothing is decorative.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  The tolerances on the bends are ±0.5mm. At this scale, that is the difference between a shelf that sits flush against a wall and one that rocks. We specified a CNC press brake and validated all four bends in our prototype stage before releasing the production file.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="Press brake — bend sequence, step 2 of 4"
                  dark
                  className="rounded-xl"
                />
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="Bend detail — radius close-up"
                  className="rounded-xl"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 4 — Prototype Validation */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Prototype Validation</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-3xl">
              Seven prototypes. Each one answered a specific question.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <p className="text-base text-secondary leading-relaxed">
                We do not prototype to see what something looks like. We prototype to answer specific structural, material, and manufacturing questions. Each of the seven Kage prototypes had a defined objective — material gauge, bend radius, surface finish, wall anchor design, load testing.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <ImagePlaceholder
                    key={n}
                    aspectRatio="aspect-square"
                    label={`P${n}`}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 5 — Outcome */}
        <section className="mb-20">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Outcome</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  A shelf that is exactly what it needs to be.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Kage is available in three powder-coat finishes: raw steel clear coat, matte black, and chalk white. The dimensions allow it to work in isolation or as a modular system — three units can be mounted at staggered heights.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  It holds 8kg. It ships flat. It installs in six minutes with two anchors. There is nothing else to say about it.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[4/5]"
                label="Kage — final finish, matte black"
                dark
                className="rounded-xl"
              />
            </div>
          </FadeIn>
        </section>

        {/* Next Project */}
        <div className="border-t border-border pt-12 pb-8 mt-20">
          <FadeIn>
            <div className="flex justify-between items-center">
              <Link href="/work/thotha" className="text-xs text-secondary hover:text-text transition-colors uppercase tracking-widest flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M5 3l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Prev: Thotha
              </Link>
              <Link href="/work/noty" className="text-sm text-secondary hover:text-text transition-colors flex items-center gap-2">
                Next: NOTY
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </article>
  );
}
