'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { GithubIcon, Mail, Linkedin, Lock, User, FileText, CheckCircle, ArrowRight, Briefcase } from "lucide-react"

export function FancyResumeCheckerAuthComponent() {
  const [activeTab, setActiveTab] = useState("signin")

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-400 to-blue-500 mt-[-64px]">
      {/* Auth Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-16">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight text-center">Welcome to ResumeAI</CardTitle>
            <CardDescription className="text-center">
              Elevate your career with AI-powered resume analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="signin-email" type="email" placeholder="m@example.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="signin-password" type="password" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition-all duration-300">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="signup-name" placeholder="John Doe" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="signup-email" type="email" placeholder="m@example.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="signup-password" type="password" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition-all duration-300">
                    Sign Up
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 hover:bg-slate-100 transition-colors duration-300" onClick={() => console.log("GitHub")}>
                  <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline" className="flex-1 hover:bg-slate-100 transition-colors duration-300" onClick={() => console.log("Gmail")}>
                  <Mail className="mr-2 h-4 w-4" /> Gmail
                </Button>
                <Button variant="outline" className="flex-1 hover:bg-slate-100 transition-colors duration-300" onClick={() => console.log("LinkedIn")}>
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fancy Design Section */}
      <div className="lg:w-1/2 bg-white/10 backdrop-blur-lg text-white p-8 flex flex-col justify-center items-center text-center mt-16">
        <div className="max-w-md">
          {/* <Image
            src="/placeholder.svg?height=100&width=300"
            width={300}
            height={100}
            alt="ResumeAI Logo"
            className="mx-auto mb-8"
          /> */}
          <h1 className="text-4xl font-bold mb-4">ResumeChecker</h1>
          <p className="text-xl mb-8">Your AI-powered resume checker and career booster</p>
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="flex flex-col items-center bg-white/20 rounded-lg p-4 transition-transform hover:scale-105">
              <FileText className="h-12 w-12 mb-2" />
              <p>Smart Resume Analysis</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 rounded-lg p-4 transition-transform hover:scale-105">
              <CheckCircle className="h-12 w-12 mb-2" />
              <p>Tailored Suggestions</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 rounded-lg p-4 transition-transform hover:scale-105">
              <ArrowRight className="h-12 w-12 mb-2" />
              <p>Career Path Guidance</p>
            </div>
            <div className="flex flex-col items-center bg-white/20 rounded-lg p-4 transition-transform hover:scale-105">
              <Briefcase className="h-12 w-12 mb-2" />
              <p>Job Market Insights</p>
            </div>
          </div>
          <div className="relative">
            {/* <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Resume Analysis Demo"
              className="rounded-lg shadow-2xl mx-auto mb-8"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
          <p className="text-lg">Join thousands of job seekers who have improved their resumes and boosted their careers with ResumeAI</p>
        </div>
      </div>
    </div>
  )
}
