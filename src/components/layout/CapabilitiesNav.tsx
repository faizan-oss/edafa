"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { capabilitySections } from "@/data/content";

export function CapabilitiesNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Capabilities sections"
      className="border-b border-black/5 bg-white/60 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {capabilitySections.map((section) => {
          const isActive = pathname === section.href;

          return (
            <Link
              key={section.href}
              href={section.href}
              className={`shrink-0 border-b-2 px-2.5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.12em] transition sm:px-4 sm:py-4 sm:text-xs sm:tracking-[0.18em] ${
                isActive
                  ? "border-edaafa-orange text-edaafa-text"
                  : "border-transparent text-edaafa-muted hover:border-edaafa-orange/40 hover:text-edaafa-text"
              }`}
            >
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{section.shortLabel}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
