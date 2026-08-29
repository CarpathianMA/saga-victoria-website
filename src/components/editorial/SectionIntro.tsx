import type { ReactNode } from 'react'

interface SectionIntroProps {
  eyebrow: string
  title: ReactNode
  lead?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionIntro({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: SectionIntroProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'

  return (
    <header className={`flex max-w-[640px] flex-col ${alignClass} ${className}`}>
      <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="font-serif text-[clamp(32px,3.8vw,52px)] font-light leading-[1.08] tracking-[-0.01em] text-neutral-900">
        {title}
      </h2>
      {lead && (
        <p className="mt-6 text-[15px] leading-[1.85] text-neutral-500">{lead}</p>
      )}
    </header>
  )
}
