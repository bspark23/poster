'use client';

import ServicePageTemplate from '@/components/pages/service-page-template';

export default function ServiceDetailsPage({ slug }: { slug: string }) {
  return <ServicePageTemplate slug={slug} />;
}
