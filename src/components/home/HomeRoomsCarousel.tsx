import { Link } from 'react-router-dom'
import { ROOM_CATEGORIES, getRoomsByCategory, formatPrice, type RoomCategory } from '../../data/rooms'

const CARDS: RoomCategory[] = ['apartment', 'deluxe', 'double', 'single']

export default function HomeRoomsCarousel() {
  return (
    <section className="section-white !pt-24 md:!pt-32">
      <div className="container-wide">
        <span className="eyebrow !text-left md:pl-1">Accommodation</span>
        <h2 className="heading-section !mb-16 !text-left md:pl-1 md:!text-[2.5rem]">
          Rooms &amp; Suites
        </h2>

        <div className="scrollbar-none -mx-6 flex snap-x-mandatory gap-7 overflow-x-auto px-6 pb-2 md:gap-8">
          {CARDS.map((cat) => {
            const rooms = getRoomsByCategory(cat)
            const room = rooms[0]
            const meta = ROOM_CATEGORIES[cat]
            const from = Math.min(...rooms.map((r) => r.pricePerNight))
            if (!room) return null
            return (
              <article key={cat} className="snap-start w-[240px] shrink-0 md:w-[255px]">
                <Link to="/camere" className="group block">
                  <div className="mb-6 aspect-square overflow-hidden bg-[#f0efeb]">
                    <img
                      src={room.images[0]}
                      alt={meta.label}
                      className="h-full w-full object-cover transition duration-[800ms] ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-[1.35rem] font-normal leading-snug text-[#3a4038]">
                    {meta.label.replace('Camere ', '').replace('Cameră ', '')}
                  </h3>
                  <p className="mt-2 text-[13px] font-light text-[#6d756a]">
                    From {formatPrice(from)} / night
                  </p>
                  <span className="link-fine">View details</span>
                </Link>
              </article>
            )
          })}
        </div>

        <div className="mx-auto mt-12 h-px w-full max-w-[280px] bg-[#e8e6e0]">
          <div className="h-px w-[28%] bg-[#3a4038]/70" />
        </div>
      </div>
    </section>
  )
}
