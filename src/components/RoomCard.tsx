import type { Room } from '../data/rooms'
import { formatPrice } from '../data/rooms'
import { useRoomModal } from '../context/RoomModalContext'

interface RoomCardProps {
  room: Room
  variant?: 'carousel' | 'grid'
}

export default function RoomCard({ room, variant = 'carousel' }: RoomCardProps) {
  const { openRoom } = useRoomModal()
  const isCarousel = variant === 'carousel'
  const cover = room.images[0]

  return (
    <button
      type="button"
      onClick={() => openRoom(room)}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] border-0 bg-transparent p-0 text-left ${
        isCarousel ? 'h-full w-full' : 'aspect-[4/5] w-full'
      }`}
    >
      <img
        src={cover}
        alt={room.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/5 transition group-hover:from-black/60" />
      <span className="absolute left-4 top-4 rounded-full border border-white/80 px-4 py-[5px] text-[11px] text-white transition group-hover:bg-white/15">
        Detalii
      </span>
      {room.images.length > 1 && (
        <span className="absolute right-4 top-4 rounded-full bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          {room.images.length} poze
        </span>
      )}
      <div className="absolute bottom-5 left-5 right-5">
        <span className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-white/70">
          {room.categoryLabel}
        </span>
        <span className={`block font-semibold leading-tight text-white ${isCarousel ? 'text-[17px]' : 'text-lg'}`}>
          {room.name}
        </span>
        <p className={`font-medium text-white/90 ${isCarousel ? 'mt-1 text-[13px]' : 'mt-2 text-sm'}`}>
          {formatPrice(room.pricePerNight)}
          <span className="font-normal text-white/60"> / noapte</span>
        </p>
        {!isCarousel && (
          <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-white/80">{room.beds}</p>
        )}
      </div>
    </button>
  )
}
