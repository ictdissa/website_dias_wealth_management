import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CheckList } from "@/components/site/check-list";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata, serviceCategories, serviceHighlights } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore the core service areas at Dias Wealth Management, from protection planning and retirement strategy to long-term wealth guidance.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-slate-50 via-white to-white" />
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge>Services</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Planning support across the decisions that matter most over time.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Our services are designed to help clients protect what they have built, prepare for change, and make steady progress toward long-term financial goals.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <Card key={category.title} className="h-full">
                <CardContent>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <category.icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{category.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                  <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                    <CheckList items={[...category.bullets]} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <Badge className="border-white/10 bg-white/10 text-white">Client journey</Badge>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                The purpose of our process is simple: help the right client understand the right next step.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                We combine careful listening, structured recommendations, and long-term follow-through so clients can move forward with more confidence.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <CheckList
                dark
                items={[
                  "Advice that begins with goals, responsibilities, and risk tolerance",
                  "Guidance shaped around suitability rather than product volume",
                  "A measured pace that leaves room for understanding and questions",
                  "Clear follow-up after decisions are made",
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            badge="Ways to begin"
            title="A first conversation can start from wherever your priorities are most immediate"
            description="Some clients come to us with a specific need. Others simply know they want a clearer financial plan."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceHighlights.map((item) => (
              <Card key={item.title}>
                <CardContent>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
              Request a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
