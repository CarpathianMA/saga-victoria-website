import { Link } from 'react-router-dom'
import { SAGA_ROOMS_CURATED } from '../../data/sagaAssets'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'

export default function SagaCrossSell() {
  return (
    <section className="section-hotel-compact bg-white">
      <div className="container-hotel">
        <div className="grid items-center gap-10 overflow-hidden border border-black/5 bg-page lg:grid-cols-2">
          <div className="img-zoom aspect-[16/10] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[280px]">
            <img src={SAGA_ROOMS_CURATED[2]} alt="Camere Saga Victoria" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="p-8 md:p-10">
            <p className="label-hotel">Cazare</p>
            <h2 className="mt-2 font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal text-ink">
              Rămâi la Saga după masă sau eveniment
            </h2>
            <p className="mt-4 prose-hotel">
              Zece camere și un apartament, cu parcare gratuită, Wi-Fi și acces direct la pub și restaurant.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/camere" className="btn-book">Vezi camerele</Link>
              <a href={`tel:+4${RESERVATION_PHONE}`} className="btn-outline-hotel">
                {RESERVATION_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
