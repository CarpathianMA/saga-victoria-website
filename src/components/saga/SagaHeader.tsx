import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'
import SagaMenuOverlay from './SagaMenuOverlay'

interface SagaHeaderProps {
  /** Header transparent peste hero, ca Hotel Sinaia homepage */
  overlay?: boolean
}

export default function SagaHeader({ overlay = false }: SagaHeaderProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const showOverlayNav = overlay && !scrolled && !menuOpen
  const lineColor = showOverlayNav ? 'bg-white' : 'bg-ink'

  return (
    <>
      {/* Nav transparent peste hero */}
      {showOverlayNav && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-50">
          <div className="container-hotel pointer-events-auto flex items-center justify-between gap-4 py-5 md:py-6">
            <a
              href={`tel:+4${RESERVATION_PHONE}`}
              className="hidden max-w-[280px] rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] leading-snug text-white/90 backdrop-blur-sm transition hover:bg-white/15 sm:inline-block md:max-w-none md:text-[12px]"
            >
              Victoria · Rezervă direct · cel mai bun preț
            </a>
            <span className="sm:hidden" aria-hidden />

            <div className="flex items-center gap-5 md:gap-6">
              <a
                href={`tel:+4${RESERVATION_PHONE}`}
                className="hidden items-center gap-2 text-[13px] text-white/90 transition hover:text-white sm:flex"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L16 13l5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                +4{RESERVATION_PHONE}
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
                aria-label="Deschide meniul"
                aria-expanded={menuOpen}
              >
                <span className={`block h-px w-6 ${lineColor}`} />
                <span className={`block h-px w-6 ${lineColor}`} />
                <span className={`block h-px w-6 ${lineColor}`} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header solid, după scroll sau pagini interioare */}
      {(!overlay || scrolled || menuOpen) && (
        <>
          {!overlay && (
            <div className="bg-brand py-2.5 text-center text-[12px] tracking-wide text-white/90">
              <a href={`tel:+4${RESERVATION_PHONE}`} className="transition hover:text-white">
                Rezervă direct la {RESERVATION_PHONE_DISPLAY} · cel mai bun preț garantat
              </a>
            </div>
          )}

          <header
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${
              overlay && scrolled
                ? 'border-black/5 bg-page/95 backdrop-blur-md header-scrolled'
                : overlay
                  ? 'border-transparent bg-page/95 backdrop-blur-md'
                  : `border-black/5 bg-page/95 backdrop-blur-md ${scrolled ? 'header-scrolled' : ''}`
            }`}
          >
            <div className="container-hotel flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
                aria-label="Deschide meniul"
                aria-expanded={menuOpen}
              >
                <span className="block h-px w-5 bg-ink" />
                <span className="block h-px w-5 bg-ink" />
                <span className="block h-px w-5 bg-ink" />
              </button>

              <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-center">
                <span className="block font-serif text-[22px] font-normal leading-none text-ink lg:text-[26px]">
                  Saga
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-muted">
                  Victoria
                </span>
              </Link>

              <Link to="/camere" className="btn-book !px-5 !py-2.5">
                Rezervă
              </Link>
            </div>
          </header>
        </>
      )}

      <SagaMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
