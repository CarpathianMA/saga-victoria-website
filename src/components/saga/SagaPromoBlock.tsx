import { Link } from 'react-router-dom'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'

interface SagaPromoBlockProps {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export default function SagaPromoBlock({
  title,
  description,
  ctaLabel,
  ctaHref,
}: SagaPromoBlockProps) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white" />
      </div>
      <div className="container-hotel section-hotel-compact relative">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[12px] uppercase tracking-[0.14em] text-white/70">Rezervă direct</p>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-[1.25]">
            {title}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-white/85">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to={ctaHref} className="btn-ghost-light">
              {ctaLabel}
            </Link>
            <a href={`tel:+4${RESERVATION_PHONE}`} className="text-[14px] text-white/90 underline-offset-4 hover:underline">
              sau sună {RESERVATION_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
