import { Link } from 'react-router-dom'
import { SAGA_ROOMS_CURATED, SAGA_EVENTS_CURATED } from '../../data/sagaAssets'

const PACKAGES = [
  {
    label: 'Wellness',
    title: 'Mountain Escape',
    description:
      'Camere confortabile ca bază pentru drumeții spre Transfăgărășan. Liniște, pat bun, mic dejun la cerere.',
    image: SAGA_ROOMS_CURATED[1],
    href: '/camere',
    reverse: false,
  },
  {
    label: 'Celebrations',
    title: 'Family Retreat',
    description:
      'Sală de evenimente, catering Saga și cazare pentru invitați, nunți, botezuri sau petreceri private.',
    image: SAGA_EVENTS_CURATED[0],
    href: '/evenimente',
    reverse: true,
  },
]

export default function HomePackages() {
  return (
    <section className="section-beige">
      <div className="container-wide">
        <h2 className="heading-section mb-20 md:mb-24">Popular packages</h2>

        <div className="space-y-24 md:space-y-32">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.title}
              className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 ${
                pkg.reverse ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="aspect-[16/10] w-full object-cover md:aspect-[3/2]"
                  loading="lazy"
                />
              </div>
              <div className={pkg.reverse ? 'md:pr-8 lg:pr-14' : 'md:pl-8 lg:pl-14'}>
                <p className="mb-4 text-[11px] font-normal uppercase tracking-[0.28em] text-[#a3a89e]">
                  {pkg.label}
                </p>
                <h3 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] font-normal text-[#3a4038]">
                  {pkg.title}
                </h3>
                <p className="body-copy mt-5 max-w-[380px]">{pkg.description}</p>
                <Link to={pkg.href} className="btn-ghost-dark mt-9 inline-block">
                  Book now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
