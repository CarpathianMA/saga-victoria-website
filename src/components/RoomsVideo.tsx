import { SAGA } from '../data/sagaAssets'

function VideoFrame({ videoId, className = '' }: { videoId: string; className?: string }) {
  return (
    <div className={`relative aspect-video overflow-hidden bg-[#1a1a1a] ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Tur virtual Saga Rooms Victoria"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default function RoomsVideo() {
  return (
    <section className="section-hotel border-y border-black/5 bg-white">
      <div className="container-hotel grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-[13px] uppercase tracking-[0.1em] text-[#055158]">
            Tur virtual
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal leading-[1.25] text-[#1a1a1a]">
            Vezi camerele înainte să ajungi
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#5a5a58]">
            Plimbă-te virtual prin camerele Saga Victoria, spații, finisaje și atmosfera
            din Str. Pieții 2A.
          </p>
        </div>
        <VideoFrame videoId={SAGA.videos.rooms} />
      </div>
    </section>
  )
}
