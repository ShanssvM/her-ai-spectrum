import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Bell, ArrowRight } from "lucide-react";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      title: "AI Ethics & Governance Summit 2025",
      date: "March 15, 2026",
      time: "9:00 AM - 5:00 PM PST",
      location: "San Francisco, CA + Virtual",
      description:
        "Join leading experts in AI ethics for a day of discussions on responsible AI development, governance frameworks, and the future of ethical AI practices.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      registrationLink: "https://www.linkedin.com/company/her-ai-spectrum",
    },
    {
      title: "From Research to Real World: Building ",
      date: "Feburary 13, 2026",
      time: "10:00 AM - 2:00 PM EST",
      location: "Virtual Event",
      description: "Young Graduate...",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      registrationLink: "https://www.linkedin.com/company/her-ai-spectrum",
    },
    {
      title: "AI ",
      date: "March 22, 2026",
      time: "6:00 PM - 9:00 PM PST",
      location: "Virtual Event",
      description:
        "Connect with hiring managers, recruiters, and peers in AI. Perfect for job seekers, career changers, and anyone looking to expand their network.",
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      registrationLink: "https://www.linkedin.com/company/her-ai-spectrum",
    },
    {
      title: "Learn from Leaders",
      date: "March, 2026",
      time: "11:00 AM - 4:00 PM EST",
      location: "Virtual Event",
      description:
        "Explore the latest in generative AI, from large language models to image generation. Learn from practitioners building cutting-edge AI applications.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      registrationLink: "https://www.linkedin.com/company/her-ai-spectrum",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Mark Your Calendar"
            title="Upcoming Events"
            subtitle="Join us at our upcoming events to learn, connect, and grow with the Her AI Spectrum community."
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          ) : (
            <GlassCard className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No upcoming events at the moment.</p>
              <p className="text-muted-foreground">Check back soon or follow us on LinkedIn for updates!</p>
            </GlassCard>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <GlassCard className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-hero-gradient flex items-center justify-center text-white">
              <Bell size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-sans">Never Miss an Event</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Follow us on LinkedIn to stay updated on all our upcoming events, workshops, and community gatherings.
            </p>
            <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90">
              <a href="https://www.linkedin.com/company/her-ai-spectrum" target="_blank" rel="noopener noreferrer">
                Follow Us on LinkedIn
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default UpcomingEvents;
