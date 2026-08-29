import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { NAV_EXPERIENCES } from '../../data/experiences'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'
import { RESTAURANT_PHONE_DISPLAY } from '../../data/experiences'

function FooterLogo() {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden className="shrink-0 text-ink">
        <path d="M4 22L14 4l10 18H4z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 18h12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
        Saga Victoria
      </span>
    </Link>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-ink/70 transition hover:text-brand"
    >
      {children}
    </a>
  )
}

export default function SagaFooter() {
  return (
    <footer id="contact" className="footer-hotel border-t border-black/[0.06]">
      {/* Top, 3 coloane ca Hotel Sinaia */}
      <div className="container-hotel py-14 md:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1.15fr] lg:gap-0">
          {/* Brand & social */}
          <div className="lg:border-r lg:border-black/[0.08] lg:pr-12 xl:pr-16">
            <FooterLogo />
            <div className="mt-8 border-t border-black/[0.08] pt-8">
              <p className="text-[13px] text-muted">Urmărește-ne</p>
              <div className="mt-4 flex gap-5">
                <SocialIcon href="https://www.instagram.com/sagavictoria" label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/sagavictoria" label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* Navigare */}
          <div className="flex flex-col gap-4 lg:items-center lg:justify-start lg:border-r lg:border-black/[0.08] lg:px-10 xl:px-14">
            <Link to="/camere" className="footer-nav-link">Camere</Link>
            {NAV_EXPERIENCES.map((e) => (
              <Link key={e.slug} to={`/${e.slug}`} className="footer-nav-link">
                {e.navLabel}
              </Link>
            ))}
            <a href={`tel:+4${RESERVATION_PHONE}`} className="footer-nav-link">Contact</a>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-12 xl:pl-16">
            <h2 className="font-serif text-[clamp(1.35rem,2.5vw,1.65rem)] font-medium text-ink">
              Newsletter
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-muted">
              Abonează-te la newsletter-ul nostru și fii primul care primește oferte exclusive,
              noutăți și experiențe unice la Saga Victoria.
            </p>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center border-b border-black/20 pb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3 shrink-0 text-muted" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="min-w-0 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-muted/60"
                />
                <button type="submit" className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition hover:text-brand">
                  Trimite
                </button>
              </div>
              <label className="mt-4 flex cursor-pointer items-start gap-2.5">
                <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-brand" />
                <span className="text-[12px] leading-[1.55] text-muted">
                  Am citit și accept termenii și condițiile, precum și politica de confidențialitate.
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* Servicii / contact */}
      <div className="border-t border-black/[0.06] py-10 md:py-12">
        <div className="container-hotel text-center">
          <p className="text-[13px] text-muted">Experiențele Saga Victoria</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link to="/camere" className="footer-brand-link">Camere & Apartament</Link>
            <Link to="/pub" className="footer-brand-link">Pub & Pizza</Link>
            <Link to="/evenimente" className="footer-brand-link">Restaurant & Events</Link>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Str. Pieții 2A, Victoria · Camere {RESERVATION_PHONE_DISPLAY} · Restaurant {RESTAURANT_PHONE_DISPLAY}
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-black/[0.06] py-5">
        <div className="container-hotel flex flex-col items-start justify-between gap-3 text-[12px] text-muted/80 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span className="cursor-pointer transition hover:text-ink">Termeni și condiții</span>
            <span className="cursor-pointer transition hover:text-ink">Politica cookies</span>
          </div>
          <p>
            © {new Date().getFullYear()} Saga Victoria · realizat de{' '}
            <span className="text-ink/70">Carpathian Marketing Agency</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
