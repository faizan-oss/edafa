type CapabilityCardProps = {
  num: string;
  label: string;
  title: string;
  items: readonly string[];
};

export function CapabilityCard({ num, label, title, items }: CapabilityCardProps) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-edaafa-orange">
        {num} {label}
      </p>
      <h3 className="mb-5 text-xl font-semibold text-edaafa-text">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-edaafa-text/80">
            <span className="mt-0.5 shrink-0 text-edaafa-orange">+</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
