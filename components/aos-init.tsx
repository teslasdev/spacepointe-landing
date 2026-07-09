"use client"

import { useEffect } from "react"
import AOS from "aos"

export function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-out-cubic",
      offset: 80
    })
  }, [])

  return null
}