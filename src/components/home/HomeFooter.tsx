import { Link } from 'react-router-dom'
import { useState } from 'react'
import { NAV_EXPERIENCES } from '../../data/experiences'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'
import { SAGA_PUB_CURATED, SAGA_ROOMS_CURATED, SAGA_EVENTS_CURATED } from '../../data/sagaAssets'

const STRIP = [...SAGA_ROOMS_CURATED, ...SAGA_PUB_CURATED, ...SAGA_EVENTS_CURATED].slice(0, 5)

export default function HomeFooter() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-[#f5f5f0]">
      <div className="border-b border-[#e8e6e0] px-6 py-16 md:px-10 md:py-20">
        <div className="container-wide flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-serif text-[clamp(1.35rem,2.4vw,1.75rem)] font-normal text-[#3a4038]">
              Stay in the loop
            </h3>
            <p className="mt-2 text-[14px] font-light text-[#6d756a]">News & offers from Saga Victoria.</p>
          </div>
          <form
            className="flex w-full max-w-[420px]"
            onSubmit={(e) => {
              e.preventDefault()
              setEmail('')
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="min-w-0 flex-1 border border-[#e8e6e0] border-r-0 bg-white px-4 py-3 text-[13px] font-light text-[#3a4038] outline-none placeholder:text-[#a3a89e]"
            />
            <button type="submit" className="btn-fill-olive shrink-0">
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="px-6 py-16 md:px-10 md:py-20">
        <div className="container-wide grid gap-12 md:grid-cols-5 md:gap-8">
          <div>
            <p className="font-serif text-[1.65rem] font-normal text-[#3a4038]">Saga</p>
            <div className="mt-6 flex gap-5">
              {['Ig', 'Fb'].map((s) => (
                <a
                  key={s}
                  href="https://sagavictoria.ro/"
                  className="text-[10px] font-normal uppercase tracking-[0.16em] text-[#6d756a] hover:text-[#3a4038]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-normal uppercase tracking-[0.24em] text-[#a3a89e]">Rooms</p>
            <Link to="/camere" className="text-[14px] font-light text-[#6d756a] hover:text-[#3a4038]">
              Camere
            </Link>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-normal uppercase tracking-[0.24em] text-[#a3a89e]">Dining</p>
            <ul className="space-y-2.5">
              {NAV_EXPERIENCES.map((e) => (
                <li key={e.slug}>
                  <Link to={`/${e.slug}`} className="text-[14px] font-light text-[#6d756a] hover:text-[#3a4038]">
                    {e.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-normal uppercase tracking-[0.24em] text-[#a3a89e]">Contact</p>
            <ul className="space-y-2 text-[14px] font-light text-[#6d756a]">
              <li>Str. Pieții 2A</li>
              <li>Victoria, RO</li>
              <li>
                <a href={`tel:+4${RESERVATION_PHONE}`} className="hover:text-[#3a4038]">
                  {RESERVATION_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-normal uppercase tracking-[0.24em] text-[#a3a89e]">Legal</p>
            <ul className="space-y-2">
              <li>
                <a href="https://sagavictoria.ro/" className="text-[14px] font-light text-[#6d756a] hover:text-[#3a4038]">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-px bg-[#e8e6e0]">
        {STRIP.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-[#f0efeb]">
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e8e6e0] px-6 py-5 md:px-10">
        <span className="text-[11px] font-light text-[#a3a89e]">© {new Date().getFullYear()} Saga Victoria</span>
        <span className="text-[11px] font-light text-[#a3a89e]">#tarafagarasului</span>
      </div>
    </footer>
  )
}
