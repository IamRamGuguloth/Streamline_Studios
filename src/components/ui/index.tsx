"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import React from "react";

// ——— Fade In ———
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const yInitial = direction === "up" ? 20 : direction === "down" ? -20 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yInitial }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ——— Section Label ———
interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={clsx(
        "text-xs text-secondary uppercase tracking-widest font-medium",
        className
      )}
    >
      {children}
    </p>
  );
}

// ——— Divider ———
export function Divider({ className }: { className?: string }) {
  return <hr className={clsx("border-t border-border", className)} />;
}

// ——— Image Placeholder ———
interface ImagePlaceholderProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
  dark?: boolean;
  /**
   * Path to a real image (e.g. "/images/thotha-hero.jpg").
   * Once provided, this renders the actual image instead of the
   * placeholder block — same size, aspect ratio, and rounded corners.
   */
  src?: string;
  /** Required once `src` is set — describe what the image shows. */
  alt?: string;
  /** Image priority loading (use sparingly — typically only the hero). */
  priority?: boolean;
}

export function ImagePlaceholder({
  aspectRatio = "aspect-[4/3]",
  label,
  className,
  dark = false,
  src,
  alt,
  priority = false,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={clsx(
          "w-full rounded-xl overflow-hidden relative",
          aspectRatio,
          className
        )}
      >
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1440px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "w-full rounded-xl overflow-hidden relative",
        aspectRatio,
        dark ? "bg-[#1A1A1A]" : "bg-[#E8E7E4]",
        className
      )}
    >
      {label && (
        <div className="absolute inset-0 flex items-end p-6">
          <p className={clsx("text-xs uppercase tracking-widest", dark ? "text-[#555]" : "text-[#AAA8A0]")}>
            {label}
          </p>
        </div>
      )}
    </div>
  );
}

// ——— Button ———
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 rounded-full px-6 py-3";

  const variants = {
    primary: "bg-text text-background hover:bg-text/80",
    secondary: "bg-transparent border border-border text-text hover:border-text",
    ghost: "text-secondary hover:text-text",
  };

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

// ——— Project Meta ———
interface ProjectMetaProps {
  items: { label: string; value: string }[];
  className?: string;
}

export function ProjectMeta({ items, className }: ProjectMetaProps) {
  return (
    <div className={clsx("grid grid-cols-2 md:grid-cols-4 gap-8", className)}>
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs text-secondary uppercase tracking-widest mb-2">
            {item.label}
          </p>
          <p className="text-sm text-text">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

// ——— Large Text ———
interface LargeTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}

export function LargeText({
  children,
  className,
  as: Tag = "h2",
}: LargeTextProps) {
  return (
    <Tag
      className={clsx(
        "text-4xl md:text-6xl lg:text-7xl font-light tracking-display leading-[0.95]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
