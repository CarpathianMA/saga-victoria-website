import { Link } from 'react-router-dom'
import type { RestaurantSection } from '../../../data/eventsPage'

interface SagaRestaurantBlockProps {
  restaurant: RestaurantSection
}

export default function SagaRestaurantBlock({ restaurant }: SagaRestaurantBlockProps) {
  return (
    <section className="border-b border-black/[0.06] bg-[#f3f0eb]">
      <div className="container-hotel grid items-start gap-10 py-14 md:gap-14 md:py-20 lg:grid-cols-2 lg:items-center">
        <div className="img-zoom aspect-[4/3] overflow-hidden bg-surface lg:aspect-[5/4]">
          <img
            src={restaurant.image}
            alt={restaurant.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <p className="label-hotel">{restaurant.eyebrow}</p>
          <h2 className="h2-hotel-left mt-3">{restaurant.title}</h2>
          <p className="mt-5 prose-hotel">{restaurant.description}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">Experiență</p>
              <ul className="mt-3 space-y-2">
                {restaurant.highlights.map((item) => (
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
                {restaurant.schedule.map((line) => (
                  <li key={line} className="text-[14px] leading-relaxed text-muted">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={restaurant.ctaHref} className="btn-book">
              {restaurant.ctaLabel}
            </a>
            {restaurant.menuHref && restaurant.menuLabel && (
              <a
                href={restaurant.menuHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow inline-flex"
              >
                {restaurant.menuLabel}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>

          <p className="mt-8 border-t border-black/[0.06] pt-6 text-[14px] leading-relaxed text-muted">
            Cauți o seară mai relaxată, cu pizza și terasă?{' '}
            <Link to="/pub" className="font-medium text-brand transition hover:opacity-80">
              Vezi Pub & Pizza →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
