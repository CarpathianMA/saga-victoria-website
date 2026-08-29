import SagaHeader from '../components/saga/SagaHeader'
import SagaFooter from '../components/saga/SagaFooter'
import SagaCrossSell from '../components/saga/SagaCrossSell'
import SagaEventsHero from '../components/saga/events/SagaEventsHero'
import SagaEventsIntro, { SagaEventsStats } from '../components/saga/events/SagaEventsIntro'
import SagaRestaurantBlock from '../components/saga/events/SagaRestaurantBlock'
import SagaEventsDivider from '../components/saga/events/SagaEventsDivider'
import SagaEventCategoryBlock from '../components/saga/events/SagaEventCategoryBlock'
import SagaEventsForm from '../components/saga/events/SagaEventsForm'
import { EVENT_CATEGORIES, EVENTS_GALLERY, RESTAURANT_SECTION } from '../data/eventsPage'
import { SagaImageSlider } from '../components/saga/sagaUi'

export default function EventsPage() {
  return (
    <>
      <SagaHeader />

      <SagaEventsHero />
      <SagaEventsIntro />
      <SagaEventsStats />

      <SagaRestaurantBlock restaurant={RESTAURANT_SECTION} />
      <SagaEventsDivider />

      {EVENT_CATEGORIES.map((cat, i) => (
        <SagaEventCategoryBlock key={cat.id} category={cat} reverse={i % 2 === 1} />
      ))}

      <section className="section-hotel-compact bg-page">
        <div className="container-hotel">
          <h2 className="h2-hotel">Locul în care amintirile prind contur</h2>
          <p className="lead-hotel">Bucătăria restaurantului și sala de evenimente, în imagini.</p>
          <div className="mx-auto mt-10 max-w-[900px]">
            <SagaImageSlider images={EVENTS_GALLERY} alt="Restaurant și evenimente Saga Victoria" />
          </div>
        </div>
      </section>

      <SagaEventsForm />
      <SagaCrossSell />
      <SagaFooter />
    </>
  )
}
