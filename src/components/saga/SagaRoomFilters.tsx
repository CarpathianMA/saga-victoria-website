import type { RoomCategory } from '../../data/rooms'

interface SagaRoomFiltersProps {
  active: RoomCategory | 'all'
  onChange: (cat: RoomCategory | 'all') => void
  counts: Record<RoomCategory | 'all', number>
}

const ORDER: (RoomCategory | 'all')[] = ['all', 'apartment', 'deluxe', 'double', 'single']

const LABELS: Record<RoomCategory | 'all', string> = {
  all: 'Toate',
  apartment: 'Apartament',
  deluxe: 'Deluxe',
  double: 'Duble',
  single: 'Single',
}

export default function SagaRoomFilters({ active, onChange, counts }: SagaRoomFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {ORDER.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`px-4 py-2 text-[13px] transition ${
            active === cat
              ? 'bg-brand text-white'
              : 'border border-black/10 bg-page text-muted hover:border-brand hover:text-brand'
          }`}
        >
          {LABELS[cat]}
          <span className="ml-1 opacity-70">({counts[cat]})</span>
        </button>
      ))}
    </div>
  )
}
