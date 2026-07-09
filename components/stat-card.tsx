import type { ReactNode } from "react"

type StatCardProps = {
  icon: ReactNode
  label: string
  value: string
  aosDelay?: number
}

export function StatCard({ icon, label, value, aosDelay = 0 }: StatCardProps) {
  return (
    <article data-aos="fade-up" data-aos-delay={aosDelay} className="flex items-center gap-4 py-2 ">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-[#0a5474] text-white shadow-soft">
        {icon}
      </div>
      <div>
        <div className="text-base font-extrabold uppercase tracking-tight text-ink">{label}</div>
        <div className="mt-1.5 text-[2rem] font-black leading-none text-[#18c6de]">{value}</div>
      </div>
    </article>
  )
}
