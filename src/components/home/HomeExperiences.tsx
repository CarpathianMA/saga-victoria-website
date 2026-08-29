import { Link } from 'react-router-dom'
import { EXPERIENCES } from '../../data/experiences'

const ITEMS = [
  {
    href: '/camere',
    label: 'Camere',
    blurb: 'Confort liniștit în centrul Victoria, baza perfectă pentru munți.',
    image: '/images/saga/rooms/deluxe-1.jpeg',
  },
  ...EXPERIENCES.map((e) => ({
    href: `/${e.slug}`,
    label: e.navLabel,
    blurb: e.homeBlurb,
    image: e.images[0],
  })),
]

export default function HomeExperiences() {
  return (
    <section className="section-beige">
      <div className="container-wide">
        <h2 className="heading-section mb-16 md:mb-20">Area for you to discover</h2>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {ITEMS.map((item) => (
            <article key={item.href} className="text-center">
              <Link to={item.href} className="group block">
                <div className="mb-7 aspect-[3/4] overflow-hidden bg-[#ebeae4]">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition duration-[800ms] ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-[1.4rem] font-normal text-[#3a4038]">{item.label}</h3>
                <p className="body-copy mx-auto mt-4 max-w-[220px] text-[14px]">{item.blurb}</p>
                <span className="link-fine">Learn more</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
