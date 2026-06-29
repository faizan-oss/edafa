type ResultBannerProps = {
  children: React.ReactNode;
};

export function ResultBanner({ children }: ResultBannerProps) {
  return (
    <div className="border-l-2 border-edaafa-orange bg-edaafa-lavender/80 px-6 py-5">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-edaafa-orange">
        The result
      </p>
      <p className="text-base leading-relaxed text-edaafa-text">{children}</p>
    </div>
  );
}
