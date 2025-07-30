import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Brain,
  Target,
  FolderSyncIcon as Sync,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              🔥 Powerful Features
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Supercharge Sales
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how AI Hunter's advanced features transform your prospecting workflow
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Features Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="discovery" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-black/20 backdrop-blur-sm border-purple-500/20">
              <TabsTrigger value="discovery" className="data-[state=active]:bg-purple-600">
                <Search className="h-4 w-4 mr-2" />
                Discovery
              </TabsTrigger>
              <TabsTrigger value="enrichment" className="data-[state=active]:bg-purple-600">
                <Brain className="h-4 w-4 mr-2" />
                AI Enrichment
              </TabsTrigger>
              <TabsTrigger value="intent" className="data-[state=active]:bg-purple-600">
                <Target className="h-4 w-4 mr-2" />
                Intent Signals
              </TabsTrigger>
              <TabsTrigger value="sync" className="data-[state=active]:bg-purple-600">
                <Sync className="h-4 w-4 mr-2" />
                CRM Sync
              </TabsTrigger>
              <TabsTrigger value="scoring" className="data-[state=active]:bg-purple-600">
                <TrendingUp className="h-4 w-4 mr-2" />
                Lead Scoring
              </TabsTrigger>
              <TabsTrigger value="compliance" className="data-[state=active]:bg-purple-600">
                <Shield className="h-4 w-4 mr-2" />
                Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="discovery" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Smart Contact Discovery</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Find verified email addresses and contact information using advanced AI algorithms. Our discovery
                    engine searches across 200+ data sources to ensure maximum coverage and accuracy.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "99.5% email verification accuracy",
                      "Real-time bounce protection",
                      "Social media profile matching",
                      "Company hierarchy mapping",
                      "Mobile number discovery",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Try Discovery Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div className="mb-2">$ ai-hunter discover --company="TechCorp"</div>
                    <div className="text-gray-400">Searching 200+ data sources...</div>
                    <div className="text-white mt-2">✓ Found 47 verified contacts</div>
                    <div className="text-white">✓ 99.5% deliverability rate</div>
                    <div className="text-white">✓ Social profiles matched</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="enrichment" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Auto-Enrichment with AI</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Automatically enrich contact profiles with comprehensive data including job titles, company
                    information, social profiles, and behavioral insights powered by machine learning.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Job title and seniority detection",
                      "Company size and industry data",
                      "Technology stack identification",
                      "Social media profile linking",
                      "Behavioral pattern analysis",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    See Enrichment Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <Card className="bg-black/40 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Contact Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span className="text-white">Sarah Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Title:</span>
                        <span className="text-white">VP of Marketing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Company:</span>
                        <span className="text-white">TechCorp Inc.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Industry:</span>
                        <span className="text-white">SaaS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Intent Score:</span>
                        <span className="text-green-400">High (87%)</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intent" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Intent Signals</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Identify prospects showing buying intent through advanced behavioral analysis, content consumption
                    patterns, and engagement signals across multiple touchpoints.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Website visitor tracking",
                      "Content engagement scoring",
                      "Technology adoption signals",
                      "Competitor analysis insights",
                      "Timing optimization alerts",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    View Intent Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {[
                    { company: "TechCorp", score: 92, signal: "Downloaded pricing guide" },
                    { company: "GrowthCo", score: 87, signal: "Visited competitors page 3x" },
                    { company: "ScaleUp", score: 78, signal: "Engaged with demo video" },
                  ].map((item, index) => (
                    <Card key={index} className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold">{item.company}</span>
                          <Badge className="bg-green-600/20 text-green-300">{item.score}% Intent</Badge>
                        </div>
                        <p className="text-gray-300 text-sm">{item.signal}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sync" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Real-Time CRM Sync</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Seamlessly integrate with your existing sales stack. Automatically sync contacts, activities, and
                    insights across all your tools in real-time.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Bi-directional data sync",
                      "Custom field mapping",
                      "Automated workflow triggers",
                      "Duplicate prevention",
                      "Activity timeline sync",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    View Integrations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Salesforce",
                    "HubSpot",
                    "Pipedrive",
                    "Outreach",
                    "SalesLoft",
                    "Apollo",
                    "Zoho",
                    "Monday",
                    "Airtable",
                  ].map((integration, index) => (
                    <Card key={index} className="bg-white/5 border-purple-500/20 backdrop-blur-sm p-4 text-center">
                      <div className="text-white font-semibold text-sm">{integration}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scoring" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Lead Scoring Engine</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    AI-powered lead scoring that learns from your successful deals to identify the highest-value
                    prospects and optimize your sales efforts.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Machine learning algorithms",
                      "Custom scoring criteria",
                      "Predictive analytics",
                      "Deal probability forecasting",
                      "Automated lead prioritization",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Configure Scoring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <h4 className="text-white font-semibold mb-4">Lead Score Breakdown</h4>
                  <div className="space-y-4">
                    {[
                      { criteria: "Company Size", score: 25, max: 30 },
                      { criteria: "Industry Match", score: 20, max: 20 },
                      { criteria: "Intent Signals", score: 18, max: 25 },
                      { criteria: "Technology Fit", score: 15, max: 15 },
                      { criteria: "Engagement Level", score: 8, max: 10 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.criteria}</span>
                          <span className="text-white">
                            {item.score}/{item.max}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                            style={{ width: `${(item.score / item.max) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-gray-600">
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Total Score:</span>
                        <span className="text-green-400 font-bold">86/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Built-in Data Compliance</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Enterprise-grade security and compliance features ensure your data handling meets GDPR, CCPA, and
                    other regulatory requirements.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "GDPR & CCPA compliance",
                      "SOC 2 Type II certified",
                      "End-to-end encryption",
                      "Data retention controls",
                      "Audit trail logging",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Security Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "GDPR", status: "Compliant", icon: <Shield className="h-6 w-6" /> },
                    { title: "CCPA", status: "Compliant", icon: <Shield className="h-6 w-6" /> },
                    { title: "SOC 2", status: "Certified", icon: <CheckCircle className="h-6 w-6" /> },
                    { title: "ISO 27001", status: "Certified", icon: <CheckCircle className="h-6 w-6" /> },
                  ].map((cert, index) => (
                    <Card key={index} className="bg-white/5 border-purple-500/20 backdrop-blur-sm p-4 text-center">
                      <div className="text-green-400 mb-2 flex justify-center">{cert.icon}</div>
                      <div className="text-white font-semibold text-sm">{cert.title}</div>
                      <div className="text-green-400 text-xs">{cert.status}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">See AI Hunter in Action</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Watch how sales teams are transforming their prospecting workflow with AI Hunter
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Play Demo Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see the difference AI Hunter can make
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
