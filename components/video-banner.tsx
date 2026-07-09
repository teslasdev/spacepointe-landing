import { PlayIcon } from "./icons"

const partners = ["TechBrand", "HomeLab", "Coloniersis", "Monograms", "BrandName"]

export function VideoBanner() {
  return (
    <section className="relative overflow-hidden bg-[#38444d]" data-aos="fade-up">
      <img
        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80"
        alt="Business professional"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[#0b1820]/55" />

      <div className="relative mx-auto max-w-[1140px] px-4 py-12 text-center text-white sm:px-5 lg:px-6 lg:py-14">
        <button
          type="button"
          aria-label="Play video"
          data-aos="zoom-in"
          data-aos-delay="80"
          className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#18c6de] shadow-[0_24px_50px_rgba(24,198,222,0.35)] "
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/35">
            <PlayIcon className="h-5 w-5 text-white" />
          </span>
        </button>

        <p data-aos="fade-up" data-aos-delay="120" className="mx-auto mt-7 max-w-2xl text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#86e7f5] sm:text-xs">
          Case studies and merchant success
        </p>

        <h2 data-aos="fade-up" data-aos-delay="160" className="mx-auto mt-3 max-w-3xl text-xl font-black leading-tight sm:text-2xl lg:text-[2.2rem]">
          See how teams use SpacePointe to simplify commerce and grow with confidence
        </h2>

        <div data-aos="fade-up" data-aos-delay="220" className="mt-8 flex flex-wrap items-center justify-center gap-0 text-[0.58rem] font-black uppercase tracking-[0.16em] sm:gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div key={partner} className="flex items-center gap-4">
              <span className="text-white/95">{partner}</span>
              {index < partners.length - 1 ? <span className="h-10 w-px bg-[#18c6de]" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
