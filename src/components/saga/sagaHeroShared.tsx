export const HERO_TRUST_ITEMS = [
  { icon: '€', label: 'Cel mai bun preț garantat' },
  { icon: '%', label: 'Oferte exclusive' },
  { icon: '◷', label: 'Tarife flexibile disponibile' },
  { icon: '☕', label: 'Oferte gastronomice' },
]

export function SagaLogoMark({ light = false }: { light?: boolean }) {
  const color = light ? 'text-white' : 'text-ink'
  return (
    <span className={`inline-flex flex-col items-center ${color}`}>
      <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden className="mb-3 opacity-95">
        <path d="M4 22L14 4l10 18H4z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 18h12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="text-[11px] uppercase tracking-[0.24em]">Saga Victoria</span>
    </span>
  )
}

export function SagaHeroTrustBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-black/30 backdrop-blur-[2px]">
      <div className="container-hotel grid grid-cols-2 gap-x-4 gap-y-3 py-4 md:grid-cols-4 md:gap-6 md:py-5">
        {HERO_TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 md:justify-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-[12px] text-white/90">
              {item.icon}
            </span>
            <span className="text-[10px] leading-snug text-white/85 md:text-[11px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
