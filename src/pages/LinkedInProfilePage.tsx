
import { User, Linkedin, MapPin, Building, Calendar, Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const LinkedInProfilePage = () => {
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
              <Button variant="outline" size="sm">Connect</Button>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Banner */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 h-48 relative">
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                   opacity: 0.8}}>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm -mt-16 relative z-10">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-32 w-32 border-4 border-white shadow-md relative -mt-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Sophie Bloom" />
                  <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">Sophie Bloom</h1>
                  <p className="text-lg">Founder & Head Florist at Sophie's Blooms</p>
                  <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, California</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">500+ connections</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Connect</Button>
                <Button variant="outline">Message</Button>
                <Button variant="outline">More</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-600">
                  Passionate florist with over 10 years of experience creating beautiful, sustainable floral arrangements.
                  Founder of Sophie's Blooms, a boutique floral design studio specializing in weddings, events, and daily
                  deliveries in the San Francisco Bay Area.
                </p>
                <p className="text-gray-600 mt-4">
                  My mission is to bring joy through thoughtfully designed arrangements using locally-sourced, seasonal flowers.
                  I believe that every bouquet tells a story and every arrangement can transform a space.
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-md flex items-center justify-center shrink-0">
                      <Building className="text-purple-500 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Founder & Head Florist</h3>
                      <p className="text-gray-600">Sophie's Blooms</p>
                      <p className="text-sm text-gray-500">Jan 2023 - Present · 1 yr 4 mos</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Leading a team of talented florists, managing all aspects of the business from design to delivery,
                        and creating custom arrangements for weddings and special events.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center shrink-0">
                      <Building className="text-green-500 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Senior Floral Designer</h3>
                      <p className="text-gray-600">Bloom & Petal Co.</p>
                      <p className="text-sm text-gray-500">Mar 2018 - Dec 2022 · 4 yrs 10 mos</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Created floral designs for high-end events and weddings. Trained junior designers and managed
                        client consultations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Featured Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Featured</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Spring Collection 2025</h3>
                    <p className="text-sm text-gray-600">
                      Explore our latest seasonal collection featuring locally sourced spring blooms.
                    </p>
                    <Button variant="outline" className="mt-4 bg-white">View Collection</Button>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Wedding Services</h3>
                    <p className="text-sm text-gray-600">
                      Discover our custom wedding packages and view our portfolio of past events.
                    </p>
                    <Button variant="outline" className="mt-4 bg-white">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['Floral Design', 'Event Planning', 'Sustainable Practices', 'Botanical Knowledge', 
                    'Small Business Management', 'Visual Merchandising', 'Client Relations', 
                    'Wedding Design', 'Seasonal Arrangements', 'Plant Care'].map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center shrink-0">
                    <Calendar className="text-blue-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Floral Design Certificate</h3>
                    <p className="text-gray-600">American Institute of Floral Designers</p>
                    <p className="text-sm text-gray-500">2017 - 2018</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center shrink-0">
                    <Calendar className="text-green-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Bachelor of Fine Arts</h3>
                    <p className="text-gray-600">San Francisco Art Institute</p>
                    <p className="text-sm text-gray-500">2012 - 2016</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Focus: Visual Arts with emphasis on color theory and natural forms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span>sophie@sophiesblooms.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-gray-500" />
                    <a href="#" className="text-blue-600 hover:underline">www.sophiesblooms.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfilePage;
