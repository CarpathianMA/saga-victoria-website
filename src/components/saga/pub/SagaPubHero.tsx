import { Link } from 'react-router-dom'
import { RESTAURANT_PHONE } from '../../../data/experiences'
import { PUB_HERO_IMAGE } from '../../../data/pubPage'
import { SagaHeroTrustBar, SagaLogoMark } from '../sagaHeroShared'

export default function SagaPubHero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[80vh]">
      <img
        src={PUB_HERO_IMAGE}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-hotel relative flex min-h-[72vh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:min-h-[80vh] md:pb-32">
        <Link to="/" className="inline-flex flex-col items-center text-white">
          <SagaLogoMark light />
        </Link>

        <h1 className="mt-6 h1-hotel !text-white">Pub & Pizza</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/85">
          Pizza, bar și terasă, la parterul Saga Victoria
        </p>

        <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-book mt-10">
          Rezervă masă
        </a>
      </div>

      <SagaHeroTrustBar />
    </section>
  )
}
