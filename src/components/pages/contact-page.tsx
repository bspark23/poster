'use client';

import Link from 'next/link';

import { useAppSelector } from '@/store/hooks';
import { HEDOBEC_SERVICES } from '@/constants/hedobec';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHero from '@/components/shared/page-hero';

export default function ContactPage() {
  const { siteContent, systemSettings } = useAppSelector((s) => s.content.content);
  const section1 = siteContent?.contact?.section1 ?? {};
  const contact = systemSettings?.contact;
  const primaryPhone = contact?.phones?.[0] ?? '';
  const primaryAddress = contact?.addresses?.[0];

  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow='Contact Us'
        title={section1.title ?? 'Contact Us'}
        description={
          section1.body ??
          'Speak with HEDO-BEC about engineering, procurement, manpower, and execution support for your next project.'
        }
        actions={
          <>
            {primaryPhone ? (
              <Button asChild size='lg' variant='secondary'>
                <a href={`tel:${primaryPhone}`}>Call now</a>
              </Button>
            ) : null}
            {contact?.email ? (
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white'
              >
                <a href={`mailto:${contact.email}`}>Send email</a>
              </Button>
            ) : null}
          </>
        }
      >
      </PageHero>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-6 md:grid-cols-3'>
          <Card className='bg-white shadow-sm'>
            <CardHeader>
              <CardTitle>Head office</CardTitle>
              <CardDescription>
                {primaryAddress?.address || 'Enugu, Enugu State, Nigeria'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-slate-600'>
                {primaryAddress?.country || 'Nigeria'}
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white shadow-sm'>
            <CardHeader>
              <CardTitle>Project support</CardTitle>
              <CardDescription>
                Reach out for engineering design, supply, manpower, piping,
                instrumentation, and logistics support.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='bg-white shadow-sm'>
            <CardHeader>
              <CardTitle>Response path</CardTitle>
              <CardDescription>
                Share your project scope, sector, timeline, and contact details
                so the right team can follow up.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-10 rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-semibold tracking-tight'>
              What to include in your inquiry
            </h2>
            <p className='text-slate-300'>
              A strong first message helps HEDO-BEC understand scope, urgency,
              and the best service line to activate.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              'Project location and industry',
              'Required service or discipline',
              'Expected timeline or mobilization window',
              'Primary contact details for follow-up',
            ].map((item) => (
              <div
                key={item}
                className='rounded-2xl border border-white/10 bg-white/5 p-5'
              >
                <p className='text-sm leading-6 text-slate-200'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl space-y-3'>
              <h2 className='text-3xl font-semibold tracking-tight'>
                Common service discussions
              </h2>
              <p className='text-slate-600'>
                These are some of the project support areas visitors may want to
                discuss with the team.
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
                    <Link href={service.href}>View service</Link>
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
