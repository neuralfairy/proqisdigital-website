import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              🚀 AI-Powered Contact Discovery
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Contact Discovery.{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Verified. Personalized. At Scale.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Turn data into qualified leads—instantly. Empower your B2B sales team with verified contact emails and
              AI-powered enrichment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                Book Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>250K+ Leads Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Propositions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Hunter?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI technology meets sales intelligence to supercharge your prospecting efforts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Verified Emails with AI",
                description: "99.5% accuracy rate with real-time verification and bounce protection",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Real-Time Contact Enrichment",
                description: "Instantly enrich profiles with job titles, company data, and social links",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "CRM & Sales Tool Integrations",
                description: "Seamlessly sync with Salesforce, HubSpot, Outreach, and 50+ tools",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Built-in Data Compliance",
                description: "GDPR, CCPA compliant with enterprise-grade security standards",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Sales Teams Worldwide</h2>
            <p className="text-xl text-gray-300">Join thousands of B2B companies accelerating their sales pipeline</p>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16 opacity-60">
            {["Salesforce", "HubSpot", "Microsoft", "Zoom", "Slack", "Shopify"].map((company, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-32 h-16 flex items-center justify-center"
              >
                <span className="text-white font-semibold">{company}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "AI Hunter increased our qualified meetings by 54% in just 3 months. The email verification is incredibly accurate.",
                author: "Sarah Chen",
                role: "VP of Sales, TechCorp",
                rating: 5,
              },
              {
                quote:
                  "The CRM integration saved us 10 hours per week. Our sales team can focus on selling instead of data entry.",
                author: "Mike Rodriguez",
                role: "Sales Director, GrowthCo",
                rating: 5,
              },
              {
                quote:
                  "Best ROI we've seen from any sales tool. The AI enrichment provides insights we never had before.",
                author: "Lisa Thompson",
                role: "Head of Revenue, ScaleUp",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Sales Process?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 10,000+ sales professionals who trust AI Hunter for their prospecting needs
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
                Schedule Demo
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  )
}
