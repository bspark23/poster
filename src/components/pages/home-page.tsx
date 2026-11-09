'use client';

import useSWR from 'swr';

import { PostPaginatedResult } from '@/models/post';
import { useAppSelector } from '@/store/hooks';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import {
  HEDOBEC_INDUSTRIES,
  HEDOBEC_SERVICES,
  HEDOBEC_STATS,
  HEDOBEC_VALUES,
  PLACEHOLDER_IMAGE,
} from '@/constants/hedobec';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PostCard } from '@/components/ui/post-card';

export default function HomePage() {
  const { siteContent } = useAppSelector((s) => s.content.content);
  const section1 = siteContent?.home?.section1 ?? {};
  const { data: latestPosts } = useSWR<PostPaginatedResult>([
    '/post',
    { page: 1, limit: 3 },
  ]);
  const posts = latestPosts?.posts ?? [];
  const projectSlides = [
    {
      eyebrow: 'Featured Project',
      title: 'Engineering design support for complex industrial delivery',
      body:
        'HEDO-BEC positions engineering design, detailing, and technical coordination as the foundation for dependable execution.',
      image: section1.image || PLACEHOLDER_IMAGE,
      href: '/services/engineering-design',
      cta: 'Explore Design Services',
    },
    {
      eyebrow: 'Project Showcase',
      title: 'Procurement and supply coordination for site-ready execution',
      body:
        'From sourcing alignment to delivery planning, HEDO-BEC supports projects that depend on timing, quality, and field coordination.',
      image: PLACEHOLDER_IMAGE,
      href: '/services/procurement',
      cta: 'See Procurement Capability',
    },
    {
      eyebrow: 'Project Showcase',
      title: 'Manpower and field support for demanding operations',
      body:
        'HEDO-BEC contributes workforce and technical support that helps projects stay mobilized, coordinated, and execution-ready.',
      image: PLACEHOLDER_IMAGE,
      href: '/services/manpower',
      cta: 'View Manpower Support',
    },
    {
      eyebrow: 'Project Showcase',
      title: 'Multi-sector support across oil and gas, maritime, energy, and construction',
      body:
        'The company serves critical sectors where instrumentation, piping, logistics, and disciplined project management are essential.',
      image: PLACEHOLDER_IMAGE,
      href: '/industries',
      cta: 'See Industries',
    },
  ];

  return (
    <main className='bg-slate-50 text-slate-950'>
      <section>
        <Carousel
          opts={{ loop: true }}
          className='w-full'
          aria-label='Project showcase'
        >
          <CarouselContent>
            {projectSlides.map((slide, index) => (
              <CarouselItem key={`${slide.title}-${index}`}>
                <div className='relative min-h-[72vh] overflow-hidden bg-slate-900'>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes='100vw'
                    className='object-cover'
                    priority={index === 0}
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-900/25' />
                  <div className='relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-14 pt-14 sm:px-6 lg:px-8'>
                    <div className='grid w-full gap-8 lg:grid-cols-[1fr_280px] lg:items-end'>
                      <div className='max-w-3xl space-y-5 text-white'>
                        <span className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/90'>
                          {slide.eyebrow}
                        </span>
                        <h1 className='text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>
                          {slide.title}
                        </h1>
                        <p className='max-w-2xl text-base leading-8 text-white/80 sm:text-lg'>
                          {slide.body}
                        </p>
                        <div className='flex flex-wrap gap-3'>
                          <Button asChild size='lg'>
                            <Link href={slide.href}>
                              {slide.cta}
                              <ArrowRight className='h-4 w-4' />
                            </Link>
                          </Button>
                          <Button asChild size='lg' variant='secondary'>
                            <Link href='/contact'>Start a Project Discussion</Link>
                          </Button>
                        </div>
                      </div>
                      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
                        {HEDOBEC_STATS.slice(0, 3).map((stat) => (
                          <div
                            key={`${slide.title}-${stat.label}`}
                            className='rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-sm'
                          >
                            <p className='text-2xl font-semibold'>{stat.value}</p>
                            <p className='mt-1 text-sm text-white/75'>
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-4 top-1/2 border-white/20 bg-white/10 text-white hover:bg-white/20 md:left-6' />
          <CarouselNext className='right-4 top-1/2 border-white/20 bg-white/10 text-white hover:bg-white/20 md:right-6' />
        </Carousel>
      </section>

      <section className='px-4 pb-18 pt-12 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <div className='space-y-7'>
            <span className='inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary'>
              Engineering & Construction
            </span>
            <div className='space-y-4'>
              <h2 className='text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl'>
                {section1.title ||
                  'Engineering design, project support, and execution capability for critical sectors'}
              </h2>
              <p className='max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg'>
                {section1.body ||
                  'HEDO-BEC supports oil and gas, maritime, energy, and construction projects with engineering design, procurement, manpower, instrumentation, piping, and logistics management services.'}
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <Button asChild size='lg'>
                <Link href='/contact'>Start a Project Discussion</Link>
              </Button>
              <Button asChild size='lg' variant='outline'>
                <Link href='/services'>Explore Our Services</Link>
              </Button>
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            {[PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE].map(
              (src, index) => (
                <div
                  key={`${src}-intro-${index}`}
                  className={
                    index === 0
                      ? 'overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm sm:col-span-2'
                      : 'overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm'
                  }
                >
                  <AspectRatio ratio={index === 0 ? 16 / 10 : 1}>
                    <Image
                      src={src}
                      alt='HEDO-BEC project visual'
                      fill
                      sizes='(min-width: 1024px) 40vw, 100vw'
                      className='object-cover'
                    />
                  </AspectRatio>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl space-y-3'>
              <h2 className='text-3xl font-semibold tracking-tight'>
                Service capabilities built for project delivery
              </h2>
              <p className='text-slate-600'>
                A structured overview of the capabilities represented in the new
                Hedobec service navigation.
              </p>
            </div>
            <Button asChild variant='ghost' className='w-fit px-0 text-primary'>
              <Link href='/services'>
                View all services
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {HEDOBEC_SERVICES.map((service) => (
              <Card key={service.slug} className='bg-white shadow-sm'>
                <div className='px-6 pt-6'>
                  <div className='overflow-hidden rounded-2xl'>
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className='object-cover'
                      />
                    </AspectRatio>
                  </div>
                </div>
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

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-10 rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE].map(
              (src, index) => (
                <div
                  key={`${src}-industry-${index}`}
                  className={
                    index === 0
                      ? 'overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 sm:row-span-2'
                      : 'overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5'
                  }
                >
                  <AspectRatio ratio={index === 0 ? 3 / 4 : 1}>
                    <Image
                      src={src}
                      alt='HEDO-BEC industry visual'
                      fill
                      className='object-cover'
                    />
                  </AspectRatio>
                </div>
              ),
            )}
          </div>
          <div className='space-y-6'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-semibold tracking-tight'>
                Built for demanding project environments
              </h2>
              <p className='text-slate-300'>
                HEDO-BEC positions its service delivery around sectors where
                planning discipline, execution reliability, and coordination are
                essential.
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
            <Button asChild variant='secondary' size='lg'>
              <Link href='/industries'>See industries</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid container gap-10 lg:grid-cols-[1fr_1fr] lg:items-center'>
          <div className='space-y-6'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-semibold tracking-tight'>
                How HEDO-BEC works
              </h2>
              <p className='text-slate-600'>
                The company profile emphasizes professionalism, quality,
                collaboration, and dependable execution support.
              </p>
            </div>
            <div className='grid gap-3 sm:grid-cols-2'>
              {HEDOBEC_VALUES.map((value) => (
                <div
                  key={value}
                  className='rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm'
                >
                  <p className='font-medium text-slate-900'>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            {[PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE].map(
              (src, index) => (
                <div
                  key={`${src}-values-${index}`}
                  className={
                    index === 2
                      ? 'overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm sm:col-span-2'
                      : 'overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm'
                  }
                >
                  <AspectRatio ratio={index === 2 ? 16 / 10 : 1}>
                    <Image
                      src={src}
                      alt='HEDO-BEC delivery values visual'
                      fill
                      className='object-cover'
                    />
                  </AspectRatio>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto container space-y-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-2xl space-y-3'>
              <h2 className='text-3xl font-semibold tracking-tight'>
                Latest insights
              </h2>
              <p className='text-slate-600'>
                Explore a few recent updates, perspectives, and public-facing
                stories from HEDO-BEC.
              </p>
            </div>
            <Button asChild variant='ghost' className='w-fit px-0 text-primary'>
              <Link href='/blog'>
                Visit the blog
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>

          {posts.length > 0 ? (
            <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={{
                    ...post,
                    featuredMedia: post.featuredMedia ?? {
                      url: PLACEHOLDER_IMAGE,
                      alt: post.title,
                      type: 'image',
                      width: 1600,
                      height: 900,
                    },
                  }}
                  className='overflow-hidden rounded-[2.25rem] bg-white shadow-sm hover:shadow-md'
                />
              ))}
            </div>
          ) : (
            <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {[1, 2, 3].map((item) => (
                <Card key={item} className='bg-white shadow-sm'>
                  <div className='px-6 pt-6'>
                    <div className='overflow-hidden rounded-2xl'>
                      <AspectRatio ratio={16 / 10}>
                        <Image
                          src={PLACEHOLDER_IMAGE}
                          alt='Blog placeholder'
                          fill
                          className='object-cover'
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Coming soon</CardTitle>
                    <CardDescription>
                      New Hedobec insights and project stories will appear here.
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
