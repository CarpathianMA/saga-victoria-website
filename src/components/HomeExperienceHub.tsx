import { Link } from 'react-router-dom'
import { EXPERIENCES } from '../data/experiences'
import SectionIntro from './editorial/SectionIntro'
import StoryLink from './editorial/StoryLink'
import { SAGA_ROOMS } from '../data/sagaAssets'

const STORIES = [
  {
    index: '01',
    href: '/camere',
    label: 'Cazare',
    title: 'Saga Rooms',
    blurb:
      'Zece camere gândite ca un refugiu, de la single-uri intime la apartamentul complet. Liniște, paturi confortabile și acces direct la pub.',
    image: SAGA_ROOMS.apartment(1),
    reverse: false,
    dark: false,
  },
  ...EXPERIENCES.map((e, i) => ({
    index: String(i + 2).padStart(2, '0'),
    href: `/${e.slug}`,
    label: e.navLabel,
    title: e.title,
    blurb: e.homeBlurb,
    image: e.images[0],
    reverse: i % 2 === 0,
    dark: i === 1,
  })),
]

export default function HomeExperienceHub() {
  return (
    <section id="experiente">
      <div className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            eyebrow="Editorial · Saga Victoria"
            title={
              <>
                Fiecare spațiu,
                <br />
                <span className="italic">o poveste</span> aparte
              </>
            }
            lead="Nu e doar un hotel, e un complex unde dormi, mănânci, sărbătorești și te relaxezi. Răsfoiește capitolele de mai jos."
            className="editorial-reveal mb-4 max-w-[580px]"
          />
        </div>
      </div>

      {STORIES.map((story) => (
        <StoryLink key={story.href} {...story} />
      ))}

      {/* Quick index, magazine contents page */}
      <div className="border-t border-neutral-200 bg-white px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
            Cuprins
          </p>
          <ul className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((s) => (
              <li key={s.href} className="bg-white">
                <Link
                  to={s.href}
                  className="group flex items-baseline justify-between gap-4 px-6 py-5 transition hover:bg-[#faf8f5]"
                >
                  <span className="font-serif text-[13px] text-neutral-300">{s.index}</span>
                  <span className="flex-1 text-[14px] text-neutral-800 transition group-hover:text-neutral-950">
                    {s.title}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-neutral-900"
                    aria-hidden
                  >
                    <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
