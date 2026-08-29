import { Link } from 'react-router-dom'
import Button from './Button'
import PhotoSpread from './editorial/PhotoSpread'
import { SAGA_ROOMS } from '../data/sagaAssets'
import { formatPrice } from '../data/rooms'

export default function HomeRoomsTeaser() {
  return (
    <section id="rooms" className="overflow-hidden bg-neutral-950 px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="editorial-reveal lg:pr-8">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-white/40">
            Capitolul cazării
          </p>
          <h2 className="mb-6 font-serif text-[clamp(32px,3.8vw,48px)] font-light leading-[1.1] text-white">
            Un somn liniștit,
            <br />
            <span className="italic">la parter</span> de pub
          </h2>
          <p className="drop-cap mb-8 max-w-[440px] text-[15px] leading-[1.9] text-white/60">
            Camerele Saga sunt gândite pentru călători care apreciază simplitatea
            elegantă, lenjerie curată, lumină caldă, liniște după o zi pe munte.
            De la {formatPrice(260)} pe noapte.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href="/camere" variant="outline-white">
              Vezi toate camerele
            </Button>
            <Link
              to="/camere"
              className="text-[12px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
            >
              Galerie foto
            </Link>
          </div>
        </div>

        <div className="editorial-reveal pb-12 md:pb-16">
          <PhotoSpread
            images={[SAGA_ROOMS.deluxe(1), SAGA_ROOMS.double(2)]}
            alt="Camere Saga Victoria"
            layout="stack"
          />
        </div>
      </div>
    </section>
  )
}
