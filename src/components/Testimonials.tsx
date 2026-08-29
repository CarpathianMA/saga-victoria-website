import { useState } from 'react'

const testimonials = [
  {
    location: 'Madrid, Spania',
    text: 'Sejurul la Saga Victoria a fost absolut fantastic. Atmosfera de pub și camerele confortabile au făcut totul să pară o experiență de cinci stele.',
    name: 'Carlos García',
  },
  {
    location: 'Canberra, Australia',
    text: 'Atmosfera era liniștită și decorul frumos, ideal pentru cupluri. Mâncarea excelentă, iar personalul ne-a făcut să ne simțim răsfățați.',
    name: 'Emma Wilson',
  },
  {
    location: 'Osaka, Japonia',
    text: 'Vacanță minunată în familie. Complexul avea ceva pentru fiecare, mâncare bună, camere curate și multe activități în zonă.',
    name: 'Yui Suzuki',
  },
  {
    location: 'Wolfsburg, Germania',
    text: 'Facilități excelente pentru conferințe și personal foarte profesionist. Camere curate și liniștite, cu siguranță revin.',
    name: 'Klara Braun',
  },
  {
    location: 'Brașov, România',
    text: 'O oprire perfectă spre Transfăgărășan. Pizza excelentă, bere rece, iar personalul ne-a făcut să ne simțim ca acasă.',
    name: 'Andrei M.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  return (
    <section id="testimonials" className="border-t border-neutral-200 bg-[#faf8f5] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
          <div className="editorial-reveal">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-neutral-400">
              Recenzii
            </p>
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light leading-[1.12] text-neutral-900">
              Vocile
              <br />
              <span className="italic">oaspeților</span>
            </h2>
            <div className="mt-10 flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                aria-label="Recenzie anterioară"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-transparent text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                aria-label="Recenzie următoare"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <p className="mt-6 font-serif text-[13px] text-neutral-400">
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </p>
          </div>

          <blockquote
            key={active}
            className="editorial-reveal border-l border-neutral-300 pl-8 md:pl-12"
          >
            <p className="font-serif text-[clamp(22px,2.8vw,36px)] font-light italic leading-[1.45] text-neutral-800">
              „{t.text}"
            </p>
            <footer className="mt-10">
              <cite className="not-italic">
                <span className="block text-[14px] font-medium text-neutral-900">{t.name}</span>
                <span className="mt-1 block text-[12px] uppercase tracking-[0.16em] text-neutral-400">
                  {t.location}
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
