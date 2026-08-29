const AWARDS = ['Țara Făgărașului', 'Victoria', 'Saga Victoria', 'Rooms & Events']

export default function HomeAwards() {
  return (
    <section className="border-y border-[#e8e6e0] bg-white px-6 py-20 md:py-24">
      <div className="container-wide text-center">
        <h2 className="mb-14 font-serif text-[clamp(1.35rem,2.4vw,1.75rem)] font-normal text-[#3a4038]">
          An award-winning stay.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 md:gap-x-20">
          {AWARDS.map((name) => (
            <div
              key={name}
              className="flex h-[52px] min-w-[100px] items-center justify-center border border-[#e8e6e0] px-4 text-[8px] font-normal uppercase leading-tight tracking-[0.14em] text-[#a3a89e]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
