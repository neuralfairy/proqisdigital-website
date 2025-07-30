import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Target, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at TechCorp with 15+ years in B2B sales and AI technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      bio: "AI researcher and former Google engineer specializing in machine learning and data science.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mike Johnson",
      role: "VP of Engineering",
      bio: "Full-stack engineer with expertise in scalable systems and enterprise software.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lisa Thompson",
      role: "VP of Marketing",
      bio: "Growth marketing expert with a track record of scaling B2B SaaS companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize B2B prospecting using AI technology.",
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Launched AI Hunter beta with 100 early adopters and achieved 95% satisfaction rate.",
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $5M Series A to accelerate product development and team growth.",
    },
    {
      year: "2023",
      title: "10K+ Customers",
      description: "Reached 10,000+ active customers and processed 50M+ verified emails.",
    },
    {
      year: "2024",
      title: "AI Innovation",
      description: "Launched advanced AI features including intent signals and predictive scoring.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              🚀 Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simplifying Prospecting Through{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to empower B2B sales teams with AI-powered tools that make prospecting smarter, faster,
              and more effective.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="text-purple-400 mb-4 flex justify-center">
                  <Target className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To democratize access to high-quality sales intelligence and make every sales professional more
                  successful through AI-powered insights.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Zap className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  A world where every B2B sales team has access to accurate, real-time contact intelligence that drives
                  meaningful business relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="text-green-400 mb-4 flex justify-center">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <p className="text-gray-300">
                  Transparency, innovation, and customer success drive everything we do. We believe in building tools
                  that truly serve our users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The passionate people behind AI Hunter's success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-300 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Key milestones in our product evolution</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <Card
                    className={`bg-white/5 border-purple-500/20 backdrop-blur-sm max-w-md ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                  >
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-purple-600/20 text-purple-300 border-purple-500/30">{item.year}</Badge>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa HQ Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Based in Tampa, Florida</h2>
              <p className="text-xl text-gray-300 mb-6">
                Our headquarters is located in the heart of Tampa's thriving tech scene, where we're building the future
                of sales intelligence.
              </p>
              <div className="flex items-center text-gray-300 mb-4">
                <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                <span>123 Innovation Drive, Tampa, FL 33602</span>
              </div>
              <p className="text-gray-300 mb-8">
                We're proud to be part of Tampa's growing technology ecosystem and contribute to the local business
                community.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Visit Our Office
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Proqisdigital Solutions Tampa Office"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[
              { number: "10,000+", label: "Active Customers" },
              { number: "50M+", label: "Emails Verified" },
              { number: "99.5%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how AI Hunter can transform your sales prospecting process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10 px-8 py-4 text-lg backdrop-blur-sm bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
