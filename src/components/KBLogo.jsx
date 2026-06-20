export default function KBLogo({ size = 48, color = '#ffffff' }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="22" r="18" fill={color} />
      <path d="M4 58 Q30 28 60 40 Q90 28 116 58" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M10 66 Q30 36 60 40" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M110 66 Q90 36 60 40" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M18 70 Q32 42 60 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M102 70 Q88 42 60 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
    </svg>
  )
}
