"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search, ChevronRight, FileText, Globe, Settings, Edit3, Layout, Layers, Github } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSearchDialog } from "@/hooks/use-search-dialog"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  children?: NavItem[]
  isExpanded?: boolean
}

export function DocSidebar() {
  const pathname = usePathname()
  const { onOpen } = useSearchDialog()

  const [navItems, setNavItems] = useState<NavItem[]>([
    {
      title: "Framework",
      href: "/docs",
      icon: <Layers className="h-4 w-4" />,
      isExpanded: true,
      children: [],
    },
    {
      title: "Manual Installation",
      href: "/docs/manual-installation",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Internationalization",
      href: "/docs/internationalization",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      title: "Static Export",
      href: "/docs/static-export",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Integrations",
      href: "/docs/integrations",
      icon: <Settings className="h-4 w-4" />,
      isExpanded: false,
      children: [
        {
          title: "GitHub",
          href: "/docs/integrations/github",
        },
        {
          title: "GitLab",
          href: "/docs/integrations/gitlab",
        },
      ],
    },
    {
      title: "Writing",
      href: "/docs/writing",
      icon: <Edit3 className="h-4 w-4" />,
      isExpanded: false,
      children: [
        {
          title: "Markdown",
          href: "/docs/writing/markdown",
        },
        {
          title: "Organizing Pages",
          href: "/docs/writing/organizing-pages",
        },
        {
          title: "Navigation",
          href: "/docs/writing/navigation",
        },
      ],
    },
    {
      title: "UI",
      href: "/docs/ui",
      icon: <Layout className="h-4 w-4" />,
      isExpanded: false,
      children: [
        {
          title: "Themes",
          href: "/docs/ui/themes",
        },
        {
          title: "Search",
          href: "/docs/ui/search",
        },
        {
          title: "Components",
          href: "/docs/ui/components",
        },
        {
          title: "MDX",
          href: "/docs/ui/mdx",
        },
        {
          title: "Layouts",
          href: "/docs/ui/layouts",
        },
      ],
    },
  ])

  const toggleExpand = (index: number) => {
    setNavItems((prev) => prev.map((item, i) => (i === index ? { ...item, isExpanded: !item.isExpanded } : item)))
  }

  return (
    <div className="w-64 border-r border-border bg-sidebar h-[calc(100vh-4rem)] fixed top-16 left-0">
      <div className="p-4 border-b border-border flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
        <Link href="/docs" className="font-semibold text-lg">
          Docs
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-7 w-7" onClick={() => {}}>
          <span className="sr-only">Toggle sidebar</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-2">
        <button
          className="w-full flex items-center gap-2 text-sm text-muted-foreground px-3 py-2 rounded-md border border-border bg-background/50 hover:bg-background/80"
          onClick={onOpen}
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
          <kbd className="ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="px-2 space-y-1 py-2">
          {navItems.map((item, index) => (
            <div key={item.href} className="space-y-1">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(index)}
                    className={cn(
                      "w-full flex items-center justify-between text-sm px-3 py-2 rounded-md",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronRight className={cn("h-4 w-4 transition-transform", item.isExpanded ? "rotate-90" : "")} />
                  </button>

                  {item.isExpanded && item.children.length > 0 && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "flex items-center gap-2 text-sm px-3 py-2 rounded-md",
                            pathname === child.href
                              ? "bg-accent text-accent-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                          )}
                        >
                          {child.icon}
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 text-sm px-3 py-2 rounded-md",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border flex items-center justify-between absolute bottom-0 w-full bg-sidebar">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <div className="flex items-center">
          <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50">
            <span className="sr-only">Light mode</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

