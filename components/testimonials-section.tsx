"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    text: "SpacePointe helped us simplify payments and reduce the friction our merchants felt every day.",
    name: "Richard Branson",
    company: "Retail partner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "The team gave us a clear path for payments, support, and operations without overcomplicating the stack.",
    name: "Steve Jobs",
    company: "Enterprise customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "We now have better visibility across merchants, support requests, and the systems that power them.",
    name: "Bill Gates",
    company: "Partner network",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  }
]

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index: number) => {
    const container = scrollerRef.current
    const slide = container?.children[index] as HTMLElement | undefined
    if (!container || !slide) return

    container.scrollTo({ left: slide.offsetLeft, behavior: "smooth" })
    activeIndexRef.current = index
    setActiveIndex(index)
  }

  useEffect(() => {
    const container = scrollerRef.current
    if (!container) return

    const updateActive = () => {
      const slides = Array.from(container.children) as HTMLElement[]
      let closest = 0
      let smallest = Number.POSITIVE_INFINITY

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - container.scrollLeft)
        if (distance < smallest) {
          smallest = distance
          closest = index
        }
      })

      activeIndexRef.current = closest
      setActiveIndex(closest)
    }

    updateActive()
    container.addEventListener("scroll", updateActive, { passive: true })

    return () => {
      container.removeEventListener("scroll", updateActive)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#e7f0f7] px-4 py-14 sm:px-5 lg:px-6 lg:py-20" data-aos="fade-up">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute right-8 top-8 h-48 w-48 rounded-full bg-sky-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1140px]">
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up" data-aos-delay="80">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">Merchant success stories</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-[2.4rem]">What our clients think</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Real feedback from partners and teams using SpacePointe to simplify payments, operations, and support.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 p-1.5 shadow-soft ring-1 ring-white/80">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-[#18c6de] hover:text-[#18c6de]"
            >
              <span className="text-lg leading-none">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo((activeIndex + 1) % testimonials.length)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-[#18c6de] hover:text-[#18c6de]"
            >
              <span className="text-lg leading-none">›</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="relative z-10 mt-8 flex gap-5 overflow-x-auto scroll-smooth pb-5 snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="relative min-w-full snap-start sm:min-w-[70%] md:min-w-[48%] lg:min-w-[32%]"
            >
              <div className="rounded-[14px] bg-white p-6 shadow-[0_16px_38px_rgba(10,63,93,0.12)] ring-1 ring-cyan-200/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(10,63,93,0.16)] sm:p-7">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f9fc] text-xl font-black leading-none text-[#18c6de]">
                  &quot;
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">{testimonial.text}</p>
              </div>
              <div className="absolute left-12 top-full h-0 w-0 border-l-[12px] border-r-[12px] border-t-[14px] border-l-transparent border-r-transparent border-t-white" />
              <div className="mt-7 flex items-center gap-3 px-1">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover shadow-soft ring-4 ring-white" />
                <div>
                  <div className="text-base font-extrabold text-ink">{testimonial.name}</div>
                  <div className="text-sm font-semibold text-[#18c6de]">{testimonial.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-center gap-2" data-aos="fade-up" data-aos-delay="120">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex ? "w-9 bg-[#0a5474]" : "w-2.5 bg-slate-400/70 hover:bg-[#18c6de]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
