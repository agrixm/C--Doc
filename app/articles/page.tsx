import { DocsLayout } from "@/app/docs-layout"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"

export default function ArticlesPage() {
  const articles = [
    {
      title: "Understanding Memory Management in C++",
      description: "A deep dive into how C++ manages memory and how to avoid common pitfalls",
      date: "Mar 15, 2025",
      category: "Advanced",
      href: "/articles/memory-management",
    },
    {
      title: "Modern C++ Features Every Developer Should Know",
      description: "Exploring the most useful features introduced in C++11 and beyond",
      date: "Feb 28, 2025",
      category: "Intermediate",
      href: "/articles/modern-cpp-features",
    },
    {
      title: "Building Robust C++ Applications with Design Patterns",
      description: "How to implement common design patterns in C++ for more maintainable code",
      date: "Feb 10, 2025",
      category: "Design",
      href: "/articles/design-patterns",
    },
    {
      title: "Performance Optimization Techniques in C++",
      description: "Tips and tricks to make your C++ code run faster and use fewer resources",
      date: "Jan 25, 2025",
      category: "Performance",
      href: "/articles/performance-optimization",
    },
    {
      title: "Effective Error Handling in C++",
      description: "Best practices for handling errors and exceptions in C++ applications",
      date: "Jan 12, 2025",
      category: "Best Practices",
      href: "/articles/error-handling",
    },
    {
      title: "Multithreading and Concurrency in C++",
      description: "A comprehensive guide to writing thread-safe C++ code",
      date: "Dec 28, 2024",
      category: "Advanced",
      href: "/articles/multithreading",
    },
  ]

  return (
    <DocsLayout toc={<TableOfContents />}>
  
      <div className="space-y-8 pt-16 sm:pt-20">
        <div>
          <h1 id="articles" className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            C++ Articles
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">In-depth articles and tutorials on C++ programming</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={article.href} className="block group">
                <div className="rounded-lg border p-4 md:p-6 transition-all hover:border-primary/50 hover:bg-muted/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-1 md:mt-2 text-sm md:text-base text-muted-foreground">{article.description}</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary self-start whitespace-nowrap">
                      {article.category}
                    </span>
                  </div>
                  <div className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground">{article.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h2 id="categories" className="text-xl md:text-2xl font-semibold">
            Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">All</span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
              Beginner
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
              Intermediate
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
              Advanced
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
              Performance
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
              Design
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
              Best Practices
            </span>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
