import HomeNav from './HomeNav'
import { SAGA } from '../../data/sagaAssets'

export default function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img
        src={SAGA.hero}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      {/* Olive tint ca în mockup, nu gri simplu */}
      <div className="absolute inset-0 bg-[#3e4e35]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3e4e35]/20 via-transparent to-[#2a3328]/55" />

      <HomeNav light />

      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center text-white">
        <p className="mb-8 font-serif text-[11px] font-normal uppercase tracking-[0.35em] text-white/55">
          Saga Victoria
        </p>
        <h1 className="max-w-[680px] font-serif text-[clamp(2.25rem,5.2vw,3.625rem)] font-normal leading-[1.18] tracking-[0.01em]">
          Where time slows.
          <br />
          Comfort deepens.
        </h1>
        <a
          href="#discover"
          className="mt-14 text-[10px] font-normal uppercase tracking-[0.3em] text-white/45 transition hover:text-white/80"
        >
          Scroll
        </a>
      </div>
    </section>
  )
}
