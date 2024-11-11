import {
    FileUp,
    CheckCircle,
    TrendingUp,
    Award,
    Search,
    Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function FeaturesSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                What We Improve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<CheckCircle className="h-8 w-8 text-green-400" />}
                    title="ATS Compatibility"
                    description="Ensure your resume passes Applicant Tracking Systems with our AI-powered analysis."
                />
                <FeatureCard
                    icon={<TrendingUp className="h-8 w-8 text-blue-400" />}
                    title="Keyword Optimization"
                    description="Identify and incorporate industry-specific keywords to make your resume stand out."
                />
                <FeatureCard
                    icon={<Award className="h-8 w-8 text-yellow-400" />}
                    title="Achievement Highlighting"
                    description="Showcase your accomplishments with powerful action verbs and quantifiable results."
                />
                <FeatureCard
                    icon={<FileUp className="h-8 w-8 text-purple-400" />}
                    title="Format and Structure"
                    description="Improve the overall layout and organization of your resume for maximum impact."
                />
                <FeatureCard
                    icon={<Search className="h-8 w-8 text-red-400" />}
                    title="Industry Insights"
                    description="Get tailored advice based on current trends and requirements in your target industry."
                />
                <FeatureCard
                    icon={<Zap className="h-8 w-8 text-indigo-400" />}
                    title="Grammar and Clarity"
                    description="Eliminate errors and enhance the overall readability of your resume."
                />
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <Card className="bg-white/10 backdrop-blur-md border-none text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                    {icon}
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-white/80">{description}</p>
            </CardContent>
        </Card>
    );
}

export default FeaturesSection;
