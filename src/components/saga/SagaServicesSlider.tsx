import { Link } from 'react-router-dom'

export interface ServiceSlide {
  image: string
  title: string
  description: string
  href: string
  cta: string
  label?: string
}

interface SagaServicesSliderProps {
  title: string
  lead: string
  slides: ServiceSlide[]
}

export default function SagaServicesSlider({
  title,
  lead,
  slides,
}: SagaServicesSliderProps) {
  return (
    <section className="section-hotel bg-page">
      <div className="container-hotel">
        <h2 className="h2-hotel">{title}</h2>
        <p className="lead-hotel">{lead}</p>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {slides.map((slide) => (
            <article key={slide.title} className="group flex flex-col">
              <Link to={slide.href} className="img-zoom relative block aspect-[3/4] overflow-hidden bg-surface">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
                {slide.label && (
                  <span className="absolute left-4 top-4 bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-ink">
                    {slide.label}
                  </span>
                )}
                <span className="absolute bottom-5 left-5 right-5 font-serif text-[1.35rem] text-white">
                  {slide.title}
                </span>
              </Link>
              <p className="mt-5 flex-1 text-[15px] leading-[1.65] text-muted">{slide.description}</p>
              <Link to={slide.href} className="link-arrow mt-4">
                {slide.cta}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
