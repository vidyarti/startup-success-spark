
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const FeaturedCard = ({ title, description, icon, className }: FeaturedCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300",
      className
    )}>
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-startup-lightblue/20 text-startup-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
