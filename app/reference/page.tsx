import { DocsLayout } from "@/app/docs-layout"
import { TableOfContents } from "@/components/table-of-contents"
import { Sidebar } from "@/components/sidebar"
import { FileText, BookOpen, Code, Database, Server } from "lucide-react"

export default function ReferencePage() {
  const referenceSections = [
    {
      title: "Language",
      items: [
        { title: "Keywords", href: "/reference/keywords", icon: <FileText className="h-4 w-4" /> },
        { title: "Operators", href: "/reference/operators", icon: <FileText className="h-4 w-4" /> },
        { title: "Preprocessor", href: "/reference/preprocessor", icon: <FileText className="h-4 w-4" /> },
      ],
    },
    {
      title: "Standard Library",
      items: [
        { title: "Containers", href: "/reference/containers", icon: <FileText className="h-4 w-4" /> },
        { title: "Algorithms", href: "/reference/algorithms", icon: <FileText className="h-4 w-4" /> },
        { title: "Iterators", href: "/reference/iterators", icon: <FileText className="h-4 w-4" /> },
        { title: "Strings", href: "/reference/strings", icon: <FileText className="h-4 w-4" /> },
      ],
    },
    {
      title: "I/O & System",
      items: [
        { title: "File I/O", href: "/reference/file-io", icon: <FileText className="h-4 w-4" /> },
        { title: "Stream Classes", href: "/reference/stream-classes", icon: <FileText className="h-4 w-4" /> },
        { title: "System Calls", href: "/reference/system-calls", icon: <FileText className="h-4 w-4" /> },
      ],
    },
  ]

  return (
    <DocsLayout sidebar={<Sidebar sections={referenceSections} />} toc={<TableOfContents />}>
      <div className="space-y-8 pt-44 md:pt-16 px-4 md:px-0">
        <div>
          <h1 id="reference" className="text-3xl md:text-4xl font-bold mb-4">
        C++ Reference
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
        Comprehensive reference documentation for the C++ language and standard library
          </p>
        </div>

        <div className="space-y-8">
          <h2 id="language-reference" className="text-xl md:text-2xl font-semibold">
        Language Reference
          </h2>
          <p>This section provides detailed information about the C++ language syntax, semantics, and features.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 md:h-5 w-4 md:w-5" />
            <h3 className="font-semibold">Language Basics</h3>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            Keywords, operators, expressions, statements, and other fundamental language elements.
          </p>
        </div>
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-4 md:h-5 w-4 md:w-5" />
            <h3 className="font-semibold">Types & Declarations</h3>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            Built-in types, user-defined types, type conversions, and declarations.
          </p>
        </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 id="standard-library" className="text-xl md:text-2xl font-semibold">
        Standard Library Reference
          </h2>
          <p>The C++ Standard Library provides a rich set of components that you can use in your programs.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Database className="h-4 md:h-5 w-4 md:w-5" />
            <h3 className="font-semibold">Containers</h3>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            Sequence containers, associative containers, and container adaptors for storing collections of objects.
          </p>
        </div>
        <div className="rounded-lg border p-3 md:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Server className="h-4 md:h-5 w-4 md:w-5" />
            <h3 className="font-semibold">Algorithms</h3>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            Functions for searching, sorting, counting, manipulating, and performing operations on ranges of
            elements.
          </p>
        </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 id="version-history" className="text-xl md:text-2xl font-semibold">
        C++ Version History
          </h2>
          <p>C++ has evolved significantly over the years. Here's a brief overview of the major C++ standards:</p>

          <div className="space-y-3 md:space-y-4 mt-4">
        <div className="rounded-lg border p-3 md:p-4">
          <h3 className="font-semibold">C++11 (2011)</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
            Introduced auto type deduction, lambda expressions, range-based for loops, smart pointers, and more.
          </p>
        </div>
        <div className="rounded-lg border p-3 md:p-4">
          <h3 className="font-semibold">C++14 (2014)</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
            Added generic lambdas, improved return type deduction, binary literals, and other minor improvements.
          </p>
        </div>
        <div className="rounded-lg border p-3 md:p-4">
          <h3 className="font-semibold">C++17 (2017)</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
            Added structured bindings, if constexpr, std::optional, std::variant, std::any, and filesystem library.
          </p>
        </div>
        <div className="rounded-lg border p-3 md:p-4">
          <h3 className="font-semibold">C++20 (2020)</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
            Introduced concepts, ranges, coroutines, modules, and the spaceship operator.
          </p>
        </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
