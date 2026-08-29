import SagaHeader from '../components/saga/SagaHeader'
import SagaFooter from '../components/saga/SagaFooter'
import SagaCrossSell from '../components/saga/SagaCrossSell'
import SagaEventsHero from '../components/saga/events/SagaEventsHero'
import SagaEventsIntro, { SagaEventsStats } from '../components/saga/events/SagaEventsIntro'
import SagaEventCategoryBlock from '../components/saga/events/SagaEventCategoryBlock'
import SagaEventsForm from '../components/saga/events/SagaEventsForm'
import { EVENT_CATEGORIES } from '../data/eventsPage'
import { SAGA_EVENTS_CURATED } from '../data/sagaAssets'
import { SagaImageSlider } from '../components/saga/sagaUi'

export default function EventsPage() {
  return (
    <>
      <SagaHeader />

      <SagaEventsHero />
      <SagaEventsIntro />
      <SagaEventsStats />

      {EVENT_CATEGORIES.map((cat, i) => (
        <SagaEventCategoryBlock key={cat.id} category={cat} reverse={i % 2 === 1} />
      ))}

      <section className="section-hotel-compact bg-page">
        <div className="container-hotel">
          <h2 className="h2-hotel">Locul în care amintirile prind contur</h2>
          <p className="lead-hotel">Câteva imagini din sala noastră: nunți, corporate și petreceri private.</p>
          <div className="mx-auto mt-10 max-w-[900px]">
            <SagaImageSlider images={SAGA_EVENTS_CURATED} alt="Sala de evenimente Saga Victoria" />
          </div>
        </div>
      </section>

      <SagaEventsForm />
      <SagaCrossSell />
      <SagaFooter />
    </>
  )
}
