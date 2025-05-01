import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { WhySection } from "@/components/WhySection";
import { KitComponents } from "@/components/KitComponents";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Rocket as RocketIcon, Home, Briefcase, Users, MessageSquare, Bell, User, Crown, Linkedin } from "lucide-react";

const Index = () => {
  const [businessPrompt, setBusinessPrompt] = useState("");
  
  useEffect(() => {
    // Simple scroll reveal animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".reveal-animation");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    // Run once on load
    animateOnScroll();

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  const handleSubmitBusiness = () => {
    if (businessPrompt.trim() === "") {
      alert("Please tell us a bit about your business first!");
      return;
    }
    
    // Scroll to the Kit Components section
    const kitComponentsSection = document.querySelector("#kit-components-section");
    if (kitComponentsSection) {
      kitComponentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Linkedin className="h-6 w-6 text-[#0a66c2]" />
              <span className="text-xl font-bold">Start[In]</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <Home className="h-5 w-5" />
                Home
              </a>
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <Users className="h-5 w-5" />
                My Network
              </a>
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <Briefcase className="h-5 w-5" />
                Jobs
              </a>
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <MessageSquare className="h-5 w-5" />
                Messaging
              </a>
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <Bell className="h-5 w-5" />
                Notifications
              </a>
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <User className="h-5 w-5" />
                Me
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="flex flex-col items-center text-sm font-medium hover:text-startup-blue">
                <User className="h-5 w-5" />
                Me
              </a>
              <a 
                href="#" 
                className="flex flex-col items-center text-sm font-medium hover:text-startup-blue"
              >
                <Crown className="h-5 w-5 text-yellow-500" />
                Premium Features
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-startup-blue to-startup-purple text-white py-3 px-4 text-center">
          <p className="text-lg font-medium">Welcome, Sophie Bloom! 👋 Ready to build your dream business?</p>
        </div>
        
        <HeroSection />
        
        {/* Business Prompt Section */}
        <section id="business-prompt-section" className="py-12 bg-startup-lightgray">
          <div className="container px-4 md:px-6">
            <Card className="max-w-3xl mx-auto border-2 border-startup-blue/20 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-startup-blue">Tell Us About Your Business Vision</CardTitle>
                <CardDescription className="text-lg">
                  Share a few details about your business idea and we'll help you create the perfect startup kit.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="My business is a sustainable flower shop in San Francisco focusing on locally-sourced blooms. My target customers are eco-conscious individuals and businesses looking for unique floral arrangements for special occasions and corporate events..."
                  className="min-h-[120px] text-base"
                  value={businessPrompt}
                  onChange={(e) => setBusinessPrompt(e.target.value)}
                />
                <Button 
                  onClick={handleSubmitBusiness}
                  className="w-full bg-startup-blue hover:bg-startup-darkblue text-white py-6 text-lg font-medium flex items-center justify-center gap-2"
                >
                  Start Building Your Business! <ArrowRight className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <div className="reveal-animation">
          <WhySection />
        </div>
        
        <div className="reveal-animation" id="kit-components-section">
          <KitComponents />
        </div>
        
        <div className="reveal-animation">
          <Testimonials />
        </div>
        
        <div className="reveal-animation">
          <CTASection />
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <RocketIcon className="h-6 w-6" />
                <span className="text-xl font-bold">StartupSpark</span>
              </div>
              <p className="text-gray-400">
                Your complete solution for launching and growing your business.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kit Contents</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Legal Documents</a></li>
                <li><a href="#" className="hover:text-white">Business Plan</a></li>
                <li><a href="#" className="hover:text-white">Marketing Templates</a></li>
                <li><a href="#" className="hover:text-white">Financial Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} StartupSpark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
