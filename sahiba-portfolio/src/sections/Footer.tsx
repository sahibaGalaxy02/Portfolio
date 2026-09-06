import { portfolio } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {portfolio.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with React, Tailwind CSS & React Bits.
        </p>
      </div>
    </footer>
  );
}
