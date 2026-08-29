import { Link } from 'react-router-dom'
import Button from './Button'
import RoomCarousel from './RoomCarousel'
import Calendar from './Calendar'
import RoomsVideo from './RoomsVideo'

export default function RoomsSection() {
  return (
    <section id="rooms" className="overflow-x-clip bg-white py-[88px]">
      <div className="mx-auto max-w-[1280px] px-20 max-xl:px-12 max-md:px-6">
        <div className="grid grid-cols-[1.65fr_1fr] items-start gap-x-16 gap-y-10 max-lg:grid-cols-1">
          <div className="min-w-0 overflow-hidden">
            <div className="mb-12">
              <RoomCarousel />
            </div>

            <h2 className="mb-5 max-w-[540px] text-[clamp(30px,3.2vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-neutral-900">
              Alege camera potrivită pentru sejurul tău perfect!
            </h2>
            <p className="mb-9 max-w-[440px] text-[13px] leading-[1.75] text-neutral-400">
              10 camere moderne, single, duble matrimoniale, deluxe cu canapea extensibilă
              și un apartament complet. Prețul fiecărei camere apare direct în carusel.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#rooms" variant="outline-dark">
                Rezervă
              </Button>
              <Link
                to="/camere"
                className="text-[13px] font-medium text-neutral-900 underline-offset-4 hover:underline"
              >
                Vezi toate camerele →
              </Link>
            </div>
          </div>

          <div className="max-lg:mx-auto max-lg:w-full max-lg:max-w-[420px]">
            <Calendar />
          </div>
        </div>

        <RoomsVideo />
      </div>
    </section>
  )
}
