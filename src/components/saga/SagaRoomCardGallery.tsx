import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeftIcon, ChevronRightIcon } from './sagaUi'

interface SagaRoomCardGalleryProps {
  images: string[]
  alt: string
  onExpand?: () => void
}

export default function SagaRoomCardGallery({ images, alt, onExpand }: SagaRoomCardGalleryProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  return (
    <div className="room-gallery relative aspect-[4/3] overflow-hidden bg-surface">
      <Swiper
        modules={[Pagination]}
        onSwiper={(s) => { swiperRef.current = s }}
        onBeforeInit={(swiper) => {
          if (paginationRef.current) {
            const pagination = swiper.params.pagination
            if (pagination && typeof pagination !== 'boolean') {
              pagination.el = paginationRef.current
            }
          }
        }}
        onSlideChange={(s) => setActive(s.realIndex)}
        loop={images.length > 1}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={`${alt}${images.length > 1 ? `, imaginea ${i + 1}` : ''}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="room-gallery-nav room-gallery-nav-prev"
            aria-label="Imagine anterioară"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="room-gallery-nav room-gallery-nav-next"
            aria-label="Imagine următoare"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <div ref={paginationRef} className="room-gallery-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2" />
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

      {images.length > 1 && (
        <span className="absolute bottom-4 right-4 z-10 rounded bg-black/40 px-2 py-0.5 text-[11px] text-white md:hidden">
          {active + 1}/{images.length}
        </span>
      )}
    </div>
  )
}
