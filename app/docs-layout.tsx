"use client"

import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

interface DocsLayoutProps {
  children: ReactNode
  sidebar?: ReactNode
  toc?: ReactNode
}

export function DocsLayout({ children, sidebar, toc }: DocsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border hidden md:block bg-background dark:bg-background/80 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          {sidebar || <Sidebar />}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="container py-8 px-4 md:px-8 max-w-4xl mx-auto">{children}</div>
        </div>

        {/* Table of contents */}
        {toc && (
          <div className="w-64 hidden xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">{toc}</div>
        )}
      </div>
    </div>
  )
}

