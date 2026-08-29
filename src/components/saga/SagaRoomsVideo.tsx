import { SAGA } from '../../data/sagaAssets'

export default function SagaRoomsVideo() {
  return (
    <section className="border-y border-black/[0.06] bg-[#f3f0eb]">
      <div className="container-hotel section-hotel-compact grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="label-hotel">Tur virtual</p>
          <h2 className="h2-hotel-left mt-3">Vezi camerele înainte să ajungi</h2>
          <p className="mt-5 prose-hotel">
            Plimbă-te virtual prin Saga Rooms: camere, finisaje și atmosfera de la Str. Pieții 2A,
            Victoria. Un preview sincer al locului în care te vei odihni.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-video overflow-hidden bg-ink shadow-[0_12px_48px_rgba(0,0,0,0.14)]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${SAGA.videos.rooms}?rel=0&modestbranding=1`}
              title="Tur virtual Saga Rooms Victoria"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
