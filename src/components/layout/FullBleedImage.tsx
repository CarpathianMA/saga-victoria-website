interface FullBleedImageProps {
  src: string
  alt: string
  caption?: string
}

export default function FullBleedImage({ src, alt, caption }: FullBleedImageProps) {
  return (
    <figure className="my-16 md:my-24 lg:my-28">
      <img
        src={src}
        alt={alt}
        className="max-h-[75vh] w-full object-cover"
        loading="lazy"
      />
      {caption && (
        <figcaption className="mx-auto mt-5 max-w-[1120px] px-6 text-center text-[12px] uppercase tracking-[0.16em] text-[#9c968d] md:px-10 lg:px-12">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
