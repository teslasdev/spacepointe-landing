export type NavLink = {
  label: string
  href: string
}

export type NavGroup = {
  label: string
  href: string
  links: NavLink[]
}

export type CardItem = {
  title: string
  description: string
  href?: string
}

export type PageSection =
  | {
      kind: "cards"
      title: string
      description: string
      cards: CardItem[]
    }
  | {
      kind: "links"
      title: string
      description: string
      links: NavLink[]
    }
  | {
      kind: "contact"
      title: string
      description: string
      details: Array<{ label: string; value: string }>
      formTitle: string
      formFields: string[]
    }

export type PageCopy = {
  eyebrow: string
  title: string
  description: string
  primaryCta: NavLink
  secondaryCta: NavLink
  sections: PageSection[]
}

export const navigation: NavGroup[] = [
  { label: "Home", href: "/", links: [] },
  {
    label: "About",
    href: "/about",
    links: [
      { label: "Company profile", href: "/about/company-profile" },
      { label: "Leadership team", href: "/about/leadership-team" },
      { label: "Our journey", href: "/about/our-journey" },
      { label: "Careers", href: "/about/careers" },
      { label: "CSR impact", href: "/about/csr-impact" }
    ]
  },
  {
    label: "Products",
    href: "/products",
    links: [
      { label: "Merchant solutions", href: "/products/merchant-solutions" },
      { label: "Financial services", href: "/products/financial-services" },
      { label: "Retail distribution tech", href: "/products/retail-distribution-tech" },
      { label: "Enterprise platform", href: "/products/enterprise-platform" }
    ]
  },
  {
    label: "Solutions",
    href: "/solutions",
    links: [
      { label: "For retailers", href: "/solutions/retailers" },
      { label: "For FMCGs", href: "/solutions/fmcgs" },
      { label: "For banks", href: "/solutions/banks" },
      { label: "For distributors", href: "/solutions/distributors" },
      { label: "For SMEs", href: "/solutions/smes" },
      { label: "For enterprises", href: "/solutions/enterprises" }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    links: [
      { label: "Case studies", href: "/resources/case-studies" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Merchant resources", href: "/resources/merchant-resources" }
    ]
  },
  {
    label: "Contact",
    href: "/contact",
    links: [
      { label: "Request demo", href: "/contact/request-demo" },
      { label: "Contact form", href: "/contact/form" },
      { label: "Office locations", href: "/contact/office-locations" },
      { label: "Phone and email", href: "/contact/phone-email" },
      { label: "Social media", href: "/contact/social-media" }
    ]
  }
]

export const footerQuickLinks: NavLink[] = [
  { label: "Partners", href: "/partners" },
  { label: "Merchants", href: "/merchants" },
  { label: "Support", href: "/support" },
  { label: "Case studies", href: "/resources/case-studies" },
  { label: "Request demo", href: "/contact/request-demo" }
]

export const homeHero = {
  eyebrow: "Commerce and payment technology",
  title: "Built for real business operations.",
  description:
    "SpacePointe brings payments, merchant operations, and business support together in one practical platform that helps teams move faster and serve customers better.",
  primaryCta: { label: "Explore products", href: "/products" },
  secondaryCta: { label: "Talk to sales", href: "/contact/request-demo" }
}

export const homeFeatureCards = [
  {
    title: "Merchant operations",
    description: "Practical tools that help merchants manage daily activity, improve service, and grow with confidence."
  },
  {
    title: "Payments and finance",
    description: "Technology that supports faster payments, cleaner processes, and better financial control."
  },
  {
    title: "Retail distribution tech",
    description: "Solutions designed for retail, FMCG, and distribution teams working across multiple channels."
  },
  {
    title: "Enterprise platform",
    description: "Scalable systems that help enterprise teams coordinate operations, data, and service delivery."
  }
]

export const pageCopies: Record<string, PageCopy> = {
  "/about": {
    eyebrow: "About SpacePointe",
    title: "Building commerce technology for the way real businesses operate.",
    description:
      "We partner with merchants, retailers, and enterprise teams to simplify payments, streamline operations, and create room for sustainable growth.",
    primaryCta: { label: "Meet the team", href: "/about/leadership-team" },
    secondaryCta: { label: "View careers", href: "/about/careers" },
    sections: [
      {
        kind: "cards",
        title: "Company profile",
        description: "A quick view of what SpacePointe does and the value we create for customers.",
        cards: [
          { title: "One platform", description: "Commerce, payments, and merchant operations in one connected experience." },
          { title: "Customer-led", description: "We design around the needs of real businesses and the teams that run them." },
          { title: "Built to scale", description: "Flexible systems that can grow with product, market, and enterprise demand." }
        ]
      },
      {
        kind: "links",
        title: "Explore the about pages",
        description: "Read more about the company and the people behind it.",
        links: [
          { label: "Company profile", href: "/about/company-profile" },
          { label: "Leadership team", href: "/about/leadership-team" },
          { label: "Our journey", href: "/about/our-journey" },
          { label: "Careers", href: "/about/careers" },
          { label: "CSR impact", href: "/about/csr-impact" }
        ]
      }
    ]
  },
  "/products": {
    eyebrow: "Products",
    title: "Products designed to power daily merchant operations.",
    description:
      "SpacePointe products support the full merchant lifecycle, from acquisition and payments to operations and growth.",
    primaryCta: { label: "Request demo", href: "/contact/request-demo" },
    secondaryCta: { label: "See solutions", href: "/solutions" },
    sections: [
      {
        kind: "cards",
        title: "Product showcase",
        description: "Core products that support sales, finance, distribution, and enterprise teams.",
        cards: [
          { title: "Merchant solutions", description: "Tools that help merchants accept payments and manage operations with less friction." },
          { title: "Financial services", description: "Payment and financial workflows that help teams keep control of money movement." },
          { title: "Retail distribution tech", description: "Systems that connect stores, field teams, and distribution activity." },
          { title: "Enterprise platform", description: "A flexible platform for larger teams that need control, visibility, and scale." }
        ]
      }
    ]
  },
  "/solutions": {
    eyebrow: "Solutions",
    title: "Solutions built around how business operates.",
    description:
      "We shape technology around the way retailers, FMCGs, banks, distributors, SMEs, and enterprises actually work.",
    primaryCta: { label: "Browse products", href: "/products" },
    secondaryCta: { label: "Talk to sales", href: "/contact/request-demo" },
    sections: [
      {
        kind: "cards",
        title: "Industry fit",
        description: "Choose a solution path that matches your operational reality.",
        cards: [
          { title: "Retailers", description: "Support daily store operations, payments, and customer experience." },
          { title: "FMCGs", description: "Keep distribution and field execution aligned across channels." },
          { title: "Banks", description: "Extend payment and commerce capabilities with reliable integration paths." },
          { title: "Distributors", description: "Track sales, movement, and reporting across distributed teams." },
          { title: "SMEs", description: "Give smaller businesses the tools they need to get paid and grow." },
          { title: "Enterprises", description: "Handle complex workflows, permissions, and operating scale." }
        ]
      }
    ]
  },
  "/partners": {
    eyebrow: "Partners",
    title: "Partner with SpacePointe to activate more merchants.",
    description:
      "We work with strategic and integration partners to reach more businesses and deliver stronger commerce experiences.",
    primaryCta: { label: "Become a partner", href: "/partners/become-a-partner" },
    secondaryCta: { label: "Success stories", href: "/partners/success-stories" },
    sections: [
      {
        kind: "cards",
        title: "Partnership paths",
        description: "Different partner models for growth, integration, and joint success.",
        cards: [
          { title: "Strategic partners", description: "Broader commercial relationships built to expand reach and capability." },
          { title: "Integration partners", description: "API and platform integrations that make the ecosystem more useful." },
          { title: "Success stories", description: "Examples of how partners and SpacePointe create value together." },
          { title: "Become a partner", description: "Start a conversation about collaboration and market opportunity." }
        ]
      }
    ]
  },
  "/merchants": {
    eyebrow: "Merchants",
    title: "Tools, stories, and resources for merchants ready to grow.",
    description:
      "SpacePointe helps merchants simplify operations, improve customer experience, and get more out of every transaction.",
    primaryCta: { label: "Become a merchant", href: "/merchants/become-merchant" },
    secondaryCta: { label: "Merchant resources", href: "/merchants/resources" },
    sections: [
      {
        kind: "cards",
        title: "Merchant pages",
        description: "Practical resources for merchants who want to grow with less friction.",
        cards: [
          { title: "Merchant reviews", description: "What merchants say about working with SpacePointe." },
          { title: "Merchant spotlight", description: "Stories that show how businesses use the platform in practice." },
          { title: "Become a merchant", description: "Join the network and start selling with SpacePointe." },
          { title: "Merchant resources", description: "Guides and support material for day-to-day operations." }
        ]
      }
    ]
  },
  "/resources": {
    eyebrow: "Resources",
    title: "Insights, guides, and proof for better commerce decisions.",
    description:
      "Find case studies, documentation, FAQs, and thought pieces that help teams make confident decisions.",
    primaryCta: { label: "View case studies", href: "/resources/case-studies" },
    secondaryCta: { label: "Read the blog", href: "/resources/blog" },
    sections: [
      {
        kind: "cards",
        title: "Resource library",
        description: "Content that supports buying decisions, setup, and ongoing use.",
        cards: [
          { title: "Case studies", description: "Real examples of outcomes and implementation stories." },
          { title: "Blog", description: "News, ideas, and practical perspective from the SpacePointe team." },
          { title: "Documentation", description: "Product and integration guidance for technical teams." },
          { title: "FAQs", description: "Answers to common questions about the platform and service." },
          { title: "Merchant resources", description: "Helpful materials for merchants and customer-facing teams." }
        ]
      }
    ]
  },
  "/support": {
    eyebrow: "Support",
    title: "Support for merchants, partners, and teams using SpacePointe.",
    description:
      "Get help with setup, documentation, troubleshooting, or service status from the right support channel.",
    primaryCta: { label: "Contact support", href: "/support/contact-support" },
    secondaryCta: { label: "System status", href: "/support/system-status" },
    sections: [
      {
        kind: "cards",
        title: "Support channels",
        description: "The main places to find answers and get help.",
        cards: [
          { title: "Help center", description: "Start here for common tasks, quick answers, and getting started guides." },
          { title: "Documentation", description: "Technical and product documentation for self-serve support." },
          { title: "FAQs", description: "Short answers to the most common support questions." },
          { title: "Contact support", description: "Reach the support team when you need a person to help." },
          { title: "System status", description: "Check availability and active service updates." }
        ]
      }
    ]
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Talk to the right SpacePointe team.",
    description:
      "Whether you need a demo, support, partnership discussion, or office details, we’ll route you to the right place.",
    primaryCta: { label: "Request demo", href: "/contact/request-demo" },
    secondaryCta: { label: "Office locations", href: "/contact/office-locations" },
    sections: [
      {
        kind: "contact",
        title: "Contact form",
        description: "Send a note and we’ll connect you with the right team member.",
        formTitle: "Request a free consultation with us",
        formFields: ["Name", "Email", "Message"],
        details: [
          { label: "Office", value: "139 Baker St, E1 7PT, London" },
          { label: "Email", value: "contacts@example.com" },
          { label: "Phone", value: "(02) 123 333 444" },
          { label: "Hours", value: "8am-5pm Mon - Fri" }
        ]
      }
    ]
  }
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function getParentPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean)
  return `/${parts.slice(0, 1).join("/")}`
}

function getParentGroupLabel(pathname: string) {
  const parentPath = getParentPath(pathname)
  return navigation.find((item) => item.href === parentPath)?.label ?? "SpacePointe"
}

function getParentGroupLinks(pathname: string) {
  const parentPath = getParentPath(pathname)
  return navigation.find((item) => item.href === parentPath)?.links ?? []
}

export function getPageCopy(pathname: string): PageCopy | undefined {
  const exact = pageCopies[pathname]
  if (exact) {
    return exact
  }

  const parts = pathname.split("/").filter(Boolean)
  if (parts.length < 2) {
    return undefined
  }

  const parentLabel = getParentGroupLabel(pathname)
  const pageLabel = slugToTitle(parts[parts.length - 1])
  const siblingLinks = getParentGroupLinks(pathname).map((link) => ({
    label: link.label,
    href: link.href
  }))

  return {
    eyebrow: parentLabel,
    title: pageLabel,
    description: `A dedicated SpacePointe page for ${pageLabel.toLowerCase()} under the ${parentLabel.toLowerCase()} area.`,
    primaryCta: { label: `Back to ${parentLabel}`, href: getParentPath(pathname) },
    secondaryCta: { label: "Request demo", href: "/contact/request-demo" },
    sections: [
      {
        kind: "cards",
        title: `What to know about ${pageLabel}`,
        description: `A quick overview of how ${pageLabel.toLowerCase()} fits into the SpacePointe ecosystem.`,
        cards: [
          { title: "Overview", description: `Understand the purpose and value of ${pageLabel.toLowerCase()} for your team.` },
          { title: "How it works", description: `See how ${pageLabel.toLowerCase()} connects with the wider SpacePointe platform.` },
          { title: "Next steps", description: "Explore the related pages below or request a conversation with our team." }
        ]
      },
      {
        kind: "links",
        title: `More ${parentLabel} pages`,
        description: `Jump to related pages within the ${parentLabel.toLowerCase()} section.`,
        links: siblingLinks.length
          ? siblingLinks
          : [
              { label: "Contact SpacePointe", href: "/contact" },
              { label: "Explore resources", href: "/resources" },
              { label: "See products", href: "/products" }
            ]
      }
    ]
  }
}

export function getAllRoutePaths() {
  const paths = new Set<string>(["/"])

  Object.keys(pageCopies).forEach((path) => paths.add(path))

  navigation.forEach((group) => {
    paths.add(group.href)
    group.links.forEach((link) => paths.add(link.href))
  })

  return Array.from(paths)
}
