import { Link } from 'react-router-dom'
import { EVENTS_STATS } from '../../../data/eventsPage'
import { RESTAURANT_PHONE } from '../../../data/experiences'

export default function SagaEventsIntro() {
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
          <span className="text-ink">Restaurant & Events</span>
        </nav>
      </div>

      <div className="section-hotel-compact bg-page">
        <div className="container-hotel mx-auto max-w-[780px] text-center">
          <p className="prose-hotel">
            Două experiențe distincte, aceeași grijă pentru detalii. Restaurantul à la carte oferă
            mese rafinate, cu meniu divers și atmosferă elegantă. Sala de evenimente preia aceeași
            bucătărie pentru nunți, corporate sau petreceri de familie, la poalele Munților Făgăraș.
          </p>
          <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-book mt-8 inline-flex">
            Rezervă masă
          </a>
        </div>
      </div>
    </section>
  )
}

export function SagaEventsStats() {
  return (
    <section className="border-y border-black/[0.06] bg-white py-12 md:py-16">
      <div className="container-hotel grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {EVENTS_STATS.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-medium leading-none text-brand">
              {stat.value}
            </p>
            <p className="mt-2 text-[14px] font-medium uppercase tracking-[0.08em] text-ink">
              {stat.label}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
