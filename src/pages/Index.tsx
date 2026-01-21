import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description:
        "Pushing boundaries in AI research and development with diverse perspectives.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description:
        "Building a supportive network of women and allies in artificial intelligence.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Inclusion",
      description:
        "Ensuring AI development represents and benefits everyone, everywhere.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Education",
      description:
        "Providing resources and mentorship to the next generation of AI leaders.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float delay-200" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Empowering Women in AI
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
              Advancing the{" "}
              <span className="text-gradient-prism">Full Spectrum</span> of AI
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
              We're building a diverse community of women and underrepresented
              voices to shape the future of artificial intelligence—together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button
                asChild
                size="lg"
                className="bg-hero-gradient hover:opacity-90 text-white px-8"
              >
                <a
                  href="https://www.linkedin.com/company/her-ai-spectrum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/upcoming-events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative prism element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bridging the Gender Gap in AI
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Her AI Spectrum exists to create meaningful change in the AI
                industry. We believe that diverse perspectives lead to better,
                more ethical, and more innovative artificial intelligence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Through events, mentorship programs, and community building, we
                empower women and underrepresented groups to take their rightful
                place at the forefront of AI development.
              </p>
              <Button asChild variant="outline" className="prism-border">
                {/*<Link to="/testimonials">
                  Hear From Our Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>*/}
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <GlassCard className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-gradient-prism mb-2">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Community Members
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-gradient-prism mb-2">
                        25+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Events Hosted
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-gradient-prism mb-2">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Industry Partners
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-gradient-prism mb-2">
                        12
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Cities Reached
                      </div>
                    </div>
                  </div>
                </GlassCard>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/5 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            {/*badge="Our Vision"
            title="A Future Where AI Reflects Everyone"*/}
          title = "Our Vision"  
          subtitle="To create a world where diversity is the heartbeat of artificial intelligence and every innovator has the power to lead."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard
                key={value.title}
                className={`text-center animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-hero-gradient flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <GlassCard className="p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-gradient opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Shape the Future of AI?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join our growing community of innovators, researchers, and
                leaders who are making AI more diverse and inclusive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Join Us on LinkedIn
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/upcoming-events">Explore Events</Link>
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
