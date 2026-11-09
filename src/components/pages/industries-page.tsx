'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { HEDOBEC_INDUSTRIES, HEDOBEC_SERVICES } from '@/constants/hedobec';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHero from '@/components/shared/page-hero';

export default function IndustriesPage() {
  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow='Industries'
        title='Supporting complex project environments across key sectors'
        description='HEDO-BEC positions its services around the sectors where precise planning, dependable coordination, and execution quality matter most.'
        actions={
          <>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/services'>Explore Services</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white'
            >
              <Link href='/contact'>Start a Conversation</Link>
            </Button>
          </>
        }
      >
      </PageHero>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {HEDOBEC_INDUSTRIES.map((industry) => (
            <Card key={industry.title} className='bg-white shadow-sm'>
              <CardHeader>
                <CardTitle>{industry.title}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant='ghost' className='px-0 text-primary'>
                  <Link href='/contact'>
                    Discuss a project
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-8 rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-semibold tracking-tight'>
              Services that flex across industries
            </h2>
            <p className='text-slate-300'>
              The same HEDO-BEC service lines are combined differently depending
              on project scope, location, and operational complexity.
            </p>
            <Button asChild variant='secondary' size='lg'>
              <Link href='/services'>See service capabilities</Link>
            </Button>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {HEDOBEC_SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.slug}
                className='rounded-2xl border border-white/10 bg-white/5 p-5'
              >
                <h3 className='font-semibold'>{service.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-300'>
                  {service.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
