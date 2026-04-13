import { Container } from "@/components/site/container";
import { FeatureCard } from "@/components/site/feature-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { aboutPrinciples, aboutTimeline, buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Dias Wealth Management, our client philosophy, and the principles that guide our approach to long-term planning.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[460px] bg-gradient-to-b from-slate-50 via-white to-white" />
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge>About Dias Wealth Management</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Independent-minded guidance for clients planning across life, family, and business.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Dias Wealth Management was built around a simple belief: financial advice should make important decisions clearer,
              more structured, and easier to act on with confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutPrinciples.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                badge="Our philosophy"
                title="We work to simplify complex choices without oversimplifying what matters"
                description="Good advisory work combines technical understanding with judgment, empathy, and the ability to explain things well."
              />
              <div className="grid gap-3 text-sm leading-7 text-slate-700">
                {[
                  "Planning begins with context, not assumptions",
                  "Clients deserve recommendations explained in plain language",
                  "Long-term relationships depend on consistency and responsiveness",
                  "Trust is built through discipline, not noise or urgency",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-4">{item}</div>
                ))}
              </div>
            </div>
            <Card>
              <CardContent className="space-y-6">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Our role</p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  We help clients make better financial decisions across the moments that shape long-term security.
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  Whether the conversation starts with protection, retirement, savings, or business-related priorities, our aim is the same:
                  to provide guidance that is thoughtful, suitable, and easy to move forward with.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Private consultations",
                    "Goal-led planning",
                    "Long-term review",
                    "Responsive support",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            badge="How we work"
            title="A simple framework for building clarity and confidence"
            description="Our advisory process is designed to move from understanding to strategy to ongoing review."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {aboutTimeline.map((step) => (
              <Card key={step.step}>
                <CardContent>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">Step {step.step}</p>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
