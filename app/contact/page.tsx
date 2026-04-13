import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata, contactCards, contactReasons, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Dias Wealth Management to arrange a private consultation or discuss your planning priorities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-slate-50 via-white to-white" />
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge>Contact</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Start a private conversation with our team.</h1>
            <p className="text-lg leading-8 text-slate-600">
              Whether you are reviewing an existing plan or preparing for your next stage of life or business, we are here to help you think clearly about the next step.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <Card>
                <CardContent className="space-y-5">
                  <SectionHeading
                    badge="How we can help"
                    title="Reasons clients and partners get in touch"
                    description="We welcome enquiries from prospective clients, partners, and candidates looking to start the right conversation."
                  />
                  <div className="grid gap-3">
                    {contactReasons.map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                      <MapPin className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold tracking-tight text-slate-950">Office</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                      <Phone className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold tracking-tight text-slate-950">Phone</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{siteConfig.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                      <Mail className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold tracking-tight text-slate-950">Email</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{siteConfig.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {contactCards.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100">
                      <item.icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Send an enquiry</h2>
                  <p className="text-sm leading-7 text-slate-600">
                    Share a few details below and our team will respond as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
