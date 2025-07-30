"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, ArrowRight, Star } from "lucide-react"
import { useState } from "react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for solopreneurs and small teams",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "1,000 verified emails/month",
        "Basic contact enrichment",
        "Email verification",
        "CRM integration (1 platform)",
        "Email support",
        "Basic analytics",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "Ideal for growing B2B companies",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "5,000 verified emails/month",
        "Advanced AI enrichment",
        "Intent signal tracking",
        "CRM integration (unlimited)",
        "Lead scoring engine",
        "Priority support",
        "Advanced analytics",
        "Team collaboration tools",
        "Custom workflows",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "Scalable solution for large organizations",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Unlimited verified emails",
        "Custom AI model training",
        "Advanced intent signals",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantee",
        "Custom reporting",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Start free, scale as you grow. No hidden fees, cancel anytime.</p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${!isAnnual ? "text-white" : "text-gray-400"}`}>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-purple-600" />
              <span className={`text-lg ${isAnnual ? "text-white" : "text-gray-400"}`}>Annual</span>
              <Badge className="bg-green-600/20 text-green-300 border-green-500/30">Save 20%</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-400 text-sm">Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year</p>
                  )}
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        : "bg-white/10 hover:bg-white/20 border border-purple-500/30"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compare All Features</h2>
            <p className="text-xl text-gray-300">See exactly what's included in each plan</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-lg border border-purple-500/20">
              <thead>
                <tr className="border-b border-purple-500/20">
                  <th className="text-left p-6 text-white font-semibold">Features</th>
                  <th className="text-center p-6 text-white font-semibold">Starter</th>
                  <th className="text-center p-6 text-white font-semibold">Professional</th>
                  <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Verified emails per month", starter: "1,000", pro: "5,000", enterprise: "Unlimited" },
                  { feature: "Email verification", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "Basic contact enrichment", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "Advanced AI enrichment", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "Intent signal tracking", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "Lead scoring engine", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "CRM integrations", starter: "1", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Team collaboration", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "Custom workflows", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "White-label options", starter: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "Dedicated account manager", starter: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "24/7 phone support", starter: "✗", pro: "✗", enterprise: "✓" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-purple-500/10">
                    <td className="p-6 text-gray-300">{row.feature}</td>
                    <td className="p-6 text-center text-gray-300">{row.starter}</td>
                    <td className="p-6 text-center text-gray-300">{row.pro}</td>
                    <td className="p-6 text-center text-gray-300">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "What happens to unused credits?",
                answer: "Unused email credits roll over to the next month for up to 3 months on annual plans.",
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans, no questions asked.",
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees, ever. You only pay for your chosen plan with transparent pricing.",
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. No long-term contracts required.",
              },
              {
                question: "Do you offer custom plans?",
                answer: "Yes, we offer custom Enterprise plans for organizations with specific requirements.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Start Your Free Trial Today</h2>
            <p className="text-xl text-gray-300 mb-8">No credit card required. 14-day free trial. Cancel anytime.</p>
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
            <p className="text-gray-400 text-sm mt-6">Join 10,000+ sales professionals who trust AI Hunter</p>
          </div>
        </div>
      </section>
    </div>
  )
}
