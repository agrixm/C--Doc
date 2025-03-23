"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search, FileText } from "lucide-react"
import { useSearchDialog } from "@/hooks/use-search-dialog"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface SearchResult {
  title: string
  content: string
  href: string
  category: string
}

export function SearchDialog() {
  const { isOpen, onOpen, onClose } = useSearchDialog()
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (searchQuery.length > 1) {
   
      const mockResults: SearchResult[] = [
        {
          title: "Quick Start",
          content: "Learn how to get started with our documentation framework",
          href: "/docs",
          category: "Getting Started",
        },
        {
          title: "Manual Installation",
          content: "Instructions for manually installing the framework",
          href: "/docs/manual-installation",
          category: "Setup",
        },
        {
          title: "Internationalization",
          content: "Learn how to add multi-language support to your documentation",
          href: "/docs/internationalization",
          category: "Features",
        },
        {
          title: "Markdown Guide",
          content: "How to use Markdown in your documentation",
          href: "/docs/writing/markdown",
          category: "Writing",
        },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setResults(mockResults)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpen()
      }

      if (e.key === "Escape") {
        onClose()
      }

      if (isOpen && results.length > 0) {
   
        if (e.key === "ArrowDown") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % results.length)
        } else if (e.key === "ArrowUp") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
        } else if (e.key === "Enter") {
          e.preventDefault()
          window.location.href = results[selectedIndex].href
          onClose()
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [isOpen, onOpen, onClose, results, selectedIndex])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            className="flex h-12 w-full rounded-md border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={onClose}
                  className={cn("block px-4 py-3 text-sm", selectedIndex === index ? "bg-accent" : "hover:bg-accent")}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{result.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{result.category}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground line-clamp-1">{result.content}</p>
                </Link>
              ))}
            </div>
          ) : searchQuery.length > 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found for "{searchQuery}"</div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">Type to start searching...</div>
          )}
        </div>
        <div className="flex items-center justify-between border-t px-3 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>↑↓</span>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <span>↵</span>
            <span>to select</span>
          </div>
          <div className="flex items-center gap-2">
            <span>esc</span>
            <span>to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

