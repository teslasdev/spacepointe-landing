import type { ReactNode } from "react"

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
  aosDelay?: number
}

export function FeatureCard({ icon, title, description, aosDelay = 0 }: FeatureCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="rounded-sm bg-white px-4 py-3 z-10 shadow-soft ring-1 ring-slate-200/80"
    >
      <div className="text-[#16bfd6]">{icon}</div>
      <h3 className="mt-6 text-[2rem] font-black leading-tight text-ink sm:text-[1.3rem]">{title}</h3>
      <p className="mt-4 max-w-sm overflow-hidden text-[1.05rem] leading-8 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
        {description}
      </p>
    </article>
  )
}
