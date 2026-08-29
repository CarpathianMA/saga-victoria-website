import { Link } from 'react-router-dom'
import { useState } from 'react'

const NAV = [
  { label: 'Camere', href: '/camere' },
  { label: 'Pub & Pizza', href: '/pub' },
  { label: 'Restaurant & Events', href: '/evenimente' },
]

interface HomeNavProps {
  light?: boolean
}

export default function HomeNav({ light = true }: HomeNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`absolute inset-x-0 top-0 z-50 ${light ? '' : 'relative bg-white'}`}>
      <div className="mx-auto grid h-[76px] max-w-[1140px] grid-cols-[1fr_auto_1fr] items-center px-6 md:h-[84px] md:px-10">
        <Link
          to="/"
          className={`justify-self-start font-serif text-[21px] font-normal tracking-[0.06em] ${
            light ? 'text-white' : 'text-[#3a4038]'
          }`}
        >
          Saga
        </Link>

        <nav className="hidden justify-self-center md:flex md:gap-9">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-[10px] font-normal uppercase tracking-[0.2em] transition ${
                light ? 'text-white/75 hover:text-white' : 'text-[#6d756a] hover:text-[#3a4038]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <Link
            to="/camere"
            className={`hidden sm:inline-block ${light ? 'btn-ghost-light' : 'btn-ghost-dark'}`}
          >
            Book now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden ${
              light ? 'text-white' : 'text-[#3a4038]'
            }`}
            aria-label="Meniu"
          >
            <span className={`block h-px w-[18px] bg-current transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-[18px] bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-[18px] bg-current transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`border-t px-6 py-6 md:hidden ${
            light ? 'border-white/15 bg-[#3e4e35]/90 backdrop-blur-sm' : 'border-[#e8e6e0] bg-white'
          }`}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block py-3 text-[11px] font-normal uppercase tracking-[0.18em] ${
                light ? 'text-white/90' : 'text-[#3a4038]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
