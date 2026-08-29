import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ROOMS } from '../data/rooms'
import RoomCard from './RoomCard'

export default function RoomCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="flex items-start gap-5">
      <div className="relative min-w-0 flex-1 overflow-hidden rounded-[28px]" style={{ transform: 'translateZ(0)' }}>
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(s) => { swiperRef.current = s }}
          slidesPerView={3}
          spaceBetween={16}
          loop
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-[clamp(260px,32vw,380px)] w-full"
        >
          {ROOMS.map((room) => (
            <SwiperSlide key={room.id} className="!h-full">
              <RoomCard room={room} variant="carousel" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex shrink-0 flex-col gap-2.5 pt-1 max-md:hidden">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Anterior"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-300 transition hover:border-neutral-400"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Următor"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-neutral-900 bg-white text-neutral-900 transition hover:bg-neutral-50"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
