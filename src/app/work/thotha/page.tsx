import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, SectionLabel, ImagePlaceholder, ProjectMeta, LargeText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thotha — Air Quality Monitor",
  description:
    "A car air purifier with AQI monitoring. A physical bird communicates air quality through behavior and visual feedback.",
};

export default function ThothaPage() {
  return (
    <article className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">

        {/* Breadcrumb */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-16 text-xs text-secondary">
            <Link href="/work" className="hover:text-text transition-colors">Work</Link>
            <span>/</span>
            <span>Thotha</span>
          </div>
        </FadeIn>

        {/* Hero */}
        <FadeIn>
          <SectionLabel className="mb-6">01 — 2024</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-display leading-[0.92] mb-10">
            Air Quality
            <br />
            Is Invisible.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl font-light text-secondary leading-snug max-w-reading mb-16">
            The air inside your car can be two to five times more polluted than the air outside it. Most people have no idea.
          </p>
        </FadeIn>

        {/* Hero Image — full width editorial crop */}
        {/* Hero Image — full width editorial crop */}
        <FadeIn delay={0.15}>
          <div className="mb-8">
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
              <Image
                src="/images/Inside_Vehicle.png"
                alt="Thotha — In-car environment, dashboard context shot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-xs text-secondary">
            Thotha mounted in natural driving environment.
          </p>
        </FadeIn>

        {/* Meta */}
        <FadeIn delay={0.05}>
          <div className="mt-20 pt-12 border-t border-border mb-20">
            <ProjectMeta
              items={[
                { label: "Year", value: "2024" },
                { label: "Status", value: "Beta Testing" },
                { label: "Disciplines", value: "6 Areas" },
                { label: "Timeline", value: "14 Months" },
              ]}
            />
          </div>
        </FadeIn>

        {/* Section 1 — The Problem */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              <div>
                <SectionLabel className="mb-8">The Problem</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  Data you cannot interpret is not information. It is noise.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  AQI monitors exist. They produce numbers. But numbers require context — and context requires expertise most people do not have. What does an AQI of 87 mean? Should you be concerned? Should you close the vents?
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  The question we kept asking was simple: what if air quality could be communicated without any numbers at all?
                </p>
              </div>
              <div>
                <ImagePlaceholder
                  aspectRatio="aspect-[4/3]"
                  label="AQI data — incomprehensible in current form"
                  className="rounded-xl"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 2 — The Insight */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>The Insight</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-4xl">
              Animals have always told us about the environment. The canary in a coal mine was not a metaphor — it was a measurement system.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <p className="text-base text-secondary leading-relaxed max-w-reading">
                We did not want to create another screen. We wanted to create a behavior — something that could be understood peripherally, without attention or interpretation. A physical object that communicates air quality through how it moves and how it looks.
              </p>
              <p className="text-base text-secondary leading-relaxed">
                The bird form emerged from this constraint. Birds are inherently expressive creatures. Their posture, their stillness, their agitation — these are things humans instinctively read. A bird that sits low and still means something different than a bird that moves freely.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label="Thotha — Clean air state"
                className="rounded-xl"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label="Thotha — Moderate air quality"
                className="rounded-xl"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label="Thotha — Poor air quality"
                className="rounded-xl"
                dark
              />
            </div>
            <p className="mt-4 text-xs text-secondary">
              Three behavioral states — clean, moderate, poor. No numbers required.
            </p>
          </FadeIn>
        </section>

        {/* Section 3 — Designing the Product */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Designing the Product</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  The form had to earn its place on the dashboard.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Dashboards are contested territory. Every object placed there is competing for the driver's attention. Thotha had to be calming — something that belongs in a car rather than something installed in one.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  We went through over sixty form iterations before settling on the silhouette. The proportions reference songbirds — small, contained, familiar. The material language is matte and quiet. Nothing that catches light aggressively.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="CAD — Form development, iteration 34"
                dark
                className="rounded-xl"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Physical prototype — SLA resin"
                className="rounded-xl"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Material study — matte vs satin"
                className="rounded-xl"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 4 — Engineering the System */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Engineering the System</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  Six sensors. One behavior. No perceptible delay.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  The electronics package includes PM2.5, CO₂, VOC, temperature, humidity, and light sensors. The firmware aggregates this into a single quality score — updated every two seconds.
                </p>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  The mechanical assembly uses a miniature servo to control the bird's posture. The LED system is hidden behind translucent polycarbonate — visible only when illuminated, invisible otherwise.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  Everything communicates to a companion app over BLE, giving users access to historical data, trends, and alerts — for those who want the numbers.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <ImagePlaceholder
                  aspectRatio="aspect-[16/9]"
                  label="PCB — Custom sensor board, Rev 4"
                  dark
                  className="rounded-xl"
                />
                <div className="grid grid-cols-2 gap-4">
                  <ImagePlaceholder
                    aspectRatio="aspect-square"
                    label="Sensor cluster"
                    dark
                    className="rounded-xl"
                  />
                  <ImagePlaceholder
                    aspectRatio="aspect-square"
                    label="Servo assembly"
                    dark
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Section 5 — Validation */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Validation</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <LargeText className="mb-16 max-w-3xl">
              Twenty users. Thirty days. Zero instructions given.
            </LargeText>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Our validation protocol was intentional. We placed Thotha units in twenty vehicles without explaining how the bird communicated. We wanted to know if the behavior was legible on its own.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  After thirty days, eighteen of twenty participants correctly identified all three behavioral states without having been told what they meant. The two who did not cited the same issue — the transition speed between states was too slow to notice. We fixed it in firmware.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Beta unit — user environment, week 3"
                className="rounded-xl"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 6 — Connected Experience */}
        <section className="mb-32 md:mb-44">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Connected Experience</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  The app is for the curious, not the required.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Thotha works without the app. The physical bird communicates everything you need to know without touching your phone. But for users who want more — historical air quality, commute reports, filter life tracking — the app is there.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  The app design follows the same principle as the hardware: no interpretation required. Air quality trends are shown as simple curves. Alerts are written in plain language. Nothing requires a glossary.
                </p>
              </div>
              <ImagePlaceholder
                aspectRatio="aspect-[9/16]"
                label="Companion app — main dashboard"
                className="rounded-xl max-w-xs mx-auto"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 7 — Current Status */}
        <section className="mb-20">
          <FadeIn>
            <div className="border-t border-border pt-12 mb-16">
              <SectionLabel>Current Status</SectionLabel>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-snug mb-8">
                  Beta testing. Preparing for limited production.
                </h2>
                <p className="text-base text-secondary leading-relaxed mb-6">
                  Twenty beta units are in active use. We are collecting long-term reliability data, finalizing the injection-molded housing, and validating the sensor calibration over time.
                </p>
                <p className="text-base text-secondary leading-relaxed">
                  We are targeting a limited production run of two hundred units in the second half of 2025 — followed by a broader launch pending manufacturing partner finalization.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="border border-border rounded-xl p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Beta</p>
                  <p className="text-2xl font-light">20 units active</p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Production</p>
                  <p className="text-2xl font-light">200 unit run planned</p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Target</p>
                  <p className="text-2xl font-light">H2 2025</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Next Project */}
        <div className="border-t border-border pt-12 pb-8 mt-20">
          <FadeIn>
            <div className="flex justify-between items-center">
              <Link href="/work" className="text-xs text-secondary hover:text-text transition-colors uppercase tracking-widest">
                ← All Work
              </Link>
              <Link href="/work/kage" className="text-sm text-secondary hover:text-text transition-colors flex items-center gap-2">
                Next: Kage
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
