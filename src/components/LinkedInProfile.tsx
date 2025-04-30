
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserPlus, Briefcase, GraduationCap, MapPin } from "lucide-react";

export const LinkedInProfile = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      {/* Banner Image */}
      <div className="h-48 w-full bg-gradient-to-r from-[#FDE1D3] via-[#F2FCE2] to-[#FFDEE2] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-70"></div>
      </div>

      {/* Profile Info Section */}
      <div className="px-6 py-4">
        {/* Profile Photo and Actions */}
        <div className="flex justify-between">
          <div className="relative -mt-20">
            <Avatar className="h-36 w-36 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Sophie Bloom"
                className="h-full w-full object-cover"
              />
            </Avatar>
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> Message
            </Button>
            <Button size="sm" className="flex items-center gap-1 bg-[#ea384c] hover:bg-[#d63344]">
              <UserPlus className="h-4 w-4" /> Connect
            </Button>
          </div>
        </div>

        {/* Name and Headline */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900">Sophie Bloom</h1>
          <p className="text-lg text-gray-600">Owner & Lead Floral Designer at Bloom & Wild Flower Studio</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>San Francisco Bay Area</span>
          </div>
          <p className="text-sm text-[#ea384c] mt-1">500+ connections</p>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-700">
            Passionate floral artist with over 8 years of experience transforming nature's beauty into breathtaking arrangements. 
            I believe flowers tell stories and create emotions that words sometimes cannot express.
            <br /><br />
            As the owner of Bloom & Wild Flower Studio in San Francisco, I combine my artistic vision with entrepreneurial 
            spirit to create sustainable floral designs that bring joy to special moments and everyday spaces. 
            My designs have been featured in local publications and events throughout the Bay Area.
            <br /><br />
            Specializing in seasonal, locally-sourced blooms and Japanese-inspired ikebana arrangements that respect nature's rhythm and beauty.
          </p>
        </div>

        <Separator className="my-6" />

        {/* Experience Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          
          <div className="mb-4">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="h-12 w-12 bg-[#F2FCE2] rounded-md flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-[#3c7a3e]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Owner & Lead Floral Designer</h3>
                <p className="text-[#ea384c] font-medium">Bloom & Wild Flower Studio</p>
                <p className="text-sm text-gray-500">Jan 2019 - Present · 4 years 3 months</p>
                <p className="text-sm text-gray-500">San Francisco, California</p>
                <p className="mt-2 text-gray-700">
                  Founded and managing a boutique flower studio specializing in custom arrangements, 
                  wedding florals, and workshop experiences. Curating seasonal collections and 
                  collaborating with local businesses and event planners.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="h-12 w-12 bg-[#FFDEE2] rounded-md flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-[#9c4a55]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Senior Floral Designer</h3>
                <p className="text-[#ea384c] font-medium">Petal & Stem Florists</p>
                <p className="text-sm text-gray-500">Mar 2016 - Dec 2018 · 2 years 10 months</p>
                <p className="text-sm text-gray-500">San Francisco, California</p>
                <p className="mt-2 text-gray-700">
                  Led a team of designers for large-scale events and weddings. 
                  Developed signature arrangements and trained junior staff in advanced floral techniques.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="h-12 w-12 bg-[#FDE1D3] rounded-md flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-[#a05e3b]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Floral Assistant</h3>
                <p className="text-[#ea384c] font-medium">Blooms & Blossoms</p>
                <p className="text-sm text-gray-500">Jun 2014 - Feb 2016 · 1 year 9 months</p>
                <p className="text-sm text-gray-500">San Francisco, California</p>
                <p className="mt-2 text-gray-700">
                  Assisted with daily operations including flower processing, arrangement creation, and customer service.
                  Specialized in wedding consultations and event preparations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        {/* Education Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          
          <div className="mb-4">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Floral Design Institute</h3>
                <p className="text-gray-700">Professional Certification, Floral Design and Shop Management</p>
                <p className="text-sm text-gray-500">2013 - 2014</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">San Francisco State University</h3>
                <p className="text-gray-700">Bachelor of Fine Arts, Studio Art</p>
                <p className="text-sm text-gray-500">2009 - 2013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
