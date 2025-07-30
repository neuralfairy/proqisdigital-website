import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How does AI Hunter find verified emails?",
          answer:
            "AI Hunter uses advanced machine learning algorithms to search across 200+ data sources, including public databases, social media profiles, and company websites. Our AI cross-references multiple data points to ensure accuracy and uses real-time verification to confirm email deliverability before providing results.",
        },
        {
          question: "What CRM platforms are supported?",
          answer:
            "AI Hunter integrates with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, Monday.com, Airtable, and 50+ other sales tools. We also support custom integrations through our API for enterprise customers.",
        },
        {
          question: "Is the data GDPR compliant?",
          answer:
            "Yes, AI Hunter is fully GDPR and CCPA compliant. We only collect and process publicly available information, provide clear opt-out mechanisms, and maintain strict data retention policies. All data is encrypted and stored securely with enterprise-grade security measures.",
        },
        {
          question: "How accurate is the email verification?",
          answer:
            "Our email verification achieves 99.5% accuracy through a multi-step process that includes syntax validation, domain verification, mailbox existence checks, and bounce prediction algorithms. We also provide real-time deliverability scores for each email address.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "What is intent signal tracking?",
          answer:
            "Intent signals are behavioral indicators that show when prospects are actively researching solutions like yours. AI Hunter tracks website visits, content downloads, competitor research, technology adoption signals, and engagement patterns to identify prospects with high buying intent.",
        },
        {
          question: "How does the lead scoring engine work?",
          answer:
            "Our AI-powered lead scoring engine analyzes multiple data points including company size, industry, technology stack, engagement history, and intent signals. The system learns from your successful deals to continuously improve scoring accuracy and help you prioritize the highest-value prospects.",
        },
        {
          question: "Can I customize the data fields?",
          answer:
            "Yes, AI Hunter allows you to customize data fields, create custom workflows, and set up automated enrichment rules. Enterprise customers can also request custom data points and integrations to match their specific sales processes.",
        },
        {
          question: "What types of contact information can AI Hunter find?",
          answer:
            "AI Hunter can discover email addresses, phone numbers, social media profiles, job titles, company information, technology stack details, and behavioral insights. We also provide company hierarchy mapping and decision-maker identification.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "What's included in the free trial?",
          answer:
            "The 14-day free trial includes access to all Professional plan features: 500 verified emails, advanced AI enrichment, intent signals, unlimited CRM integrations, lead scoring, and priority support. No credit card required to start.",
        },
        {
          question: "How does billing work?",
          answer:
            "Billing is based on verified email credits that reset monthly. Unused credits roll over for up to 3 months on annual plans. You can upgrade, downgrade, or cancel anytime. Enterprise plans include custom pricing and volume discounts.",
        },
        {
          question: "Are there any setup fees?",
          answer:
            "No, there are no setup fees, onboarding costs, or hidden charges. You only pay for your chosen plan with transparent, predictable pricing. Enterprise customers receive free onboarding and dedicated account management.",
        },
        {
          question: "Can I change my plan anytime?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. You can also pause your subscription for up to 3 months if needed.",
        },
      ],
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What kind of support do you offer?",
          answer:
            "We provide email support for all plans, priority support for Professional customers, and 24/7 phone support for Enterprise clients. We also offer live chat, comprehensive documentation, video tutorials, and dedicated account management for Enterprise customers.",
        },
        {
          question: "How do I integrate AI Hunter with my existing tools?",
          answer:
            "Integration is simple with our pre-built connectors for popular CRMs and sales tools. Most integrations can be set up in under 5 minutes using our step-by-step guides. For custom integrations, our API documentation and support team can help with implementation.",
        },
        {
          question: "What if I need help with setup?",
          answer:
            "We provide comprehensive onboarding resources including video tutorials, documentation, and live training sessions. Professional and Enterprise customers receive personalized onboarding calls with our customer success team.",
        },
        {
          question: "Do you offer training for my team?",
          answer:
            "Yes, we offer team training sessions, best practices workshops, and ongoing education resources. Enterprise customers receive unlimited training sessions and access to our customer success team for strategic guidance.",
        },
      ],
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "How do you ensure data security?",
          answer:
            "AI Hunter employs enterprise-grade security including end-to-end encryption, SOC 2 Type II compliance, regular security audits, and secure data centers. All data is encrypted at rest and in transit, with strict access controls and monitoring.",
        },
        {
          question: "Where is my data stored?",
          answer:
            "Data is stored in secure, SOC 2 compliant data centers with redundancy and backup systems. We offer data residency options for Enterprise customers and maintain strict data retention policies in compliance with global privacy regulations.",
        },
        {
          question: "Can I export my data?",
          answer:
            "Yes, you can export your data at any time in multiple formats including CSV, Excel, and JSON. We also provide API access for automated data exports and real-time synchronization with your systems.",
        },
        {
          question: "What happens to my data if I cancel?",
          answer:
            "Upon cancellation, your data is retained for 30 days to allow for reactivation. After 30 days, all data is permanently deleted from our systems unless you request an export. Enterprise customers can negotiate custom data retention terms.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              ❓ Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Answers
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about AI Hunter and how it can transform your sales process
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">{category.title}</h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-white/5 border-purple-500/20 backdrop-blur-sm rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pt-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-300">Our support team is here to help you succeed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-purple-400 mb-4 flex justify-center">
                  <MessageCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-6">Get instant answers from our support team available 24/7</p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Mail className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
                <p className="text-gray-300 mb-6">Send us a detailed message and we'll respond within 24 hours</p>
                <Button
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10 bg-transparent"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-green-400 mb-4 flex justify-center">
                  <Phone className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Phone Support</h3>
                <p className="text-gray-300 mb-6">Call us directly for immediate assistance (Enterprise only)</p>
                <Button
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10 bg-transparent"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Try AI Hunter free for 14 days and see how it can transform your sales process
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
            <p className="text-gray-400 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  )
}
