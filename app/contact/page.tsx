import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              💬 Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your sales process? We're here to help you get started with AI Hunter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Us",
                description: "Get in touch via email",
                contact: "hello@proqisdigital.com",
                action: "Send Email",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Us",
                description: "Speak with our team",
                contact: "+1 (813) 555-0123",
                action: "Call Now",
              },
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Live Chat",
                description: "Chat with support 24/7",
                contact: "Available now",
                action: "Start Chat",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Visit Us",
                description: "Tampa headquarters",
                contact: "123 Innovation Drive",
                action: "Get Directions",
              },
            ].map((option, index) => (
              <Card
                key={index}
                className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-purple-400 mb-4 flex justify-center">{option.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{option.description}</p>
                  <p className="text-white font-medium mb-4">{option.contact}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10 bg-transparent"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <Input
                      placeholder="John"
                      className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <Input
                      placeholder="Doe"
                      className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">How can we help you? *</label>
                  <Textarea
                    placeholder="Tell us about your sales challenges and how AI Hunter can help..."
                    rows={4}
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-gray-400 text-sm text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>

            {/* Map and Office Info */}
            <div className="space-y-8">
              <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Our Tampa Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                      <p className="text-white font-semibold">Interactive Map</p>
                      <p className="text-gray-300 text-sm">123 Innovation Drive, Tampa, FL 33602</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                      <div>
                        <p className="text-white font-semibold">Address</p>
                        <p className="text-gray-300">
                          123 Innovation Drive
                          <br />
                          Tampa, FL 33602
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                      <div>
                        <p className="text-white font-semibold">Office Hours</p>
                        <p className="text-gray-300">
                          Monday - Friday: 9:00 AM - 6:00 PM EST
                          <br />
                          Weekend: By appointment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-300">+1 (813) 555-0123</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendly Demo Booking */}
              <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Book a Demo</CardTitle>
                  <p className="text-gray-300">Schedule a personalized demo with our sales team</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/40 rounded-lg p-8 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-purple-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">30-Minute Demo</h3>
                      <p className="text-gray-300 text-sm mb-6">
                        See AI Hunter in action and learn how it can transform your sales process
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full p-4 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Support Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Immediate Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you get the most out of AI Hunter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              Start Live Chat
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10 px-8 py-4 text-lg backdrop-blur-sm bg-transparent"
            >
              Browse Help Center
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
