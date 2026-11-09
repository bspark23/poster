import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ServiceDetailsPage from '@/components/pages/service-details-page';
import { HEDOBEC_SERVICES, getHedobecService } from '@/constants/hedobec';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return HEDOBEC_SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params | Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getHedobecService(slug);

  if (!service) {
    return {
      title: 'Service not found',
    };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { slug } = await params;
  const service = getHedobecService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailsPage slug={slug} />;
}
