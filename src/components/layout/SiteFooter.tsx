import { Link } from 'react-router-dom'
import { NAV_EXPERIENCES } from '../../data/experiences'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'
import Container from './Container'

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#ddd8cf] bg-[#f6f3ee] pt-20 pb-10">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <p className="font-serif text-[32px] font-normal leading-none text-[#1a1918]">Saga</p>
            <p className="mt-6 max-w-[260px] text-[15px] leading-[1.75] text-[#6f6a63]">
              Camere, pub & pizza, restaurant & events, Str. Pieții 2A, Victoria.
            </p>
            <a
              href={`tel:+4${RESERVATION_PHONE}`}
              className="mt-6 inline-block text-[15px] text-[#1a1918] hover:underline"
            >
              {RESERVATION_PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#9c968d]">Cazare</p>
            <ul className="space-y-3">
              <li>
                <Link to="/camere" className="text-[14px] text-[#6f6a63] transition hover:text-[#1a1918]">
                  Camere
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#9c968d]">Experiențe</p>
            <ul className="space-y-3">
              {NAV_EXPERIENCES.map((e) => (
                <li key={e.slug}>
                  <Link
                    to={`/${e.slug}`}
                    className="text-[14px] text-[#6f6a63] transition hover:text-[#1a1918]"
                  >
                    {e.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#9c968d]">Contact</p>
            <ul className="space-y-3 text-[14px] text-[#6f6a63]">
              <li>Str. Pieții 2A, Victoria</li>
              <li>
                <a href="https://sagavictoria.ro/" className="hover:text-[#1a1918]">
                  sagavictoria.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#ddd8cf] pt-8">
          <span className="text-[13px] text-[#9c968d]">
            © {new Date().getFullYear()} Saga Victoria
          </span>
          <span className="text-[13px] text-[#9c968d]">#tarafagarasului</span>
        </div>
      </Container>
    </footer>
  )
}
