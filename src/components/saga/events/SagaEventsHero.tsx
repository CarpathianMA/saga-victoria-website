import { Link } from 'react-router-dom'
import { RESTAURANT_PHONE } from '../../../data/experiences'
import { SAGA_MENU_FOOD } from '../../../data/sagaAssets'
import { SagaHeroTrustBar, SagaLogoMark } from '../sagaHeroShared'

export default function SagaEventsHero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[80vh]">
      <img
        src={SAGA_MENU_FOOD[1] ?? SAGA_MENU_FOOD[0]}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-hotel relative flex min-h-[72vh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:min-h-[80vh] md:pb-32">
        <Link to="/" className="inline-flex flex-col items-center text-white">
          <SagaLogoMark light />
        </Link>

        <h1 className="mt-6 h1-hotel !text-white">Restaurant & Events</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/85">
          Bucătărie à la carte elegantă și sală de evenimente, sub același acoperiș
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-book">
            Rezervă masă
          </a>
          <a href="#events-form" className="btn-outline-hotel !border-white/40 !text-white hover:!bg-white/10">
            Cere ofertă eveniment
          </a>
        </div>
      </div>

      <SagaHeroTrustBar />
    </section>
  )
}
