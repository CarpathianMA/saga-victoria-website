import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { RATES_NOTE, RESERVATION_PHONE, formatPrice, type Room } from '../data/rooms'
import { CloseIcon } from './saga/sagaUi'

interface RoomModalProps {
  room: Room
  onClose: () => void
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const images = room.images

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 max-md:items-end max-md:p-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-[3px]"
        aria-label="Închide"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[min(92vh,880px)] w-full max-w-[980px] flex-col overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] max-md:max-h-[94vh] max-md:rounded-b-none max-md:rounded-t-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Închide detalii cameră"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-muted transition hover:border-ink hover:text-ink"
        >
          <CloseIcon />
        </button>

        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto md:grid-cols-[1.15fr_1fr]">
          <div className="border-b border-black/5 p-5 md:border-b-0 md:border-r md:p-6">
            <Swiper
              onSwiper={(s) => { swiperRef.current = s }}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              loop={images.length > 1}
              className="aspect-[4/3] overflow-hidden bg-surface"
            >
              {images.map((src, i) => (
                <SwiperSlide key={src}>
                  <img src={src} alt={`${room.name}, foto ${i + 1}`} className="h-full w-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>

            {images.length > 1 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => {
                      setActiveIndex(i)
                      swiperRef.current?.slideToLoop(i)
                    }}
                    className={`h-14 w-[calc(25%-6px)] min-w-[56px] flex-1 overflow-hidden border-2 transition sm:w-auto ${
                      i === activeIndex
                        ? 'border-brand'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col p-6 pt-8 md:p-8 md:pt-10">
            <span className="label-hotel">{room.categoryLabel}</span>

            <h2 id="room-modal-title" className="mt-2 pr-10 font-serif text-[clamp(1.5rem,3vw,1.75rem)] font-normal text-ink">
              {room.name}
            </h2>

            <p className="mt-4 font-serif text-[1.75rem] leading-none text-brand">
              {formatPrice(room.pricePerNight)}
              <span className="ml-2 font-sans text-[14px] text-muted">/ noapte</span>
            </p>
            <p className="mt-2 text-[14px] text-ink">{room.beds}</p>
            {room.sqm && <p className="text-[13px] text-muted">{room.sqm} m²</p>}
            <p className="mt-2 text-[12px] text-muted">{RATES_NOTE}</p>

            <p className="mt-5 text-[15px] leading-[1.7] text-muted">{room.description}</p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {room.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[14px] text-ink">
                  <span className="text-brand" aria-hidden>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                href={`tel:+4${RESERVATION_PHONE}`}
                className="btn-book"
                onClick={onClose}
              >
                Rezervă acum
              </a>
              <button type="button" onClick={onClose} className="btn-outline-hotel">
                Închide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
