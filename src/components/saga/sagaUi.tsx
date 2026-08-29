import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

export function ChevronLeftIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

interface SagaCarouselNavProps {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export function SagaCarouselNav({ onPrev, onNext, className = '' }: SagaCarouselNavProps) {
  return (
    <div className={`flex justify-end gap-2 ${className}`}>
      <button type="button" onClick={onPrev} className="carousel-nav-btn" aria-label="Anterior">
        <ChevronLeftIcon />
      </button>
      <button type="button" onClick={onNext} className="carousel-nav-btn" aria-label="Următor">
        <ChevronRightIcon />
      </button>
    </div>
  )
}

interface SagaImageSliderProps {
  images: string[]
  alt: string
  aspectClass?: string
  onImageClick?: () => void
}

export function SagaImageSlider({
  images,
  alt,
  aspectClass = 'aspect-[4/3]',
  onImageClick,
}: SagaImageSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div>
      <div
        className={`img-zoom relative overflow-hidden bg-surface ${aspectClass} ${onImageClick ? 'group cursor-pointer' : ''}`}
        onClick={onImageClick}
        onKeyDown={onImageClick ? (e) => { if (e.key === 'Enter') onImageClick() } : undefined}
        role={onImageClick ? 'button' : undefined}
        tabIndex={onImageClick ? 0 : undefined}
      >
        <Swiper
          onSwiper={(s) => { swiperRef.current = s }}
          loop={images.length > 1}
          className="h-full w-full"
          onTouchEnd={(_, e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <SwiperSlide key={src}>
              <img
                src={src}
                alt={`${alt}${images.length > 1 ? `, imaginea ${i + 1}` : ''}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {onImageClick && (
          <span className="pointer-events-none absolute bottom-4 right-4 bg-black/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] text-white opacity-0 transition group-hover:opacity-100">
            Galerie
          </span>
        )}
      </div>
      {images.length > 1 && (
        <SagaCarouselNav
          className="mt-3"
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
        />
      )}
    </div>
  )
}
