import { formatPrice, RESERVATION_PHONE, type Room } from '../../data/rooms'
import { useRoomModal } from '../../context/RoomModalContext'
import SagaRoomCardGallery from './SagaRoomCardGallery'
import FeatureIcon from './FeatureIcon'

function guestCount(room: Room): number {
  if (room.category === 'single') return 1
  if (room.category === 'double') return 2
  if (room.category === 'deluxe') return 3
  return 6
}

function sqmDisplay(room: Room): string | null {
  if (room.sqm) return `${room.sqm} m²`
  if (room.category === 'single') return '12 m²'
  if (room.category === 'double') return '17 m²'
  if (room.category === 'deluxe') return '22 m²'
  return null
}

interface SagaRoomCardProps {
  room: Room
}

export default function SagaRoomCard({ room }: SagaRoomCardProps) {
  const { openRoom } = useRoomModal()
  const sqm = sqmDisplay(room)
  const guests = guestCount(room)

  return (
    <article id={room.id} className="scroll-mt-28 bg-white">
      <SagaRoomCardGallery
        images={room.images}
        alt={room.name}
        onExpand={() => openRoom(room)}
      />

      <div className="room-card-body grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:p-8 lg:p-10">
        <div>
          <h2 className="font-serif text-[clamp(1.35rem,2.2vw,1.65rem)] font-normal leading-snug text-ink">
            {room.name}
          </h2>

          <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
            {sqm && (
              <li className="flex items-center gap-1.5">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>
                {sqm}
              </li>
            )}
            <li className="flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              {guests} {guests === 1 ? 'oaspete' : 'oaspeți'}
            </li>
            <li className="flex items-center gap-1.5">
              <FeatureIcon name="pat" />
              {room.beds}
            </li>
          </ul>

          <p className="mt-5 text-[14px] leading-[1.75] text-muted">{room.description}</p>

          <p className="mt-4 font-serif text-[1.25rem] text-brand">
            {formatPrice(room.pricePerNight)}
            <span className="ml-1.5 font-sans text-[13px] text-muted">/ noapte</span>
          </p>

          <a href={`tel:+4${RESERVATION_PHONE}`} className="btn-book mt-6 inline-flex">
            Rezervă acum
          </a>
        </div>

        <div className="border-t border-black/5 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            Toate serviciile
          </p>
          <ul className="mt-5 space-y-3.5">
            {room.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[14px] text-ink">
                <FeatureIcon name={f} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
