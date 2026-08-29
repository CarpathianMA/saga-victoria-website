import { Link } from 'react-router-dom'
import { SAGA } from '../../data/sagaAssets'

export default function HomeFinalCTA() {
  return (
    <section className="relative min-h-[440px] overflow-hidden md:min-h-[500px]">
      <img src={SAGA.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#3e4e35]/62" />
      <div className="relative flex min-h-[440px] flex-col items-center justify-center px-6 text-center text-white md:min-h-[500px]">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal tracking-[0.02em]">
          Book Your Stay
        </h2>
        <Link to="/camere" className="btn-ghost-light mt-10">
          Check availability
        </Link>
      </div>
    </section>
  )
}
