type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-edaafa-orange" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-edaafa-muted">
        {children}
      </span>
    </div>
  );
}
