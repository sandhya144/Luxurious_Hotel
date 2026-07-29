type LogoProps = {
  className?: string;
  variant?: 'charcoal' | 'ivory';
};

export default function Logo({ className = '', variant = 'charcoal' }: LogoProps) {
  const stroke = variant === 'ivory' ? '#FAF7F2' : '#2B2724';
  const text = variant === 'ivory' ? 'text-ivory' : 'text-charcoal';
  const sub = variant === 'ivory' ? 'text-ivory/70' : 'text-charcoal-soft';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M6 26V14M26 26V14M4 15L16 6L28 15" />
        <path d="M13 26V18h6v8" />
        <path d="M3 27h26" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] font-medium tracking-wide ${text}`}>
          The White House Hotel
        </span>
        <span className={`mt-0.5 text-[0.6rem] uppercase tracking-widest2 ${sub}`}>
          Varanasi
        </span>
      </span>
    </span>
  );
}
