interface PhotoSpreadProps {
  images: string[]
  alt: string
  layout?: 'duo' | 'trio' | 'feature' | 'stack'
}

export default function PhotoSpread({ images, alt, layout = 'duo' }: PhotoSpreadProps) {
  const imgs = images.slice(0, layout === 'trio' ? 3 : layout === 'feature' ? 1 : 2)

  if (layout === 'feature' && imgs[0]) {
    return (
      <figure className="group relative overflow-hidden rounded-sm bg-neutral-100">
        <div className="aspect-[16/10] max-md:aspect-[4/3]">
          <img
            src={imgs[0]}
            alt={alt}
            className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </figure>
    )
  }

  if (layout === 'stack' && imgs.length >= 2) {
    return (
      <div className="relative">
        <figure className="relative z-10 ml-auto w-[78%] overflow-hidden rounded-sm bg-neutral-100 shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
          <div className="aspect-[3/4]">
            <img src={imgs[0]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </figure>
        <figure className="absolute -bottom-8 left-0 z-20 w-[52%] overflow-hidden rounded-sm border-4 border-[#faf8f5] bg-neutral-100 shadow-lg max-md:-bottom-4">
          <div className="aspect-[4/5]">
            <img src={imgs[1]} alt={`${alt}, detaliu`} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </figure>
      </div>
    )
  }

  if (layout === 'trio' && imgs.length >= 3) {
    return (
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        <figure className="col-span-7 overflow-hidden rounded-sm bg-neutral-100">
          <div className="aspect-[4/5] md:aspect-[3/4]">
            <img src={imgs[0]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </figure>
        <div className="col-span-5 flex flex-col gap-3 md:gap-4">
          <figure className="flex-1 overflow-hidden rounded-sm bg-neutral-100">
            <div className="aspect-square">
              <img src={imgs[1]} alt={`${alt}, 2`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </figure>
          <figure className="flex-1 overflow-hidden rounded-sm bg-neutral-100">
            <div className="aspect-square">
              <img src={imgs[2]} alt={`${alt}, 3`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </figure>
        </div>
      </div>
    )
  }

  if (imgs.length >= 2) {
    return (
      <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr] md:gap-5">
        <figure className="overflow-hidden rounded-sm bg-neutral-100">
          <div className="aspect-[4/5] md:aspect-[3/4]">
            <img src={imgs[0]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </figure>
        <figure className="overflow-hidden rounded-sm bg-neutral-100 md:mt-12">
          <div className="aspect-[4/5]">
            <img src={imgs[1]} alt={`${alt}, detaliu`} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </figure>
      </div>
    )
  }

  if (imgs[0]) {
    return (
      <figure className="overflow-hidden rounded-sm bg-neutral-100">
        <div className="aspect-[4/5]">
          <img src={imgs[0]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </figure>
    )
  }

  return null
}
