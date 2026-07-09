import { SpacePointeLogo } from "./spacepointe-logo"
import Link from "next/link"
import { footerQuickLinks } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="bg-[#0a5474] text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-5 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.9fr_1.1fr]">
          <div className="">
            <SpacePointeLogo />
            <p className="mt-6 max-w-sm text-base leading-7 text-white/80">
              SpacePointe helps merchants, partners, and enterprise teams simplify commerce, payments, and operations.
            </p>
          </div>

          <div className="">
            <div className="text-xl font-black uppercase tracking-tight">Quick links</div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {footerQuickLinks.map((item) => (
                <li key={item.href} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#18c6de]" />
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm bg-[#084c69] p-6 shadow-soft sm:p-7 ">
            <div className="space-y-4 text-sm">
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-bold">Address</span>
                <span className="text-white/80">139 Baker St, E1 7PT, London</span>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-bold">Email</span>
                <span className="text-white/80">contacts@example.com</span>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-bold">Phone</span>
                <span className="text-white/80">(02) 123 333 444</span>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-bold">Opening hours</span>
                <span className="text-white/80">8am-5pm Mon - Fri</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-3 text-center text-sm text-white/80 sm:px-5 lg:px-6">
        © 2019 SpacePointe - Technology And Business Template
      </div>
    </footer>
  )
}
