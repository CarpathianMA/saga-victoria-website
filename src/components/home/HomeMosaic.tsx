import {
  SAGA_PUB_CURATED,
  SAGA_ROOMS_CURATED,
  SAGA_EVENTS_CURATED,
  SAGA_TERASA,
} from '../../data/sagaAssets'

const MOSAIC = [
  { src: SAGA_ROOMS_CURATED[0], className: 'md:col-span-2 md:row-span-1 min-h-[200px] md:min-h-[340px]' },
  { src: SAGA_PUB_CURATED[0], className: 'md:col-span-1 min-h-[200px] md:min-h-[340px]' },
  { src: SAGA_PUB_CURATED[1], className: 'min-h-[140px] md:min-h-[180px]' },
  { src: SAGA_EVENTS_CURATED[0], className: 'min-h-[140px] md:min-h-[180px]' },
  { src: SAGA_TERASA[0], className: 'min-h-[140px] md:min-h-[180px]' },
]

export default function HomeMosaic() {
  return (
    <section className="bg-[#f5f5f0] px-4 pb-28 md:px-6 md:pb-36 lg:pb-40">
      <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-1 md:grid-cols-3 md:gap-1">
        {MOSAIC.map((item, i) => (
          <div key={i} className={`overflow-hidden ${item.className}`}>
            <img src={item.src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
