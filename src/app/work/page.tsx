import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, SectionLabel, ImagePlaceholder } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Streamline Studios — physical products designed from concept to production.",
};

const projects = [
  {
    id: "thotha",
    href: "/work/thotha",
    index: "01",
    title: "Thotha",
    year: "2024",
    status: "Beta Testing",
    tagline: "Air quality made visible through behavior.",
    discipline: ["Industrial Design", "Electronics", "Firmware", "IoT"],
    description:
      "A car air purifier with AQI monitoring. A physical bird communicates air quality through movement and light — turning atmospheric data into something instinctively understood.",
    imageAspect: "aspect-[16/9]",
  },
  {
    id: "kage",
    href: "/work/kage",
    index: "02",
    title: "Kage",
    year: "2023",
    status: "Complete",
    tagline: "One sheet. Few bends. No apologies.",
    discipline: ["Industrial Design", "Manufacturing"],
    description:
      "A wall shelf cut and folded from a single sheet of metal. The manufacturing process is the design method — every decision traced back to the material and the machine.",
    imageAspect: "aspect-[4/3]",
  },
  {
    id: "noty",
    href: "/work/noty",
    index: "03",
    title: "NOTY",
    year: "2023",
    status: "Ready for Sale",
    tagline: "What if temporary notes didn't have to be disposable?",
    discipline: ["Industrial Design", "Packaging", "Sustainability"],
    description:
      "A reusable note-taking system designed to eliminate paper waste. NOTY questions the assumption that everyday notes are inherently disposable.",
    imageAspect: "aspect-[16/10]",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-40 md:pt-48">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <FadeIn>
          <div className="mb-20 md:mb-28">
            <SectionLabel className="mb-6">Work</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-light tracking-display leading-[0.95]">
              Selected Projects
            </h1>
          </div>
        </FadeIn>

        {/* Projects */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.06}>
              <Link
                href={project.href}
                className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16 border-t border-border first:border-t-0 hover:opacity-90 transition-opacity duration-300"
              >
                {/* Image */}
                <div className="w-full md:w-[42%] flex-shrink-0">
                  <div className="overflow-hidden rounded-xl">
                    <div className="group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                      <ImagePlaceholder
                        aspectRatio={project.imageAspect}
                        label={project.title}
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs text-secondary tabular-nums">
                        {project.index}
                      </span>
                      <span className="text-xs text-secondary">
                        {project.year}
                      </span>
                      <span className="text-xs text-secondary border border-border px-2 py-0.5 rounded-full">
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
                      {project.title}
                    </h2>
                    <p className="text-base text-secondary italic mb-6">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-secondary leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.discipline.map((d) => (
                      <span
                        key={d}
                        className="text-xs text-secondary border border-border px-3 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
