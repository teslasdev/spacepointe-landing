export function AboutSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-18" data-aos="fade-up">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <div className="relative mx-auto w-full max-w-[640px] " data-aos="fade-right" data-aos-delay="80">
          <div className="overflow-hidden rounded-[4px] shadow-soft ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1400&q=80"
              alt="Downtown city street"
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />
          </div>
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#12bfd5] text-white shadow-[0_20px_45px_rgba(18,191,213,0.35)] transition hover:scale-105"
          >
            <span className="ml-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M9 6.8V17.2L17.8 12L9 6.8Z" />
              </svg>
            </span>
          </button>
        </div>

        <div className="max-w-xl" data-aos="fade-left" data-aos-delay="120">
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">What we do</p>
          <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-ink sm:text-[2rem]">
            One platform for commerce, payments, and merchant operations
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            SpacePointe helps merchants, retailers, partners, and enterprise teams simplify payments, streamline
            operations, and create room for sustainable growth.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-sky-50/70 p-4">
            <div className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-slate-500">
              Built around how business operates
            </div>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Our ecosystem brings together commerce, payments, support, and growth tools in one practical experience
              so teams can focus on customers rather than juggling disconnected systems.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/solutions"
              className="inline-flex items-center justify-center rounded-sm bg-[#18c6de] px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#11b7cf]"
            >
              View solutions
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-sm border border-[#0a5072]/40 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-slate-50"
            >
              See products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
