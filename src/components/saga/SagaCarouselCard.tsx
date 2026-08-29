import { Link } from 'react-router-dom'

export interface CarouselCardItem {
  image: string
  title: string
  description: string
  seeMoreHref: string
  bookHref: string
  bookLabel?: string
  meta?: string
  eyebrow?: string
}

interface SagaCarouselCardProps {
  item: CarouselCardItem
}

export default function SagaCarouselCard({ item }: SagaCarouselCardProps) {
  return (
    <article className="flex h-full flex-col">
      <Link to={item.seeMoreHref} className="img-zoom group relative block aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {item.eyebrow && (
          <span className="absolute left-4 top-4 bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-ink">
            {item.eyebrow}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-6">
        {item.meta && (
          <p className="label-hotel">{item.meta}</p>
        )}
        <h3 className="mt-1 font-serif text-[clamp(1.2rem,2vw,1.35rem)] font-normal leading-snug text-ink">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-muted">
          {item.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={item.seeMoreHref} className="btn-outline-hotel">
            Vezi detalii
          </Link>
          <a href={item.bookHref} className="btn-book">
            {item.bookLabel ?? 'Rezervă'}
          </a>
        </div>
      </div>
    </article>
  )
}
