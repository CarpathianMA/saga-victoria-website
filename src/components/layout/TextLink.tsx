import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface TextLinkProps {
  to: string
  children: ReactNode
}

export default function TextLink({ to, children }: TextLinkProps) {
  return (
    <Link
      to={to}
      className="group mt-10 inline-flex items-center gap-3 border-b border-[#1a1918] pb-1 text-[11px] uppercase tracking-[0.16em] text-[#1a1918] transition hover:text-[#6f6a63]"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </Link>
  )
}
