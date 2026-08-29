import RoomPremiumCard from './RoomPremiumCard'
import { ROOM_CATEGORIES, formatPrice, type Room } from '../data/rooms'
import type { RoomCategory } from '../data/rooms'

interface RoomCategoryShowcaseProps {
  category: RoomCategory
  rooms: Room[]
}

export default function RoomCategoryShowcase({ category, rooms }: RoomCategoryShowcaseProps) {
  const meta = ROOM_CATEGORIES[category]
  const fromPrice = Math.min(...rooms.map((r) => r.pricePerNight))

  return (
    <section className="relative">
      {/* Header editorial */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-8 border-b border-[#ddd8cf] pb-10">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#9c968d]">Categorie</p>
          <h2 className="font-serif text-[clamp(30px,3.2vw,40px)] font-normal leading-[1.12] text-[#1a1918]">
            {meta.label}
          </h2>
        </div>
        <div className="text-right max-md:text-left">
          <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-[#9c968d]">De la</p>
          <p className="font-serif text-[clamp(24px,2.5vw,32px)] font-normal text-[#1a1918]">
            {formatPrice(fromPrice)}
            <span className="ml-2 font-sans text-[13px] text-[#9c968d]">/ noapte</span>
          </p>
          <p className="mt-3 max-w-[280px] text-[15px] leading-relaxed text-[#6f6a63] max-md:max-w-none">
            {meta.description}
          </p>
        </div>
      </div>

      {/* Layout per category */}
      {category === 'apartment' && rooms[0] && (
        <RoomPremiumCard room={rooms[0]} variant="cinema" />
      )}

      {category === 'single' && rooms.length >= 2 && (
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {rooms.map((room, i) => (
            <RoomPremiumCard key={room.id} room={room} variant="editorial" index={i} />
          ))}
        </div>
      )}

      {category === 'double' && rooms.length >= 2 && (
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <RoomPremiumCard room={rooms[0]} variant="spotlight" index={0} />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-5 lg:gap-10">
            {rooms.slice(1).map((room, i) => (
              <RoomPremiumCard key={room.id} room={room} variant="portrait" index={i + 1} />
            ))}
          </div>
        </div>
      )}

      {category === 'deluxe' && rooms.length >= 4 && (
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <RoomPremiumCard room={rooms[0]} variant="spotlight" index={0} />
            </div>
            <div className="lg:col-span-5">
              <RoomPremiumCard room={rooms[1]} variant="spotlight" index={1} />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {rooms.slice(2).map((room, i) => (
              <RoomPremiumCard key={room.id} room={room} variant="editorial" index={i + 2} />
            ))}
          </div>
        </div>
      )}

      {/* Fallback for unexpected counts */}
      {category !== 'apartment' &&
        category !== 'single' &&
        category !== 'double' &&
        category !== 'deluxe' && (
          <div className="grid gap-8 md:grid-cols-2">
            {rooms.map((room, i) => (
              <RoomPremiumCard key={room.id} room={room} variant="spotlight" index={i} />
            ))}
          </div>
        )}
    </section>
  )
}
