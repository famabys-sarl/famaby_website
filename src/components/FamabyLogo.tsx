interface FamabyLogoProps {
  size?: number
  variant?: 'full' | 'icon' | 'white' | 'dark'
  className?: string
}

export default function FamabyLogo({ size = 40, variant = 'icon', className = '' }: FamabyLogoProps) {
  const s = size
  const h = variant === 'icon' ? s : s * 0.6

  return (
    <img
      src="/images/logo/logo.jpg"
      alt="FAMABY"
      width={s}
      height={h}
      className={`object-contain ${className}`}
      style={{ width: s, height: h }}
    />
  )
}
