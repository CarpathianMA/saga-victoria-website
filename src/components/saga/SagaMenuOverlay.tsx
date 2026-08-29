import { Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'
import { RESTAURANT_PHONE_DISPLAY } from '../../data/experiences'
import {
  SAGA,
  SAGA_EVENTS_CURATED,
  SAGA_PIZZERIE_VIEW,
  SAGA_PUB_CURATED,
  SAGA_ROOMS_CURATED,
} from '../../data/sagaAssets'
import { CloseIcon } from './sagaUi'

const DEFAULT_MENU_IMAGE = SAGA.hero

interface MenuItem {
  label: string
  href: string
  preview: string
}

/** Perechi de linkuri, grid 2 coloane ca Hotel Sinaia */
const MENU_ROWS: MenuItem[][] = [
  [
    { label: 'Acasă', href: '/', preview: SAGA.hero },
    { label: 'Camere', href: '/camere', preview: SAGA_ROOMS_CURATED[1] },
  ],
  [
    { label: 'Pub & Pizza', href: '/pub', preview: SAGA_PUB_CURATED[0] },
    { label: 'Restaurant & Events', href: '/evenimente', preview: SAGA_EVENTS_CURATED[0] },
  ],
  [
    { label: 'Contact', href: '/#contact', preview: SAGA_PIZZERIE_VIEW },
    { label: 'Rezervă', href: '/camere', preview: SAGA_ROOMS_CURATED[0] },
  ],
]

const ALL_MENU_IMAGES = Array.from(
  new Set([DEFAULT_MENU_IMAGE, ...MENU_ROWS.flat().map((item) => item.preview)]),
)

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  if (href.startsWith('/#')) return false
  return pathname === href
}

function SagaLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="inline-flex items-center gap-3">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden className="shrink-0 text-ink">
        <path d="M4 22L14 4l10 18H4z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M8 18h12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
        Saga Victoria
      </span>
    </Link>
  )
}

function MenuPreviewImages({ activeImage }: { activeImage: string }) {
  return (
    <>
      {ALL_MENU_IMAGES.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className={`menu-preview-img absolute inset-0 h-full w-full object-cover ${
            src === activeImage ? 'menu-preview-img-active' : ''
          }`}
        />
      ))}
    </>
  )
}

interface SagaMenuOverlayProps {
  open: boolean
  onClose: () => void
}

export default function SagaMenuOverlay({ open, onClose }: SagaMenuOverlayProps) {
  const location = useLocation()
  const [hoveredPreview, setHoveredPreview] = useState<string | null>(null)

  const activeImage = hoveredPreview ?? DEFAULT_MENU_IMAGE

  const flatItems = useMemo(() => MENU_ROWS.flat(), [])

  useEffect(() => {
    if (!open) return
    setHoveredPreview(null)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    ALL_MENU_IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [open])

  if (!open) return null

  const previewPanel = (
    <>
      <MenuPreviewImages activeImage={activeImage} />
      <div className="absolute inset-0 bg-black/10 transition-opacity duration-700" aria-hidden />

      <div className="absolute left-0 right-0 top-0 flex items-center justify-end gap-6 px-8 py-6">
        <a
          href={`tel:+4${RESERVATION_PHONE}`}
          className="text-[14px] text-white/90 transition hover:text-white"
        >
          +4{RESERVATION_PHONE}
        </a>
        <a
          href="tel:+40757944944"
          className="hidden text-[14px] text-white/90 transition hover:text-white xl:block"
        >
          {RESTAURANT_PHONE_DISPLAY}
        </a>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="menu-close-btn absolute right-6 top-6 xl:right-8 xl:top-8"
        aria-label="Închide meniul"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </>
  )

  const linkHandlers = (item: MenuItem) => ({
    onMouseEnter: () => setHoveredPreview(item.preview),
    onFocus: () => setHoveredPreview(item.preview),
    onTouchStart: () => setHoveredPreview(item.preview),
  })

  return (
    <div
      className="menu-overlay fixed inset-0 z-[100] bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Meniu principal"
    >
      {/* Mobile */}
      <div className="flex h-full flex-col overflow-y-auto lg:hidden">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-white px-5 py-4">
          <SagaLogo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="menu-close-btn"
            aria-label="Închide meniul"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="relative h-[32vh] min-h-[200px] shrink-0 overflow-hidden bg-surface">
          <MenuPreviewImages activeImage={activeImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <a href={`tel:+4${RESERVATION_PHONE}`} className="text-[14px] text-white">
              {RESERVATION_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <nav className="flex-1 px-5 py-6" aria-label="Navigare">
          {flatItems.map((item) => {
            const active = isActive(location.pathname, item.href)
            return (
              <Link
                key={item.href + item.label}
                to={item.href}
                onClick={onClose}
                {...linkHandlers(item)}
                className={`menu-link-mobile ${active ? 'text-brand' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-black/5 px-5 py-6">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Urmărește-ne</p>
          <div className="mt-3 flex gap-6">
            <a href="https://www.facebook.com/sagavictoria" target="_blank" rel="noopener noreferrer" className="menu-social" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/sagavictoria" target="_blank" rel="noopener noreferrer" className="menu-social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <p className="mt-5 text-[13px] text-muted">Str. Pieții 2A, Victoria</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden h-full lg:flex">
        <div className="flex w-[42%] max-w-[560px] min-w-[400px] flex-col border-r border-black/5 bg-white px-12 py-10 xl:px-16 xl:py-12">
          <SagaLogo onClick={onClose} />

          <nav
            className="my-auto py-10"
            aria-label="Navigare"
            onMouseLeave={() => setHoveredPreview(null)}
          >
            {MENU_ROWS.map((row, rowIndex) => (
              <div
                key={row.map((i) => i.href).join('-')}
                className={`grid grid-cols-2 gap-x-10 ${rowIndex < MENU_ROWS.length - 1 ? 'border-b border-black/[0.08] pb-6 mb-6' : ''}`}
              >
                {row.map((item) => (
                  <Link
                    key={item.href + item.label}
                    to={item.href}
                    onClick={onClose}
                    {...linkHandlers(item)}
                    className={`menu-link-desktop ${isActive(location.pathname, item.href) ? 'text-brand' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <div className="border-t border-black/[0.08] pt-8">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Urmărește-ne</p>
            <div className="mt-4 flex gap-6">
              <a href="https://www.facebook.com/sagavictoria" target="_blank" rel="noopener noreferrer" className="menu-social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/sagavictoria" target="_blank" rel="noopener noreferrer" className="menu-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden bg-surface">
          {previewPanel}
        </div>
      </div>
    </div>
  )
}
