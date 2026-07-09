"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "./icons"
import { SpacePointeLogo } from "./spacepointe-logo"
import { navigation } from "@/lib/site-content"

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/"
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-white/15 bg-[#0a5474] text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-4 py-2.5 sm:px-5 lg:px-6">
          <Link href="/" aria-label="SpacePointe home" className="shrink-0">
            <SpacePointeLogo />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="text-right text-[0.72rem] font-semibold leading-5 text-white/95">
              139 Baker Street
              <br />
              London, United Kingdom
            </div>
            <div className="h-8 w-px bg-cyan-300/70" />
            <a
              href="tel:+023112589"
              className="text-[0.72rem] font-extrabold uppercase tracking-wide text-white transition hover:text-[#18c6de]"
            >
              Call us: <span className="text-[#18c6de]">(023) 112 589</span>
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/15 lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close navigation menu" : "Open navigation menu"}</span>
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      <div className="border-b border-white/10 bg-[#084c69] text-white">
        <div className="mx-auto max-w-[1140px] px-4 py-2 sm:px-5 lg:px-6">
          <nav aria-label="Primary" className="hidden items-center justify-between gap-4 lg:flex">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] font-extrabold uppercase tracking-wide">
              {navigation.map((item) =>
                item.links.length > 0 ? (
                  <div key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 transition hover:text-[#18c6de] ${isActive(pathname, item.href) ? "text-[#18c6de]" : ""}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon className="mt-0.5 h-3 w-3 text-white/85 transition group-hover:text-[#18c6de]" />
                    </Link>

                    <div className="pointer-events-none absolute left-0 top-full z-30 mt-3 w-56 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="rounded-2xl border border-white/10 bg-[#083e57] p-2 shadow-soft">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition hover:bg-white/10 hover:text-[#18c6de]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition hover:text-[#18c6de] ${isActive(pathname, item.href) ? "text-[#18c6de]" : ""}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div className="text-[0.72rem] font-extrabold uppercase tracking-wide text-white/80">
              Commerce made practical
            </div>
          </nav>

          {mobileOpen ? (
            <div className="lg:hidden">
              <div className="rounded-2xl border border-white/10 bg-[#083e57] p-3 shadow-soft">
                <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-xs font-semibold text-white/80">
                  <span>Navigate SpacePointe</span>
                  <a href="tel:+023112589" className="text-[#18c6de]">
                    (023) 112 589
                  </a>
                </div>

                <div className="grid gap-2">
                  {navigation.map((item) =>
                    item.links.length > 0 ? (
                      <details key={item.label} className="rounded-xl border border-white/10 bg-white/5">
                        <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-bold uppercase tracking-wide text-white">
                          <span>{item.label}</span>
                          <ChevronDownIcon className="h-4 w-4 text-[#18c6de]" />
                        </summary>
                        <div className="border-t border-white/10 px-2 py-2">
                          <Link
                            href={item.href}
                            className="block rounded-lg px-2 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-[#18c6de]"
                          >
                            Overview
                          </Link>
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block rounded-lg px-2 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-[#18c6de]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-wide transition hover:bg-white/10 hover:text-[#18c6de] ${
                          isActive(pathname, item.href) ? "text-[#18c6de]" : "text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
