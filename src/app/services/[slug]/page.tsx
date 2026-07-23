import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/content";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <article className="shell py-20 sm:py-28">
      <Link href="/services" className="text-sm font-semibold text-ink-muted hover:text-foreground">← All services</Link>
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="eyebrow">Service {service.number}</p>
          <h1 className="page-title mt-6">{service.title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-ink-muted">{service.description}</p>
        </div>
        <aside className="rounded-2xl border border-black/10 bg-card p-8">
          <h2 className="font-semibold">Typical deliverables</h2>
          <ul className="mt-6 space-y-4 text-ink-muted">
            {service.deliverables.map((item) => <li key={item} className="border-t border-black/10 pt-4">{item}</li>)}
          </ul>
        </aside>
      </div>
    </article>
  );
}
