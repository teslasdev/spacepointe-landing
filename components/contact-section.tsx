import { ChevronRightIcon } from "./icons"

export function ContactSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-5 lg:px-6 lg:py-16" data-aos="fade-up">
      <div className="mx-auto grid max-w-[1140px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl " data-aos="fade-right" data-aos-delay="80">
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">Contact us now</p>
          <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-ink sm:text-[2rem]">
            Talk to the right SpacePointe team
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Whether you need a demo, support, or partnership discussion, we can route you to the right team.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold text-slate-600 transition hover:text-[#18c6de] sm:text-base"
          >
            <span>View the contact page</span>
            <ChevronRightIcon className="h-5 w-5 text-[#bfeff5]" />
          </a>
        </div>

        <form className="grid gap-6 " data-aos="fade-left" data-aos-delay="120">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-3">
              <span className="text-sm font-bold text-slate-500">Name</span>
              <input
                type="text"
                placeholder=""
                className="border-0 border-b-2 border-[#18c6de] bg-transparent px-0 py-2 text-base outline-none transition placeholder:text-transparent focus:border-[#0a5474]"
              />
            </label>
            <label className="grid gap-3">
              <span className="text-sm font-bold text-slate-500">Email</span>
              <input
                type="email"
                placeholder=""
                className="border-0 border-b-2 border-[#18c6de] bg-transparent px-0 py-2 text-base outline-none transition placeholder:text-transparent focus:border-[#0a5474]"
              />
            </label>
          </div>

          <label className="grid gap-3">
            <span className="text-sm font-bold text-slate-500">Message</span>
            <textarea
              rows={3}
              className="resize-none border-0 border-b-2 border-[#18c6de] bg-transparent px-0 py-2 text-base outline-none transition focus:border-[#0a5474]"
            />
          </label>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm bg-[#18c6de] px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#11b7cf]"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
