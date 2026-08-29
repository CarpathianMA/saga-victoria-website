import { Link } from 'react-router-dom'
import { SAGA_MENU_FOOD, SAGA_PUB, SAGA_MENU_DRINKS } from '../../data/sagaAssets'

export default function HomeDineAt() {
  return (
    <section className="section-white">
      <div className="container-wide">
        <div className="grid gap-1 md:grid-cols-12 md:gap-1">
          <div className="overflow-hidden md:col-span-4 md:row-span-2">
            <img
              src={SAGA_PUB[2]}
              alt="Saga Pub"
              className="aspect-[3/4] w-full object-cover md:min-h-[500px] md:aspect-auto md:h-full"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center bg-white px-8 py-14 md:col-span-4 md:row-span-2 md:px-10 md:py-16">
            <p className="mb-3 text-[11px] font-normal uppercase tracking-[0.28em] text-[#a3a89e]">
              03
            </p>
            <h2 className="font-serif text-[clamp(1.65rem,2.8vw,2.25rem)] font-normal leading-[1.2] text-[#3a4038]">
              Dine with us
            </h2>
            <p className="body-copy mt-6 max-w-[280px] text-[14px]">
              Pizza la pub, mese à la carte la restaurant, preparate cu grijă,
              servite fără grabă.
            </p>
            <Link to="/pub" className="btn-ghost-dark mt-9 w-fit">
              View restaurant
            </Link>
          </div>

          <div className="overflow-hidden md:col-span-4">
            <img
              src={SAGA_MENU_FOOD[1]}
              alt=""
              className="aspect-[4/3] w-full object-cover md:min-h-[248px] md:aspect-auto md:h-full"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden md:col-span-4">
            <img
              src={SAGA_MENU_DRINKS[0]}
              alt=""
              className="aspect-[4/3] w-full object-cover md:min-h-[248px] md:aspect-auto md:h-full"
              loading="lazy"
            />
          </div>

          <div className="overflow-hidden md:col-span-6">
            <img src={SAGA_PUB[5]} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden md:col-span-6">
            <img src={SAGA_MENU_FOOD[3]} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
