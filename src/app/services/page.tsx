import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Workflow design, product and UX, software development, and ongoing product partnership.",
};

export default function ServicesPage() {
  return (
    <section className="shell py-20 sm:py-28">
      <p className="eyebrow">Services</p>
      <h1 className="page-title mt-6 max-w-4xl">End-to-end help for complicated operational problems.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-muted">
        We combine product thinking, design, and engineering to take a workflow from messy reality to shipped software.
      </p>
      <div className="mt-16 border-t border-black/15">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[4rem_1fr_1fr] sm:py-10">
            <p className="font-mono text-xs text-accent">{service.number}</p>
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">{service.title}</h2>
            <div>
              <p className="leading-7 text-ink-muted">{service.summary}</p>
              <p className="mt-4 text-sm font-semibold group-hover:underline">View service →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
