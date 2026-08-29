import SagaHeader from '../components/saga/SagaHeader'
import SagaFooter from '../components/saga/SagaFooter'
import SagaCrossSell from '../components/saga/SagaCrossSell'
import SagaPubHero from '../components/saga/pub/SagaPubHero'
import SagaPubIntro from '../components/saga/pub/SagaPubIntro'
import SagaGastroVenueBlock from '../components/saga/pub/SagaGastroVenueBlock'
import { GASTRO_VENUES, PUB_GALLERY } from '../data/pubPage'
import { RESTAURANT_PHONE, RESTAURANT_PHONE_DISPLAY } from '../data/experiences'
import { SAGA } from '../data/sagaAssets'
import { SagaImageSlider } from '../components/saga/sagaUi'

export default function PubPage() {
  return (
    <>
      <SagaHeader />

      <SagaPubHero />
      <SagaPubIntro />

      {GASTRO_VENUES.map((venue, i) => (
        <SagaGastroVenueBlock key={venue.id} venue={venue} reverse={i % 2 === 1} />
      ))}

      <section className="section-hotel-compact bg-page">
        <div className="container-hotel">
          <h2 className="h2-hotel">Gusturi care rămân în amintire</h2>
          <p className="lead-hotel">Pizza, pub și terasă: câteva imagini din spațiile noastre.</p>
          <div className="mx-auto mt-10 max-w-[900px]">
            <SagaImageSlider images={PUB_GALLERY} alt="Saga Pizza & Pub Victoria" />
          </div>
        </div>
      </section>

      <section className="section-hotel-compact bg-white">
        <div className="container-hotel max-w-[840px]">
          <p className="label-hotel mb-4 text-center">Video</p>
          <div className="relative aspect-video overflow-hidden bg-ink">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${SAGA.videos.pub}?rel=0&modestbranding=1`}
              title="Saga Pizza & Pub Victoria"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="pub-reserve" className="section-hotel bg-[#f3f0eb]">
        <div className="container-hotel text-center">
          <h2 className="h2-hotel">Rezervă o masă</h2>
          <p className="lead-hotel">
            Sună-ne direct pentru rezervări, comenzi sau evenimente mici pe terasă. Răspundem rapid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-book">
              Sună {RESTAURANT_PHONE_DISPLAY}
            </a>
            <a
              href={SAGA.menus.pizza}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-hotel"
            >
              Descarcă meniul (PDF)
            </a>
          </div>
        </div>
      </section>

      <SagaCrossSell />
      <SagaFooter />
    </>
  )
}
