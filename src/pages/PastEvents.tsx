import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const pastEvents = [
    {
      title: "AI Leadership Summit 2024",
      date: "November 12, 2024",
      time: "9:00 AM - 6:00 PM PST",
      location: "San Francisco, CA",
      description:
        "Our flagship annual summit brought together 300+ attendees to discuss AI leadership, featuring keynotes from leading women in tech.",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      attendees: 320,
    },
    {
      title: "Introduction to Neural Networks",
      date: "October 25, 2024",
      time: "2:00 PM - 5:00 PM EST",
      location: "Virtual Workshop",
      description:
        "A beginner-friendly workshop on neural network fundamentals, with hands-on coding exercises and mentorship from industry experts.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
      attendees: 150,
    },
    {
      title: "Women in AI Mixer - NYC",
      date: "September 18, 2024",
      time: "6:00 PM - 9:00 PM EST",
      location: "New York, NY",
      description:
        "An evening of networking and celebration, connecting women in AI from across the tri-state area with industry leaders and recruiters.",
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      attendees: 85,
    },
    {
      title: "Responsible AI Panel Discussion",
      date: "August 8, 2024",
      time: "1:00 PM - 3:00 PM PST",
      location: "Virtual Event",
      description:
        "A thought-provoking panel on AI responsibility featuring ethicists, researchers, and policymakers discussing the future of ethical AI.",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
      attendees: 200,
    },
    {
      title: "AI Product Management Workshop",
      date: "July 15, 2024",
      time: "10:00 AM - 4:00 PM PST",
      location: "Los Angeles, CA",
      description:
        "A comprehensive workshop for aspiring and current product managers looking to break into or advance in AI product roles.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      attendees: 60,
    },
    {
      title: "Summer Mentorship Kickoff",
      date: "June 1, 2024",
      time: "11:00 AM - 1:00 PM EST",
      location: "Virtual Event",
      description:
        "The launch event for our 2024 summer mentorship program, pairing 50 mentees with experienced AI professionals.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      attendees: 110,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Event Archive"
            title="Past Events"
            subtitle="Explore our history of impactful events that have brought together hundreds of women in AI."
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} isPast />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <GlassCard className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-prism mb-2">
                  25+
                </div>
                <div className="text-muted-foreground">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-prism mb-2">
                  2,000+
                </div>
                <div className="text-muted-foreground">Total Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-prism mb-2">
                  100+
                </div>
                <div className="text-muted-foreground">Expert Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-prism mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Partner Companies</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-sans">
            Don't Miss Our Next Event
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join us at one of our upcoming events to be part of the Her AI
            Spectrum community.
          </p>
          <Button asChild className="bg-hero-gradient hover:opacity-90">
            <Link to="/upcoming-events">
              View Upcoming Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PastEvents;
