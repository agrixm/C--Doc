import { DocsLayout } from "@/app/docs-layout"
import { TableOfContents } from "@/components/table-of-contents"
import { Sidebar } from "@/components/sidebar"
import { FileText, BookOpen, Code, Layers, MessageSquare } from "lucide-react"

export default function TutorialsPage() {
  const tutorialSections = [
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

  return (
    <DocsLayout sidebar={<Sidebar sections={tutorialSections} />} toc={<TableOfContents />}>
      <div className="space-y-8 pt-16 sm:pt-10 px-4 sm:px-6">
        <div>
          <h1 id="introduction" className="text-3xl sm:text-4xl font-bold mb-4">
            C++ Tutorials
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Learn C++ programming from the ground up with our comprehensive tutorials
          </p>
        </div>

        <div className="space-y-4">
          <h2 id="getting-started" className="text-xl sm:text-2xl font-semibold">
            Getting Started with C++
          </h2>
          <p className="text-sm sm:text-base">
            C++ is a powerful general-purpose programming language. It can be used to develop operating systems,
            browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented,
            functional, and so on. This makes C++ powerful as well as flexible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
            <div className="rounded-lg border p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 sm:h-5 w-4 sm:w-5" />
                <h3 className="font-semibold text-sm sm:text-base">C++ Fundamentals</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn the core concepts of C++ programming including variables, data types, and control structures.
              </p>
            </div>
            <div className="rounded-lg border p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-4 sm:h-5 w-4 sm:w-5" />
                <h3 className="font-semibold text-sm sm:text-base">Object-Oriented Programming</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Master classes, objects, inheritance, polymorphism, and other OOP concepts in C++.
              </p>
            </div>
            <div className="rounded-lg border p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-4 sm:h-5 w-4 sm:w-5" />
                <h3 className="font-semibold text-sm sm:text-base">Standard Template Library</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Explore the powerful STL with containers, algorithms, and iterators to write efficient code.
              </p>
            </div>
            <div className="rounded-lg border p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5" />
                <h3 className="font-semibold text-sm sm:text-base">Modern C++ Features</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn about C++11, C++14, C++17, and C++20 features that make your code more expressive and efficient.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 id="prerequisites" className="text-xl sm:text-2xl font-semibold">
            Prerequisites
          </h2>
          <p className="text-sm sm:text-base">Before you start learning C++, it's recommended to have a basic understanding of:</p>
          <ul className="list-disc pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Basic computer literacy</li>
            <li>Understanding of how to run programs on your computer</li>
            <li>Familiarity with basic programming concepts is helpful but not required</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 id="learning-path" className="text-xl sm:text-2xl font-semibold">
            Learning Path
          </h2>
          <p className="text-sm sm:text-base">
            Our tutorials are organized in a progressive manner, starting from the basics and gradually moving to more
            advanced topics. We recommend following the tutorials in order for the best learning experience.
          </p>
          <ol className="list-decimal pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Start with the Introduction to C++</li>
            <li>Set up your development environment</li>
            <li>Learn about variables and data types</li>
            <li>Master control structures and functions</li>
            <li>Dive into object-oriented programming</li>
            <li>Explore the Standard Template Library</li>
            <li>Study advanced topics like templates and memory management</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
