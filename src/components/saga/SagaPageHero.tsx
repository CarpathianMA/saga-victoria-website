import { Link } from 'react-router-dom'

interface SagaPageHeroProps {
  image: string
  title: string
  subtitle?: string
  breadcrumb: { label: string; href?: string }[]
}

export default function SagaPageHero({ image, title, subtitle, breadcrumb }: SagaPageHeroProps) {
  return (
    <section className="relative">
      <div className="relative h-[44vh] min-h-[300px] md:h-[50vh] md:min-h-[360px]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container-hotel relative flex h-full flex-col justify-end pb-10 pt-28 md:pb-14">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-[13px] text-white/75" aria-label="Breadcrumb">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="transition hover:text-white">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="max-w-[720px] font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.12] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/85 md:text-[16px]">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
