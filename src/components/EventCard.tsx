import GlassCard from "./GlassCard";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees?: number;
  imageUrl?: string;
  isPast?: boolean;
  registrationLink?: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  attendees,
  imageUrl,
  isPast = false,
  registrationLink,
}: EventCardProps) => {
  return (
    <GlassCard className="overflow-hidden p-0">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {isPast && (
            <div className="absolute top-4 right-4 bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
              Completed
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 font-sans">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} className="text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span>{location}</span>
          </div>
          {attendees && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} className="text-primary" />
              <span>{attendees} attendees</span>
            </div>
          )}
        </div>

        {!isPast && registrationLink && (
          <Button
            asChild
            className="w-full bg-hero-gradient hover:opacity-90"
          >
            <a href={registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        )}
        {isPast && (
          <Button variant="outline" className="w-full" disabled>
            Event Completed
          </Button>
        )}
      </div>
    </GlassCard>
  );
};

export default EventCard;
