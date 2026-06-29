import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-edaafa-text";

  return (
    <Link href="/" className={`inline-flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-edaafa-orange/60 bg-edaafa-orange/10 sm:h-7 sm:w-7">
        <span className="text-xs font-medium text-edaafa-orange sm:text-sm">+</span>
      </span>
      <span
        className={`hidden truncate font-display text-base font-bold tracking-tight sm:inline sm:text-lg ${textColor}`}
      >
        Edaafa
      </span>
    </Link>
  );
}
