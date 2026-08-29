import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import SagaCarouselCard, { type CarouselCardItem } from './SagaCarouselCard'
import { SagaCarouselNav } from './sagaUi'

interface SagaCarouselProps {
  items: CarouselCardItem[]
}

function gridClass(count: number) {
  if (count === 1) return 'mx-auto max-w-[360px] grid-cols-1'
  if (count === 2) return 'mx-auto max-w-[820px] grid-cols-1 sm:grid-cols-2'
  if (count === 3) return 'mx-auto max-w-[1100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  return 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'
}

export default function SagaCarousel({ items }: SagaCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const useGrid = items.length <= 4

  if (useGrid) {
    return (
      <div className={`grid justify-center gap-8 md:gap-x-8 md:gap-y-12 lg:gap-x-10 ${gridClass(items.length)}`}>
        {items.map((item) => (
          <SagaCarouselCard key={item.title} item={item} />
        ))}
      </div>
    )
  }

  return (
    <div className="relative mx-auto max-w-[1140px]">
      <Swiper
        onSwiper={(s) => { swiperRef.current = s }}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides
        centerInsufficientSlides
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 28, centeredSlides: false },
        }}
        className="!overflow-hidden"
      >
        {items.map((item) => (
          <SwiperSlide key={item.title} className="!h-auto">
            <SagaCarouselCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SagaCarouselNav
        className="mt-8 !justify-center"
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />
    </div>
  )
}
