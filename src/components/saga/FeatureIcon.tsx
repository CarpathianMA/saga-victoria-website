function FeatureIcon({ name }: { name: string }) {
  const key = name.toLowerCase()
  const cls = 'h-[18px] w-[18px] shrink-0 text-muted'

  if (key.includes('wi-fi') || key.includes('wifi')) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12.5a11 11 0 0114 0M8.5 15.5a6 6 0 017 0M12 18.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (key.includes('tv')) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (key.includes('baie') || key.includes('duș')) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 14h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM8 6v4M12 4v6M16 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (key.includes('parcare')) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16V8h3a2 2 0 010 4h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (key.includes('bucătărie') || key.includes('salon')) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 10h16M6 10V6h12v4M8 14h8v4H8v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
  }
  if (key.includes('pat') || key.includes('canapea')) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 12h16v6H4v-6zM6 12V9a2 2 0 012-2h8a2 2 0 012 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default FeatureIcon
