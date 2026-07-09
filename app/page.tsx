import { BarsIcon, GearIcon, MedalIcon, PersonIcon, ScreenIcon } from "@/components/icons"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { FeatureCard } from "@/components/feature-card"
import { InsightsSection } from "@/components/insights-section"
import { HeroPortrait } from "@/components/hero-portrait"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { VideoBanner } from "@/components/video-banner"
import { homeFeatureCards, homeHero } from "@/lib/site-content"

const features = [
  {
    icon: <ScreenIcon className="h-16 w-16" />,
    title: homeFeatureCards[0].title,
    description: homeFeatureCards[0].description
  },
  {
    icon: <BarsIcon className="h-16 w-16" />,
    title: homeFeatureCards[1].title,
    description: homeFeatureCards[1].description
  },
  {
    icon: <MedalIcon className="h-16 w-16" />,
    title: homeFeatureCards[2].title,
    description: homeFeatureCards[2].description
  },
  {
    icon: <PersonIcon className="h-16 w-16" />,
    title: homeFeatureCards[3].title,
    description: homeFeatureCards[3].description
  }
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative z-10 bg-hero-radial mb-10" data-aos="fade-up">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
        </div>

        <div className="mx-auto max-w-[1140px] px-4 pt-8 sm:px-5 lg:px-6 lg:pt-12">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-0">
            <div className="relative z-10 max-w-xl pb-4 pt-2 text-center lg:pb-10 lg:pt-6 lg:text-left" data-aos="fade-right" data-aos-delay="80">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de] sm:text-[0.72rem]">
                {homeHero.eyebrow}
              </p>

              <h1 className="mt-4 text-2xl font-black leading-[0.98] tracking-tight text-ink sm:text-3xl lg:text-[2.9rem]">
                {homeHero.title}
              </h1>

              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 lg:mx-0">
                {homeHero.description}
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href={homeHero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-sm bg-[#18c6de] px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#11b7cf] sm:text-sm"
                >
                  {homeHero.primaryCta.label}
                </a>
                <a
                  href={homeHero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-sm border border-[#0a5072]/65 bg-white/20 px-4 py-2 text-xs font-bold text-ink transition hover:bg-white/55 sm:text-sm"
                >
                  {homeHero.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="120">
              <HeroPortrait />
            </div>
          </div>

          <div className="relative z-20 grid gap-5 pb-4  sm:grid-cols-2 lg:translate-y-12 mt-10 xl:grid-cols-4 xl:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} aosDelay={index * 80} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <VideoBanner />
      <BenefitsSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
      <TeamSection />
    </main>
  )
}
