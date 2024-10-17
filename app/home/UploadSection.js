import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

function UploadSection() {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Card className="bg-white/20 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Analyze Your Resume in Seconds
                    </h2>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-full max-w-md relative">
                            <Input
                                id="resume-upload"
                                type="file"
                                className="sr-only"
                            />
                            <Label
                                htmlFor="resume-upload"
                                className="cursor-pointer border-2 border-dashed border-white/50 rounded-lg py-12 px-6 flex flex-col items-center space-y-2 hover:border-white transition duration-300 ease-in-out"
                            >
                                <Upload className="h-12 w-12 text-white" />
                                <span className="text-white font-medium">
                                    Choose a file or drag it here
                                </span>
                                <span className="text-sm text-white/80">
                                    Supported formats: PDF, DOCX, TXT (Max 5MB)
                                </span>
                            </Label>
                        </div>
                        <Button className="bg-white hover:bg-green-100 text-green-600 font-semibold py-2 px-6 rounded-full shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            Upload and Analyze
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default UploadSection;