type FeaturePillProps = {
  children: React.ReactNode;
};

export function FeaturePill({ children }: FeaturePillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm text-edaafa-text shadow-sm">
      <span className="text-edaafa-orange">+</span>
      {children}
    </span>
  );
}
