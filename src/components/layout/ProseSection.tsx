import type { ReactNode } from 'react'
import Container from './Container'

interface ProseSectionProps {
  children: ReactNode
  className?: string
  narrow?: boolean
  spacing?: 'md' | 'lg'
}

export default function ProseSection({
  children,
  className = '',
  narrow = true,
  spacing = 'lg',
}: ProseSectionProps) {
  const py = spacing === 'lg' ? 'py-20 md:py-28 lg:py-32' : 'py-14 md:py-20'
  return (
    <section className={py}>
      <Container narrow={narrow} className={className}>
        {children}
      </Container>
    </section>
  )
}
