interface PageHeroProps {
  image: string
  title: string
  subtitle?: string
  eyebrow?: string
  tall?: boolean
}

export default function PageHero({ image, title, subtitle, eyebrow, tall }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-[#1a1918] ${tall ? 'min-h-[88vh]' : 'min-h-[52vh] md:min-h-[58vh]'}`}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.72]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1918]/80 via-[#1a1918]/25 to-[#1a1918]/10" />
      <div className={`relative flex flex-col justify-end px-6 pb-14 pt-28 md:px-10 md:pb-20 lg:px-12 ${tall ? 'min-h-[88vh]' : 'min-h-[52vh] md:min-h-[58vh]'}`}>
        <div className="mx-auto w-full max-w-[1120px]">
          {eyebrow && (
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/50">{eyebrow}</p>
          )}
          <h1 className="max-w-[780px] font-serif text-[clamp(36px,5.5vw,64px)] font-normal leading-[1.08] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] text-white/70 md:text-[17px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
