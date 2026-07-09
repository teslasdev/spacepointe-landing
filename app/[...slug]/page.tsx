import { notFound } from "next/navigation"
import { PageShell } from "@/components/page-shell"
import { getAllRoutePaths, getPageCopy } from "@/lib/site-content"

type PageProps = {
  params: Promise<{ slug?: string[] }>
}

export function generateStaticParams() {
  return getAllRoutePaths()
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.slice(1).split("/") }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolved = await params
  const pathname = `/${(resolved.slug ?? []).join("/")}`
  const copy = getPageCopy(pathname)

  if (!copy) {
    return {}
  }

  return {
    title: `${copy.eyebrow} | SpacePointe`,
    description: copy.description
  }
}

export default async function CatchAllPage({ params }: PageProps) {
  const resolved = await params
  const pathname = `/${(resolved.slug ?? []).join("/")}`
  const copy = getPageCopy(pathname)

  if (!copy) {
    notFound()
  }

  return <PageShell copy={copy} />
}
