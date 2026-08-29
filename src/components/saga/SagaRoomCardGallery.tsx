import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './sagaUi'

interface SagaRoomCardGalleryProps {
  images: string[]
  alt: string
  onExpand?: () => void
}

export default function SagaRoomCardGallery({ images, alt, onExpand }: SagaRoomCardGalleryProps) {
  const [active, setActive] = useState(0)
  const hasMultiple = images.length > 1

  const goPrev = () => setActive((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setActive((i) => (i + 1) % images.length)

  return (
    <div className="room-gallery relative aspect-[4/3] overflow-hidden bg-surface">
      <img
        key={images[active]}
        src={images[active]}
        alt={hasMultiple ? `${alt}, imaginea ${active + 1}` : alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="room-gallery-nav room-gallery-nav-prev"
            aria-label="Imagine anterioară"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="room-gallery-nav room-gallery-nav-next"
            aria-label="Imagine următoare"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <span className="absolute bottom-4 right-4 z-10 rounded bg-black/40 px-2 py-0.5 text-[11px] text-white">
            {active + 1}/{images.length}
          </span>
        </>
      )}

      {onExpand && (
        <button
          type="button"
          onClick={onExpand}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition hover:bg-white"
          aria-label="Deschide galeria"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
