import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-8">
        <p className="text-xs text-secondary uppercase tracking-widest mb-8">404</p>
        <h1 className="text-4xl md:text-6xl font-light tracking-display mb-6">
          Page not found.
        </h1>
        <p className="text-base text-secondary mb-10">
          This page does not exist, or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-text transition-colors"
        >
          ← Return home
        </Link>
      </div>
    </div>
  );
}
