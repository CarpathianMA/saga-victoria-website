import { useMemo, useState } from 'react'
import SagaHeader from '../components/saga/SagaHeader'
import SagaFooter from '../components/saga/SagaFooter'
import SagaRoomsHero from '../components/saga/SagaRoomsHero'
import SagaRoomsIntro, { SagaRoomsCategoryIntro } from '../components/saga/SagaRoomsIntro'
import SagaRoomCard from '../components/saga/SagaRoomCard'
import SagaRoomFilters from '../components/saga/SagaRoomFilters'
import SagaRoomsOffers from '../components/saga/SagaRoomsOffers'
import SagaStickyBook from '../components/saga/SagaStickyBook'
import { useRoomHashOpen } from '../context/RoomModalContext'
import {
  RESERVATION_PHONE,
  RESERVATION_PHONE_DISPLAY,
  RATES_NOTE,
  ROOMS,
  type RoomCategory,
} from '../data/rooms'

const CATEGORY_ORDER: RoomCategory[] = ['apartment', 'deluxe', 'double', 'single']

export default function RoomsPage() {
  useRoomHashOpen()
  const [filter, setFilter] = useState<RoomCategory | 'all'>('all')

  const counts = useMemo(() => ({
    all: ROOMS.length,
    apartment: ROOMS.filter((r) => r.category === 'apartment').length,
    deluxe: ROOMS.filter((r) => r.category === 'deluxe').length,
    double: ROOMS.filter((r) => r.category === 'double').length,
    single: ROOMS.filter((r) => r.category === 'single').length,
  }), [])

  const categoriesToShow = filter === 'all'
    ? CATEGORY_ORDER
    : [filter]

  return (
    <>
      <SagaHeader />
      <SagaRoomsHero />
      <SagaRoomsIntro />

      <section className="border-b border-black/5 bg-white py-8">
        <div className="container-hotel">
          <SagaRoomFilters active={filter} onChange={setFilter} counts={counts} />
          <p className="mt-6 text-center text-[12px] text-muted">{RATES_NOTE}</p>
        </div>
      </section>

      <main className="bg-[#f9f9f8] pb-24 md:pb-12">
        {categoriesToShow.map((cat) => {
          const rooms = ROOMS.filter((r) => r.category === cat)
          if (!rooms.length) return null

          return (
            <section key={cat}>
              {filter === 'all' && <SagaRoomsCategoryIntro category={cat} />}
              <div className="container-hotel pb-12 pt-2 md:pb-16">
                <div className="rooms-grid">
                  {rooms.map((room) => (
                    <SagaRoomCard key={room.id} room={room} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </main>

      <SagaRoomsOffers />

      <section className="section-hotel-compact bg-white">
        <div className="container-hotel text-center">
          <h2 className="h2-hotel">Ai întrebări?</h2>
          <p className="lead-hotel">Sună-ne pentru disponibilitate, tarife de grup sau sejururi prelungite.</p>
          <a href={`tel:+4${RESERVATION_PHONE}`} className="btn-book mt-8 inline-flex">
            {RESERVATION_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <SagaFooter />
      <SagaStickyBook />
    </>
  )
}
