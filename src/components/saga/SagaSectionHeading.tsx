import { Link } from 'react-router-dom'

interface SagaSectionHeadingProps {
  title: string
  lead: string
  ctaLabel?: string
  ctaHref?: string
}

export default function SagaSectionHeading({
  title,
  lead,
  ctaLabel,
  ctaHref,
}: SagaSectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="h2-hotel">{title}</h2>
      <p className="lead-hotel">{lead}</p>
      {ctaLabel && ctaHref && (
        <div className="mt-6 text-center">
          <Link to={ctaHref} className="link-arrow">
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </div>
  )
}
