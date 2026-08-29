/** Asset-uri Saga Victoria */
export const SAGA = {
  hero: '/images/saga/hero-victoria-munti.jpg',
  menus: {
    pizza: '/menus/meniu-pizza-2026.pdf',
    events: '/menus/meniu-events-2026.pdf',
  },
  videos: {
    rooms: 'HEBVq9WNcmM',
    pub: 'SK-jvK_yUgM',
  },
} as const

const r = (path: string) => `/images/saga/${path}`

export const SAGA_ROOMS = {
  single: (n: number) => r(`rooms/single-${n}.jpeg`),
  double: (n: number) => r(`rooms/double-${n}.jpeg`),
  deluxe: (n: number) => r(`rooms/deluxe-${n}.jpeg`),
  apartment: (n: number) => r(`rooms/apartment-${n}.jpeg`),
  receptie: (n: number) => r(`rooms/receptie-${n}.jpeg`),
}

export const SAGA_RECEPTIE = r('rooms/saga-receptie.jpg')
export const SAGA_PUB_INTERIOR = r('pub/saga-pizza-pub-interior.jpg')
export const SAGA_CLADIRE_PUB = r('pub/saga-cladire-terasa.webp')
export const SAGA_INTRARE_PUB = r('pub/saga-intrare-pub.webp')
export const SAGA_PIZZERIE_VIEW = r('pub/saga-pizzerie-view-munti.webp')
export const SAGA_TERASA_VIEW = r('terasa/saga-terasa-view-munti.webp')
export const SAGA_TERASA_SEARA = r('terasa/saga-terasa-seara.webp')

export const SAGA_EVENTS = [
  ...Array.from({ length: 11 }, (_, i) => r(`events/events-${i + 1}.jpg`)),
  r('events/events-13.jpg'),
]

export const SAGA_MENU_FOOD = Array.from({ length: 8 }, (_, i) =>
  r(`menu/mancare-${i + 1}.jpeg`),
)

export const SAGA_PUB_CURATED = [SAGA_CLADIRE_PUB, SAGA_PUB_INTERIOR, SAGA_TERASA_VIEW]

export const SAGA_EVENTS_CURATED = [
  r('events/events-1.jpg'),
  r('menu/mancare-1.jpeg'),
  r('events/events-5.jpg'),
]

export const SAGA_ROOMS_CURATED = [
  r('rooms/apartment-6.jpeg'),
  SAGA_RECEPTIE,
  r('rooms/deluxe-1.jpeg'),
]

export const SAGA_HOME_SERVICES = {
  pub: SAGA_CLADIRE_PUB,
  events: r('events/events-1.jpg'),
  rooms: SAGA_RECEPTIE,
} as const

export const SAGA_PUB_GALLERY = [
  SAGA_PUB_INTERIOR,
  SAGA_PIZZERIE_VIEW,
  SAGA_CLADIRE_PUB,
  SAGA_INTRARE_PUB,
  SAGA_TERASA_VIEW,
  SAGA_TERASA_SEARA,
]

export const SAGA_DESTINATION_SCENERY = [
  SAGA_PIZZERIE_VIEW,
  SAGA_TERASA_VIEW,
  SAGA_CLADIRE_PUB,
]
