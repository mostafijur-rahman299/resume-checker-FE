import Footer from "@/components/Footer"
import HeroSection from "@/app/home/HeroSection"
import UploadSection from "@/app/home/UploadSection"
import FeaturesSection from "@/app/home/FeaturesSection"

export default function EnhancedHomePageJsx() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 mt-[-60px]">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Upload Section */}
      <UploadSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />

    </div>
  )
}

