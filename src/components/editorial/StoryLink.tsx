import { Link } from 'react-router-dom'

interface StoryLinkProps {
  index: string
  href: string
  label: string
  title: string
  blurb: string
  image: string
  reverse?: boolean
  dark?: boolean
}

export default function StoryLink({
  index,
  href,
  label,
  title,
  blurb,
  image,
  reverse = false,
  dark = false,
}: StoryLinkProps) {
  const bg = dark ? 'bg-neutral-950' : 'bg-[#faf8f5]'
  const textMain = dark ? 'text-white' : 'text-neutral-900'
  const textMuted = dark ? 'text-white/55' : 'text-neutral-500'
  const textEyebrow = dark ? 'text-white/40' : 'text-neutral-400'

  return (
    <Link
      to={href}
      className={`group editorial-reveal block ${bg}`}
    >
      <div
        className={`mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-12 md:py-28 lg:px-20 ${
          reverse ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className={`max-w-[420px] ${reverse ? 'md:ml-auto' : ''}`}>
          <p className={`mb-6 font-serif text-[clamp(48px,6vw,80px)] font-light leading-none ${textEyebrow}`}>
            {index}
          </p>
          <p className={`mb-3 text-[10px] font-medium uppercase tracking-[0.28em] ${textEyebrow}`}>
            {label}
          </p>
          <h3 className={`mb-5 font-serif text-[clamp(28px,3.2vw,42px)] font-light leading-[1.12] ${textMain}`}>
            {title}
          </h3>
          <p className={`mb-8 text-[14px] leading-[1.85] ${textMuted}`}>{blurb}</p>
          <span
            className={`inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] transition group-hover:gap-5 ${textMain}`}
          >
            Citește povestea
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden className="transition group-hover:translate-x-1">
              <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
        </div>

        <figure className={`relative ${reverse ? 'md:flex md:justify-start' : 'md:flex md:justify-end'}`}>
          <div className="aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-sm bg-neutral-200 md:max-w-[520px]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        </figure>
      </div>
    </Link>
  )
}
