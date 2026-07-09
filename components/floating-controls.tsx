"use client"

import { useEffect, useState } from "react"
import { ArrowUpIcon } from "./icons"

export function FloatingControls() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-3 right-3 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0a5474] text-white shadow-soft transition duration-300 hover:-translate-y-0.5 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  )
}
