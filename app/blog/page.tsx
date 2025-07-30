import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in B2B Sales: 2024 Trends and Predictions",
    excerpt:
      "Discover how artificial intelligence is reshaping the sales landscape and what it means for your business in 2024 and beyond.",
    author: "Sarah Chen",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "AI in Sales",
    image: "/placeholder.svg?height=400&width=800",
  }

  const blogPosts = [
    {
      title: "10 Email Prospecting Templates That Actually Work",
      excerpt:
        "Proven email templates that increase response rates and help you book more meetings with qualified prospects.",
      author: "Mike Rodriguez",
      date: "January 12, 2024",
      readTime: "5 min read",
      category: "Prospecting Tips",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "How to Integrate AI Hunter with Your CRM: Complete Guide",
      excerpt:
        "Step-by-step instructions for seamlessly connecting AI Hunter with Salesforce, HubSpot, and other popular CRMs.",
      author: "Lisa Thompson",
      date: "January 10, 2024",
      readTime: "7 min read",
      category: "CRM Hacks",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Data Privacy in Sales: GDPR Compliance Best Practices",
      excerpt: "Essential guidelines for maintaining GDPR compliance while conducting effective B2B sales prospecting.",
      author: "Alex Rodriguez",
      date: "January 8, 2024",
      readTime: "6 min read",
      category: "AI in Sales",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Lead Scoring 101: How to Prioritize Your Sales Pipeline",
      excerpt: "Learn how to implement effective lead scoring strategies to focus on your highest-value prospects.",
      author: "Sarah Chen",
      date: "January 5, 2024",
      readTime: "4 min read",
      category: "Prospecting Tips",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The ROI of Sales Intelligence: Measuring Success",
      excerpt: "Key metrics and KPIs to track when evaluating the effectiveness of your sales intelligence tools.",
      author: "Mike Rodriguez",
      date: "January 3, 2024",
      readTime: "6 min read",
      category: "CRM Hacks",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cold Outreach in 2024: What's Changed and What Works",
      excerpt:
        "Updated strategies for cold outreach that respect modern buyer preferences and compliance requirements.",
      author: "Lisa Thompson",
      date: "December 28, 2023",
      readTime: "5 min read",
      category: "Prospecting Tips",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = ["All Posts", "AI in Sales", "Prospecting Tips", "CRM Hacks"]
  const topPosts = [
    "The Ultimate Guide to B2B Email Verification",
    "5 Signs Your Sales Process Needs AI",
    "Building a High-Converting Sales Funnel",
    "Intent Data: The Secret to Perfect Timing",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              📚 Sales Intelligence Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sales{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, industry insights, and actionable strategies to supercharge your B2B sales process
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm mb-12 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "border-purple-500/30 text-purple-300 hover:bg-purple-600/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href="#"
                      className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10 bg-transparent"
              >
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Stay Updated</CardTitle>
                <p className="text-gray-300 text-sm">Get the latest sales insights delivered to your inbox</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your email address"
                  className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Subscribe
                </Button>
                <p className="text-gray-400 text-xs text-center">No spam. Unsubscribe anytime.</p>
              </CardContent>
            </Card>

            {/* Top Posts */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
                  Popular Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPosts.map((post, index) => (
                    <Link key={index} href="#" className="block text-gray-300 hover:text-white transition-colors">
                      <div className="flex items-start">
                        <span className="text-purple-400 font-bold mr-3 mt-1">{index + 1}.</span>
                        <span className="text-sm">{post}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Ready to Try AI Hunter?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Start your free trial and see how AI can transform your sales process
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Download Guide CTA */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Free Sales Guide</h3>
                <p className="text-gray-300 text-sm mb-4">Download our comprehensive guide to modern B2B prospecting</p>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-600/10 bg-transparent"
                >
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
