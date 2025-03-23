import { DocsLayout } from "@/app/docs-layout"
import { TableOfContents } from "@/components/table-of-contents"
import { Sidebar } from "@/components/sidebar"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IntroductionPage() {
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
  ]

  return (
    <DocsLayout sidebar={<Sidebar sections={tutorialSections} />} toc={<TableOfContents />}>
      <div className="space-y-8 px-4 pt-24 md:pt-16 sm:px-6 lg:px-8">
        <div>
          <h1 id="introduction" className="text-3xl md:text-4xl font-bold mb-4">
        Introduction to C++
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">Learn the fundamentals of C++ programming language</p>
        </div>

        <div className="space-y-4">
          <h2 id="what-is-cpp" className="text-xl md:text-2xl font-semibold">
        What is C++?
          </h2>
          <p className="text-sm md:text-base">
        C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C
        programming language, or "C with Classes". The language has expanded significantly over time, and modern C++
        now has object-oriented, generic, and functional features in addition to facilities for low-level memory
        manipulation.
          </p>
          <p className="text-sm md:text-base">It is used for:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
        <li>System/software development</li>
        <li>Game development</li>
        <li>Device drivers</li>
        <li>Embedded systems</li>
        <li>High-performance applications</li>
        <li>Client-server applications</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 id="history" className="text-xl md:text-2xl font-semibold">
        History of C++
          </h2>
          <p className="text-sm md:text-base">
        C++ was developed by Bjarne Stroustrup at Bell Labs starting in 1979. Stroustrup wanted to enhance C with
        features for object-oriented programming. Initially, the language was called "C with Classes" but was
        renamed to C++ in 1983.
          </p>
          <p className="text-sm md:text-base">
        The name C++ is a play on the increment operator (++) in C, suggesting that C++ is an incremented version of
        C.
          </p>
          <p className="text-sm md:text-base">Over the years, C++ has evolved significantly:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
        <li>
          <strong>1985:</strong> First commercial release of C++ (Cfront)
        </li>
        <li>
          <strong>1989:</strong> C++ 2.0 released
        </li>
        <li>
          <strong>1998:</strong> First ISO/IEC standard (C++98)
        </li>
        <li>
          <strong>2003:</strong> Technical report (TR1) with library extensions
        </li>
        <li>
          <strong>2011:</strong> Major revision (C++11) with many new features
        </li>
        <li>
          <strong>2014:</strong> Minor update (C++14)
        </li>
        <li>
          <strong>2017:</strong> Another update (C++17)
        </li>
        <li>
          <strong>2020:</strong> Latest major revision (C++20)
        </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 id="features" className="text-xl md:text-2xl font-semibold">
        Key Features of C++
          </h2>
          <p className="text-sm md:text-base">C++ combines the features of both high-level and low-level languages. Some of its key features include:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Object-Oriented Programming</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            C++ supports the four main pillars of OOP: encapsulation, inheritance, polymorphism, and abstraction.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Low-Level Memory Manipulation</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            C++ provides direct access to memory and hardware, allowing for efficient system programming.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Generic Programming</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            Templates enable writing code that works with any data type, promoting code reuse and type safety.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Standard Template Library (STL)</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            A rich collection of template classes and functions that provide common data structures and algorithms.
          </p>
        </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 id="hello-world" className="text-xl md:text-2xl font-semibold">
        Your First C++ Program: Hello World
          </h2>
          <p className="text-sm md:text-base">Let's look at a simple C++ program that prints "Hello, World!" to the console:</p>

          <div className="rounded-md bg-muted p-4 overflow-x-auto">
        <pre className="text-xs md:text-sm">
          {`#include <iostream>

    int main() {
        std::cout << "Hello, World!" << std::endl;
        return 0;
    }`}
        </pre>
          </div>

          <p className="text-sm md:text-base">Let's break down this program:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
        <li>
          <code className="text-xs md:text-sm">#include &lt;iostream&gt;</code>: This line includes the input/output stream library.
        </li>
        <li>
          <code className="text-xs md:text-sm">int main()</code>: The main function is the entry point of every C++ program.
        </li>
        <li>
          <code className="text-xs md:text-sm">std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;</code>: This line outputs the text to the
          console.
        </li>
        <li>
          <code className="text-xs md:text-sm">return 0;</code>: This indicates that the program executed successfully.
        </li>
          </ul>
        </div>

        <div className="flex items-center justify-between border-t pt-6 pb-8">
          <div></div>
          <Button asChild>
        <Link href="/tutorials/installation">Next: Installation</Link>
          </Button>
        </div>
      </div>
    </DocsLayout>
  )
}
