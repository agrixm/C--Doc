"use client"

import Link from "next/link"
import { Search, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { SearchDialog } from "./search-dialog"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)

  const navItems = [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Showcase", href: "/showcase" },
    { name: "Sponsors", href: "/sponsors" },
  ]

  return (
    <>
      <SearchDialog />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 mr-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 dark:from-neutral-200 dark:to-neutral-50">
              <div className="h-2 w-2 rounded-full bg-white dark:bg-black" />
            </div>
            <Link href="/" className="font-semibold">
              FumaDocs
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith(item.href) ? "text-foreground" : "text-foreground/60",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center ml-auto gap-2">
            <Button
              variant="ghost"
              className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
              onClick={() => setSearchOpen(true)}
            >
              <span className="inline-flex">
                <Search className="mr-2 h-4 w-4" />
                Search...
              </span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

