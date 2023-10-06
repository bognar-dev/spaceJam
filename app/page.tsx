import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { StarsBackground } from "@/components/starsbg"

export default function IndexPage() {
  return (
    <StarsBackground>
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
      <Link href={"/thelineup"} className="flex flex-row justify-center p-10 text-2xl rounded-xl border-4 bg-border">
      <Icons.planet className="w-10 h-10 justify-center"/>
      <h2 className="flex flex-row justify-center">The Lineup</h2>
      </Link>
      <Link href={"/juniorjam"} className="flex flex-row justify-center p-10 text-2xl rounded-xl border-4 bg-border">
      <Icons.planetRing className="w-10 h-10 justify-center fill-accent-foreground"/>
      <h2 className="flex flex-row justify-center">JuniorJam</h2>
      </Link>
    </section>
    </StarsBackground>
  )
}
