import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const pipelineData = [
  { stage: "Entry Level", women: 49, men: 51 },
  { stage: "Management", women: 42, men: 58 },
  { stage: "C-Suite", women: 29, men: 71 },
];

const OurPurpose = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Purpose</h1>
          <p className="text-lg text-muted-foreground">
            Artificial intelligence is everywhere — in healthcare, education, climate, jobs, and beyond. But without
            diverse perspectives, AI can overlook real problems and reinforce existing biases.
          </p>
        </div>
      </section>

      {/* The Big Picture */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12">
            <SectionHeader title="The Big Picture" subtitle="" />
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Artificial Intelligence is reshaping every industry, but the people building it do not yet represent the
              people using it. Today, women make up only about{" "}
              <span className="font-semibold text-foreground">30% of the global AI-related workforce</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Bias Risk */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12">
            <SectionHeader title="Bias Risk" subtitle="" />
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Without more women in these roles, AI systems are more likely to exhibit gender bias—currently,{" "}
              <span className="font-semibold text-foreground">up to 44% of AI systems show such bias</span>.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg md:text-xl text-muted-foreground leading-relaxed mt-8">
              "Diversity isn't just a metric; it's the only way to build safe, unbiased AI."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Leaky Pipeline */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{ background: "linear-gradient(135deg, hsl(230 30% 12%) 0%, hsl(220 25% 18%) 100%)" }}
          >
            <SectionHeader
              title="The Leaky Pipeline Chart using McKinsey 2025 data"
              subtitle=""
              titleClassName="text-white"
            />
            <h3 className="text-xl md:text-2xl font-serif text-white/90 text-center mt-6 mb-12">
              AI is for everyone, but women are disappearing from the field.
            </h3>

            {/* Chart */}
            <div className="h-80 md:h-96 mb-12">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pipelineData}
                  layout="vertical"
                  margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
                  barGap={8}
                >
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    tick={{ fill: "white", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(215 20% 30%)" }}
                    tickLine={{ stroke: "hsl(215 20% 30%)" }}
                  />
                  <YAxis
                    type="category"
                    dataKey="stage"
                    tick={{ fill: "white", fontSize: 14, fontWeight: 500 }}
                    axisLine={false}
                    tickLine={false}
                    width={100}
                  />
                  <Bar dataKey="women" name="Women" radius={[0, 8, 8, 0]} barSize={28}>
                    {pipelineData.map((_, index) => (
                      <Cell key={`women-${index}`} fill="url(#prismGradient)" />
                    ))}
                    <LabelList
                      dataKey="women"
                      position="right"
                      formatter={(value: number) => `${value}%`}
                      style={{ fill: "white", fontSize: 14, fontWeight: 600 }}
                    />
                  </Bar>
                  <Bar dataKey="men" name="Men" radius={[0, 8, 8, 0]} barSize={28}>
                    {pipelineData.map((_, index) => (
                      <Cell key={`men-${index}`} fill="hsl(215 20% 35%)" />
                    ))}
                    <LabelList
                      dataKey="men"
                      position="right"
                      formatter={(value: number) => `${value}%`}
                      style={{ fill: "white", fontSize: 14, fontWeight: 600 }}
                    />
                  </Bar>
                  <defs>
                    <linearGradient id="prismGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="hsl(280 80% 60%)" />
                      <stop offset="100%" stopColor="hsl(190 80% 55%)" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ background: "linear-gradient(90deg, hsl(280 80% 60%), hsl(190 80% 55%))" }}
                />
                <span className="text-white/80 text-sm">Women</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-600" />
                <span className="text-white/80 text-sm">Men</span>
              </div>
            </div>

            {/* Metric Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                50% of women leave the tech workforce by age 35—
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  double the rate of men.
                </span>
              </p>
              <Button
                asChild
                size="lg"
                className="bg-hero-gradient hover:opacity-90 transition-opacity text-white font-semibold px-8"
              >
                <a href="https://www.linkedin.com/company/her-ai-spectrum" target="_blank" rel="noopener noreferrer">
                  Join the Spectrum
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader title="References" subtitle="" />
          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li>
              <a
                href="https://hai.stanford.edu/ai-index/2025-ai-index-report"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                Stanford HAI: Artificial Intelligence Index Report 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2025/women-and-generative-ai.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                Deloitte Insights: Women and Generative AI: Closing Gaps and Building Trust (2025)
              </a>
            </li>
            <li>
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                McKinsey & Company: The State of AI in 2025: Global Survey
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurPurpose;
