import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-container mx-auto px-8 md:px-12 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="text-sm font-medium mb-2">Streamline Studios</p>
            <p className="text-sm text-secondary max-w-xs">
              Products that make complex systems feel natural.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <p className="text-xs text-secondary uppercase tracking-widest mb-4">Work</p>
              <div className="flex flex-col gap-2">
                <Link href="/work/thotha" className="text-sm text-secondary hover:text-text transition-colors">Thotha</Link>
                <Link href="/work/kage" className="text-sm text-secondary hover:text-text transition-colors">Kage</Link>
                <Link href="/work/noty" className="text-sm text-secondary hover:text-text transition-colors">NOTY</Link>
              </div>
            </div>
            <div>
              <p className="text-xs text-secondary uppercase tracking-widest mb-4">Studio</p>
              <div className="flex flex-col gap-2">
                <Link href="/process" className="text-sm text-secondary hover:text-text transition-colors">Process</Link>
                <Link href="/studio" className="text-sm text-secondary hover:text-text transition-colors">About</Link>
                <Link href="/contact" className="text-sm text-secondary hover:text-text transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-xs text-secondary">© {year} Streamline Studios. All rights reserved.</p>
          <p className="text-xs text-secondary">Designing from concept to production.</p>
        </div>
      </div>
    </footer>
  );
}
