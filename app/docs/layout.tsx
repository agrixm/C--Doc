import type React from "react"
import { DocSidebar } from "@/components/doc-sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import { SearchDialog } from "@/components/search-dialog"
import { TopNavbar } from "@/components/top-navbar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopNavbar />
      
      <div className="flex flex-1 pt-16">
        {" "}
        
        <DocSidebar />
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto flex">
            <main className="flex-1 py-10 px-6 md:px-8 lg:px-10 max-w-4xl">{children}</main>
            <div className="hidden xl:block w-64 py-10 pl-10 pr-6 shrink-0">
              <TableOfContents />
            </div>
          </div>
        </div>
        <SearchDialog />
      </div>
    </div>
  )
}

