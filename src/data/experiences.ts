import {
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_DISPLAY,
  SAGA,
  SAGA_EVENTS,
  SAGA_EVENTS_CURATED,
  SAGA_MENU_FOOD,
  SAGA_PUB,
  SAGA_PUB_CURATED,
  SAGA_RESTAURANT,
  SAGA_TERASA,
} from './sagaAssets'

export interface MenuItem {
  name: string
  price?: string
  description?: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

export interface Experience {
  slug: string
  navLabel: string
  title: string
  tagline: string
  description: string
  location: string
  images: string[]
  highlights: string[]
  menu?: MenuSection[]
  menuNote?: string
  menuPdf?: string
  menuPdfLabel?: string
  menuDownloads?: { href: string; label: string }[]
  videoId?: string
  ctaLabel: string
  ctaHref: string
  showInNav: boolean
  navOrder: number
  homeBlurb: string
}

/** Doar 2 experiențe în nav + camere = 3 piloni ai site-ului */
export const EXPERIENCES: Experience[] = [
  {
    slug: 'pub',
    navLabel: 'Pub & Pizza',
    title: 'Saga Pizza & Pub',
    tagline: 'Pizza, bar & terasă · Str. Pieții 2A',
    description:
      'La parter găsești tot ce ai nevoie pentru o seară reușită: pizza proaspătă, meniu pub, bar și cafenea. Vara, același meniu continuă pe terasa Saga, cu mese în aer liber și priveliște spre munți.',
    location: 'Str. Pieții 2A, Victoria',
    images: SAGA_PUB_CURATED,
    highlights: ['Pizza & meniu pub', 'Bar & cafenea', 'Terasă (vară)'],
    menuPdf: SAGA.menus.pizza,
    menuPdfLabel: 'Meniu Pizza & Pub (PDF)',
    menuNote: 'Meniul complet, actualizat 2026.',
    videoId: SAGA.videos.pub,
    ctaLabel: 'Rezervă masă',
    ctaHref: `tel:+4${RESTAURANT_PHONE}`,
    showInNav: true,
    navOrder: 2,
    homeBlurb: 'Pizza, bar și terasa, la parterul complexului.',
  },
  {
    slug: 'evenimente',
    navLabel: 'Restaurant & Events',
    title: 'Restaurant & Events',
    tagline: 'À la carte & sală de evenimente · Str. Pieții 2A',
    description:
      'Restaurant à la carte pentru mese liniștite și sală modernă pentru nunți, botezuri sau evenimente corporate. Catering Saga și cazare pentru invitați, totul în același complex.',
    location: 'Str. Pieții 2A, Victoria',
    images: SAGA_EVENTS_CURATED,
    highlights: ['Servire à la carte', 'Nunți & botezuri', 'Catering & cazare invitați'],
    menuPdf: SAGA.menus.events,
    menuPdfLabel: 'Meniu Events (PDF)',
    menuNote: 'Meniu dedicat evenimentelor și cateringului.',
    ctaLabel: 'Cere ofertă',
    ctaHref: `tel:+4${RESTAURANT_PHONE}`,
    showInNav: true,
    navOrder: 3,
    homeBlurb: 'Mese à la carte și sala de evenimente, sub același acoperiș.',
  },
]

/** Slug-uri vechi → redirect */
export const EXPERIENCE_REDIRECTS: Record<string, string> = {
  terasa: 'pub',
  restaurant: 'evenimente',
  covrigarie: '/',
}

export const NAV_EXPERIENCES = EXPERIENCES.filter((e) => e.showInNav).sort(
  (a, b) => a.navOrder - b.navOrder,
)

export function getExperienceBySlug(slug: string) {
  const resolved = EXPERIENCE_REDIRECTS[slug] ?? slug
  if (resolved.startsWith('/')) return undefined
  return EXPERIENCES.find((e) => e.slug === resolved)
}

export function getExperienceRedirect(slug: string): string | null {
  const target = EXPERIENCE_REDIRECTS[slug]
  if (target?.startsWith('/')) return target
  return null
}

export { RESTAURANT_PHONE, RESTAURANT_PHONE_DISPLAY }

/** Re-export pentru compatibilitate, nu mai folosim galerii extinse */
export { SAGA_PUB, SAGA_RESTAURANT, SAGA_TERASA, SAGA_EVENTS, SAGA_MENU_FOOD }
