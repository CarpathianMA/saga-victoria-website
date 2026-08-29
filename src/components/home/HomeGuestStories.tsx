import { SAGA_PUB, SAGA_ROOMS, SAGA_EVENTS } from '../../data/sagaAssets'

const GRID = [
  SAGA_ROOMS.double(1),
  SAGA_PUB[0],
  SAGA_EVENTS[2],
  SAGA_PUB[4],
  SAGA_ROOMS.deluxe(1),
  SAGA_EVENTS[4],
  SAGA_PUB[8],
  SAGA_ROOMS.apartment(1),
]

export default function HomeGuestStories() {
  return (
    <section className="section-white">
      <div className="container-wide">
        <p className="eyebrow">Guest reviews</p>
        <h2 className="heading-section mb-8">Guest stories</h2>

        <div className="stars-gold mb-8 flex justify-center gap-1" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z" />
            </svg>
          ))}
        </div>

        <blockquote className="mx-auto max-w-[520px] text-center">
          <p className="font-serif text-[clamp(1.25rem,2.4vw,1.65rem)] font-normal italic leading-[1.5] text-[#3a4038]">
            „Perfect stop on our way to Transfăgărășan. Great pizza, cold beer, and the
            staff made us feel right at home."
          </p>
          <footer className="mt-6 text-[13px] font-light text-[#6d756a]">Andrei M. · Brașov</footer>
        </blockquote>

        <div className="mt-16 grid grid-cols-4 gap-1 md:gap-1.5">
          {GRID.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-[#f0efeb]">
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
