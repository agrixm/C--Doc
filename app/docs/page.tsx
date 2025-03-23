import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Layout, Terminal, Database } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-8 ml-64 pl-6">
      {" "}
      {/* Added ml-64 to account for sidebar width */}
      <div>
        <h1 id="quick-start" className="scroll-m-20 text-4xl font-bold tracking-tight">
          Quick Start
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">Getting Started with Documentation Framework</p>
      </div>
      <div className="space-y-4">
        <h2 id="introduction" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Introduction
        </h2>
        <p>
          <span className="font-semibold">Documentation Framework</span>{" "}
          <span className="text-muted-foreground">(Foo-ma docs)</span> is a{" "}
          <span className="font-semibold">documentation framework</span> based on Next.js, designed to be fast,
          flexible, and composes seamlessly into Next.js App Router.
        </p>

        <p>Documentation Framework has different parts:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-card/50 border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Documentation Core</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Handles most of the logic, including document search, content source adapters, and Markdown extensions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <Layout className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Documentation UI</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The default theme of Documentation Framework. It offers a beautiful look for documentation sites and
                interactive components.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Content Source</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The source of your content, can be a CMS or local data layers like{" "}
                <Link href="/docs/content-collections" className="text-primary hover:underline">
                  Content Collections
                </Link>{" "}
                and{" "}
                <Link href="/docs/mdx" className="text-primary hover:underline">
                  Documentation MDX
                </Link>
                , the official content source.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Documentation CLI</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A command line tool to install UI components similar to ShadCN UI and automate things, useful for
                customizing layouts.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="space-y-4">
        <h2 id="installation" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <p>The easiest way to get started is to use the CLI to initialize a new project:</p>

        <Tabs defaultValue="npm" className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">npx create-docs-app@latest</code>
            </div>
          </TabsContent>
          <TabsContent value="pnpm" className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">pnpm create docs-app@latest</code>
            </div>
          </TabsContent>
          <TabsContent value="yarn" className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm">yarn create docs-app</code>
            </div>
          </TabsContent>
        </Tabs>

        <p>This will guide you through setting up a new Next.js project with Documentation Framework.</p>
      </div>
      <div className="space-y-4">
        <h2 id="terminology" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Terminology
        </h2>
        <p>Before we dive deeper, let's clarify some terminology used throughout the documentation:</p>

        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Content Source</strong>: Where your documentation content is stored and how it's accessed.
          </li>
          <li>
            <strong>Page Map</strong>: A data structure that represents the hierarchy and metadata of your documentation
            pages.
          </li>
          <li>
            <strong>Page</strong>: A single documentation page, typically written in MDX.
          </li>
          <li>
            <strong>Layout</strong>: The structure that wraps your documentation pages, typically including navigation,
            search, and other UI elements.
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 id="automatic-installation" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Automatic Installation
        </h2>
        <p>The CLI will automatically set up a new Next.js project with Documentation Framework. It will:</p>

        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>Create a new Next.js project</li>
          <li>Install necessary dependencies</li>
          <li>Set up the basic file structure</li>
          <li>Create sample documentation pages</li>
          <li>Configure the documentation framework</li>
        </ul>

        <p>
          After the installation is complete, you can start the development server and begin writing your documentation.
        </p>
      </div>
      <div className="space-y-4">
        <h2 id="enjoy" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Enjoy!
        </h2>
        <p>
          You're now ready to start building your documentation site. Check out the other sections to learn more about
          customizing your documentation.
        </p>
      </div>
      <div className="space-y-4">
        <h2 id="explore" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Explore
        </h2>
        <p>Explore the different features and capabilities of the Documentation Framework:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link href="/docs/customise-content" className="block group">
            <div className="rounded-lg border p-4 transition-colors group-hover:border-primary/50 group-hover:bg-muted">
              <h3 className="font-semibold group-hover:text-primary">Customise Content</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Learn how to customize your documentation content with MDX components and styling.
              </p>
            </div>
          </Link>
          <Link href="/docs/customise-sidebar" className="block group">
            <div className="rounded-lg border p-4 transition-colors group-hover:border-primary/50 group-hover:bg-muted">
              <h3 className="font-semibold group-hover:text-primary">Customise Sidebar</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Customize the sidebar navigation to match your documentation structure.
              </p>
            </div>
          </Link>
          <Link href="/docs/writing-content" className="block group">
            <div className="rounded-lg border p-4 transition-colors group-hover:border-primary/50 group-hover:bg-muted">
              <h3 className="font-semibold group-hover:text-primary">Writing Content</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Best practices for writing clear and effective documentation.
              </p>
            </div>
          </Link>
          <Link href="/docs/customise-ui" className="block group">
            <div className="rounded-lg border p-4 transition-colors group-hover:border-primary/50 group-hover:bg-muted">
              <h3 className="font-semibold group-hover:text-primary">Customise UI</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Customize the look and feel of your documentation site.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h2 id="faq" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          FAQ
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Can I use this with my existing Next.js project?</h3>
            <p className="text-muted-foreground mt-1">
              Yes, you can integrate Documentation Framework into an existing Next.js project. Check out the{" "}
              <Link href="/docs/manual-installation" className="text-primary hover:underline">
                Manual Installation
              </Link>{" "}
              guide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is it possible to use a different UI theme?</h3>
            <p className="text-muted-foreground mt-1">
              Yes, Documentation Framework is designed to be customizable. You can create your own theme or modify the
              existing one. See the{" "}
              <Link href="/docs/ui/themes" className="text-primary hover:underline">
                Themes
              </Link>{" "}
              documentation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I deploy my documentation site to Vercel?</h3>
            <p className="text-muted-foreground mt-1">
              Documentation Framework works seamlessly with Vercel and other hosting providers that support Next.js.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 id="learn-more" className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Learn More
        </h2>
        <p>To learn more about Documentation Framework, check out the following resources:</p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <Link href="/docs/writing" className="text-primary hover:underline">
              Writing Documentation
            </Link>{" "}
            - Learn how to write effective documentation
          </li>
          <li>
            <Link href="/docs/ui" className="text-primary hover:underline">
              UI Components
            </Link>{" "}
            - Explore the available UI components
          </li>
          <li>
            <Link href="/docs/integrations" className="text-primary hover:underline">
              Integrations
            </Link>{" "}
            - Integrate with other tools and services
          </li>
          <li>
            <Link href="/docs/api" className="text-primary hover:underline">
              API Reference
            </Link>{" "}
            - Detailed API documentation
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between border-t pt-6">
        <div></div>
        <Button asChild>
          <Link href="/docs/manual-installation">Next: Manual Installation</Link>
        </Button>
      </div>
    </div>
  )
}

