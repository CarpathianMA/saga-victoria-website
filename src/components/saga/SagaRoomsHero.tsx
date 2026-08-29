import { Link } from 'react-router-dom'
import { RESERVATION_PHONE } from '../../data/rooms'
import { SAGA_RECEPTIE } from '../../data/sagaAssets'
import { SagaHeroTrustBar, SagaLogoMark } from './sagaHeroShared'

export default function SagaRoomsHero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[80vh]">
      <img
        src={SAGA_RECEPTIE}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-hotel relative flex min-h-[72vh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:min-h-[80vh] md:pb-32">
        <Link to="/" className="inline-flex flex-col items-center text-white">
          <SagaLogoMark light />
        </Link>

        <h1 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.08] text-white">
          Camere & Apartament
        </h1>

        <a href={`tel:+4${RESERVATION_PHONE}`} className="btn-book mt-10">
          Rezervă acum
        </a>
      </div>

      <SagaHeroTrustBar />
    </section>
  )
}
