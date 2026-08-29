import { Link } from 'react-router-dom'
import { ROOM_CATEGORIES } from '../../data/rooms'

export default function SagaRoomsIntro() {
  return (
    <section className="bg-white">
      <div className="container-hotel py-5">
        <nav className="flex items-center gap-2 text-[13px] text-muted" aria-label="Breadcrumb">
          <Link to="/" className="flex items-center gap-1.5 transition hover:text-brand" aria-label="Acasă">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </Link>
          <span aria-hidden className="text-black/20">›</span>
          <span className="text-ink">Camere</span>
        </nav>
      </div>

      <div className="bg-[#f3f0eb] py-16 md:py-24">
        <div className="container-hotel mx-auto max-w-[720px] text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.2] text-ink">
            Confortul excepțional
          </h2>
          <p className="mt-6 text-[16px] leading-[1.75] text-muted">
            De la camere single la apartamentul Saga, oferim opțiuni de cazare potrivite fiecărui tip de oaspete.
            Fie că îți dorești confort, spațiu sau dotări suplimentare, vei găsi sejurul care ți se potrivește.
          </p>
        </div>
      </div>
    </section>
  )
}

export function SagaRoomsCategoryIntro({ category }: { category: keyof typeof ROOM_CATEGORIES }) {
  const meta = ROOM_CATEGORIES[category]
  return (
    <div className="container-hotel border-b border-black/5 py-10 md:py-12">
      <h3 className="font-serif text-[clamp(1.35rem,2.5vw,1.75rem)] font-normal text-ink">{meta.label}</h3>
      <p className="mt-3 max-w-[640px] text-[15px] leading-[1.7] text-muted">{meta.description}</p>
    </div>
  )
}
