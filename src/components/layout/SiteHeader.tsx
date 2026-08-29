import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NAV_EXPERIENCES } from '../../data/experiences'
import { RESERVATION_PHONE_DISPLAY } from '../../data/rooms'
import Container from './Container'

const NAV = [
  { label: 'Acasă', href: '/' },
  { label: 'Camere', href: '/camere' },
  ...NAV_EXPERIENCES.map((e) => ({ label: e.navLabel, href: `/${e.slug}` })),
]

export default function SiteHeader() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd8cf] bg-[#f6f3ee]/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6 lg:h-[80px]">
          <Link to="/" className="shrink-0">
            <span className="block font-serif text-[26px] font-normal leading-none tracking-[0.02em] text-[#1a1918] lg:text-[28px]">
              Saga
            </span>
            <span className="mt-1 block text-[9px] font-normal uppercase tracking-[0.22em] text-[#9c968d]">
              Victoria
            </span>
          </Link>

          <nav className="hidden items-center gap-8 xl:flex">
            {NAV.map((item) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    active ? 'text-[#1a1918]' : 'text-[#6f6a63] hover:text-[#1a1918]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+40747244344"
              className="hidden text-[11px] uppercase tracking-[0.14em] text-[#1a1918] transition hover:text-[#6f6a63] sm:block"
            >
              {RESERVATION_PHONE_DISPLAY}
            </a>
            <Link
              to="/camere"
              className="hidden border border-[#1a1918] px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-[#1a1918] transition hover:bg-[#1a1918] hover:text-[#f6f3ee] md:inline-block"
            >
              Rezervă
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] xl:hidden"
              aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={open}
            >
              <span className={`block h-px w-5 bg-[#1a1918] transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-[#1a1918] transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-5 bg-[#1a1918] transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[#ddd8cf] bg-[#f6f3ee] xl:hidden">
          <Container className="py-6">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`py-3 text-[12px] uppercase tracking-[0.14em] ${
                    location.pathname === item.href ? 'text-[#1a1918]' : 'text-[#6f6a63]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href="tel:+40747244344"
              className="mt-4 block py-2 text-[12px] tracking-wide text-[#6f6a63]"
            >
              {RESERVATION_PHONE_DISPLAY}
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
