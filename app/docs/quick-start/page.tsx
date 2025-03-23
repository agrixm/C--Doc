import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function QuickStartPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Learn how to get started with FumaDocs in your Next.js project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <p>The easiest way to get started with FumaDocs is to use the CLI to initialize a new project:</p>

        <Tabs defaultValue="npm" className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">npx create-fumadocs-app@latest</code>
            </div>
          </TabsContent>
          <TabsContent value="pnpm" className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">pnpm create fumadocs-app@latest</code>
            </div>
          </TabsContent>
          <TabsContent value="yarn" className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">yarn create fumadocs-app</code>
            </div>
          </TabsContent>
        </Tabs>

        <p>This will guide you through setting up a new Next.js project with FumaDocs.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Project Structure</h2>
        <p>After installation, your project will have the following structure:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm">
            {`├── app/
│   ├── docs/[[...slug]]/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── content/
│   └── docs/
│       ├── index.mdx
│       └── getting-started.mdx
├── fumadocs.config.ts
└── next.config.js`}
          </pre>
        </div>

        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>app/docs/[[...slug]]/page.tsx</strong>: The dynamic route handler for documentation pages
          </li>
          <li>
            <strong>content/docs/</strong>: Where your markdown documentation files live
          </li>
          <li>
            <strong>fumadocs.config.ts</strong>: Configuration for FumaDocs
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Writing Documentation</h2>
        <p>
          Create markdown files in the <code className="text-sm">content/docs</code> directory. Each file will be a page
          in your documentation.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm">
            {`---
title: Getting Started
description: Learn how to get started with FumaDocs
---

# Getting Started

Welcome to FumaDocs! This guide will help you get started with creating your documentation site.

## Installation

...
`}
          </pre>
        </div>

        <p>FumaDocs supports MDX, allowing you to use React components in your markdown.</p>
      </div>

      <div className="flex items-center justify-between border-t pt-6">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button asChild>
          <a href="/docs/components">Next: Components</a>
        </Button>
      </div>
    </div>
  )
}

