/** Navigare + conținut homepage pentru Pub & Evenimente */
export const RESTAURANT_PHONE = '0757944944'
export const RESTAURANT_PHONE_DISPLAY = '0757 944 944'

export interface NavExperience {
  slug: string
  navLabel: string
  title: string
  homeBlurb: string
  ctaLabel: string
  ctaHref: string
  navOrder: number
}

export const EXPERIENCES: NavExperience[] = [
  {
    slug: 'pub',
    navLabel: 'Pub & Pizza',
    title: 'Saga Pizza & Pub',
    homeBlurb: 'Pizza, bar și terasa, la parterul complexului.',
    ctaLabel: 'Rezervă masă',
    ctaHref: `tel:+4${RESTAURANT_PHONE}`,
    navOrder: 2,
  },
  {
    slug: 'evenimente',
    navLabel: 'Restaurant & Events',
    title: 'Restaurant & Events',
    homeBlurb: 'Mese à la carte și sala de evenimente, sub același acoperiș.',
    ctaLabel: 'Cere ofertă',
    ctaHref: `tel:+4${RESTAURANT_PHONE}`,
    navOrder: 3,
  },
]

export const EXPERIENCE_REDIRECTS: Record<string, string> = {
  terasa: 'pub',
  restaurant: 'evenimente',
  covrigarie: '/',
}

export const NAV_EXPERIENCES = [...EXPERIENCES].sort((a, b) => a.navOrder - b.navOrder)
