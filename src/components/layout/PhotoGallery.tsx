interface PhotoGalleryProps {
  images: string[]
  alt: string
}

/** 2-3 poze într-un rând aerisit */
export default function PhotoGallery({ images, alt }: PhotoGalleryProps) {
  const picks = images.slice(0, 3)
  if (!picks.length) return null

  return (
    <div
      className={`grid gap-4 md:gap-6 ${
        picks.length === 1
          ? 'grid-cols-1'
          : picks.length === 2
            ? 'grid-cols-1 sm:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-3'
      }`}
    >
      {picks.map((src, i) => (
        <figure key={src} className="overflow-hidden bg-[#ebe6de]">
          <img
            src={src}
            alt={`${alt}, ${i + 1}`}
            className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  )
}
