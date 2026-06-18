// Znak Mountain Resort River — tatranské štíty (zasněžený vrchol),
// měsíc a vlnka řeky v kruhovém emblému, ve zlaté.
export default function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21.25" stroke="#d8b15a" strokeWidth="1.5" />
      {/* měsíc */}
      <circle cx="15.5" cy="13.5" r="2.2" fill="#d8b15a" />
      {/* štíty */}
      <path d="M8 31 L18 16 L24 23 L31 13 L40 31 Z" fill="#d8b15a" />
      {/* sníh na hlavním vrcholu */}
      <path d="M31 13 L34 17.5 L31 20 L28 16 Z" fill="#f6efdf" />
      {/* řeka */}
      <path
        d="M8.5 35.2 Q14 32.6 19.5 35.2 T30.5 35.2 T41.5 35.2"
        stroke="#d8b15a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
