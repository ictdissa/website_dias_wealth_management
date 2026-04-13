import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { FeatureCard } from "@/components/site/feature-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata, careerProcessSteps, careerTracks, faqs, internshipAreas } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore career and internship opportunities at Dias Wealth Management across advisory, client support, marketing, and operations.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-slate-50 via-white to-white" />
        <Container className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-7">
            <Badge>Careers & internships</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Build your career in a team that values trust, clarity, and professional discipline.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We welcome candidates who care about communication, integrity, detail, and the quality of client experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Apply or enquire <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <Card className="shadow-xl shadow-slate-200/60">
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {[
                "Clear role tracks and learning paths",
                "Mentored exposure to real client-support work",
                "A professional environment with room to grow",
                "Structured recruitment and thoughtful onboarding",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading
            badge="Career paths"
            title="Different strengths belong in different parts of the business"
            description="We are intentional about role design so candidates can better understand where they may fit and contribute."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {careerTracks.map((track) => (
              <Card key={track.title} className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <track.icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle>{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{track.description}</p>
                  <div className="mt-6 space-y-3">
                    {track.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <SectionHeading
            badge="Internship programme"
            title="Practical contribution matters more than generic job descriptions"
            description="Our internship pathway is built to give candidates meaningful exposure to the quality and pace of real work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {internshipAreas.map((area) => (
              <FeatureCard key={area.title} {...area} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            badge="Hiring process"
            title="A transparent process helps candidates prepare and perform with confidence"
            description="We aim to make each stage clear, respectful, and relevant to the work itself."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {careerProcessSteps.map((step) => (
              <Card key={step.step} className="h-full">
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

      <section className="pb-20">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Common questions from candidates"
            description="A strong hiring experience begins with clear expectations."
          />
          <Card className="mt-10">
            <CardContent className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 px-5 py-4">
                  <summary className="cursor-pointer list-none text-left text-base font-medium text-slate-950">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
