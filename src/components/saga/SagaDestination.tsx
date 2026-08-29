import { Link } from 'react-router-dom'
import { SAGA_DESTINATION_SCENERY, SAGA_PIZZERIE_VIEW } from '../../data/sagaAssets'

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Str.+Pie%C8%9Bii+2A,+Victoria,+Bra%C8%99ov'

export default function SagaDestination() {
  return (
    <section className="section-hotel bg-white">
      <div className="container-hotel">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="img-zoom aspect-[4/3] overflow-hidden bg-surface lg:aspect-[5/4]">
            <img
              src={SAGA_PIZZERIE_VIEW}
              alt="Apus la Saga Victoria, priveliște spre Munții Făgăraș"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="label-hotel">Destinație</p>
            <h2 className="h2-hotel-left mt-3">
              Escapadă perfectă la poalele Munților Făgăraș
            </h2>
            <p className="mt-5 prose-hotel">
              Locație centrală în Victoria, la câteva minute de trasee montane, Lacul Bâlea,
              Cascada Bâlea și sate pitorești din Țara Făgărașului.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book"
              >
                Deschide harta
              </a>
              <Link to="/camere" className="btn-outline-hotel">
                Rezervă sejur
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-3 md:gap-4">
          {SAGA_DESTINATION_SCENERY.map((src, i) => (
            <div key={src} className="img-zoom aspect-[4/5] overflow-hidden bg-surface md:aspect-square">
              <img src={src} alt={`Victoria & Saga ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 sm:flex-row">
          <p className="text-[15px] text-muted">
            Str. Pieții 2A, Victoria · urmărește experiența Saga
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/sagavictoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] uppercase tracking-[0.1em] text-ink transition hover:text-brand"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sagavictoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] uppercase tracking-[0.10em] text-ink transition hover:text-brand"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
