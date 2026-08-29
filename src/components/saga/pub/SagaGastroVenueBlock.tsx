import type { GastroVenue } from '../../../data/pubPage'

interface SagaGastroVenueBlockProps {
  venue: GastroVenue
  reverse?: boolean
}

export default function SagaGastroVenueBlock({ venue, reverse = false }: SagaGastroVenueBlockProps) {
  return (
    <section className="border-b border-black/[0.06] bg-white last:border-0">
      <div
        className={`container-hotel grid items-start gap-10 py-14 md:gap-14 md:py-20 lg:grid-cols-2 lg:items-center ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="img-zoom aspect-[4/3] overflow-hidden bg-surface lg:aspect-[5/4]">
          <img src={venue.image} alt={venue.title} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="label-hotel">{venue.eyebrow}</p>
          <h2 className="h2-hotel-left mt-3">{venue.title}</h2>
          <p className="mt-5 prose-hotel">{venue.description}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">Servicii</p>
              <ul className="mt-3 space-y-2">
                {venue.services.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">Program</p>
              <ul className="mt-3 space-y-2">
                {venue.schedule.map((line) => (
                  <li key={line} className="text-[14px] leading-relaxed text-muted">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={venue.ctaHref} className="btn-book">
              {venue.ctaLabel}
            </a>
            {venue.menuHref && venue.menuLabel && (
              <a
                href={venue.menuHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow inline-flex"
              >
                {venue.menuLabel}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
