import Image from "next/image";

type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <h1 className={`m-0 p-0 ${className}`} aria-label="Edaafa">
      <Image
        src="/edaafa-wordmark.svg"
        alt=""
        width={1680}
        height={250}
        priority
        unoptimized
        className="h-[2.85rem] w-auto max-w-[min(100%,18rem)] sm:h-[4.5rem] sm:max-w-none lg:h-[6rem]"
      />
    </h1>
  );
}
