import type { EventCategory } from '../../../data/eventsPage'

interface SagaEventCategoryBlockProps {
  category: EventCategory
  reverse?: boolean
}

export default function SagaEventCategoryBlock({ category, reverse = false }: SagaEventCategoryBlockProps) {
  return (
    <section className="border-b border-black/[0.06] bg-white last:border-0">
      <div
        className={`container-hotel grid items-center gap-10 py-14 md:gap-14 md:py-20 lg:grid-cols-2 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="img-zoom aspect-[4/3] overflow-hidden bg-surface lg:aspect-[5/4]">
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <p className="label-hotel">{category.eyebrow}</p>
          <h2 className="h2-hotel-left mt-3">{category.title}</h2>
          <p className="mt-5 prose-hotel">{category.description}</p>
          {category.ctaLabel && category.ctaHref && (
            <a href={category.ctaHref} className="link-arrow mt-6 inline-flex">
              {category.ctaLabel}
              <span aria-hidden>→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
