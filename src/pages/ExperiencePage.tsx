import { Link } from 'react-router-dom'
import SagaHeader from '../components/saga/SagaHeader'
import SagaFooter from '../components/saga/SagaFooter'
import SagaPageHero from '../components/saga/SagaPageHero'
import SagaCrossSell from '../components/saga/SagaCrossSell'
import { SagaImageSlider } from '../components/saga/sagaUi'
import { getExperienceBySlug, type Experience } from '../data/experiences'

interface ExperiencePageProps {
  slug: string
}

function MenuDownloads({ experience }: { experience: Experience }) {
  const downloads = [
    ...(experience.menuDownloads ?? []),
    ...(experience.menuPdf && !experience.menuDownloads?.length
      ? [{ href: experience.menuPdf, label: experience.menuPdfLabel ?? 'Descarcă meniul (PDF)' }]
      : []),
  ]
  if (!downloads.length) return null

  return (
    <section className="section-hotel-compact bg-page">
      <div className="container-hotel mx-auto max-w-[640px]">
        <h2 className="h2-hotel">Meniuri</h2>
        <p className="lead-hotel !mt-3">Descarcă meniul complet, actualizat 2026.</p>
        <ul className="mt-8 space-y-3">
          {downloads.map((dl) => (
            <li key={dl.href}>
              <a
                href={dl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-black/10 bg-white px-6 py-4 text-[15px] text-ink transition hover:border-brand"
              >
                <span>{dl.label}</span>
                <span className="text-brand transition group-hover:translate-y-0.5">↓</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function VideoSection({ videoId, title }: { videoId: string; title: string }) {
  return (
    <section className="section-hotel-compact bg-white">
      <div className="container-hotel max-w-[840px]">
        <p className="label-hotel mb-4 text-center">Video</p>
        <div className="relative aspect-video overflow-hidden bg-ink">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default function ExperiencePage({ slug }: ExperiencePageProps) {
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    return (
      <>
        <SagaHeader />
        <section className="section-hotel">
          <div className="container-hotel text-center">
            <h1 className="h2-hotel">Pagina nu a fost găsită</h1>
            <p className="lead-hotel">Link-ul accesat nu există sau a fost mutat.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-outline-hotel">Acasă</Link>
              <Link to="/camere" className="btn-book">Camere</Link>
              <Link to="/pub" className="btn-outline-hotel">Pub & Pizza</Link>
            </div>
          </div>
        </section>
        <SagaFooter />
      </>
    )
  }

  return (
    <>
      <SagaHeader />

      <SagaPageHero
        image={experience.images[0]}
        title={experience.title}
        subtitle={experience.tagline}
        breadcrumb={[
          { label: 'Acasă', href: '/' },
          { label: experience.navLabel },
        ]}
      />

      <section className="section-hotel-compact bg-page">
        <div className="container-hotel">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="label-hotel">{experience.location}</p>
            <p className="mt-5 prose-hotel">{experience.description}</p>
          </div>
        </div>
      </section>

      <section className="section-hotel-compact bg-white">
        <div className="container-hotel grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SagaImageSlider images={experience.images} alt={experience.title} aspectClass="aspect-[4/3]" />

          <div>
            <h2 className="h2-hotel-left">Servicii & facilități</h2>
            <ul className="mt-6 space-y-3">
              {experience.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden>✓</span>
                  {h}
                </li>
              ))}
            </ul>

            {experience.menuNote && (
              <p className="mt-8 prose-hotel">{experience.menuNote}</p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {experience.menuPdf && (
                <a
                  href={experience.menuPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-hotel"
                >
                  Vezi meniul PDF
                </a>
              )}
              <a href={experience.ctaHref} className="btn-book">
                {experience.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {experience.videoId && (
        <VideoSection videoId={experience.videoId} title={experience.title} />
      )}

      <MenuDownloads experience={experience} />
      <SagaCrossSell />

      <section className="section-hotel bg-page">
        <div className="container-hotel text-center">
          <h2 className="h2-hotel">Rezervă sau cere ofertă</h2>
          <p className="lead-hotel">Contactează-ne direct, răspundem rapid la rezervări și evenimente.</p>
          <a href={experience.ctaHref} className="btn-book mt-8 inline-flex">
            {experience.ctaLabel}
          </a>
        </div>
      </section>

      <SagaFooter />
    </>
  )
}
