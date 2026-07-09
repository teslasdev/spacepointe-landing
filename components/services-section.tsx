import { ArrowRightIcon } from "./icons"
import { ServiceCard } from "./service-card"

const services = [
  {
    title: "Merchant solutions",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description: "Tools that help merchants accept payments and manage operations with less friction.",
    meta: [
      { label: "Type", value: "Platform" },
      { label: "Focus", value: "Merchant" },
      { label: "Use case", value: "Daily ops" }
    ]
  },
  {
    title: "Financial services",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "Payment and financial workflows that help teams keep control of money movement.",
    meta: [
      { label: "Type", value: "Finance" },
      { label: "Focus", value: "Payments" },
      { label: "Use case", value: "Control" }
    ]
  },
  {
    title: "Retail distribution tech",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    description: "Systems that connect stores, field teams, and distribution activity.",
    meta: [
      { label: "Type", value: "Ops" },
      { label: "Focus", value: "Distribution" },
      { label: "Use case", value: "Retail" }
    ]
  },
  {
    title: "Enterprise platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "A flexible platform for larger teams that need control, visibility, and scale.",
    meta: [
      { label: "Type", value: "Platform" },
      { label: "Focus", value: "Enterprise" },
      { label: "Use case", value: "Scale" }
    ]
  }
]

export function ServicesSection() {
  return (
    <section className="bg-[#e9f2f8] px-4 py-14 sm:px-6 lg:px-8 lg:py-18" data-aos="fade-up">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up" data-aos-delay="80">
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">Products showcase</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink sm:text-[2rem]">
              Products designed to power daily merchant operations
            </h2>
          </div>

          <a
            href="/products"
            className="inline-flex items-center gap-2 self-start text-sm font-extrabold text-slate-500 transition hover:text-[#16bfd6] sm:text-base"
          >
            <span>View all products</span>
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} aosDelay={index * 80} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
