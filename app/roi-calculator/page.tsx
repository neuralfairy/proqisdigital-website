import { Badge } from "@/components/ui/badge"
import ROICalculator from "@/components/roi-calculator"

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">
              📊 ROI Calculator
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Calculate Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Sales ROI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the potential revenue impact of AI Hunter on your sales process
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </section>
    </div>
  )
}
