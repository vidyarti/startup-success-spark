
import { useState } from "react";
import { Check, Linkedin, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";

const HiringGuidePage = () => {
  const { toast: useToastHook } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showRoleDialog, setShowRoleDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    useToastHook({
      title: "Plan selected",
      description: `You've selected the ${plan} plan.`,
    });
  };

  const handleRoleSelection = (role: string) => {
    setSelectedRoles(prev => {
      if (prev.includes(role)) {
        return prev.filter(r => r !== role);
      } else {
        return [...prev, role];
      }
    });
  };

  const handleConfirmSelection = () => {
    if (selectedRoles.length === 0) {
      toast("Please select at least one role to hire for", {
        description: "You need to select roles before proceeding"
      });
      return;
    }
    
    setShowConfirmationDialog(true);
  };

  const suggestedRoles = [
    {
      title: "Floral Designer",
      description: "Create arrangements, handle custom orders, and manage inventory",
      skills: ["Creative design", "Knowledge of flowers", "Customer service"],
      priority: "High"
    },
    {
      title: "Retail Associate",
      description: "Process sales, assist customers, and maintain store appearance",
      skills: ["Sales experience", "Interpersonal skills", "Organization"],
      priority: "Medium"
    },
    {
      title: "Delivery Driver",
      description: "Deliver floral arrangements safely and efficiently",
      skills: ["Valid driver's license", "Time management", "Navigation skills"],
      priority: "Medium"
    },
    {
      title: "Social Media Manager",
      description: "Create content and manage online presence",
      skills: ["Content creation", "Social media platforms", "Photography"],
      priority: "Low"
    }
  ];

  const openRoleDetails = (role: string) => {
    setSelectedRole(role);
    setShowRoleDialog(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center">
              <Linkedin className="h-7 w-7 text-[#0a66c2]" />
              <h1 className="ml-2 text-xl font-semibold">Hiring Guide</h1>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Manage jobs
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Take the lead on hiring, or let us do the hard work for you
          </h2>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Key First Hires for Your Florist Business</h3>
            <p className="text-gray-600 mb-6">
              As you start your florist business, these roles can help you scale quickly and efficiently. 
              Select the roles you're interested in hiring for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {suggestedRoles.map((role) => (
                <Card 
                  key={role.title} 
                  className={`hover:shadow-md transition-shadow ${
                    selectedRoles.includes(role.title) ? 'border-2 border-blue-500' : ''
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id={`role-${role.title}`}
                          checked={selectedRoles.includes(role.title)}
                          onCheckedChange={() => handleRoleSelection(role.title)}
                        />
                        <h4 className="text-xl font-semibold">{role.title}</h4>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded ${
                        role.priority === "High" ? "bg-red-100 text-red-800" : 
                        role.priority === "Medium" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-green-100 text-green-800"
                      }`}>
                        {role.priority} Priority
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">{role.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {role.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-blue-600"
                      onClick={() => openRoleDetails(role.title)}
                    >
                      View details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hiring Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Free Plan */}
            <Card className={`border-2 ${selectedPlan === "Free" ? "border-blue-500" : "border-gray-200"}`}>
              <CardHeader>
                <h3 className="text-2xl font-bold">Free</h3>
                <div className="text-3xl font-bold">$0</div>
                <p className="text-gray-500">4 estimated applicants/month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Shown in search results</p>
                </div>
                <Button 
                  onClick={() => handleSelectPlan("Free")}
                  variant={selectedPlan === "Free" ? "default" : "outline"} 
                  className="w-full"
                >
                  Select plan
                </Button>
              </CardContent>
            </Card>

            {/* Promoted Plan */}
            <Card className={`border-2 ${selectedPlan === "Promoted" ? "border-blue-500" : "border-gray-200"}`}>
              <CardHeader>
                <h3 className="text-2xl font-bold">Promoted</h3>
                <div className="text-3xl font-bold">$35 <span className="text-base font-normal text-gray-500">daily</span></div>
                <p className="text-gray-500">40 estimated applicants/month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Everything in Free</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Get notified when a candidate applies</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Top placement in search and job recommendations</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Invite a total of 25 qualified candidates to apply</p>
                </div>
                <Button 
                  onClick={() => handleSelectPlan("Promoted")}
                  variant={selectedPlan === "Promoted" ? "default" : "outline"} 
                  className="w-full"
                >
                  Select plan
                </Button>
              </CardContent>
            </Card>

            {/* Full-service Plan */}
            <Card className={`border-2 ${selectedPlan === "Full-service" ? "border-blue-500" : "border-blue-200 bg-blue-50"}`}>
              <CardHeader>
                <h3 className="text-2xl font-bold">Full-service hiring</h3>
                <div className="text-3xl font-bold">20% <span className="text-base font-normal text-gray-500">of new hire's pay, after you hire</span></div>
                <p className="font-semibold">We guarantee 5 top applicants per role</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>We'll find top candidates for you with AI and a LinkedIn hiring expert</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Get screening videos of applicants, so you can decide who to hire</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>We'll help coordinate any follow-up interviews</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>We'll handle contracts and payments so you can onboard faster</p>
                </div>
                <Button 
                  onClick={() => handleSelectPlan("Full-service")}
                  variant={selectedPlan === "Full-service" ? "default" : "outline"} 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Select plan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 text-sm text-gray-500 px-4">
            <p className="mb-2">
              By clicking Post job, you agree to LinkedIn's Jobs Terms and Conditions including our policies prohibiting discriminatory job posts and Refund Policy.
            </p>
            <p>
              To ensure continued service, we'll store and update your payment method. Your hiring assistant will help source candidates and review applicants with the help of AI.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button 
              size="lg" 
              disabled={!selectedPlan || selectedRoles.length === 0} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12"
              onClick={handleConfirmSelection}
            >
              Select plan
            </Button>
          </div>
        </section>
      </main>

      {/* Role details dialog */}
      <Dialog open={showRoleDialog} onOpenChange={setShowRoleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedRole}</DialogTitle>
            <DialogDescription>
              {suggestedRoles.find(role => role.title === selectedRole)?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedRole === "Floral Designer" && (
                  <>
                    <li>Create beautiful floral arrangements</li>
                    <li>Consult with clients on custom orders</li>
                    <li>Manage flower and supply inventory</li>
                    <li>Ensure quality control of all arrangements</li>
                  </>
                )}
                {selectedRole === "Retail Associate" && (
                  <>
                    <li>Process sales transactions</li>
                    <li>Assist customers with product selection</li>
                    <li>Maintain store cleanliness and displays</li>
                    <li>Answer phone orders and inquiries</li>
                  </>
                )}
                {selectedRole === "Delivery Driver" && (
                  <>
                    <li>Deliver arrangements on time and intact</li>
                    <li>Plan efficient delivery routes</li>
                    <li>Represent the brand professionally</li>
                    <li>Process delivery paperwork</li>
                  </>
                )}
                {selectedRole === "Social Media Manager" && (
                  <>
                    <li>Create engaging content for social platforms</li>
                    <li>Photograph arrangements and store activities</li>
                    <li>Respond to social media inquiries</li>
                    <li>Track engagement metrics</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Why This Role Is Important:</h4>
              <p className="text-gray-700">
                {selectedRole === "Floral Designer" && "A talented floral designer is the creative heart of your business."}
                {selectedRole === "Retail Associate" && "Retail associates are the face of your business and drive sales."}
                {selectedRole === "Delivery Driver" && "Timely and careful delivery ensures customer satisfaction."}
                {selectedRole === "Social Media Manager" && "Building online presence is crucial for modern business growth."}
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <Button onClick={() => setShowRoleDialog(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation dialog */}
      <Dialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ready to start hiring!</DialogTitle>
            <DialogDescription>
              Great! We'll kick off hiring for:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <ul className="list-disc pl-5 space-y-2">
              {selectedRoles.map(role => (
                <li key={role} className="text-blue-600 font-medium">
                  {role}
                  <span className="text-gray-600 font-normal"> - {selectedPlan} plan</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Your job listings will be prepared and published according to your selected plan. 
              We'll notify you as candidates begin to apply.
            </p>
            <div className="flex justify-end gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowConfirmationDialog(false)}
              >
                Edit selections
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  setShowConfirmationDialog(false);
                  toast("Hiring process initiated", {
                    description: `You've started the hiring process for ${selectedRoles.length} position(s)`,
                  });
                }}
              >
                Confirm & publish
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HiringGuidePage;

