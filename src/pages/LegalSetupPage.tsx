
import React, { useState, useEffect } from "react";
import { 
  FileText, 
  CheckCircle, 
  Building, 
  Briefcase, 
  MapPin, 
  FileCheck, 
  BadgeCheck, 
  CreditCard, 
  BookOpen, 
  Shield, 
  Calendar,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface StepCompletionProps {
  title: string;
  duration: number;
  onComplete: () => void;
  autoComplete?: boolean;
}

const StepCompletion: React.FC<StepCompletionProps> = ({ 
  title, 
  duration, 
  onComplete, 
  autoComplete = true 
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!autoComplete) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onComplete, autoComplete]);

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-lg mx-auto p-8 transition-all duration-500 ease-in-out animate-fade-in">
      <h3 className="text-xl font-bold text-center">{title}</h3>
      
      {isComplete ? (
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 animate-scale-in">
          <CheckCircle size={32} />
        </div>
      ) : (
        <div className="w-full space-y-2">
          <Progress value={progress} className="h-3 w-full" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Processing...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="flex justify-center mt-4">
            <div className="relative w-12 h-12">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <FileText className="animate-pulse text-startup-purple/50" size={24} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LegalSetupPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [businessStructure, setBusinessStructure] = useState<string | null>(null);
  const [businessName, setBusinessName] = useState<string>("");
  const { toast } = useToast();
  
  // Form for business name registration
  const form = useForm({
    defaultValues: {
      businessName: "",
      domain: ""
    }
  });

  const steps = [
    {
      id: "intro",
      title: "Legal Business Setup",
      description: "We'll guide you through the essential legal steps to set up your florist business correctly.",
      icon: <FileText className="h-8 w-8" />,
      component: (
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold">Welcome to Your Legal Business Setup</h2>
          <p className="text-gray-600">
            We'll guide you through the 10 essential steps to legally establish your florist business.
            This process will help you create a solid legal foundation.
          </p>
          <Button 
            onClick={() => {
              setIsProcessing(true);
              setTimeout(() => {
                setIsProcessing(false);
                setCurrentStep(1);
              }, 1000);
            }} 
            className="bg-startup-blue hover:bg-startup-darkblue"
          >
            Begin Setup Process
          </Button>
        </div>
      ),
      needsUserInput: false,
    },
    {
      id: "business-structure",
      title: "1. Choose a Business Structure",
      description: "Select the legal structure for your business",
      icon: <Building className="h-8 w-8" />,
      component: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Choose Your Business Structure</h3>
          <p className="text-gray-600">
            This decision affects your liability, taxes, and how you operate your business.
          </p>
          
          <RadioGroup className="grid gap-4" value={businessStructure || ""} onValueChange={setBusinessStructure}>
            <div className={`flex items-center space-x-2 rounded-lg border p-4 ${businessStructure === "sole-proprietorship" ? "border-startup-blue bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="sole-proprietorship" id="sole-proprietorship" />
              <Label htmlFor="sole-proprietorship" className="flex flex-col cursor-pointer">
                <span className="font-medium">Sole Proprietorship</span>
                <span className="text-sm text-gray-500">Simple, but no liability protection</span>
              </Label>
            </div>
            
            <div className={`flex items-center space-x-2 rounded-lg border p-4 ${businessStructure === "partnership" ? "border-startup-blue bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="partnership" id="partnership" />
              <Label htmlFor="partnership" className="flex flex-col cursor-pointer">
                <span className="font-medium">Partnership</span>
                <span className="text-sm text-gray-500">Shared ownership, pass-through taxation</span>
              </Label>
            </div>
            
            <div className={`flex items-center space-x-2 rounded-lg border p-4 ${businessStructure === "llc" ? "border-startup-blue bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="llc" id="llc" />
              <Label htmlFor="llc" className="flex flex-col cursor-pointer">
                <span className="font-medium">Limited Liability Company (LLC)</span>
                <span className="text-sm text-gray-500">Flexible, protects personal assets</span>
                <span className="text-xs mt-1 text-startup-blue">Recommended for small businesses</span>
              </Label>
            </div>
            
            <div className={`flex items-center space-x-2 rounded-lg border p-4 ${businessStructure === "corporation" ? "border-startup-blue bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="corporation" id="corporation" />
              <Label htmlFor="corporation" className="flex flex-col cursor-pointer">
                <span className="font-medium">Corporation (C-Corp or S-Corp)</span>
                <span className="text-sm text-gray-500">More complex, used for scaling/investors</span>
              </Label>
            </div>
            
            <div className={`flex items-center space-x-2 rounded-lg border p-4 ${businessStructure === "nonprofit" ? "border-startup-blue bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="nonprofit" id="nonprofit" />
              <Label htmlFor="nonprofit" className="flex flex-col cursor-pointer">
                <span className="font-medium">Nonprofit</span>
                <span className="text-sm text-gray-500">For charitable or public causes</span>
              </Label>
            </div>
          </RadioGroup>
          
          <div className="pt-4 text-right">
            <Button 
              onClick={() => {
                if (!businessStructure) {
                  toast({
                    title: "Please select a business structure",
                    description: "You need to select a legal structure to continue",
                    variant: "destructive"
                  });
                  return;
                }
                setCurrentStep(2);
              }}
              disabled={!businessStructure}
              className="bg-startup-blue hover:bg-startup-darkblue"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      ),
      needsUserInput: true,
    },
    {
      id: "register-business-name",
      title: "2. Register Your Business Name",
      description: "Secure your business name and domain",
      icon: <Briefcase className="h-8 w-8" />,
      component: (
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit((data) => {
            setBusinessName(data.businessName);
            setCurrentStep(3);
          })}>
            <h3 className="text-xl font-bold">Register Your Business Name</h3>
            <p className="text-gray-600">Choose a unique and memorable name that represents your florist business.</p>
            
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Bloom & Blossom Florals" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Domain Name</FormLabel>
                  <FormControl>
                    <Input placeholder="bloomandblossomflorals.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="pt-4 flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setCurrentStep(1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                type="submit" 
                className="bg-startup-blue hover:bg-startup-darkblue"
                disabled={!form.formState.isValid}
              >
                Check Availability <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      ),
      needsUserInput: true,
    },
    {
      id: "business-location",
      title: "3. Choose Your Business Location",
      description: "Define where your business will operate from",
      icon: <MapPin className="h-8 w-8" />,
      component: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Select Your Business Location Type</h3>
          
          <RadioGroup className="grid gap-4">
            <div className="flex items-center space-x-2 rounded-lg border p-4 border-startup-blue bg-blue-50">
              <RadioGroupItem value="retail" id="retail" defaultChecked />
              <Label htmlFor="retail" className="flex flex-col cursor-pointer">
                <span className="font-medium">Retail Florist Shop</span>
                <span className="text-sm text-gray-500">Physical storefront for walk-in customers</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="home-based" id="home-based" />
              <Label htmlFor="home-based" className="flex flex-col cursor-pointer">
                <span className="font-medium">Home-Based Studio</span>
                <span className="text-sm text-gray-500">Operating from your residence</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="mobile" id="mobile" />
              <Label htmlFor="mobile" className="flex flex-col cursor-pointer">
                <span className="font-medium">Mobile Business</span>
                <span className="text-sm text-gray-500">Traveling to events and customers</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online" className="flex flex-col cursor-pointer">
                <span className="font-medium">Online Only</span>
                <span className="text-sm text-gray-500">E-commerce without physical location</span>
              </Label>
            </div>
          </RadioGroup>
          
          <div className="pt-4 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(2)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              onClick={() => setCurrentStep(4)} 
              className="bg-startup-blue hover:bg-startup-darkblue"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      ),
      needsUserInput: true,
    },
    {
      id: "register-authorities",
      title: "4. Register With State and Local Authorities",
      description: "Filing necessary formation documents",
      icon: <FileCheck className="h-8 w-8" />,
      autoProcess: true,
      component: (
        <StepCompletion 
          title="Filing your LLC formation documents with state authorities..." 
          duration={8000} 
          onComplete={() => setCurrentStep(5)} 
        />
      ),
      needsUserInput: false,
    },
    {
      id: "apply-ein",
      title: "5. Apply for an EIN",
      description: "Getting your Employer Identification Number",
      icon: <BadgeCheck className="h-8 w-8" />,
      autoProcess: true,
      component: (
        <StepCompletion 
          title="Applying for your EIN with the IRS..." 
          duration={6000} 
          onComplete={() => setCurrentStep(6)} 
        />
      ),
      needsUserInput: false,
    },
    {
      id: "business-bank",
      title: "6. Open a Business Bank Account",
      description: "Setting up your business finances",
      icon: <CreditCard className="h-8 w-8" />,
      component: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Select a Business Banking Option</h3>
          <p className="text-gray-600">
            A dedicated business account helps keep personal and business finances separate.
          </p>
          
          <RadioGroup className="grid gap-4">
            <div className="flex items-center space-x-2 rounded-lg border p-4 border-startup-blue bg-blue-50">
              <RadioGroupItem value="national" id="national" defaultChecked />
              <Label htmlFor="national" className="flex flex-col cursor-pointer">
                <span className="font-medium">National Bank</span>
                <span className="text-sm text-gray-500">Nationwide locations, comprehensive services</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="local" id="local" />
              <Label htmlFor="local" className="flex flex-col cursor-pointer">
                <span className="font-medium">Local Credit Union</span>
                <span className="text-sm text-gray-500">Community-focused with personalized service</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="online" id="online-bank" />
              <Label htmlFor="online-bank" className="flex flex-col cursor-pointer">
                <span className="font-medium">Online-Only Bank</span>
                <span className="text-sm text-gray-500">Low fees and digital-first experience</span>
              </Label>
            </div>
          </RadioGroup>
          
          <div className="pt-4 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(5)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              onClick={() => setCurrentStep(7)} 
              className="bg-startup-blue hover:bg-startup-darkblue"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      ),
      needsUserInput: true,
    },
    {
      id: "operating-agreement",
      title: "7. Create Operating Agreement",
      description: "Drafting your business governance documents",
      icon: <BookOpen className="h-8 w-8" />,
      autoProcess: true,
      component: (
        <StepCompletion 
          title="Generating your LLC Operating Agreement..." 
          duration={10000} 
          onComplete={() => setCurrentStep(8)} 
        />
      ),
      needsUserInput: false,
    },
    {
      id: "insurance",
      title: "8. Get Business Insurance",
      description: "Securing proper protection for your business",
      icon: <Shield className="h-8 w-8" />,
      component: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Select Your Business Insurance</h3>
          <p className="text-gray-600">
            Protect your florist business with appropriate insurance coverage.
          </p>
          
          <RadioGroup className="grid gap-4">
            <div className="flex items-center space-x-2 rounded-lg border p-4 border-startup-blue bg-blue-50">
              <RadioGroupItem value="basic" id="basic" defaultChecked />
              <Label htmlFor="basic" className="flex flex-col cursor-pointer">
                <span className="font-medium">Basic Package</span>
                <span className="text-sm text-gray-500">General liability + property insurance</span>
                <span className="text-xs mt-1 text-startup-blue">Recommended for new businesses</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex flex-col cursor-pointer">
                <span className="font-medium">Standard Package</span>
                <span className="text-sm text-gray-500">Basic + business interruption coverage</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 rounded-lg border p-4">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium" className="flex flex-col cursor-pointer">
                <span className="font-medium">Premium Package</span>
                <span className="text-sm text-gray-500">Standard + professional liability + workers comp</span>
              </Label>
            </div>
          </RadioGroup>
          
          <div className="pt-4 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(7)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              onClick={() => setCurrentStep(9)} 
              className="bg-startup-blue hover:bg-startup-darkblue"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      ),
      needsUserInput: true,
    },
    {
      id: "tax-obligations",
      title: "9. Understand Tax Obligations",
      description: "Setting up your tax compliance system",
      icon: <FileText className="h-8 w-8" />,
      autoProcess: true,
      component: (
        <StepCompletion 
          title="Registering for business taxes and sales tax permit..." 
          duration={7000} 
          onComplete={() => setCurrentStep(10)} 
        />
      ),
      needsUserInput: false,
    },
    {
      id: "ongoing-compliance",
      title: "10. Set Up Ongoing Compliance",
      description: "Establishing systems to maintain legal compliance",
      icon: <Calendar className="h-8 w-8" />,
      autoProcess: true,
      component: (
        <StepCompletion 
          title="Setting up your compliance calendar and reminders..." 
          duration={5000} 
          onComplete={() => setCurrentStep(11)} 
        />
      ),
      needsUserInput: false,
    },
    {
      id: "completion",
      title: "Setup Complete!",
      description: "Your business is now legally established",
      icon: <CheckCircle className="h-8 w-8" />,
      component: (
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full text-green-600 mb-4">
            <CheckCircle size={48} />
          </div>
          
          <h2 className="text-2xl font-bold">Congratulations!</h2>
          <p className="text-gray-600">
            You've successfully completed the legal setup for your florist business:
            <span className="font-medium block mt-2">{businessName || "Your Flower Business"}</span>
          </p>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-left">
            <h4 className="font-medium text-startup-blue">What's next?</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                <span>Business structure: {businessStructure === "llc" ? "LLC" : businessStructure}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                <span>EIN obtained for tax purposes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                <span>Business bank account ready</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                <span>Insurance coverage secured</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                <span>Tax obligations understood and set up</span>
              </li>
            </ul>
          </div>
          
          <div className="pt-6 space-x-4">
            <Link to="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
            <Link to="/business-plan">
              <Button className="bg-startup-blue hover:bg-startup-darkblue">
                Create Business Plan
              </Button>
            </Link>
          </div>
        </div>
      ),
      needsUserInput: false,
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep) / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-startup-blue hover:text-startup-darkblue mb-4 inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Legal Business Setup</h1>
          <p className="text-gray-600 mt-2">Complete the legal requirements for your florist business</p>
        </div>

        {currentStep > 0 && currentStep < steps.length - 1 && (
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span>Step {currentStep} of {steps.length - 2}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2 w-full" />
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {isProcessing ? (
            <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="h-4 w-32 mt-4">
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ) : (
            <div className="p-8">
              {currentStepData.component}
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-2">
          {steps.slice(1, steps.length - 1).map((step, idx) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center p-2 ${idx < currentStep - 1 ? 'text-startup-blue' : idx === currentStep - 1 ? 'text-startup-blue font-medium' : 'text-gray-400'}`}
            >
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full mb-1 ${
                  idx < currentStep - 1 ? 'bg-startup-blue text-white' : 
                  idx === currentStep - 1 ? 'bg-startup-blue/20 text-startup-blue border border-startup-blue' : 
                  'bg-gray-100 text-gray-400'
                }`}
              >
                {idx < currentStep - 1 ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              <span className="text-xs text-center hidden md:block">{step.title.split('. ')[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalSetupPage;
