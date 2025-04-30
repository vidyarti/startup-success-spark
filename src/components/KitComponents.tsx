
import { 
  FileText, 
  BookText, 
  Briefcase, 
  TrendingUp, 
  Settings, 
  ChartBar, 
  Calendar, 
  Mail 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const KitComponents = () => {
  const kitItems = [
    {
      title: "Legal Documents",
      description: "Ready-to-use templates for business registration, contracts, and legal agreements.",
      icon: <FileText className="h-10 w-10" />
    },
    {
      title: "Business Plan",
      description: "Comprehensive business plan templates with financial projections and market analysis.",
      icon: <BookText className="h-10 w-10" />
    },
    {
      title: "Funding Guide",
      description: "Step-by-step guide to securing funding, from bootstrapping to venture capital.",
      icon: <Briefcase className="h-10 w-10" />
    },
    {
      title: "Marketing Playbook",
      description: "Marketing strategies and templates to help you attract and retain customers.",
      icon: <TrendingUp className="h-10 w-10" />
    },
    {
      title: "Operations Manual",
      description: "Processes and systems to run your business efficiently from day one.",
      icon: <Settings className="h-10 w-10" />
    },
    {
      title: "Financial Tools",
      description: "Spreadsheets and calculators for budgeting, pricing, and financial management.",
      icon: <ChartBar className="h-10 w-10" />
    },
    {
      title: "Growth Roadmap",
      description: "Long-term planning tools to scale your business beyond the initial launch.",
      icon: <Calendar className="h-10 w-10" />
    },
    {
      title: "Supplier Directory",
      description: "Curated list of reliable service providers and suppliers for new businesses.",
      icon: <Mail className="h-10 w-10" />
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What's Included in Your Kit
          </h2>
          <p className="text-lg text-gray-600">
            Our startup kit contains everything you need to launch and grow your business successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kitItems.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center mb-4 rounded-full bg-startup-purple/10 p-3 text-startup-purple">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-startup-blue hover:bg-startup-darkblue text-white">
            View Full Kit Details
          </Button>
        </div>
      </div>
    </section>
  );
};
