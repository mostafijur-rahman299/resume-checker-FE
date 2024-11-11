'use client'

import React from "react"
import { Check } from "lucide-react"

export default function PricingPageJsx() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 mt-[-60px]">
  

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12 mt-16">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$9.99"
            description="Perfect for job seekers"
            features={[
              "AI-powered resume analysis",
              "ATS compatibility check",
              "Basic keyword optimization",
              "3 resume exports per month",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$19.99"
            description="For serious career advancers"
            features={[
              "All Basic features",
              "Advanced keyword optimization",
              "Unlimited resume exports",
              "Cover letter assistance",
              "1 career coaching session",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For teams and organizations"
            features={[
              "All Pro features",
              "Custom AI model training",
              "API access",
              "Dedicated account manager",
              "Bulk resume processing",
            ]}
          />
        </div>
      </main>
    </div>
  )
}

function PricingCard({ title, price, description, features, highlighted = false }) {
  return (
    <div className={`${
      highlighted
        ? "bg-white text-teal-700 scale-105 shadow-xl"
        : "bg-white/10 backdrop-blur-md text-white"
    } rounded-lg overflow-hidden transition-all duration-300 hover:scale-105`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className={highlighted ? "text-teal-600" : "text-white/80"}>
          {description}
        </p>
      </div>
      <div className="p-6">
        <p className="text-3xl font-bold mb-4">{price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6">
        <button className={`w-full py-2 px-4 rounded-md ${
          highlighted
            ? "bg-teal-400 text-white hover:bg-teal-400"
            : "bg-white text-teal-400 hover:bg-teal-100"
        }`}>
          Choose Plan
        </button>
      </div>
    </div>
  )
}