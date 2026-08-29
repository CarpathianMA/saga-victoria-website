import { RESERVATION_PHONE } from '../../data/rooms'
import { SAGA_ROOMS_CURATED } from '../../data/sagaAssets'

export default function SagaRoomsOffers() {
  return (
    <section className="relative min-h-[360px] md:min-h-[420px]">
      <img
        src={SAGA_ROOMS_CURATED[0]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-hotel relative flex min-h-[360px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[420px]">
        <span className="mb-4 inline-block border border-white/40 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white">
          Cel mai bun tarif garantat
        </span>
        <h2 className="max-w-[640px] font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.2] text-white">
          Oferte speciale
        </h2>
        <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/85">
          Rezervă direct la Saga Victoria și beneficiază de cel mai bun preț la camere,
          simplu, rapid, fără intermediari.
        </p>
        <a href={`tel:+4${RESERVATION_PHONE}`} className="link-arrow mt-8 !text-white hover:!opacity-90">
          Rezervă acum
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  )
}
