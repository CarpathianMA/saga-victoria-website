import { useState } from 'react'
import Button from './Button'
import { FACILITIES, type Facility } from '../data/facilities'

const POSES: Record<number, {
  rotateY: number
  translateX: number
  scale: number
  height: number
  width: number
  opacity: number
  z: number
}> = {
  [-2]: { rotateY: 42, translateX: -220, scale: 0.72, height: 290, width: 185, opacity: 0.75, z: 1 },
  [-1]: { rotateY: 24, translateX: -120, scale: 0.86, height: 325, width: 205, opacity: 0.9, z: 2 },
  [0]: { rotateY: 0, translateX: 0, scale: 1.05, height: 385, width: 230, opacity: 1, z: 5 },
  [1]: { rotateY: -24, translateX: 120, scale: 0.86, height: 325, width: 205, opacity: 0.9, z: 2 },
  [2]: { rotateY: -42, translateX: 220, scale: 0.72, height: 290, width: 185, opacity: 0.75, z: 1 },
}

function getOffset(index: number, active: number, total: number) {
  let offset = index - active
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  return offset
}

function FacilityCardContent({ item }: { item: Facility }) {
  const isComplex = item.location === 'complex'

  return (
    <>
      <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      <span
        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium tracking-wide ${
          isComplex
            ? 'bg-white/90 text-neutral-900'
            : 'border border-white/70 bg-black/20 text-white backdrop-blur-sm'
        }`}
      >
        {isComplex ? 'La complex' : 'În oraș'}
      </span>
      <div className="absolute bottom-6 left-0 right-0 px-5 text-center text-white">
        <p className="text-[11px] font-medium uppercase tracking-widest text-white/70">
          {item.subtitle}
        </p>
        <p className="mt-1 text-[15px] font-semibold drop-shadow-sm">{item.label}</p>
        <p className="mt-1 text-[10px] text-white/75">{item.locationLabel}</p>
      </div>
    </>
  )
}

export default function Facilities() {
  const [active, setActive] = useState(0)

  return (
    <section id="facilities" className="bg-white py-[88px] pb-20">
      <div className="mx-auto max-w-[1280px] px-20 max-xl:px-12 max-md:px-6">
        <div className="mb-14 flex items-start justify-between gap-12 max-md:flex-col max-md:gap-6">
          <div className="max-w-[360px]">
            <p className="pt-1 text-[13px] leading-[1.75] text-neutral-900">
              La <strong>Str. Pieții 2A</strong> găsești camerele și pub-ul. Covrigăria
              face parte din ecosistemul Saga, într-o locație separată din Victoria.
            </p>
            <p className="mt-4 text-[12px] leading-relaxed text-neutral-400">
              Oaspeții Saga Rooms au acces direct la pub, restaurant și terasă, fără
              să părăsească clădirea.
            </p>
          </div>
          <h2 className="text-right text-[clamp(30px,3.2vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-neutral-900 max-md:text-left">
            Pub, restaurant
            <br />
            &amp; ecosistemul Saga
          </h2>
        </div>

        {/* Clip layer separat de perspective, altfel transformările 3D ies din pagină */}
        <div
          className="relative mx-auto mb-12 w-full max-w-[820px] overflow-hidden"
          style={{ height: 420, transform: 'translateZ(0)' }}
        >
          <div className="flex h-full items-center justify-center" style={{ perspective: '1200px' }}>
            <div className="relative h-[385px] w-[230px]" style={{ transformStyle: 'preserve-3d' }}>
              {FACILITIES.map((item, i) => {
                const offset = getOffset(i, active, FACILITIES.length)
                const clamped = Math.max(-2, Math.min(2, offset)) as -2 | -1 | 0 | 1 | 2
                const pose = POSES[clamped]

                if (Math.abs(offset) > 2) return null

                const cardStyle = {
                  width: pose.width,
                  height: pose.height,
                  zIndex: pose.z,
                  opacity: pose.opacity,
                  left: '50%',
                  top: '50%',
                  marginLeft: -pose.width / 2,
                  marginTop: -pose.height / 2,
                  transform: `
                    translateX(${pose.translateX}px)
                    rotateY(${pose.rotateY}deg)
                    scale(${pose.scale})
                  `,
                }

                const cardClass =
                  'absolute overflow-hidden rounded-[28px] border-0 bg-transparent p-0 shadow-none transition-all duration-700 ease-out touch-pan-y'

                const inner = (
                  <div className="relative h-full w-full overflow-hidden rounded-[28px]">
                    <FacilityCardContent item={item} />
                  </div>
                )

                if (item.href && clamped === 0) {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardClass} cursor-pointer`}
                      style={cardStyle}
                    >
                      {inner}
                    </a>
                  )
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`${cardClass} cursor-pointer`}
                    style={cardStyle}
                    aria-label={`Selectează ${item.label}`}
                  >
                    {inner}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-6 text-[12px] text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            La complex, Str. Pieții 2A (camere + pub)
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full border border-neutral-400" />
            În oraș, locație separată
          </span>
        </div>

        <div className="text-center">
          <Button href="https://sagavictoria.ro/" size="sm" showIcon={false}>
            Vezi tot ecosistemul Saga
          </Button>
        </div>
      </div>
    </section>
  )
}
