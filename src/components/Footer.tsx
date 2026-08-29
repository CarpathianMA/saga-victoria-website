import { Link } from 'react-router-dom'
import { NAV_EXPERIENCES } from '../data/experiences'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../data/rooms'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <p className="mb-2 font-serif text-[clamp(36px,4vw,52px)] font-light leading-none tracking-wide">
              Saga
            </p>
            <p className="mb-8 max-w-[360px] text-[14px] leading-[1.85] text-white/50">
              Camere, pub, restaurant & evenimente în Victoria, Țara Făgărașului.
              Un complex, multe povești.
            </p>
            <a
              href={`tel:+4${RESERVATION_PHONE}`}
              className="inline-block font-serif text-[clamp(22px,2.5vw,28px)] font-light text-white transition hover:text-white/80"
            >
              {RESERVATION_PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-white/35">
              Str. Pieții 2A · Victoria
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                Cazare
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/camere" className="text-[13px] text-white/55 transition hover:text-white">
                    Camere
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                Experiențe
              </h4>
              <ul className="space-y-3">
                {NAV_EXPERIENCES.map((e) => (
                  <li key={e.slug}>
                    <Link
                      to={`/${e.slug}`}
                      className="text-[13px] text-white/55 transition hover:text-white"
                    >
                      {e.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                Social
              </h4>
              <ul className="space-y-3">
                {['Facebook', 'Instagram'].map((s) => (
                  <li key={s}>
                    <a
                      href="https://sagavictoria.ro/"
                      className="text-[13px] text-white/55 transition hover:text-white"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <span className="text-[12px] text-white/35">
            © {new Date().getFullYear()} Saga Victoria · #tarafagarasului
          </span>
          <a
            href="https://sagavictoria.ro/"
            className="text-[12px] text-white/35 transition hover:text-white/70"
          >
            sagavictoria.ro
          </a>
        </div>
      </div>
    </footer>
  )
}
