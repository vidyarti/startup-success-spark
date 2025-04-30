
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, BookText } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const BusinessPlanPage = () => {
  const [searchParams] = useSearchParams();
  const businessType = searchParams.get("type") || "florist";

  const [businessPlan, setBusinessPlan] = useState({
    businessName: "Bloom & Flourish",
    executiveSummary: `Bloom & Flourish is a sustainable flower shop based in San Francisco that focuses on locally-sourced blooms. Our mission is to provide eco-conscious individuals and businesses with unique floral arrangements for special occasions and corporate events, while minimizing environmental impact.`,
    
    missionStatement: "To provide beautiful, sustainable floral arrangements that celebrate nature's beauty while preserving it for future generations.",
    
    companyDescription: `Bloom & Flourish is a premier sustainable florist shop located in the heart of San Francisco. Founded in 2025, we specialize in creating unique floral arrangements using locally-sourced, seasonal flowers. Our approach emphasizes sustainability at every step of the process, from cultivation to delivery.`,
    
    marketAnalysis: `The floral industry in San Francisco is valued at approximately $58 million annually, with a growing segment of environmentally-conscious consumers willing to pay premium prices for sustainable products. Research indicates that 65% of San Francisco residents prefer to purchase from businesses with strong environmental values.`,
    
    competitiveAnalysis: `Primary competitors include traditional florists like FloraSF and BloomBox, and sustainable-focused competitors like GreenStem. Bloom & Flourish differentiates itself through exclusively using locally-sourced flowers (within 100 miles), zero-waste packaging, and carbon-neutral delivery options.`,
    
    targetMarket: `Our primary target markets include:
1. Eco-conscious individuals (25-45) planning weddings and special events
2. Corporate clients seeking sustainable options for office arrangements and events
3. Local businesses like restaurants and hotels requiring regular floral displays
4. Gift-givers looking for thoughtful, sustainable presents`,
    
    products: `Our product offerings include:
1. Custom floral arrangements for special occasions
2. Sustainable wedding packages
3. Corporate subscription services
4. DIY flower arrangement kits with educational components
5. Floral design workshops highlighting sustainable practices`,
    
    marketing: `Our marketing strategy includes:
1. Strong digital presence through Instagram and Pinterest showcasing our designs
2. Partnerships with local sustainable businesses
3. Community workshops on floral design and sustainability
4. Targeted email marketing campaigns for corporate clients
5. Participation in local farmers markets and sustainability fairs`,
    
    financials: `Initial startup costs: $120,000
Monthly operating expenses: $18,500
Projected monthly revenue (Year 1): $25,000
Expected break-even point: Month 14
Projected annual revenue (Year 2): $350,000
Profit margin: 22-28%`,
    
    team: `The Bloom & Flourish team consists of:
- Founder/Lead Designer: Certified florist with 8 years of experience
- Assistant Designer: Specializing in sustainable floristry techniques
- Operations Manager: Background in supply chain sustainability
- Part-time Delivery Staff (2): Using eco-friendly transportation options`,
    
    implementation: `Timeline:
Month 1-2: Storefront renovation and sustainable supply chain establishment
Month 3: Soft launch with limited product offerings
Month 4: Full launch with complete product line
Month 6: Introduction of workshop series
Month 8: Launch of corporate subscription program`
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    // Create a text version of the business plan
    let content = `# ${businessPlan.businessName} - Business Plan\n\n`;
    content += `## Executive Summary\n${businessPlan.executiveSummary}\n\n`;
    content += `## Mission Statement\n${businessPlan.missionStatement}\n\n`;
    content += `## Company Description\n${businessPlan.companyDescription}\n\n`;
    content += `## Market Analysis\n${businessPlan.marketAnalysis}\n\n`;
    content += `## Competitive Analysis\n${businessPlan.competitiveAnalysis}\n\n`;
    content += `## Target Market\n${businessPlan.targetMarket}\n\n`;
    content += `## Products and Services\n${businessPlan.products}\n\n`;
    content += `## Marketing and Sales Strategy\n${businessPlan.marketing}\n\n`;
    content += `## Financial Projections\n${businessPlan.financials}\n\n`;
    content += `## Team\n${businessPlan.team}\n\n`;
    content += `## Implementation Plan\n${businessPlan.implementation}\n\n`;
    
    // Create a blob and download it
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bloom_and_flourish_business_plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-startup-lightgray">
      <header className="border-b bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center text-startup-blue hover:text-startup-darkblue">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            {!loading && (
              <Button onClick={handleDownload} className="flex items-center gap-2 bg-startup-blue hover:bg-startup-darkblue">
                <Download className="h-4 w-4" />
                Download Business Plan
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <BookText className="mx-auto mb-4 h-16 w-16 text-startup-blue" />
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Your Customized Business Plan</h1>
          <p className="text-lg text-gray-600">
            Based on your input for a sustainable flower shop in San Francisco
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-startup-blue border-t-transparent"></div>
            <p className="mt-4 text-lg font-medium">Generating your business plan...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Business Plan Content */}
            <Card className="overflow-hidden">
              <div className="bg-startup-blue p-6 text-white">
                <h2 className="text-3xl font-bold">{businessPlan.businessName}</h2>
                <p className="mt-2 text-lg italic">Sustainable Floristry Business Plan</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Executive Summary</h3>
                    <p>{businessPlan.executiveSummary}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Mission Statement</h3>
                    <p className="italic">{businessPlan.missionStatement}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Company Description</h3>
                    <p>{businessPlan.companyDescription}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Market Analysis</h3>
                    <p>{businessPlan.marketAnalysis}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Competitive Analysis</h3>
                    <p>{businessPlan.competitiveAnalysis}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Target Market</h3>
                    <p className="whitespace-pre-line">{businessPlan.targetMarket}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Products and Services</h3>
                    <p className="whitespace-pre-line">{businessPlan.products}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Marketing and Sales Strategy</h3>
                    <p className="whitespace-pre-line">{businessPlan.marketing}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Financial Projections</h3>
                    <p className="whitespace-pre-line">{businessPlan.financials}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Team</h3>
                    <p className="whitespace-pre-line">{businessPlan.team}</p>
                  </section>
                  
                  <section>
                    <h3 className="mb-4 text-xl font-bold text-startup-darkblue">Implementation Plan</h3>
                    <p className="whitespace-pre-line">{businessPlan.implementation}</p>
                  </section>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-6">
              <Button onClick={handleDownload} size="lg" className="flex items-center gap-2 bg-startup-blue hover:bg-startup-darkblue">
                <Download className="h-5 w-5" />
                Download Business Plan
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BusinessPlanPage;
