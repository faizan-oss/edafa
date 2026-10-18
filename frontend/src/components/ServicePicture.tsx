import type { ServiceImage } from "../content";

type ServicePictureProps = {
  image: ServiceImage;
  sizes: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
};

export function ServicePicture({
  image,
  sizes,
  className,
  loading = "lazy",
  fetchPriority,
}: ServicePictureProps) {
  return (
    <picture className={className}>
      <source
        type="image/avif"
        srcSet={`${image.avif} 1200w, ${image.avif2x} 2400w`}
        sizes={sizes}
      />
      <img
        src={image.webp}
        srcSet={`${image.webp} 1200w, ${image.webp2x} 2400w`}
        sizes={sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
