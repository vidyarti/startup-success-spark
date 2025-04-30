
import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { WhySection } from "@/components/WhySection";
import { KitComponents } from "@/components/KitComponents";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-startup-blue" />
              <span className="text-xl font-bold">StartupSpark</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-startup-blue">Features</a>
              <a href="#" className="text-sm font-medium hover:text-startup-blue">Pricing</a>
              <a href="#" className="text-sm font-medium hover:text-startup-blue">Resources</a>
              <a href="#" className="text-sm font-medium hover:text-startup-blue">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium hover:underline">Log in</a>
              <a 
                href="#" 
                className="rounded-md bg-startup-blue px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-startup-darkblue"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        
        <div className="reveal-animation">
          <WhySection />
        </div>
        
        <div className="reveal-animation">
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
                <Rocket className="h-6 w-6" />
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

function Rocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15 9 12" />
      <path d="m5 19 3-3" />
      <path d="M18 12h-6" />
      <path d="M8 4h10c2 0 3 1 3 3v10" />
      <path d="M15 9h.01" />
    </svg>
  );
}

export default Index;
