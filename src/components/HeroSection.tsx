
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const HeroSection = () => {
  const scrollToBusinessPrompt = () => {
    const businessPromptSection = document.querySelector("#business-prompt-section");
    if (businessPromptSection) {
      businessPromptSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-startup-lightblue/20 px-3 py-1 text-sm text-startup-blue mb-2">
              <span className="inline-flex items-center">
                <Rocket size={16} className="mr-1" />
                Launch Your Business Faster
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
              The Ultimate <span className="gradient-text">Startup Kit</span> for Small Business Owners
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Everything you need to bootstrap your business idea into reality - from legal requirements to marketing essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="bg-startup-blue hover:bg-startup-darkblue text-white" onClick={scrollToBusinessPrompt}>
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              <p>Join 10,000+ entrepreneurs who've launched successfully</p>
            </div>
          </div>
          <div className="lg:ml-auto">
            <div className="relative p-2 bg-white border rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
                alt="Entrepreneurs working together"
                className="rounded w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-md border">
                <p className="text-sm font-medium">Trusted by 10,000+ small businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
