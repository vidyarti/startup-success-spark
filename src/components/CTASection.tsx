
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTASection = () => {
  return (
    <section className="py-16 bg-startup-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of entrepreneurs who have transformed their ideas into successful businesses.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white h-12"
                />
              </div>
              <Button size="lg" className="bg-white text-startup-blue hover:bg-startup-lightblue hover:text-startup-darkblue px-6">
                Get Started
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-3">
              Free 7-day trial. No credit card required.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="text-center">
              <p className="text-3xl font-bold">10,000+</p>
              <p className="opacity-80">Businesses Launched</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">$50M+</p>
              <p className="opacity-80">Capital Raised</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">98%</p>
              <p className="opacity-80">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="opacity-80">Expert Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
