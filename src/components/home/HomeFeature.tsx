import { Link } from 'react-router-dom'
import { SAGA_TERASA } from '../../data/sagaAssets'

export default function HomeFeature() {
  return (
    <section className="section-beige">
      <div className="container-wide grid items-center gap-14 md:grid-cols-2 md:gap-20 lg:gap-24">
        <div className="md:pr-6 lg:pr-12">
          <p className="mb-4 text-[11px] font-normal uppercase tracking-[0.28em] text-[#a3a89e]">
            Wellness &amp; relax
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.35rem)] font-normal leading-[1.22] text-[#3a4038]">
            A summer with us
          </h2>
          <p className="body-copy mt-7 max-w-[400px]">
            Terasa Saga, seri liniștite și priveliște spre munți, locul perfect după
            o zi pe traseu. Iarna, confortul camerelor te așteaptă la parter.
          </p>
          <Link to="/pub" className="btn-fill-olive mt-10 inline-block">
            Discover terrace
          </Link>
        </div>
        <div className="overflow-hidden">
          <img
            src={SAGA_TERASA[1]}
            alt="Terasa Saga"
            className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
