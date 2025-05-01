import { useState } from "react";
import { Flower, Linkedin, ChartBar, ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const LinkedInCompanyPage = () => {
  const [activeTab, setActiveTab] = useState("blooms");
  const [loadingStates, setLoadingStates] = useState({}); // Track loading state per product
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    setLoadingStates((prev) => ({ ...prev, [productId]: true })); // Set loading for specific product
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [productId]: false })); // Reset loading for specific product
      setCartCount((prev) => prev + 1); // Increment cart count
      // Removed alert
    }, 2000);
  };

  const handleCartClick = () => {
    navigate("/stripe-payment");
    setTimeout(() => {
      navigate("/order-summary");
    }, 2000); // Simulate a delay before navigating to the Order Summary page
  };

  const products = [
    {
      id: 1,
      title: "Spring Bouquet",
      price: "$65",
      imgSrc: "/images/Bouquet.png",
    },
    {
      id: 2,
      title: "Wedding Collection",
      price: "$120",
      imgSrc: "/images/wedding.png",
    },
    {
      id: 3,
      title: "Succulents Arrangement",
      price: "$45",
      imgSrc: "/images/succ.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* LinkedIn-style header */}
      <header className="bg-white border-b border-gray-300">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Linkedin className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">LinkedIn</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Follow</Button>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Company Banner */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 h-48 relative">
        <div className="container mx-auto px-4">
          <div className="absolute -bottom-16 left-4 md:left-10 bg-white p-2 rounded-lg border border-gray-200 shadow-md">
            <div className="w-24 h-24 flex items-center justify-center bg-pink-50 rounded-lg">
              <Flower className="h-16 w-16 text-pink-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="container mx-auto px-4 mt-20 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Bloom Baby Bloom!</h1>
            <p className="text-gray-600">Floral Design & Boutique</p>
            <p className="text-sm text-gray-500 mt-1">San Francisco, California · 11-50 employees</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Visit Website
            </Button>
            <div className="relative cursor-pointer" onClick={handleCartClick}>
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="blooms"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-transparent border-b-0 justify-start">
              <TabsTrigger 
                value="blooms"
                className={`px-8 py-4 ${activeTab === 'blooms' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <Flower className="h-5 w-5" />
                  <span>Bloom Baby Bloom!</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="insights"
                className={`px-8 py-4 ${activeTab === 'insights' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <ChartBar className="h-5 w-5" />
                  <span>Insights</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Blooms Tab Content */}
            <TabsContent value="blooms" className="pt-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Welcome to Bloom Baby Bloom!</h2>
                <p className="text-gray-600 mb-6">
                  Bloom Baby Bloom! creates beautiful, sustainable floral arrangements for all occasions using locally-sourced flowers.
                </p>

                {/* Featured Products */}
                <h3 className="font-semibold text-lg mb-4">Featured Arrangements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src={product.imgSrc}
                        alt={product.title}
                        className="h-48 w-full object-cover" // Ensure the image fits within the card
                      />
                      <CardContent className="p-4">
                        <h3 className="font-medium">{product.title}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bold text-gray-800">{product.price}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAddToCart(product.id)} // Pass product ID to handler
                            disabled={loadingStates[product.id]} // Disable button while loading
                          >
                            {loadingStates[product.id] ? "Adding..." : "Add to Cart"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* About Section */}
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Our Story</h3>
                  <p className="text-gray-600 mb-4">
                    Founded by Sophie Bloom in 2023, Bloom Baby Bloom! is dedicated to bringing beauty and joy through thoughtfully designed floral arrangements. 
                    We partner with local farms to source the freshest, most sustainable blooms for every season.
                  </p>
                  <p className="text-gray-600">
                    Our team of experienced florists creates custom arrangements for weddings, corporate events, and everyday celebrations. 
                    Visit our San Francisco store or order online for delivery throughout the Bay Area.
                  </p>

                  <div className="mt-8">
                    <Button>Shop Now</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Insights Tab Content */}
            <TabsContent value="insights" className="pt-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Company Insights</h2>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Premium</span>
                </div>

                {/* Company Analytics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-gray-600 text-sm mb-1">Page Views</h3>
                    <div className="text-2xl font-bold">1,245</div>
                    <div className="text-green-600 text-sm mt-1">↑ 23% this month</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-gray-600 text-sm mb-1">Unique Visitors</h3>
                    <div className="text-2xl font-bold">892</div>
                    <div className="text-green-600 text-sm mt-1">↑ 15% this month</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-gray-600 text-sm mb-1">Follower Growth</h3>
                    <div className="text-2xl font-bold">+78</div>
                    <div className="text-green-600 text-sm mt-1">↑ 42% this month</div>
                  </div>
                </div>

                {/* Audience Insights */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4">Audience Demographics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="text-gray-600 text-sm mb-3">Industry</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Event Planning</span>
                          <span className="font-medium">32%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: "32%"}}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>Hospitality</span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: "28%"}}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>Retail</span>
                          <span className="font-medium">18%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: "18%"}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="text-gray-600 text-sm mb-3">Location</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>San Francisco, CA</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: "45%"}}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>Oakland, CA</span>
                          <span className="font-medium">22%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: "22%"}}></div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>Other Bay Area</span>
                          <span className="font-medium">33%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: "33%"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Engagement Metrics</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-gray-600 text-sm">Post Engagement</h4>
                        <div className="text-xl font-bold mt-1">8.3%</div>
                        <div className="text-green-600 text-sm mt-1">Above industry average</div>
                      </div>
                      <div>
                        <h4 className="text-gray-600 text-sm">Click-through Rate</h4>
                        <div className="text-xl font-bold mt-1">4.7%</div>
                        <div className="text-green-600 text-sm mt-1">↑ 1.2% from last month</div>
                      </div>
                      <div>
                        <h4 className="text-gray-600 text-sm">Content Shares</h4>
                        <div className="text-xl font-bold mt-1">145</div>
                        <div className="text-green-600 text-sm mt-1">↑ 28% this quarter</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LinkedInCompanyPage;
