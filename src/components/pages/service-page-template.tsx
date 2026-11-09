import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import {
  HEDOBEC_INDUSTRIES,
  HEDOBEC_SERVICES,
  getHedobecService,
} from '@/constants/hedobec';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHero from '@/components/shared/page-hero';

export default function ServicePageTemplate({ slug }: { slug: string }) {
  const service = getHedobecService(slug);

  if (!service) {
    return null;
  }

  const relatedServices = HEDOBEC_SERVICES.filter((item) => item.slug !== slug).slice(
    0,
    3,
  );

  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow='Service Capability'
        title={service.title}
        description={service.description}
        imageSrc={service.image}
        actions={
          <>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/contact'>Talk to Our Team</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white'
            >
              <Link href='/services'>Explore All Services</Link>
            </Button>
          </>
        }
      >
      </PageHero>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {HEDOBEC_INDUSTRIES.map((industry) => (
            <Card key={industry.title} className='bg-white'>
              <CardHeader>
                <CardTitle>{industry.title}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='max-w-2xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight'>
              Related capabilities
            </h2>
            <p className='text-slate-600'>
              HEDO-BEC combines multiple disciplines to support project delivery
              from planning through execution.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-3'>
            {relatedServices.map((item) => (
              <Card key={item.slug} className='bg-white'>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant='ghost' className='px-0 text-primary'>
                    <Link href={item.href}>
                      Learn more
                      <ArrowRight className='h-4 w-4' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
