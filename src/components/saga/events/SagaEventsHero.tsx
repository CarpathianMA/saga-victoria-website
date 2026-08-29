import { Link } from 'react-router-dom'
import { RESTAURANT_PHONE } from '../../../data/experiences'
import { SAGA_EVENTS_CURATED } from '../../../data/sagaAssets'
import { SagaHeroTrustBar, SagaLogoMark } from '../sagaHeroShared'

export default function SagaEventsHero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[80vh]">
      <img
        src={SAGA_EVENTS_CURATED[0]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-hotel relative flex min-h-[72vh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:min-h-[80vh] md:pb-32">
        <Link to="/" className="inline-flex flex-col items-center text-white">
          <SagaLogoMark light />
        </Link>

        <h1 className="mt-6 h1-hotel !text-white">
          Evenimente
        </h1>

        <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-book mt-10">
          Cere ofertă
        </a>
      </div>

      <SagaHeroTrustBar />
    </section>
  )
}
