import { Header } from "@/components/header-with-search"
import { Hero } from "@/components/hero"
import { Preview } from "@/components/preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-grid-pattern">
        <Hero />
        <Preview />
      </main>
    </div>
  )
}

