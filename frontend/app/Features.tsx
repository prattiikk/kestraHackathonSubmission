import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, FileSearch, FileOutput, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <div className=" bg-[#F26B54] text-white py-20 mt-[200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <FileIcon className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              File management made simple
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Our WhatsApp bot empowers you with powerful file management
              capabilities - from storage and search to conversion and AI
              operations. Built for everyone who needs efficient file handling
              right in their favorite messaging app.
            </p>
            <Button className="bg-white text-[#F26B54] hover:bg-white/90 text-lg px-8 py-3">
              Get Started
            </Button>
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2 grid gap-8 sm:grid-cols-2">
            <FeatureCard
              icon={<FileSearch className="w-6 h-6 text-[#F26B54]" />}
              title="Save & Search"
              description="Store any type of file securely and find them instantly with our powerful search capabilities. Never lose track of your important documents again."
            />
            <FeatureCard
              icon={<FileOutput className="w-6 h-6 text-[#F26B54]" />}
              title="File Conversion"
              description="Convert files to your desired format instantly. Support for documents, images, audio, and more - all through simple WhatsApp commands."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-[#F26B54]" />}
              title="AI Operations"
              description="Leverage AI to analyze, summarize, and extract insights from your files. Get smart recommendations and automated processing capabilities."
            />
            <FeatureCard
              icon={<FileIcon className="w-6 h-6 text-[#F26B54]" />}
              title="Format Flexibility"
              description="Handle any file format with ease. From documents to media files, our bot processes everything while maintaining quality and security."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-white border-none shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-xl p-4">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
