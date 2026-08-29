import {
  SAGA,
  SAGA_CLADIRE_PUB,
  SAGA_INTRARE_PUB,
  SAGA_PIZZERIE_VIEW,
  SAGA_PUB_GALLERY,
  SAGA_PUB_INTERIOR,
  SAGA_TERASA_SEARA,
  SAGA_TERASA_VIEW,
} from './sagaAssets'

export interface GastroVenue {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  services: string[]
  schedule: string[]
  menuLabel?: string
  menuHref?: string
  ctaLabel: string
  ctaHref: string
}

export const GASTRO_VENUES: GastroVenue[] = [
  {
    id: 'pizza',
    eyebrow: 'Saga Pizza',
    title: 'Pregătită pentru a fi împărtășită',
    description:
      'Aluat proaspăt, toppinguri generoase și aroma care te aduce la masă. Pizza de la Saga este concepută să fie savurată lent, între prieteni, la interior sau pe terasă, vara. Gust autentic, porții generoase și energia unui loc care te face să te simți acasă.',
    image: SAGA_PUB_INTERIOR,
    services: ['Pizza artizanală', 'Meniuri pub', 'Porții pentru sharing', 'Comenzi & livrări locale'],
    schedule: ['Luni până duminică · 10:00 - 23:00', 'Program extins în weekend. Sună pentru confirmare.'],
    menuLabel: 'Meniu Pizza & Pub',
    menuHref: SAGA.menus.pizza,
    ctaLabel: 'Rezervă masă',
    ctaHref: '#pub-reserve',
  },
  {
    id: 'pub',
    eyebrow: 'Pub & Bar',
    title: 'Unde serile capătă ritm',
    description:
      'Ziua, un colț relaxat pentru o cafea sau un prânz lejer. Seara, atmosfera se încălzește: băuturi reci, conversații lungi și detalii care completează starea. Pub-ul Saga este locul unde te oprești fără grabă, la poalele Munților Făgăraș.',
    image: SAGA_INTRARE_PUB,
    services: ['Bar & cafenea', 'Cocktailuri & bere', 'Mic dejun & prânz', 'Acces direct din camere'],
    schedule: ['Zilnic · 10:00 - 00:00', 'Vineri și sâmbătă · până târziu'],
    ctaLabel: 'Sună pentru rezervare',
    ctaHref: '#pub-reserve',
    menuLabel: 'Meniu băuturi & pub',
    menuHref: SAGA.menus.pizza,
  },
  {
    id: 'terasa',
    eyebrow: 'Terasa Saga',
    title: 'Vara, sub cerul liber',
    description:
      'Când soarele stă mai mult, masa se mută afară. Terasa Saga deschide același meniu într-un cadru aerisit, cu priveliște spre munți și aerul curat al Victoria. Ideal pentru familii, seri în doi sau petreceri mici: mâncare bună, companie bună, momente de neuitat.',
    image: SAGA_TERASA_VIEW,
    services: ['Dining în aer liber', 'Meniu sezonier', 'Priveliște spre munți', 'Petreceri mici private'],
    schedule: ['Aprilie până în octombrie · în funcție de vreme', 'Program zilnic. Contactează-ne pentru rezervări.'],
    menuLabel: 'Meniu terasă',
    menuHref: SAGA.menus.pizza,
    ctaLabel: 'Rezervă pe terasă',
    ctaHref: '#pub-reserve',
  },
]

export const PUB_GALLERY = SAGA_PUB_GALLERY

export const PUB_HERO_IMAGE = SAGA_CLADIRE_PUB

export { SAGA_PIZZERIE_VIEW, SAGA_TERASA_SEARA }
