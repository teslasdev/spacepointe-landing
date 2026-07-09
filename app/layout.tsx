import type { Metadata } from "next"
import type { ReactNode } from "react"
import "aos/dist/aos.css"
import { AosInit } from "@/components/aos-init"
import { FloatingControls } from "@/components/floating-controls"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

export const metadata: Metadata = {
  title: "SpacePointe | Commerce and payment technology",
  description: "Commerce and payment technology built for real business operations."
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <AosInit />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <FloatingControls />
      </body>
    </html>
  )
}
