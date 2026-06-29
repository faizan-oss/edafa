type PlusItemProps = {
  children: React.ReactNode;
};

export function PlusItem({ children }: PlusItemProps) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-edaafa-text/80">
      <span className="mt-0.5 shrink-0 text-edaafa-orange">+</span>
      <span>{children}</span>
    </li>
  );
}
