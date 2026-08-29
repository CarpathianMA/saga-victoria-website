import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from './Button'
import { NAV_EXPERIENCES } from '../data/experiences'

const navLinks = [
  { label: 'Acasă', href: '/' },
  { label: 'Camere', href: '/camere' },
  ...NAV_EXPERIENCES.map((e) => ({ label: e.navLabel, href: `/${e.slug}` })),
]

interface NavbarProps {
  variant?: 'hero' | 'light'
}

export default function Navbar({ variant = 'hero' }: NavbarProps) {
  const [active, setActive] = useState('Acasă')
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isLight = variant === 'light'

  useEffect(() => {
    const match = navLinks.find((l) => l.href === location.pathname)
    if (match) setActive(match.label)
    else if (location.pathname === '/') setActive('Acasă')
    setOpen(false)
  }, [location.pathname])

  const textClass = isLight ? 'text-neutral-900' : 'text-white'
  const subClass = isLight ? 'text-neutral-400' : 'text-white/55'

  return (
    <nav className={`relative z-20 px-6 pt-6 md:px-12 md:pt-8 lg:px-20 ${isLight ? 'border-b border-neutral-200/80 bg-[#faf8f5]/95 pb-6 backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
        <Link to="/" className={`flex shrink-0 flex-col ${textClass}`}>
          <span className="font-serif text-[clamp(24px,2.5vw,30px)] font-light leading-none tracking-[0.06em]">
            Saga
          </span>
          <span className={`mt-1.5 text-[9px] font-medium uppercase tracking-[0.2em] ${subClass}`}>
            Victoria
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition ${
                  active === link.label
                    ? isLight
                      ? 'text-neutral-900'
                      : 'text-white'
                    : isLight
                      ? 'text-neutral-400 hover:text-neutral-800'
                      : 'text-white/50 hover:text-white/90'
                }`}
              >
                {link.label}
                {active === link.label && (
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px ${isLight ? 'bg-neutral-900' : 'bg-white/70'}`}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button href="/camere" variant={isLight ? 'outline-dark' : 'outline-white'} size="hero">
              Rezervă
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden ${textClass}`}
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={open}
          >
            <span className={`block h-px w-5 bg-current transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`mt-4 border-t pt-4 lg:hidden ${isLight ? 'border-neutral-200' : 'border-white/15'}`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`block px-2 py-3 text-[12px] font-medium uppercase tracking-[0.14em] ${
                    active === link.label
                      ? isLight
                        ? 'text-neutral-900'
                        : 'text-white'
                      : isLight
                        ? 'text-neutral-500'
                        : 'text-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-2">
            <Button href="/camere" variant={isLight ? 'outline-dark' : 'outline-white'} className="w-full justify-center">
              Rezervă
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
