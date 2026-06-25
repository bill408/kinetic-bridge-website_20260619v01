export default function LithiumBalanceLogo({ height = 80 }) {
  const aspectRatio = 1200 / 160
  const width = height * aspectRatio

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lithium Balance"
    >
      <defs>
        <linearGradient id="lb-green" x1="0" y1="160" x2="160" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3a8c00" />
          <stop offset="100%" stopColor="#8cc800" />
        </linearGradient>
      </defs>

      {/* Icon: rounded square with green gradient */}
      <rect x="0" y="0" width="160" height="160" rx="22" fill="url(#lb-green)" />

      {/* White 3-blade fan / triskelion inside the square */}
      {/* Blade 1 — top */}
      <path
        d="M80 80 C80 60 95 38 80 22 C65 38 80 60 80 80Z"
        fill="white"
        transform="rotate(0,80,80)"
      />
      {/* Blade 2 — bottom-right */}
      <path
        d="M80 80 C80 60 95 38 80 22 C65 38 80 60 80 80Z"
        fill="white"
        transform="rotate(120,80,80)"
      />
      {/* Blade 3 — bottom-left */}
      <path
        d="M80 80 C80 60 95 38 80 22 C65 38 80 60 80 80Z"
        fill="white"
        transform="rotate(240,80,80)"
      />

      {/* Center circle to smooth the join */}
      <circle cx="80" cy="80" r="10" fill="url(#lb-green)" />

      {/* "LITHIUM BALANCE" text */}
      <text
        x="198"
        y="118"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="300"
        fontSize="80"
        letterSpacing="4"
        fill="#111111"
      >
        LITHIUM BALANCE
      </text>
    </svg>
  )
}
