import Link from "next/link"
import { ArrowRightIcon } from "./icons"

const insights = [
  {
    title: "How merchant operations stay simpler with one platform",
    category: "Case studies",
    description: "A short look at the workflows SpacePointe helps unify across sales, support, and reporting."
  },
  {
    title: "What to look for in payment and commerce tooling",
    category: "Blog",
    description: "Practical guidance for teams comparing product options, integrations, and scale."
  },
  {
    title: "Support resources that reduce friction for teams",
    category: "Documentation",
    description: "How self-serve support, FAQs, and clear docs help merchants move faster."
  }
]

export function InsightsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-5 lg:px-6 lg:py-16" data-aos="fade-up">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up" data-aos-delay="80">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">Insights & news</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-[2rem]">Useful content for better commerce decisions</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Find case studies, blog posts, and documentation that help your team move with more confidence.
            </p>
          </div>

          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-[#18c6de]">
            <span>View resources</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {insights.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="rounded-2xl border border-slate-200 bg-[#f7fbfe] p-5 shadow-soft transition hover:-translate-y-1"
            >
              <div className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">{item.category}</div>
              <h3 className="mt-3 text-lg font-black leading-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

