import GlassCard from "./GlassCard";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  imageUrl?: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <GlassCard className="relative">
      <Quote
        size={40}
        className="absolute top-6 right-6 text-primary/10"
      />
      <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}
            {company && ` at ${company}`}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;
