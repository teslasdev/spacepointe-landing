import { ChevronRightIcon } from "./icons"
import { BriefcaseIcon, GlobeIcon, HeadsetIcon, PersonLineIcon } from "./icons"
import { StatCard } from "./stat-card"

const thumbnails = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=601&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=602&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=603&q=80"
]

const benefits = [
  "Built for merchants and retailers",
  "Payments, finance, and operations connected",
  "Support, documentation, and team enablement"
]

export function BenefitsSection() {
  return (
    <section className="bg-[#dce6ef] px-4 py-16 sm:px-5 lg:px-6 lg:py-24" data-aos="fade-up">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-center">
          <div className="relative" data-aos="fade-right">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute right-0 top-0 h-[230px] w-[270px] rounded-[8px] bg-white shadow-soft ring-1 ring-slate-200 sm:h-[280px] sm:w-[320px]" />
              <div className="absolute left-0 top-14 h-[230px] w-[270px] rounded-[10px] bg-white shadow-[0_18px_50px_rgba(10,63,93,0.18)] ring-1 ring-slate-200 sm:h-[290px] sm:w-[350px]" />
              <div className="relative z-10 overflow-hidden rounded-[12px] bg-white shadow-soft ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Analytics dashboard"
                  className="h-[270px] w-full object-cover sm:h-[320px]"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {thumbnails.map((src, index) => (
                <div
                  key={src}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="overflow-hidden rounded-sm bg-white shadow-soft ring-1 ring-slate-200"
                >
                  <img src={src} alt="" className="h-16 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl" data-aos="fade-left" data-aos-delay="80">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">Why SpacePointe</p>
            <h2 className="mt-3 text-[2rem] font-black tracking-tight text-ink sm:text-[2.5rem]">Solutions built around how business operates</h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-slate-600">
              Our platform is designed to support the full merchant lifecycle, from onboarding and payments to growth,
              support, and reporting.
            </p>

            <div className="mt-6 divide-y divide-[#0a5474]/40">
              {benefits.map((benefit, index) => (
                <div key={benefit} data-aos="fade-up" data-aos-delay={120 + index * 60} className={`flex items-center gap-3 py-3 ${index === 0 ? "pt-0" : ""}`}>
                  <ChevronRightIcon className="h-5 w-5 shrink-0 text-[#18c6de]" />
                  <span className={`text-base font-extrabold sm:text-[1.08rem] ${index === 0 ? "text-[#18c6de]" : "text-slate-600"}`}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="120" className="relative  rounded-sm bg-white px-6 py-8 shadow-soft ring-1 ring-slate-200  sm:px-9 sm:py-9 mt-6">
          <div className="grid gap-5 md:grid-cols-4 md:gap-0 md:divide-x md:divide-slate-200">
            <StatCard icon={<GlobeIcon className="h-4 w-4" />} label="Countries" value="47 +" aosDelay={140} />
            <StatCard icon={<PersonLineIcon className="h-4 w-4" />} label="Clients" value="110 +" aosDelay={220} />
            <StatCard icon={<BriefcaseIcon className="h-4 w-4" />} label="Projects" value="250 +" aosDelay={300} />
            <StatCard icon={<HeadsetIcon className="h-4 w-4" />} label="Team members" value="30 +" aosDelay={380} />
          </div>
        </div>
      </div>
    </section>
  )
}
