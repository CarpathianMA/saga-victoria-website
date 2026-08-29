import { Link } from 'react-router-dom'
import { SAGA } from '../../data/sagaAssets'
import { SagaHeroTrustBar, SagaLogoMark } from './sagaHeroShared'

export default function SagaHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img
        src={SAGA.hero}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="hero-bg-victoria absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:pb-32 md:pt-28">
        <SagaLogoMark light />

        <h1 className="h1-hotel mt-8 max-w-[820px] !text-white">
          Un refugiu în inima munților
        </h1>

        <p className="mt-6 max-w-[580px] text-[15px] leading-[1.75] text-white/88 md:text-[16px]">
          Descoperă un complex gândit pentru cei care vor să se deconecteze, să se bucure de gastronomie
          locală și să trăiască fiecare detaliu: camere confortabile, pub & pizza și restaurant cu evenimente.
        </p>

        <Link to="/camere" className="btn-book mt-9 md:mt-10">
          Rezervă acum
        </Link>
      </div>

      <SagaHeroTrustBar />
    </section>
  )
}
