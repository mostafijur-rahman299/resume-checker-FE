'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { GithubIcon, Mail, Linkedin, Lock, User, FileText, CheckCircle, ArrowRight, Briefcase, ChevronRight } from "lucide-react"

export default function FancyResumeCheckerAuthComponent() {
  const [activeTab, setActiveTab] = useState("signin")

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="w-[300px] h-[300px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Auth Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">Welcome to ResumeAI</CardTitle>
            <CardDescription className="text-center text-lg text-gray-600">
              Elevate your career with AI-powered resume analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signin" className="text-sm font-medium">Sign In</TabsTrigger>
                <TabsTrigger value="signup" className="text-sm font-medium">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-sm font-medium">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="signin-email" type="email" placeholder="m@example.com" className="pl-10 bg-white/50 border-gray-200 focus:ring-2 focus:ring-green-500 rounded-xl" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-sm font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="signin-password" type="password" className="pl-10 bg-white/50 border-gray-200 focus:ring-2 focus:ring-green-500 rounded-xl" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-xl">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-sm font-medium">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="signup-name" placeholder="John Doe" className="pl-10 bg-white/50 border-gray-200 focus:ring-2 focus:ring-green-500 rounded-xl" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-sm font-medium">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="signup-email" type="email" placeholder="m@example.com" className="pl-10 bg-white/50 border-gray-200 focus:ring-2 focus:ring-green-500 rounded-xl" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-sm font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="signup-password" type="password" className="pl-10 bg-white/50 border-gray-200 focus:ring-2 focus:ring-green-500 rounded-xl" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-xl">
                    Sign Up
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 transition-colors duration-300 border-gray-300 hover:border-gray-400 rounded-xl" onClick={() => console.log("GitHub")}>
                  <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 transition-colors duration-300 border-gray-300 hover:border-gray-400 rounded-xl" onClick={() => console.log("Gmail")}>
                  <Mail className="mr-2 h-4 w-4" /> Gmail
                </Button>
                <Button variant="outline" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 transition-colors duration-300 border-gray-300 hover:border-gray-400 rounded-xl" onClick={() => console.log("LinkedIn")}>
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fancy Design Section */}
      <div className="lg:w-1/2 bg-white/10 backdrop-blur-md text-white p-8 flex flex-col justify-center items-center text-center relative z-10">
        <div className="max-w-lg">
          {/* <Image
            src="/placeholder.svg?height=100&width=300"
            width={300}
            height={100}
            alt="ResumeAI Logo"
            className="mx-auto mb-8 filter drop-shadow-lg"
          /> */}
          <h1 className="text-6xl font-bold mb-4 text-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">ResumeChecker</h1>
          <p className="text-2xl mb-12 text-shadow-lg">Your AI-powered resume checker and career booster</p>
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="flex flex-col items-center bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 backdrop-blur-md group">
              <FileText className="h-12 w-12 mb-4 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
              <p className="text-lg font-semibold group-hover:text-green-200 transition-colors duration-300">Smart Resume Analysis</p>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 backdrop-blur-md group">
              <CheckCircle className="h-12 w-12 mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
              <p className="text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300">Tailored Suggestions</p>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 backdrop-blur-md group">
              <ArrowRight className="h-12 w-12 mb-4 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
              <p className="text-lg font-semibold group-hover:text-yellow-200 transition-colors duration-300">Career Path Guidance</p>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 backdrop-blur-md group">
              <Briefcase className="h-12 w-12 mb-4 text-pink-300 group-hover:text-pink-200 transition-colors duration-300" />
              <p className="text-lg font-semibold group-hover:text-pink-200 transition-colors duration-300">Job Market Insights</p>
            </div>
          </div>
          {/* <div className="relative">
            <Image
              src="/placeholder.svg?height=300&width=500"
              width={500}
              height={300}
              alt="Resume Analysis Demo"
              className="rounded-2xl shadow-2xl mx-auto mb-8 border-4 border-white/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
          </div> */}
          {/* <p className="text-xl text-shadow-lg mb-8">Join thousands of job seekers who have improved their resumes and boosted their careers with ResumeAI</p>
          <Button className="bg-white text-green-600 hover:bg-green-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full px-8 py-3 text-lg font-semibold">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </div>
  )
}