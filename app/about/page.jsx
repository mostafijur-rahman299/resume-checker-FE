'use client'

import React from "react"
import Link from "next/link"
import { Users, Zap, Globe } from "lucide-react"
import Image from "next/image"
export default function AboutPageJsx() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 mt-[-60px]">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-4 mt-16">About ResumeChecker</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We&apos;re on a mission to revolutionize the job search process by harnessing the power of AI to help job seekers create outstanding resumes and land their dream jobs.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-white/80 mb-4">
              Founded in 2023, ResumeChecker was born out of the frustration of seeing talented individuals struggle to showcase their skills effectively on paper. Our team of AI experts and career coaches came together to create a solution that levels the playing field for job seekers worldwide.
            </p>
            <p className="text-white/80">
              Today, we&apos;re proud to have helped thousands of professionals across various industries land interviews and secure their ideal positions. Our AI-powered platform continues to evolve, learning from each resume to provide even better insights and recommendations.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg"
              alt="Team working together"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose ResumeAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-yellow-400" />}
              title="Cutting-edge AI"
              description="Our advanced algorithms provide personalized recommendations based on industry trends and recruiter preferences."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-green-400" />}
              title="Expert-backed"
              description="Our AI is trained and continuously improved by a team of experienced hiring managers and career coaches."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-blue-400" />}
              title="Global reach"
              description="We've helped job seekers in over 50 countries land interviews with top companies worldwide."
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Career?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of successful professionals who have transformed their job search with ResumeAI.
          </p>
          <Link href="/" className="inline-block bg-white text-teal-600 hover:bg-teal-100 font-semibold py-3 px-8 rounded-full transition duration-300">
            Get Started for Free
          </Link>
        </section>
      </main>

      <footer className="bg-white/10 backdrop-blur-md text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} ResumeCehcker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border-none text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  )
}
