import Button from './Button'
import SectionIntro from './editorial/SectionIntro'
import { SAGA } from '../data/sagaAssets'

const MAP_IMAGE = SAGA.imprejurimi

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:items-start">
          <div className="editorial-reveal lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="Împrejurimi"
              title={
                <>
                  Pleacă de la Saga,
                  <br />
                  <span className="italic">descoperă</span> Făgărașul
                </>
              }
              lead="Complexul e poarta spre cele mai frumoase trasee și obiective din zonă, de la Transfăgărășan la cetăți medievale."
            />
            <div className="mt-10">
              <Button href="https://sagavictoria.ro/" size="sm">
                Planifică excursia
              </Button>
            </div>
          </div>

          <figure className="editorial-reveal overflow-hidden rounded-sm border border-neutral-100 bg-[#faf8f5] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.06)]">
            <img
              src={MAP_IMAGE}
              alt="Hartă atracții turistice din Țara Făgărașului, distanțe de la Saga Victoria"
              className="h-auto w-full"
              loading="lazy"
            />
            <figcaption className="mt-4 px-2 text-center text-[11px] uppercase tracking-[0.18em] text-neutral-400">
              Distanțe orientative · Țara Făgărașului
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
