import { SAGA_EVENTS, SAGA_EVENTS_CURATED, SAGA_MENU_FOOD } from './sagaAssets'

export const EVENTS_STATS = [
  { value: '1', label: 'Sală de evenimente', sub: 'Lumină caldă și aranjamente care impresionează' },
  { value: '120', label: 'm²', sub: 'Spațiu generos pentru momentele tale' },
  { value: '120', label: 'Invitați max.', sub: 'Oaspeții tăi, confortabil aproape' },
  { value: '+50', label: 'Evenimente', sub: 'Povești trăite aici, an de an' },
] as const

export interface EventCategory {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  ctaLabel?: string
  ctaHref?: string
}

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'corporate',
    eyebrow: 'Business',
    title: 'Unde ideile prind viață',
    description:
      'Într-un cadru care inspiră focus și claritate, întâlnirile de afaceri capătă alt sens. Sală modernă, meniuri gândite pentru echipa ta și cazare pentru oaspeții veniți de departe, la poalele Munților Făgăraș. Tu aduci mesajul. Noi ne ocupăm de restul.',
    image: SAGA_EVENTS[2] ?? SAGA_EVENTS_CURATED[0],
    ctaLabel: 'Cere ofertă corporate',
    ctaHref: '#events-form',
  },
  {
    id: 'nunti',
    eyebrow: 'Nunți',
    title: 'Cel mai sincer „da” dintr-o viață',
    description:
      'Situat într-un cadru cald, la poalele Munților Făgăraș, Saga Victoria transformă ziua ta într-o experiență de neuitat. Decor elegant, meniuri adaptate gusturilor voastre, servire impecabilă și camere pentru invitați. Spune „da” unei celebrări memorabile, aproape de natură și de cei dragi.',
    image: SAGA_EVENTS[0] ?? SAGA_EVENTS_CURATED[0],
    ctaLabel: 'Planifică-ți nunta',
    ctaHref: '#events-form',
  },
  {
    id: 'petreceri',
    eyebrow: 'Petreceri',
    title: 'Momente care merită sărbătorite',
    description:
      'Botezuri, aniversări, reuniuni de familie: fiecare ocazie merită o atmosferă care o onorează. Spațiu flexibil, meniu personalizat, terasă sezonieră și o echipă care te înțelege. La Saga Victoria, celebrarea ta devine povestea pe care o vei povesti ani la rând.',
    image: SAGA_EVENTS[4] ?? SAGA_MENU_FOOD[0],
    ctaLabel: 'Organizează petrecerea',
    ctaHref: '#events-form',
  },
]

export const EVENT_TYPE_OPTIONS = [
  'Eveniment corporativ',
  'Nuntă',
  'Botez / petrecere',
  'Catering',
  'Alt eveniment',
] as const
