const team = [
  {
    name: "Frank De Vinci",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Donald Cort",
    role: "Social media",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Alicia Sandre",
    role: "Engineer",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80"
  }
]

export function TeamSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-5 lg:px-6 lg:py-16" data-aos="fade-up">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="max-w-sm " data-aos="fade-right" data-aos-delay="80">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#18c6de]">Leadership and support</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink sm:text-[2rem]">The people behind the platform</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A team focused on product, operations, partnerships, and support for merchants and enterprise customers.
            </p>
            <a href="/about/leadership-team" className="mt-6 inline-flex items-center gap-3 text-sm font-extrabold text-slate-600 transition hover:text-[#18c6de] sm:text-base">
              <span>View the team</span>
              <span className="text-[#bfeff5]">›</span>
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} data-aos="fade-up" data-aos-delay={index * 80} className="text-center ">
                <div className="overflow-hidden bg-[#eef5fa]">
                  <img src={member.image} alt={member.name} className="h-[220px] w-full object-cover object-top" />
                </div>
                <div className="mt-4 text-base font-black uppercase text-ink sm:text-lg">{member.name}</div>
                <div className="mt-1 text-xs font-medium text-[#18c6de] sm:text-sm">{member.role}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
