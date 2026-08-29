import { formatPrice, RESERVATION_PHONE, type Room } from '../../data/rooms'
import { useRoomModal } from '../../context/RoomModalContext'
import { SagaImageSlider } from './sagaUi'

interface SagaRoomBlockProps {
  room: Room
}

export default function SagaRoomBlock({ room }: SagaRoomBlockProps) {
  const { openRoom } = useRoomModal()

  return (
    <article id={room.id} className="scroll-mt-24 border-b border-black/5 py-14 last:border-0 md:py-20">
      <div className="container-hotel grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SagaImageSlider
          images={room.images}
          alt={room.name}
          onImageClick={() => openRoom(room)}
        />

        <div>
          <p className="label-hotel">{room.categoryLabel}</p>
          <h2 className="mt-2 font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal text-ink">
            {room.name}
          </h2>

          <p className="mt-4 font-serif text-[1.5rem] text-brand">
            {formatPrice(room.pricePerNight)}
            <span className="ml-2 font-sans text-[14px] text-muted">/ noapte</span>
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
            {room.sqm && <li>{room.sqm} m²</li>}
            <li>{room.beds}</li>
          </ul>

          <p className="mt-6 prose-hotel">{room.description}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {room.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[14px] text-ink">
                <span className="text-brand" aria-hidden>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => openRoom(room)} className="btn-outline-hotel">
              Vezi galeria
            </button>
            <a href={`tel:+4${RESERVATION_PHONE}`} className="btn-book">
              Rezervă acum
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
