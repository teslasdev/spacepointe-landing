import Link from "next/link"
import type { PageCopy } from "@/lib/site-content"

type PageShellProps = {
  copy: PageCopy
}

export function PageShell({ copy }: PageShellProps) {
  const previewSections = copy.sections.filter((section) => section.kind !== "contact").slice(0, 2)

  return (
    <main className="relative overflow-hidden">
      <section className="relative border-b border-white/60 bg-gradient-to-br from-white via-[#edf6fb] to-[#d7e7f2]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-[1140px] gap-8 px-4 py-14 sm:px-5 lg:grid-cols-[1.02fr_0.98fr] lg:px-6 lg:py-18">
          <div className="relative z-10 max-w-2xl">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#18c6de] sm:text-xs">{copy.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-black leading-[1.02] tracking-tight text-ink sm:text-4xl lg:text-[3.3rem]">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-[1.05rem]">{copy.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={copy.primaryCta.href}
                className="inline-flex items-center justify-center rounded-sm bg-[#18c6de] px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#10b3ca]"
              >
                {copy.primaryCta.label}
              </Link>
              <Link
                href={copy.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-sm border border-[#0a5474]/40 bg-white/70 px-5 py-3 text-sm font-bold text-ink transition hover:bg-white"
              >
                {copy.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[20px] bg-white/80 p-5 shadow-soft ring-1 ring-white/90 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {previewSections.length ? (
                  previewSections.map((section) => (
                    <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">
                        {section.kind === "cards" ? "Highlights" : "Pages"}
                      </div>
                      <div className="mt-2 text-lg font-black text-ink">{section.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                    <div className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">SpacePointe</div>
                    <div className="mt-2 text-lg font-black text-ink">One platform, many business needs</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Use the navigation to jump into products, solutions, resources, support, or contact pages.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-5 lg:px-6 lg:py-16">
        <div className="space-y-10">
          {copy.sections.map((section) => {
            if (section.kind === "cards") {
              return (
                <section key={section.title} className="space-y-6">
                  <div className="max-w-2xl">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">{copy.eyebrow}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-[2rem]">{section.title}</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">{section.description}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {section.cards.map((card) =>
                      card.href ? (
                        <Link
                          key={card.title}
                          href={card.href}
                          className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-[#18c6de]/70"
                        >
                          <div className="text-lg font-black text-ink transition group-hover:text-[#0a5474]">{card.title}</div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                        </Link>
                      ) : (
                        <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                          <div className="text-lg font-black text-ink">{card.title}</div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                        </article>
                      )
                    )}
                  </div>
                </section>
              )
            }

            if (section.kind === "links") {
              return (
                <section key={section.title} className="space-y-5 rounded-3xl bg-[#eaf4f9] p-6 sm:p-8">
                  <div className="max-w-2xl">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">{copy.eyebrow}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-[2rem]">{section.title}</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">{section.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {section.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-1 hover:border-[#18c6de]/70"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              )
            }

            return (
              <section key={section.title} className="grid gap-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div>
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">{copy.eyebrow}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-[2rem]">{section.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{section.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.details.map((detail) => (
                      <div key={detail.label} className="rounded-2xl bg-[#eaf4f9] p-4">
                        <div className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-slate-500">{detail.label}</div>
                        <div className="mt-1 text-sm font-semibold text-ink">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <form className="grid gap-4 rounded-3xl bg-[#f7fbfe] p-5">
                  <div className="text-lg font-black text-ink">{section.formTitle}</div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 sm:col-span-1">
                      <span className="text-sm font-semibold text-slate-500">Name</span>
                      <input className="border-0 border-b border-cyan-300 bg-transparent px-0 py-2 text-base outline-none focus:border-[#0a5474]" />
                    </label>
                    <label className="grid gap-2 sm:col-span-1">
                      <span className="text-sm font-semibold text-slate-500">Email</span>
                      <input className="border-0 border-b border-cyan-300 bg-transparent px-0 py-2 text-base outline-none focus:border-[#0a5474]" />
                    </label>
                  </div>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-slate-500">Message</span>
                    <textarea rows={4} className="resize-none border-0 border-b border-cyan-300 bg-transparent px-0 py-2 text-base outline-none focus:border-[#0a5474]" />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex w-fit items-center justify-center rounded-sm bg-[#18c6de] px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#10b3ca]"
                  >
                    Send message
                  </button>
                  <div className="text-sm leading-6 text-slate-500">This form is ready for your backend or form provider hookup.</div>
                </form>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}
