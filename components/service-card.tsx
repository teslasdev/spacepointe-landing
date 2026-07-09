import type { ReactNode } from "react"

type ServiceCardProps = {
  title: string
  image: string
  description: string
  meta: Array<{ label: string; value: string }>
  icon?: ReactNode
  aosDelay?: number
}

export function ServiceCard({ title, image, description, meta, icon, aosDelay = 0 }: ServiceCardProps) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="overflow-hidden bg-white shadow-soft ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 "
    >
      <div className="relative h-[190px] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {icon ? <div className="absolute left-4 top-4 rounded-full bg-white/95 p-2 text-[#12bfd5] shadow">{icon}</div> : null}
      </div>

      <div className="px-6 py-7">
        <h3 className="text-lg font-black text-ink">{title}</h3>

        <div className="mt-5 grid grid-cols-3 gap-3 border-b border-slate-200 pb-4">
          {meta.map((item) => (
            <div key={item.label} className="pr-4">
              <div className="text-[0.7rem] font-extrabold uppercase tracking-wide text-slate-500">{item.label}</div>
              <div className="mt-1 text-sm font-bold text-[#16bfd6]">{item.value}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  )
}
