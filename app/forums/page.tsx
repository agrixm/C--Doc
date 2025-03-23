import { DocsLayout } from "@/app/docs-layout"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ForumsPage() {
  const forumCategories = [
    {
      title: "General Discussion",
      description: "General discussions about C++ programming",
      icon: <MessageSquare className="h-5 w-5" />,
      topics: 342,
      posts: 1245,
      href: "/forums/general",
    },
    {
      title: "Beginners",
      description: "Questions and discussions for C++ beginners",
      icon: <Users className="h-5 w-5" />,
      topics: 567,
      posts: 2389,
      href: "/forums/beginners",
    },
    {
      title: "Advanced Topics",
      description: "Discussions about advanced C++ concepts and techniques",
      icon: <MessageSquare className="h-5 w-5" />,
      topics: 189,
      posts: 876,
      href: "/forums/advanced",
    },
    {
      title: "Standard Library",
      description: "Questions and discussions about the C++ Standard Library",
      icon: <MessageSquare className="h-5 w-5" />,
      topics: 231,
      posts: 1032,
      href: "/forums/standard-library",
    },
    {
      title: "Compiler & Tools",
      description: "Discussions about C++ compilers, IDEs, and development tools",
      icon: <MessageSquare className="h-5 w-5" />,
      topics: 156,
      posts: 723,
      href: "/forums/tools",
    },
  ]

  const recentTopics = [
    {
      title: "How to properly use std::move with smart pointers?",
      author: "cpp_enthusiast",
      replies: 12,
      views: 234,
      lastActivity: "2 hours ago",
      category: "Advanced Topics",
      href: "/forums/topic/1",
    },
    {
      title: "Trouble understanding template specialization",
      author: "newbie_coder",
      replies: 8,
      views: 156,
      lastActivity: "5 hours ago",
      category: "Beginners",
      href: "/forums/topic/2",
    },
    {
      title: "Best practices for error handling in modern C++",
      author: "code_master",
      replies: 21,
      views: 345,
      lastActivity: "1 day ago",
      category: "General Discussion",
      href: "/forums/topic/3",
    },
    {
      title: "Performance comparison: std::map vs std::unordered_map",
      author: "performance_guru",
      replies: 15,
      views: 289,
      lastActivity: "2 days ago",
      category: "Standard Library",
      href: "/forums/topic/4",
    },
  ]

  return (
    <DocsLayout>
      <div className="space-y-8 pt-16 md:pt-20 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div>
            <h1 id="forums" className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
              C++ Forums
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">Join the discussion with other C++ developers</p>
          </div>
          <Button className="mt-2 sm:mt-0">New Topic</Button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 id="categories" className="text-xl sm:text-2xl font-semibold">
            Categories
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {forumCategories.map((category, index) => (
              <Link key={index} href={category.href} className="block group">
                <div className="rounded-lg border p-3 sm:p-4 transition-all hover:border-primary/50 hover:bg-muted/50">
                  <div className="flex flex-wrap sm:flex-nowrap items-start gap-3 sm:gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">{category.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{category.description}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0 w-full sm:w-auto flex justify-between sm:block">
                      <div>{category.topics} topics</div>
                      <div>{category.posts} posts</div>
                    </div>
                    <ArrowUpRight className="hidden sm:block h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 id="recent-topics" className="text-xl sm:text-2xl font-semibold">
            Recent Topics
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="overflow-hidden rounded-lg border min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium">Topic</th>
                    <th className="hidden sm:table-cell px-4 py-3 text-left text-sm font-medium">Category</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium">Replies</th>
                    <th className="hidden sm:table-cell px-4 py-3 text-left text-sm font-medium">Views</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium">Last</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentTopics.map((topic, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="px-3 sm:px-4 py-2 sm:py-3">
                        <Link href={topic.href} className="font-medium hover:text-primary text-sm line-clamp-2">
                          {topic.title}
                        </Link>
                        <div className="text-xs text-muted-foreground mt-1">
                          by {topic.author}
                          <span className="sm:hidden"> • {topic.category}</span>
                        </div>
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-sm">{topic.category}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{topic.replies}</td>
                      <td className="hidden sm:table-cell px-4 py-3 text-sm">{topic.views}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="whitespace-nowrap">{topic.lastActivity}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">View All Topics</Button>
          </div>
        </div>

        <div className="rounded-lg border p-4 sm:p-6 bg-muted/30">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Forum Guidelines</h2>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>Be respectful and helpful to other members</li>
            <li>Search before posting to avoid duplicate topics</li>
            <li>Use appropriate categories for your questions</li>
            <li>Format code snippets properly for better readability</li>
            <li>Provide enough context when asking questions</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
