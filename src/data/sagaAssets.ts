/** Asset-uri Saga Victoria, poze curate, plasate strategic pe site */
export const SAGA = {
  /** Hero homepage, min. recomandat 1920×1080; fișier: public/images/saga/hero-victoria-munti.jpg */
  hero: '/images/saga/hero-victoria-munti.jpg',
  imprejurimi: '/images/saga/imprejurimi.jpeg',
  tarife: '/images/saga/tarife-2026.jpeg',
  livrari: '/images/saga/livrari.jpeg',
  menus: {
    pizza: '/menus/meniu-pizza-2026.pdf',
    events: '/menus/meniu-events-2026.pdf',
  },
  videos: {
    rooms: 'HEBVq9WNcmM',
    pub: 'SK-jvK_yUgM',
  },
} as const

export const RESTAURANT_PHONE = '0757944944'
export const RESTAURANT_PHONE_DISPLAY = '0757 944 944'

const r = (path: string) => `/images/saga/${path}`

export const SAGA_ROOMS = {
  single: (n: number) => r(`rooms/single-${n}.jpeg`),
  double: (n: number) => r(`rooms/double-${n}.jpeg`),
  deluxe: (n: number) => r(`rooms/deluxe-${n}.jpeg`),
  apartment: (n: number) => r(`rooms/apartment-${n}.jpeg`),
  receptie: (n: number) => r(`rooms/receptie-${n}.jpeg`),
}

/** Recepție Saga Rooms, bun venit, design boutique */
export const SAGA_RECEPTIE = r('rooms/saga-receptie.jpg')

export const SAGA_PUB = Array.from({ length: 12 }, (_, i) => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 11, 14, 15, 16, 17]
  return r(`pub/pizza-${ids[i]}.jpeg`)
})

/** Interior pub, logo iluminat pe brick */
export const SAGA_PUB_INTERIOR = r('pub/saga-pizza-pub-interior.jpg')

/** Interior dining, mese, green banquette */
export const SAGA_PUB_INTERIOR_DINING = r('pub/saga-pub-interior-dining.webp')

/** Exterior, clădire, terasă lemn, semne Saga Pizza & Pub */
export const SAGA_CLADIRE_PUB = r('pub/saga-cladire-terasa.webp')

/** Intrare twilight, Cafe · Bar · Games · Sports Bar */
export const SAGA_INTRARE_PUB = r('pub/saga-intrare-pub.webp')

/** Vedere din interior spre munți la apus */
export const SAGA_PIZZERIE_VIEW = r('pub/saga-pizzerie-view-munti.webp')

export const SAGA_RESTAURANT = [
  r('restaurant/cafenea-1.jpeg'),
  r('restaurant/cafenea-4.jpeg'),
  r('restaurant/cafenea-5.jpeg'),
  r('restaurant/cafenea-6.jpeg'),
  r('restaurant/cafenea-7.jpeg'),
  r('restaurant/cafenea1.jpg'),
  r('restaurant/cafenea2.jpg'),
  r('restaurant/cafenea4.jpg'),
]

export const SAGA_EVENTS = [
  ...Array.from({ length: 11 }, (_, i) => r(`events/events-${i + 1}.jpg`)),
  r('events/events-13.jpg'),
]

export const SAGA_TERASA = [
  r('terasa/terasa-1.jpeg'),
  r('terasa/terasa-2.jpeg'),
  r('terasa/terasa-3.jpeg'),
  r('terasa/terasa-4.jpeg'),
  r('terasa/terasa-5.jpeg'),
  r('terasa/terasa-about-2.jpg'),
  r('terasa/terasa-about-3.jpg'),
  r('terasa/terasa-about-4.jpg'),
  r('terasa/terasa-about-5.jpg'),
]

/** Terasă zi, umbrelă, priveliște munți */
export const SAGA_TERASA_VIEW = r('terasa/saga-terasa-view-munti.webp')

/** Terasă noapte, lounge, lumini, atmosferă socială */
export const SAGA_TERASA_SEARA = r('terasa/saga-terasa-seara.webp')

export const SAGA_COVRIGARIE = Array.from({ length: 14 }, (_, i) =>
  r(`covrigarie/covrigarie-${i + 1}.jpg`),
)

export const SAGA_MENU_FOOD = Array.from({ length: 8 }, (_, i) =>
  r(`menu/mancare-${i + 1}.jpeg`),
)

export const SAGA_MENU_DRINKS = Array.from({ length: 8 }, (_, i) =>
  r(`menu/bauturi-${i + 1}.jpeg`),
)

/** Preview meniu overlay, clădire, interior, terasă */
export const SAGA_PUB_CURATED = [
  SAGA_CLADIRE_PUB,
  SAGA_PUB_INTERIOR,
  SAGA_TERASA_VIEW,
]

export const SAGA_EVENTS_CURATED = [
  r('events/events-1.jpg'),
  r('menu/mancare-1.jpeg'),
  r('events/events-5.jpg'),
]

/** Camere, apartament, recepție, deluxe */
export const SAGA_ROOMS_CURATED = [
  r('rooms/apartment-6.jpeg'),
  SAGA_RECEPTIE,
  r('rooms/deluxe-1.jpeg'),
]

/** Homepage „Profită la maximum” */
export const SAGA_HOME_SERVICES = {
  pub: SAGA_CLADIRE_PUB,
  events: r('events/events-1.jpg'),
  rooms: SAGA_RECEPTIE,
} as const

/** Galerie Pub, poveste vizuală: interior → view → clădire → intrare → terasă */
export const SAGA_PUB_GALLERY = [
  SAGA_PUB_INTERIOR,
  SAGA_PIZZERIE_VIEW,
  SAGA_CLADIRE_PUB,
  SAGA_INTRARE_PUB,
  SAGA_TERASA_VIEW,
  SAGA_TERASA_SEARA,
]

/** Destinație, peisaj & locație */
export const SAGA_DESTINATION_SCENERY = [
  SAGA_PIZZERIE_VIEW,
  SAGA_TERASA_VIEW,
  SAGA_CLADIRE_PUB,
]
