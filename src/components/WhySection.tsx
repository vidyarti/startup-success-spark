
import { LightbulbIcon, DollarSign, Rocket, Users } from "lucide-react";
import { FeaturedCard } from "./FeaturedCard";

export const WhySection = () => {
  const benefits = [
    {
      title: "Save Time",
      description: "Our startup kit eliminates hundreds of hours of research and planning with ready-to-use templates and guides.",
      icon: <LightbulbIcon className="h-6 w-6" />
    },
    {
      title: "Reduce Costs",
      description: "Avoid costly mistakes and unnecessary expenses with our proven frameworks and expert recommendations.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Launch Faster",
      description: "Get your business off the ground in weeks instead of months with our streamlined processes and resources.",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      title: "Expert Guidance",
      description: "Benefit from insights compiled from hundreds of successful entrepreneurs and business consultants.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-startup-lightgray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Why You Need This Startup Kit
          </h2>
          <p className="text-lg text-gray-600">
            Starting a business is challenging, but our comprehensive kit makes it significantly easier by providing everything you need in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <FeaturedCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
