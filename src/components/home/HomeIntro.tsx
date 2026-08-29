export default function HomeIntro() {
  return (
    <section id="discover" className="bg-[#f5f5f0] px-6 pb-14 pt-28 text-center md:px-10 md:pb-16 md:pt-36 lg:pt-40">
      <div className="mx-auto max-w-[580px]">
        <div className="stars-gold mb-10 flex justify-center gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z" />
            </svg>
          ))}
        </div>
        <h2 className="font-serif text-[clamp(1.75rem,3.4vw,2.5rem)] font-normal leading-[1.25] text-[#3a4038]">
          The sanctuary, just for you.
        </h2>
        <p className="body-copy mx-auto mt-7 max-w-[440px]">
          Saga Victoria, camere liniștite, mâncare bună și spații pentru
          momentele care contează, în inima Țării Făgărașului.
        </p>
      </div>
    </section>
  )
}
