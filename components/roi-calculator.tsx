"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    leadsPerMonth: 100,
    avgDealSize: 5000,
    conversionRate: 2,
    salesCycleWeeks: 8,
    currentToolCost: 200,
  })

  const [results, setResults] = useState({
    monthlyRevenue: 0,
    annualRevenue: 0,
    roiPercentage: 0,
    paybackPeriod: 0,
  })

  const calculateROI = () => {
    const monthlyDeals = (inputs.leadsPerMonth * inputs.conversionRate) / 100
    const monthlyRevenue = monthlyDeals * inputs.avgDealSize
    const annualRevenue = monthlyRevenue * 12

    const aiHunterCost = 149 // Professional plan
    const monthlySavings = monthlyRevenue - inputs.currentToolCost - aiHunterCost
    const roiPercentage = ((monthlySavings * 12) / (aiHunterCost * 12)) * 100
    const paybackPeriod = (aiHunterCost * 12) / (monthlySavings * 12)

    setResults({
      monthlyRevenue: Math.round(monthlyRevenue),
      annualRevenue: Math.round(annualRevenue),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.round(paybackPeriod * 12), // in months
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: Number.parseFloat(value) || 0,
    }))
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">ROI Calculator</h2>
        <p className="text-xl text-gray-300">Calculate your potential return on investment with AI Hunter</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Calculator className="h-6 w-6 mr-3 text-purple-400" />
              Your Current Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-gray-300 mb-2 block">Leads Generated Per Month</Label>
              <Input
                type="number"
                value={inputs.leadsPerMonth}
                onChange={(e) => handleInputChange("leadsPerMonth", e.target.value)}
                className="bg-white/10 border-purple-500/30 text-white"
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-2 block">Average Deal Size ($)</Label>
              <Input
                type="number"
                value={inputs.avgDealSize}
                onChange={(e) => handleInputChange("avgDealSize", e.target.value)}
                className="bg-white/10 border-purple-500/30 text-white"
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-2 block">Conversion Rate (%)</Label>
              <Input
                type="number"
                value={inputs.conversionRate}
                onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                className="bg-white/10 border-purple-500/30 text-white"
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-2 block">Sales Cycle (weeks)</Label>
              <Input
                type="number"
                value={inputs.salesCycleWeeks}
                onChange={(e) => handleInputChange("salesCycleWeeks", e.target.value)}
                className="bg-white/10 border-purple-500/30 text-white"
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-2 block">Current Tool Cost ($/month)</Label>
              <Input
                type="number"
                value={inputs.currentToolCost}
                onChange={(e) => handleInputChange("currentToolCost", e.target.value)}
                className="bg-white/10 border-purple-500/30 text-white"
              />
            </div>

            <Button
              onClick={calculateROI}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Calculate ROI
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-green-400" />
              Your Potential Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 rounded-lg p-4 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">${results.monthlyRevenue.toLocaleString()}</div>
                <div className="text-gray-300 text-sm">Monthly Revenue</div>
              </div>

              <div className="bg-black/20 rounded-lg p-4 text-center">
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">${results.annualRevenue.toLocaleString()}</div>
                <div className="text-gray-300 text-sm">Annual Revenue</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">ROI with AI Hunter</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">{results.roiPercentage}%</div>
              <p className="text-gray-300">Return on Investment</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Payback Period:</span>
                <Badge className="bg-green-600/20 text-green-300">{results.paybackPeriod} months</Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">AI Hunter Cost:</span>
                <span className="text-white font-semibold">$149/month</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Estimated Savings:</span>
                <span className="text-green-400 font-semibold">
                  ${Math.round(results.monthlyRevenue - 149 - inputs.currentToolCost).toLocaleString()}/month
                </span>
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 54% increase in qualified meetings</li>
                <li>• 99.5% email verification accuracy</li>
                <li>• 10+ hours saved per week</li>
                <li>• Real-time intent signal tracking</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
        >
          Start Free Trial
        </Button>
        <p className="text-gray-400 text-sm mt-4">See these results for yourself with our 14-day free trial</p>
      </div>
    </div>
  )
}
