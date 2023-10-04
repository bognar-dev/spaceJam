export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "SpaceJam",
  description:
    "Beautifully redesigned SpaceJam website",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "The Lineup",
      href: "/thelineup",
    },
    {
      title: "JuniorJam",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
