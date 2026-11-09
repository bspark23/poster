'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHero from '@/components/shared/page-hero';

interface LegalSection {
  title: string;
  body: string;
}

export default function LegalPageTemplate({
  eyebrow,
  title,
  intro,
  summary,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  summary: string[];
  sections: LegalSection[];
}) {
  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        actions={
          <>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/contact'>Contact Us</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white'
            >
              <Link href='/'>Back to Home</Link>
            </Button>
          </>
        }
      >
      </PageHero>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='max-w-2xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight'>
              Quick summary
            </h2>
            <p className='text-slate-600'>
              This page gives a plain-language overview before the full legal
              sections below.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-3'>
            {summary.map((item) => (
              <Card key={item} className='bg-white shadow-sm'>
                <CardHeader>
                  <CardTitle>{item}</CardTitle>
                  <CardDescription>
                    Applies to visitors, prospective clients, and users of the
                    public website.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto container'>
          <div className='grid gap-6'>
            {sections.map((section, index) => (
              <Card key={section.title} className='bg-white shadow-sm'>
                <CardHeader>
                  <CardTitle>
                    {index + 1}. {section.title}
                  </CardTitle>
                  <CardDescription>{section.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
