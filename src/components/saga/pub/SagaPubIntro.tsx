import { Link } from 'react-router-dom'
import { RESTAURANT_PHONE } from '../../../data/experiences'

export default function SagaPubIntro() {
  return (
    <section className="bg-white">
      <div className="container-hotel py-5">
        <nav className="flex items-center gap-2 text-[13px] text-muted" aria-label="Breadcrumb">
          <Link to="/" className="flex items-center gap-1.5 transition hover:text-brand" aria-label="Acasă">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </Link>
          <span aria-hidden className="text-black/20">›</span>
          <span className="text-ink">Pub & Pizza</span>
        </nav>
      </div>

      <div className="section-hotel-compact bg-page">
        <div className="container-hotel mx-auto max-w-[780px] text-center">
          <p className="prose-hotel">
            De la pizza proaspătă la seri liniștite pe terasă, gastronomia Saga aduce gusturi sincere,
            atmosferă caldă și momente de împărtășit. La parterul complexului, totul e la îndemână:
            mâncare bună, băuturi alese și priveliște spre Munții Făgăraș.
          </p>
          <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-book mt-8 inline-flex">
            Rezervă masă
          </a>
        </div>
      </div>
    </section>
  )
}
