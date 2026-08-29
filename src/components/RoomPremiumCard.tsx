import type { Room } from '../data/rooms'
import { formatPrice } from '../data/rooms'
import { useRoomModal } from '../context/RoomModalContext'

type PremiumVariant = 'cinema' | 'spotlight' | 'portrait' | 'editorial'

interface RoomPremiumCardProps {
  room: Room
  variant?: PremiumVariant
  index?: number
}

export default function RoomPremiumCard({
  room,
  variant = 'spotlight',
  index = 0,
}: RoomPremiumCardProps) {
  const { openRoom } = useRoomModal()
  const cover = room.images[0]

  const aspect = {
    cinema: 'aspect-[21/9] max-md:aspect-[4/3]',
    spotlight: 'aspect-[4/5]',
    portrait: 'aspect-[3/4]',
    editorial: 'aspect-[16/10]',
  }[variant]

  const overlayText = variant === 'cinema' || variant === 'editorial'

  return (
    <button
      type="button"
      onClick={() => openRoom(room)}
      className="group w-full cursor-pointer border-0 bg-transparent p-0 text-left"
    >
      <div className={`relative overflow-hidden bg-[#ebe6de] ${aspect}`}>
        <img
          src={cover}
          alt={room.name}
          className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {overlayText ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 max-md:p-6">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                {room.categoryLabel}
              </p>
              <h3 className="font-serif text-[clamp(24px,2.8vw,36px)] font-normal leading-[1.1] text-white">
                {room.name}
              </h3>
              <p className="mt-3 text-[14px] text-white/80">
                {formatPrice(room.pricePerNight)}
                <span className="text-white/50"> / noapte</span>
              </p>
            </div>
          </>
        ) : null}

        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100 max-md:opacity-100">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        {room.images.length > 1 && (
          <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.18em] text-white/70 max-md:hidden">
            {room.images.length} fotografii
          </span>
        )}
      </div>

      {!overlayText && (
        <div className="pt-5">
          <div className="flex items-baseline justify-between gap-4 border-b border-neutral-100 pb-4">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                {String(index + 1).padStart(2, '0')} · {room.categoryLabel}
              </p>
              <h3 className="font-serif text-[clamp(20px,2vw,26px)] font-normal leading-tight text-[#1a1918] transition group-hover:text-[#6f6a63]">
                {room.name}
              </h3>
            </div>
            <p className="shrink-0 text-right text-[15px] font-medium tabular-nums text-neutral-900">
              {formatPrice(room.pricePerNight)}
            </p>
          </div>
          <p className="mt-3 text-[13px] text-neutral-400">{room.beds}</p>
        </div>
      )}
    </button>
  )
}
