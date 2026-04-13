import Link from "next/link";
import { footerNote, navItems, siteConfig } from "@/lib/site";
import { Container } from "@/components/site/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Private wealth advisory</p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-950">{siteConfig.name}</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600">{footerNote}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Pages</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
