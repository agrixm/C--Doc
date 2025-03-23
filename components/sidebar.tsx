"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, FileText, Layers } from "lucide-react"
import { useState } from "react"

interface SidebarSection {
  title: string
  items: {
    title: string
    href: string
    icon?: React.ReactNode
  }[]
}

export function Sidebar({ sections }: { sections?: SidebarSection[] }) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const defaultSections: SidebarSection[] = [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/tutorials/introduction", icon: <FileText className="h-4 w-4" /> },
        { title: "Installation", href: "/tutorials/installation", icon: <FileText className="h-4 w-4" /> },
        { title: "First Program", href: "/tutorials/first-program", icon: <FileText className="h-4 w-4" /> },
      ],
    },
    {
      title: "Basics",
      items: [
        { title: "Variables", href: "/tutorials/variables", icon: <FileText className="h-4 w-4" /> },
        { title: "Data Types", href: "/tutorials/data-types", icon: <FileText className="h-4 w-4" /> },
        { title: "Operators", href: "/tutorials/operators", icon: <FileText className="h-4 w-4" /> },
        { title: "Control Flow", href: "/tutorials/control-flow", icon: <FileText className="h-4 w-4" /> },
      ],
    },
    {
      title: "Advanced",
      items: [
        { title: "Functions", href: "/tutorials/functions", icon: <FileText className="h-4 w-4" /> },
        { title: "Classes", href: "/tutorials/classes", icon: <FileText className="h-4 w-4" /> },
        { title: "Templates", href: "/tutorials/templates", icon: <FileText className="h-4 w-4" /> },
        { title: "STL", href: "/tutorials/stl", icon: <FileText className="h-4 w-4" /> },
      ],
    },
  ]

  const sectionList = sections || defaultSections

  return (
    <div className="p-4 text-sm space-y-4 mt-4">
      <div className="flex items-center gap-2 mb-6">
        <Layers className="h-5 w-5" />
        <div>
          <div className="font-medium">CPlusPlus</div>
          <div className="text-xs text-muted-foreground">The complete guide</div>
        </div>
      </div>

      <div className="space-y-1">
        {sectionList.map((section) => (
          <div key={section.title} className="pb-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium"
            >
              {section.title}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", openSections[section.title] ? "rotate-180" : "")}
              />
            </button>

            {(openSections[section.title] || openSections[section.title] === undefined) && (
              <div className="pl-2 pt-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 py-1 px-2 rounded-md text-sm transition-colors",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                    )}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

