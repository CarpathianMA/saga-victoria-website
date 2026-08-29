import type { ReactNode } from 'react'
import Container from './Container'

interface SplitBlockProps {
  image: string
  imageAlt: string
  children: ReactNode
  reverse?: boolean
  label?: string
}

export default function SplitBlock({ image, imageAlt, children, reverse, label }: SplitBlockProps) {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28 ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <figure className="overflow-hidden bg-[#ebe6de]">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              loading="lazy"
            />
          </figure>
          <div>
            {label && (
              <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#9c968d]">{label}</p>
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  )
}
