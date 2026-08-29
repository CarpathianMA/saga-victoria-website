import Navbar from './Navbar'
import Button from './Button'
import { SAGA } from '../data/sagaAssets'

const HERO_IMAGE = SAGA.hero

export default function Hero() {
  return (
    <header id="home" className="relative min-h-[100svh] overflow-hidden bg-neutral-950">
      <img
        src={HERO_IMAGE}
        alt="Saga Victoria, complex de cazare, pub și evenimente în inima Țării Făgărașului"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/75" />

      <div className="absolute inset-x-0 top-0 z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 md:px-12 lg:px-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-[720px] editorial-reveal">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.36em] text-white/50">
              Victoria · Țara Făgărașului
            </p>
            <h1 className="mb-6 font-serif text-[clamp(44px,6.5vw,88px)] font-light leading-[0.98] tracking-[-0.02em] text-white">
              Unde muntele
              <br />
              <span className="italic">întâlnește</span> confortul
            </h1>
            <p className="mb-10 max-w-[440px] text-[15px] leading-[1.8] text-white/65">
              Camere elegante, pizza artizanală, evenimente de neuitat, totul sub
              același acoperiș, în centrul Victoria.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href="/camere" variant="outline-white" size="hero">
                Rezervă o cameră
              </Button>
              <a
                href="#experiente"
                className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                Explorează Saga
              </a>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-8 max-md:mt-16">
            {[
              { n: '10+', l: 'Camere & apartament' },
              { n: '1', l: 'Complex complet' },
              { n: '2A', l: 'Str. Pieții, Victoria' },
            ].map((stat) => (
              <div key={stat.l}>
                <span className="block font-serif text-[clamp(28px,3vw,36px)] font-light text-white">
                  {stat.n}
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {stat.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[9px] uppercase tracking-[0.28em] text-white/35">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-white/20">
          <div className="scroll-cue h-full w-full bg-white/70" />
        </div>
      </div>
    </header>
  )
}
