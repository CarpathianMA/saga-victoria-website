export type FacilityLocation = 'complex' | 'oras'

export interface Facility {
  id: string
  label: string
  subtitle: string
  location: FacilityLocation
  locationLabel: string
  description: string
  image: string
  href?: string
}

export const FACILITIES: Facility[] = [
  {
    id: 'pub',
    label: 'Saga Pizza & Pub',
    subtitle: 'Pub & bar',
    location: 'complex',
    locationLabel: 'În complex · Str. Pieții 2A',
    description: 'Atmosferă relaxată, băuturi și pizza, la parterul clădirii Saga Victoria, acces direct din camere.',
    image: '/images/gallery-pub.jpg',
    href: 'https://sagavictoria.ro/',
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    subtitle: 'Mese & meniu complet',
    location: 'complex',
    locationLabel: 'În complex · Str. Pieții 2A',
    description: 'Mic dejun, prânz și cină în același spațiu, ideal pentru oaspeții cazați la Saga Rooms.',
    image: '/images/gallery-food.jpg',
    href: 'https://sagavictoria.ro/',
  },
  {
    id: 'terasa',
    label: 'Terasa Saga',
    subtitle: 'Vara, în aer liber',
    location: 'complex',
    locationLabel: 'În complex · Str. Pieții 2A',
    description: 'Terasă deschisă pe perioada verii, cu priveliște spre munți.',
    image: '/images/gallery-terrace.jpg',
  },
  {
    id: 'evenimente',
    label: 'Sala de Evenimente',
    subtitle: 'Nunți · corporate · petreceri',
    location: 'complex',
    locationLabel: 'În complex · centrul orașului',
    description: 'Spațiu modern pentru nunți, botezuri, evenimente corporate sau petreceri private.',
    image: '/images/gallery-interior.jpg',
  },
  {
    id: 'covrigarie',
    label: 'Saga Covrigărie',
    subtitle: 'Covrigi · plăcinte · gogoși',
    location: 'oras',
    locationLabel: 'Locație separată · Victoria',
    description: 'Patiserie Saga, produse proaspăt coapte, parte din familia de branduri Saga din oraș.',
    image: '/images/gallery-food.jpg',
  },
]

export const COMPLEX_FACILITIES = FACILITIES.filter((f) => f.location === 'complex')
export const ORAS_FACILITIES = FACILITIES.filter((f) => f.location === 'oras')
