"use client"

import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Tutorial", href: "/tutorials" },
    { name: "Refrence", href: "/reference" },
    { name: "Article", href: "/articles" },
    { name: "Forums", href: "/forums" },
  ]

  return (
    <div className="container pt-4 bg-grid-pattern">
      <header className="fixed top-0 left-0 right-0 z-50 w-full mx-auto">
        <div className="w-[85%] mx-auto mt-4 border bg-background/80 dark:bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30 rounded-lg shadow-sm border-border border-opacity-40">
          <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-2 mr-4">
          <div className="flex items-center justify-center">
            {/* Logo image instead of the round shape */}
            <img 
          src="/logo.png" 
          alt="CPlusPlus Logo" 
          className="h-8 w-8"
            />
          </div>
          <Link href="/" className="font-semibold text-foreground">
            CPlusPlus
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
              <div className="relative w-full max-w-sm items-center hidden md:flex">
                <div className="flex h-7 rounded-md border bg-muted/70 dark:bg-muted/30 backdrop-blur-sm px-5 items-center text-muted-foreground text-sm gap-5">
                  <Search className="h-4 w-4" />
                  <span className="-ml-1">Search</span>
                  <div className="flex gap-0.5 ml-auto">
                    <kbd className="ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-background dark:bg-background/70 backdrop-blur-sm px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                      <span className="text-xs">⌘</span>
                    </kbd>
                    <kbd className="ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-background dark:bg-background/70 backdrop-blur-sm px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                      <span className="text-xs">K</span>
                    </kbd>
                  </div>
                </div>
              </div>
              <ModeToggle />

              <div className="flex h-7 rounded-md border bg-muted/70 dark:bg-muted/30 backdrop-blur-sm px-5 items-center text-sm gap-5">
                <button className="text-foreground font-medium">Login</button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden ml-2 p-1 rounded-md focus:outline-none" 
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden px-4 py-3 border-t border-border border-opacity-40">
              <nav className="flex flex-col space-y-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "transition-colors hover:text-foreground/80 py-1",
                      pathname?.startsWith(item.href) ? "text-foreground font-medium" : "text-foreground/60",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center mt-2 py-1">
                  <Search className="h-4 w-4 mr-2 text-foreground/60" />
                  <span className="text-foreground/60">Search</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
