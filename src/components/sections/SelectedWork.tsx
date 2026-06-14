"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, SectionLabel, ImagePlaceholder } from "@/components/ui";

const projects = [
  {
    id: "thotha",
    href: "/work/thotha",
    index: "01",
    title: "Thotha",
    discipline: "Industrial Design · Electronics · Firmware · IoT",
    year: "2024",
    status: "Beta Testing",
    description:
      "Air quality is invisible. Most people cannot interpret AQI data in any meaningful way. Thotha translates atmospheric complexity into something instinctively readable — a small bird whose behavior reflects the air around it.",
    imageAspect: "aspect-[16/10]",
    image: "", // e.g. "/images/thotha-selected.jpg"
    dark: false,
  },
  {
    id: "kage",
    href: "/work/kage",
    index: "02",
    title: "Kage",
    discipline: "Industrial Design · Manufacturing",
    year: "2023",
    status: "Complete",
    description:
      "A wall shelf cut and folded from a single sheet of metal. No joints. No fasteners. The geometry is the structure — a study in what sheet metal can be when manufacturing constraints become design decisions.",
    imageAspect: "aspect-[16/9]",
    image: "", // e.g. "/images/kage-selected.jpg"
    dark: false,
  },
  {
    id: "noty",
    href: "/work/noty",
    index: "03",
    title: "NOTY",
    discipline: "Industrial Design · Packaging · Sustainability",
    year: "2023",
    status: "Ready for Sale",
    description:
      "Every year, billions of adhesive notes are used once and thrown away. NOTY is a reusable note-taking system that challenges the assumption that temporary notes must be disposable.",
    imageAspect: "aspect-[4/3]",
    image: "", // e.g. "/images/noty-selected.jpg"
    dark: false,
  },
];

export function SelectedWork() {
  return (
    <section className="mt-32 md:mt-40">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16">
        <FadeIn>
          <div className="flex items-center justify-between mb-20 md:mb-28">
            <SectionLabel>Selected Work</SectionLabel>
            <Link
              href="/work"
              className="text-xs text-secondary hover:text-text transition-colors uppercase tracking-widest"
            >
              All projects →
            </Link>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-40 md:gap-52">
          {projects.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <article>
      <FadeIn>
        <Link href={project.href} className="group block">
          {/* Image — offset for editorial feel */}
          <div
            className={`mb-8 md:mb-10 ${isEven ? "md:ml-0 md:mr-24" : "md:ml-24 md:mr-0"}`}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <ImagePlaceholder
                aspectRatio={project.imageAspect}
                label={`${project.title} — ${project.discipline.split(" · ")[0]}`}
                src={project.image || undefined}
                alt={`${project.title} — ${project.discipline}`}
                dark={project.dark}
                className="rounded-xl"
              />
            </motion.div>
          </div>

          {/* Text */}
          <div
            className={`flex flex-col md:flex-row gap-6 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
          >
            <div className="flex-shrink-0 flex items-start gap-6">
              <span className="text-xs text-secondary mt-1 tabular-nums">
                {project.index}
              </span>
              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                  {project.year} · {project.status}
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-1 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-xs text-secondary">{project.discipline}</p>
              </div>
            </div>

            <p className="text-base text-secondary leading-relaxed max-w-sm md:max-w-md md:pt-8">
              {project.description}
            </p>
          </div>
        </Link>
      </FadeIn>
    </article>
  );
}
