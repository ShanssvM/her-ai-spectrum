import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Her AI Spectrum completely changed my career trajectory. The mentorship I received helped me land my dream role as an ML Engineer at a top tech company. The community here is unlike anything else.",
      name: "Sarah Chen",
      role: "Machine Learning Engineer",
      company: "Google",
    },
    {
      quote:
        "The events are world-class, but it's the genuine connections that make this community special. I've found collaborators, mentors, and lifelong friends through Her AI Spectrum.",
      name: "Dr. Amara Johnson",
      role: "AI Research Scientist",
      company: "Stanford University",
    },
    {
      quote:
        "As someone transitioning into AI from a non-technical background, I was intimidated. Her AI Spectrum provided the supportive environment I needed to learn and grow. Now I lead AI strategy at my company.",
      name: "Maya Rodriguez",
      role: "Head of AI Strategy",
      company: "Salesforce",
    },
    {
      quote:
        "The workshops are practical, the speakers are inspiring, and the networking opportunities are invaluable. Her AI Spectrum is setting the standard for what tech communities should be.",
      name: "Jessica Kim",
      role: "Senior Data Scientist",
      company: "Microsoft",
    },
    {
      quote:
        "I've attended dozens of tech events, but none match the quality and intentionality of Her AI Spectrum. Every event is thoughtfully designed to educate, connect, and inspire.",
      name: "Priya Patel",
      role: "AI Product Manager",
      company: "OpenAI",
    },
    {
      quote:
        "This community gave me the confidence to start my own AI startup. The encouragement, advice, and connections I've made here have been instrumental to my success.",
      name: "Lisa Thompson",
      role: "Founder & CEO",
      company: "AI Innovations Lab",
    },
    {
      quote:
        "What I love about Her AI Spectrum is the focus on both technical excellence and ethical considerations. It's refreshing to be part of a community that cares about responsible AI development.",
      name: "Dr. Emily Watson",
      role: "AI Ethics Researcher",
      company: "MIT",
    },
    {
      quote:
        "The summer mentorship program was transformative. My mentor provided guidance that helped me navigate challenges and accelerate my growth in ways I couldn't have imagined.",
      name: "Aisha Mohammed",
      role: "AI Engineer",
      company: "Amazon",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Community Voices"
            title="What Our Members Say"
            subtitle="Hear from the incredible women who are part of the Her AI Spectrum community and how it has impacted their careers."
          />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <GlassCard className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-hero-gradient flex items-center justify-center text-white">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-sans">
              Share Your Story
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Are you a member of Her AI Spectrum? We'd love to hear how the
              community has impacted your journey in AI.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-hero-gradient hover:opacity-90"
            >
              <a href="mailto:hello@heraispectrum.org">
                Submit Your Testimonial
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </GlassCard>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-sans">
            Ready to Join This Amazing Community?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Connect with hundreds of women in AI who are shaping the future of
            technology.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-hero-gradient hover:opacity-90"
          >
            <a
              href="https://www.linkedin.com/company/her-ai-spectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Her AI Spectrum
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
