import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-white font-bold text-xl">AI Hunter</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering B2B sales teams with AI-powered contact discovery and intelligent prospecting tools.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">123 Innovation Drive, Tampa, FL 33602</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">+1 (813) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">hello@proqisdigital.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/features" className="block text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <div className="space-y-3">
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                API Documentation
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Status Page
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest sales insights and product updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Your email address"
                className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">© 2024 Proqisdigital Solutions. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Strategic Backlink */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              <Link
                href="https://salescentri.com?utm_source=proqisdigital.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
