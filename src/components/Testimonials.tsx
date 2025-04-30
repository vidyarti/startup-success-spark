
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This startup kit saved me months of research and thousands of dollars in consulting fees. I launched my business in half the time I expected!",
      author: "Sarah Johnson",
      role: "Founder, Brighten Design Studio",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "As a first-time entrepreneur, I was overwhelmed by all the steps needed to start a business. This kit made the process clear and manageable.",
      author: "Michael Torres",
      role: "CEO, EcoDelivery",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
      quote: "The legal templates alone were worth the investment. Having expert-reviewed documents gave me confidence that my business was properly protected.",
      author: "Jennifer Liu",
      role: "Founder, Bright Future Consulting",
      avatar: "https://i.pravatar.cc/150?img=47"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-startup-lightgray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            See how our startup kit has helped entrepreneurs just like you launch and grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-5xl text-startup-blue opacity-20">"</div>
                    <p className="text-gray-600 relative z-10 pt-4">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
