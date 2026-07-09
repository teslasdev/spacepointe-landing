type IconProps = {
  className?: string
}

export function ChevronDownIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CartIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M3.5 4.5H5.6L7.8 15.2H19.1L21 7.2H6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.5" cy="19" r="1.5" fill="currentColor" />
      <circle cx="18" cy="19" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function SearchIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GearIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M11 2.8h2l.6 2.1c.6.2 1.2.5 1.7.9l2-.8 1.5 1.5-.8 2c.4.5.7 1.1.9 1.7l2.1.6v2l-2.1.6c-.2.6-.5 1.2-.9 1.7l.8 2-1.5 1.5-2-.8c-.5.4-1.1.7-1.7.9L13 21.2h-2l-.6-2.1c-.6-.2-1.2-.5-1.7-.9l-2 .8-1.5-1.5.8-2c-.4-.5-.7-1.1-.9-1.7L2.8 13v-2l2.1-.6c.2-.6.5-1.2.9-1.7l-.8-2 1.5-1.5 2 .8c.5-.4 1.1-.7 1.7-.9L11 2.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

export function ArrowUpIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlayIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M9 6.8V17.2L17.8 12L9 6.8Z" fill="currentColor" />
    </svg>
  )
}

export function GlobeIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12H20.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3.5C14.5 6.1 14.5 17.9 12 20.5C9.5 17.9 9.5 6.1 12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function PersonLineIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M12 12.1C14.4 12.1 16.3 10.2 16.3 7.8C16.3 5.4 14.4 3.5 12 3.5C9.6 3.5 7.7 5.4 7.7 7.8C7.7 10.2 9.6 12.1 12 12.1Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20.5C6.1 17.4 8.7 15.7 12 15.7C15.3 15.7 17.9 17.4 19 20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function BriefcaseIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <rect x="4.5" y="7.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.2 7.5V6.3C9.2 5.6 9.8 5 10.5 5H13.5C14.2 5 14.8 5.6 14.8 6.3V7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.5 12H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HeadsetIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M5.5 12.2C5.5 8.2 8.6 5 12.5 5C16.4 5 19.5 8.2 19.5 12.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.5 13.1C4.5 11.8 5.5 10.8 6.8 10.8H7.3V18.5H6.8C5.5 18.5 4.5 17.5 4.5 16.2V13.1Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19.5 13.1C19.5 11.8 18.5 10.8 17.2 10.8H16.7V18.5H17.2C18.5 18.5 19.5 17.5 19.5 16.2V13.1Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.6 18.5C16.6 19.3 15.9 20 15.1 20H13.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronRightIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path d="M7.5 4.5L12.5 10L7.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ScreenIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none">
      <rect x="6" y="10" width="44" height="30" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M6 18H50" stroke="currentColor" strokeWidth="2.2" />
      <path d="M25 40V51" stroke="currentColor" strokeWidth="2.2" />
      <path d="M17 51H33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="46" y="22" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  )
}

export function BarsIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none">
      <path d="M10 52V44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 52V30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30 52V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M40 52V24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M50 52V12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function MedalIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none">
      <path d="M23 12L31 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M41 12L33 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="32" cy="36" r="10" stroke="currentColor" strokeWidth="2.2" />
      <path d="M28 46L24 54L32 50L40 54L36 46" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  )
}

export function PersonIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none">
      <path d="M22 26C22 20.5 26.5 16 32 16C37.5 16 42 20.5 42 26C42 31.5 37.5 36 32 36C26.5 36 22 31.5 22 26Z" stroke="currentColor" strokeWidth="2.2" />
      <path d="M13 54C15.4 44.3 23.4 39 32 39C40.6 39 48.6 44.3 51 54" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M26 44L32 50L38 44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path d="M5.5 4.5H8L9.6 9.2L7.8 10.8C8.8 13 10.7 14.9 12.9 15.9L14.5 14.1L19.2 15.7V18.5C19.2 19.6 18.5 20.5 17.4 20.7C16.8 20.8 16.2 20.9 15.6 20.9C9.2 20.9 3.9 15.6 3.9 9.2C3.9 8.6 4 8 4.1 7.4C4.3 6.3 5.2 5.6 6.3 5.6H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
