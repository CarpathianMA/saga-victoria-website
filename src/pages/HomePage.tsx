import SagaHeader from '../components/saga/SagaHeader'
import SagaHero from '../components/saga/SagaHero'
import SagaIntro from '../components/saga/SagaIntro'
import SagaSectionHeading from '../components/saga/SagaSectionHeading'
import SagaCarousel from '../components/saga/SagaCarousel'
import SagaPromoBlock from '../components/saga/SagaPromoBlock'
import SagaServicesSlider from '../components/saga/SagaServicesSlider'
import SagaDestination from '../components/saga/SagaDestination'
import SagaFooter from '../components/saga/SagaFooter'
import { useRoomHashOpen } from '../context/RoomModalContext'
import { ROOMS, RESERVATION_PHONE, formatPrice } from '../data/rooms'
import { EXPERIENCES } from '../data/experiences'
import { SAGA_EVENTS_CURATED, SAGA_HOME_SERVICES, SAGA_CLADIRE_PUB } from '../data/sagaAssets'
import type { CarouselCardItem } from '../components/saga/SagaCarouselCard'

const apartment = ROOMS.find((r) => r.category === 'apartment')!
const deluxe = ROOMS.find((r) => r.category === 'deluxe')!
const double = ROOMS.find((r) => r.category === 'double')!
const single = ROOMS.find((r) => r.category === 'single')!

const ROOM_CARDS: CarouselCardItem[] = [
  {
    image: apartment.images[0],
    title: apartment.name,
    description: apartment.description,
    seeMoreHref: '/camere',
    bookHref: `tel:+4${RESERVATION_PHONE}`,
    meta: `De la ${formatPrice(apartment.pricePerNight)} / noapte`,
    eyebrow: 'Apartament',
  },
  {
    image: deluxe.images[0],
    title: 'Camere Deluxe',
    description: deluxe.description,
    seeMoreHref: '/camere',
    bookHref: `tel:+4${RESERVATION_PHONE}`,
    meta: `De la ${formatPrice(deluxe.pricePerNight)} / noapte`,
    eyebrow: 'Deluxe',
  },
  {
    image: double.images[0],
    title: 'Camere Duble',
    description: double.description,
    seeMoreHref: '/camere',
    bookHref: `tel:+4${RESERVATION_PHONE}`,
    meta: `De la ${formatPrice(double.pricePerNight)} / noapte`,
    eyebrow: 'Dublă',
  },
  {
    image: single.images[0],
    title: single.name,
    description: single.description,
    seeMoreHref: '/camere',
    bookHref: `tel:+4${RESERVATION_PHONE}`,
    meta: `${formatPrice(single.pricePerNight)} / noapte`,
    eyebrow: 'Single',
  },
]

const DINING_CARDS: CarouselCardItem[] = EXPERIENCES.map((exp, i) => ({
  image: i === 0 ? SAGA_CLADIRE_PUB : SAGA_EVENTS_CURATED[0],
  title: exp.title,
  description: exp.homeBlurb,
  seeMoreHref: `/${exp.slug}`,
  bookHref: exp.ctaHref,
  bookLabel: exp.ctaLabel,
  eyebrow: i === 0 ? 'Pub & Terasă' : 'Evenimente',
}))

export default function HomePage() {
  useRoomHashOpen()

  return (
    <>
      <div className="relative">
        <SagaHeader overlay />
        <SagaHero />
      </div>

      <SagaIntro />

      <SagaPromoBlock
        title="Rezervă direct la Saga"
        description="Sună pentru cel mai bun preț la camere, masă la pub sau organizarea evenimentului tău. Răspundem rapid, fără complicații."
        ctaLabel="Vezi camerele"
        ctaHref="/camere"
      />

      <section className="section-hotel bg-white">
        <div className="container-hotel">
          <SagaSectionHeading
            title="Camere & Apartament"
            lead="De la camere single la apartamentul Saga: alege unitatea potrivită pentru sejurul tău în Victoria."
            ctaLabel="Vezi toate camerele"
            ctaHref="/camere"
          />
          <SagaCarousel items={ROOM_CARDS} />
        </div>
      </section>

      <section className="section-hotel bg-page">
        <div className="container-hotel">
          <SagaSectionHeading
            title="Mănâncă & Bea"
            lead="Pizza proaspătă, meniu pub, terasă vara și restaurant à la carte cu sală de evenimente."
            ctaLabel="Descoperă gastronomia"
            ctaHref="/pub"
          />
          <SagaCarousel items={DINING_CARDS} />
        </div>
      </section>

      <SagaServicesSlider
        title="Profită la maximum"
        lead="Trei experiențe, un singur loc. Tot ce ai nevoie pentru un sejur complet la Saga Victoria."
        slides={[
          {
            image: SAGA_HOME_SERVICES.pub,
            title: 'Pub & Pizza',
            label: 'Gastronomie',
            description: 'Pizza, bar, cafenea și terasă. Tot ce ai nevoie pentru o seară reușită la parter.',
            href: '/pub',
            cta: 'Explorează acum',
          },
          {
            image: SAGA_HOME_SERVICES.events,
            title: 'Restaurant & Events',
            label: 'Evenimente',
            description: 'Mese à la carte și sală modernă pentru nunți, botezuri sau corporate, cu catering inclus.',
            href: '/evenimente',
            cta: 'Explorează acum',
          },
          {
            image: SAGA_HOME_SERVICES.rooms,
            title: 'Cazare confortabilă',
            label: 'Camere',
            description: 'Camere curate, Wi-Fi, parcare gratuită și acces direct la restaurant și pub.',
            href: '/camere',
            cta: 'Rezervă camera',
          },
        ]}
      />

      <SagaDestination />
      <SagaFooter />
    </>
  )
}
