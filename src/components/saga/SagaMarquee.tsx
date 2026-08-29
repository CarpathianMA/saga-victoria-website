const ITEMS = [
  'Cel mai bun preț garantat',
  'Parcare gratuită',
  'Pub & Pizza la parter',
  'Sală de evenimente',
  'Wi-Fi în toate camerele',
  'Terasă sezonieră',
]

export default function SagaMarquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-track overflow-hidden border-y border-black/5 bg-white py-3.5">
      <div className="flex w-max animate-marquee items-center gap-10 md:gap-14">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-[12px] uppercase tracking-[0.14em] text-ink md:gap-14 md:text-[13px]"
          >
            {item}
            <span className="text-brand" aria-hidden>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
