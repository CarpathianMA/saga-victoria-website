import Container from './Container'

interface QuoteBlockProps {
  quote: string
  author: string
  source?: string
}

export default function QuoteBlock({ quote, author, source }: QuoteBlockProps) {
  return (
    <section className="border-y border-[#ddd8cf] bg-white py-24 md:py-32">
      <Container narrow>
        <blockquote>
          <p className="font-serif text-[clamp(24px,3.2vw,36px)] font-normal italic leading-[1.45] text-[#1a1918]">
            „{quote}"
          </p>
          <footer className="mt-10">
            <cite className="not-italic">
              <span className="block text-[14px] text-[#1a1918]">{author}</span>
              {source && (
                <span className="mt-1 block text-[12px] uppercase tracking-[0.14em] text-[#9c968d]">
                  {source}
                </span>
              )}
            </cite>
          </footer>
        </blockquote>
      </Container>
    </section>
  )
}
