import type { ReactNode } from 'react'

type ButtonVariant = 'outline-white' | 'outline-dark'
type ButtonSize = 'default' | 'sm' | 'hero'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  showIcon?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  href = '#',
  variant = 'outline-dark',
  size = 'default',
  className = '',
  showIcon = true,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center rounded-full font-medium transition-all duration-300'

  const variants = {
    'outline-white':
      'border border-white/55 bg-transparent text-white hover:bg-white/5',
    'outline-dark':
      'border-[1.5px] border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white group',
  }

  const sizes = {
    default: 'gap-3 px-6 py-2.5 text-sm',
    sm: 'gap-3 px-5 py-2 text-[13px]',
    hero: 'gap-2 pl-5 pr-1 py-1 text-[13px] font-normal tracking-wide',
  }

  const iconClass =
    variant === 'outline-white'
      ? 'bg-white text-neutral-900'
      : 'bg-neutral-900 text-white group-hover:bg-white group-hover:text-neutral-900'

  const iconSize = size === 'hero' ? 'h-9 w-9' : 'h-7 w-7'

  return (
    <a href={href} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {showIcon && (
        <span className={`flex ${iconSize} shrink-0 items-center justify-center rounded-full ${iconClass}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </a>
  )
}
