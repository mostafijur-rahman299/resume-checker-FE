import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up mt-16">
          Elevate Your Career with AI-Powered Resume Analysis
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          Upload your resume and get instant feedback, tailored suggestions, and industry insights to land your dream job.
        </p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up animation-delay-600">
          Get Started for Free
        </Button>
      </section>
  )
}

export default HeroSection