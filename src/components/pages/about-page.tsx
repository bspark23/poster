'use client';

import Link from 'next/link';

import { useAppSelector } from '@/store/hooks';
import {
  HEDOBEC_INDUSTRIES,
  HEDOBEC_SERVICES,
  HEDOBEC_VALUES,
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

export default function AboutPage() {
  const { siteContent } = useAppSelector((s) => s.content.content);
  const section1 = siteContent?.about?.section1 ?? {};

  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow='About HEDO-BEC'
        title={section1.title ?? 'About Us'}
        description={
          section1.body ??
          'Learn more about HEDO-BEC Engineering and Construction Limited, our delivery mindset, and the sectors we support.'
        }
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
              <Link href='/services'>Explore Services</Link>
            </Button>
          </>
        }
      >
      </PageHero>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-8 rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-semibold tracking-tight'>
              Commitment to work
            </h2>
            <p className='text-slate-300'>
              HEDO-BEC&apos;s public company profile emphasizes quality,
              cost-effective, reliable, and global-standard value-added
              services for oil and gas, maritime, energy, and construction
              projects.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {HEDOBEC_INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className='rounded-2xl border border-white/10 bg-white/5 p-5'
              >
                <h3 className='font-semibold'>{industry.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-300'>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='max-w-2xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight'>Core values</h2>
            <p className='text-slate-600'>
              The company culture is presented around values that shape project
              delivery and working relationships.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {HEDOBEC_VALUES.map((value) => (
              <Card key={value} className='bg-white shadow-sm'>
                <CardHeader>
                  <CardTitle>{value}</CardTitle>
                  <CardDescription>
                    Embedded into how HEDO-BEC approaches people, projects, and
                    execution.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl space-y-3'>
              <h2 className='text-3xl font-semibold tracking-tight'>
                Capability overview
              </h2>
              <p className='text-slate-600'>
                HEDO-BEC combines multiple support lines to serve complex
                project environments.
              </p>
            </div>
            <Button asChild variant='ghost' className='w-fit px-0 text-primary'>
              <Link href='/services'>See all services</Link>
            </Button>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {HEDOBEC_SERVICES.slice(0, 6).map((service) => (
              <Card key={service.slug} className='bg-white shadow-sm'>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant='outline' className='rounded-full'>
                    <Link href={service.href}>Learn more</Link>
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
