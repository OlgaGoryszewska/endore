import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case studies",
  description: "Examples of digital systems designed to simplify complex operational work.",
};

export default function CaseStudiesPage() {
  return (
    <section className="shell py-20 sm:py-28">
      <p className="eyebrow">Case studies</p>
      <h1 className="page-title mt-6 max-w-4xl">Better ways to run the work behind the business.</h1>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex min-h-96 flex-col rounded-2xl border border-black/10 bg-card p-8 sm:p-10">
            <p className="eyebrow">{study.sector}</p>
            <div className="mt-auto pt-16">
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">{study.title}</h2>
              <p className="mt-4 leading-7 text-ink-muted">{study.summary}</p>
              <p className="mt-6 text-sm font-semibold group-hover:underline">Read case study →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
