import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { CheckList } from "@/components/site/check-list";
import { Container } from "@/components/site/container";
import { FeatureCard } from "@/components/site/feature-card";
import { MetricCard } from "@/components/site/metric-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata, heroStats, homeIntroCards, homePillars, serviceCategories, trustBullets } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Dias Wealth Management helps individuals, families, and business owners plan with greater clarity across protection, retirement, and long-term wealth decisions.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="surface-grid absolute inset-x-0 top-0 -z-10 h-[700px] bg-gradient-to-b from-slate-50 via-white to-white" />
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="space-y-8">
            <Badge>Private wealth advisory</Badge>
            <div className="space-y-6">
              <h1 className="text-balance max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Wealth planning with clarity, discipline, and long-term perspective.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Dias Wealth Management works with individuals, families, and business owners who want thoughtful guidance across
                protection planning, retirement strategy, and long-term wealth decisions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
                Arrange a consultation
              </Link>
            </div>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <MetricCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-slate-200 shadow-xl shadow-slate-200/60">
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Client approach</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">Advice designed to feel calm, clear, and considered</h2>
                </div>
                <Badge className="border-white/10 bg-white/10 text-white">By appointment</Badge>
              </div>
            </div>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {homeIntroCards.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-slate-900" />
                  <h3 className="font-medium text-slate-950">What clients can expect</h3>
                </div>
                <div className="mt-4">
                  <CheckList items={trustBullets} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            badge="Our foundation"
            title="Every client conversation starts with trust, context, and good judgment"
            description="We believe wealth advice should help people make clearer decisions, not add noise or pressure."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {homePillars.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <SectionHeading
              badge="Services overview"
              title="Integrated support across protection, retirement, and long-term wealth planning"
              description="Our work is structured around the needs that matter most over time, with a focus on suitability and steady follow-through."
            />
            <Card className="border-slate-200">
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {serviceCategories.slice(0, 4).map((service) => (
                  <div key={service.title} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="bg-slate-950 text-white">
            <CardContent className="space-y-5">
              <Badge className="border-white/10 bg-white/10 text-white">Our process</Badge>
              <h2 className="text-3xl font-semibold tracking-tight">A disciplined advisory process creates confidence before any decision is made.</h2>
              <p className="text-base leading-8 text-slate-300">
                We guide clients through discovery, recommendation, implementation, and ongoing review with clear communication at every step.
              </p>
              <CheckList
                dark
                items={[
                  "Private, adviser-led conversations",
                  "Recommendations framed around goals and suitability",
                  "Support that continues beyond the first decision",
                  "A professional process that respects client time and attention",
                ]}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5">
              <Badge>Who we work with</Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">We support clients who value thoughtful planning and long-term relationships.</h2>
              <p className="text-base leading-8 text-slate-600">
                Our clients include professionals, families, and business owners who want guidance that is practical, responsive, and aligned with their wider financial priorities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
                  Learn about the firm
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
