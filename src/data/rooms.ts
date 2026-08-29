import { SAGA_ROOMS } from './sagaAssets'

export type RoomCategory = 'single' | 'double' | 'deluxe' | 'apartment'

export const RATES_NOTE = 'Tarifele afișate nu includ mic dejun.'
export const RESERVATION_PHONE = '0747244344'
export const RESERVATION_PHONE_DISPLAY = '0747 244 344'

export function formatPrice(lei: number) {
  return `${lei} lei`
}

const { single: s, double: d, deluxe: x, apartment: a, receptie: rec } = SAGA_ROOMS

export interface Room {
  id: string
  name: string
  category: RoomCategory
  categoryLabel: string
  pricePerNight: number
  beds: string
  description: string
  features: string[]
  images: string[]
  sqm?: number
}

export const ROOM_CATEGORIES: Record<RoomCategory, { label: string; description: string }> = {
  single: {
    label: 'Camere Single',
    description: 'Camere confortabile pentru un singur oaspete, ideale pentru călătorii de afaceri sau escapade solo.',
  },
  double: {
    label: 'Camere Duble Matrimoniale',
    description: 'Pat matrimonial, spațiu liniștit și toate facilitățile necesare unui sejur relaxant.',
  },
  deluxe: {
    label: 'Camere Duble Deluxe',
    description: 'Pat dublu și canapea extensibilă, perfecte pentru cupluri sau familii mici.',
  },
  apartment: {
    label: 'Apartament',
    description: 'Spațiu generos cu două camere duble, baie, bucătărie și salon cu canapea extensibilă.',
  },
}

/** 9 unități rezervabile · 10 camere fizice (apartamentul include 2 dormitoare duble) */
export const ROOMS: Room[] = [
  {
    id: 'single-1',
    name: 'Cameră Single 1',
    category: 'single',
    categoryLabel: 'Single',
    pricePerNight: 260,
    beds: 'Pat single',
    description: 'Cameră compactă și primitoare, cu tot ce ai nevoie pentru un sejur confortabil în Victoria.',
    features: ['Wi-Fi', 'TV', 'Baie proprie', 'Parcare gratuită'],
    images: [s(1), s(2), rec(3), rec(4)],
  },
  {
    id: 'single-2',
    name: 'Cameră Single 2',
    category: 'single',
    categoryLabel: 'Single',
    pricePerNight: 260,
    beds: 'Pat single',
    description: 'Ideală pentru un oaspete: liniște, curățenie și acces rapid la pub și recepție.',
    features: ['Wi-Fi', 'TV', 'Baie proprie', 'Parcare gratuită'],
    images: [s(3), s(4), rec(5), rec(10)],
  },
  {
    id: 'double-1',
    name: 'Cameră Dublă Matrimonială 1',
    category: 'double',
    categoryLabel: 'Dublă',
    pricePerNight: 350,
    beds: 'Pat matrimonial',
    description: 'Cameră dublă cu pat matrimonial, amenajată modern pentru cupluri sau călători care apreciază confortul.',
    features: ['Pat matrimonial', 'Wi-Fi', 'TV', 'Baie proprie'],
    images: [d(1), d(2), rec(3), rec(4)],
  },
  {
    id: 'double-2',
    name: 'Cameră Dublă Matrimonială 2',
    category: 'double',
    categoryLabel: 'Dublă',
    pricePerNight: 350,
    beds: 'Pat matrimonial',
    description: 'Atmosferă caldă, pat confortabil și acces facil la restaurantul Saga Pizza & Pub.',
    features: ['Pat matrimonial', 'Wi-Fi', 'TV', 'Baie proprie'],
    images: [d(6), d(7), rec(5), rec(10)],
  },
  {
    id: 'deluxe-1',
    name: 'Cameră Dublă Deluxe 1',
    category: 'deluxe',
    categoryLabel: 'Deluxe',
    pricePerNight: 390,
    beds: 'Pat dublu + canapea extensibilă',
    description: 'Spațiu generos cu pat dublu și canapea extensibilă, ideală pentru familii mici sau sejururi prelungite.',
    features: ['Pat dublu', 'Canapea extensibilă', 'Wi-Fi', 'TV', 'Baie proprie'],
    images: [x(1), x(3), rec(4), rec(5)],
  },
  {
    id: 'deluxe-2',
    name: 'Cameră Dublă Deluxe 2',
    category: 'deluxe',
    categoryLabel: 'Deluxe',
    pricePerNight: 390,
    beds: 'Pat dublu + canapea extensibilă',
    description: 'Combinația perfectă între confort și funcționalitate, cu loc suplimentar pentru o persoană.',
    features: ['Pat dublu', 'Canapea extensibilă', 'Wi-Fi', 'TV', 'Baie proprie'],
    images: [x(3), x(4), rec(3), d(1)],
  },
  {
    id: 'deluxe-3',
    name: 'Cameră Dublă Deluxe 3',
    category: 'deluxe',
    categoryLabel: 'Deluxe',
    pricePerNight: 390,
    beds: 'Pat dublu + canapea extensibilă',
    description: 'Cameră deluxe luminoasă, cu finisaje moderne și spațiu de relaxare suplimentar.',
    features: ['Pat dublu', 'Canapea extensibilă', 'Wi-Fi', 'TV', 'Baie proprie'],
    images: [x(4), x(11), rec(10), a(6)],
  },
  {
    id: 'deluxe-4',
    name: 'Cameră Dublă Deluxe 4',
    category: 'deluxe',
    categoryLabel: 'Deluxe',
    pricePerNight: 390,
    beds: 'Pat dublu + canapea extensibilă',
    description: 'Ultima din seria deluxe, cu confort premium pentru oaspeții care doresc spațiu în plus.',
    features: ['Pat dublu', 'Canapea extensibilă', 'Wi-Fi', 'TV', 'Baie proprie'],
    images: [x(11), x(1), x(4), rec(5)],
  },
  {
    id: 'apartment',
    name: 'Apartament Saga',
    category: 'apartment',
    categoryLabel: 'Apartament',
    pricePerNight: 750,
    beds: '2 camere duble + canapea extensibilă',
    description:
      'Apartament complet: 2 camere duble, baie, bucătărie și salon cu canapea extensibilă. Ideal pentru familii sau grupuri.',
    features: ['2 camere duble', 'Bucătărie', 'Salon', 'Canapea extensibilă', 'Baie', 'Wi-Fi'],
    images: [a(6), a(8), a(10), a(11)],
    sqm: 55,
  },
]

export function getRoomsByCategory(category: RoomCategory) {
  return ROOMS.filter((r) => r.category === category)
}
