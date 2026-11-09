'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { HEDOBEC_SERVICES, HEDOBEC_STATS } from '@/constants/hedobec';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHero from '@/components/shared/page-hero';

export default function ServicesPage() {
  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow='Our Services'
        title='Delivery-focused engineering and construction support'
        description='HEDO-BEC combines design, supply, manpower, and execution support to help clients move projects from planning into dependable field delivery.'
        actions={
          <>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/contact'>Request a Consultation</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white'
            >
              <Link href='/industries'>See Industries</Link>
            </Button>
          </>
        }
      >
      </PageHero>

      <section className='px-4 py-10 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {HEDOBEC_STATS.map((stat) => (
            <div
              key={stat.label}
              className='rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm'
            >
              <p className='text-2xl font-semibold'>{stat.value}</p>
              <p className='mt-1 text-sm text-slate-600'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='max-w-2xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight'>
              Core capabilities
            </h2>
            <p className='text-slate-600'>
              Built around the service lines visible in HEDO-BEC&apos;s company
              profile and delivery positioning.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {HEDOBEC_SERVICES.map((service) => (
              <Card key={service.slug} className='bg-white shadow-sm'>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <div className='grid gap-2'>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className='flex items-start gap-2 text-sm text-slate-600'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 text-primary' />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant='ghost' className='px-0 text-primary'>
                    <Link href={service.href}>
                      View service
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
