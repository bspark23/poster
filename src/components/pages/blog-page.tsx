'use client';

import { asNumber, cn } from '@/lib/utils';
import { PostPaginatedResult } from '@/models/post';
import { useAppSelector } from '@/store/hooks';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import useSWR from 'swr';
import { Loading } from '../ui/loading';
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '../ui/empty';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { PLACEHOLDER_IMAGE } from '@/constants/hedobec';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHero from '@/components/shared/page-hero';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const page = asNumber(searchParams.get('page'), 1);
  const limit = asNumber(searchParams.get('limit'), 9);

  const key = useMemo(() => ['/post', { page, limit }] as const, [page, limit]);
  const { data, isLoading } = useSWR<PostPaginatedResult>(key);
  const { siteContent } = useAppSelector((s) => s.content.content);

  const section1 = siteContent?.blog?.section1 ?? {};

  const posts = data?.posts ?? [];
  const pagination = data?.pagination;
  const featuredPost = posts[0];
  const remainingPosts = featuredPost ? posts.slice(1) : posts;

  return (
    <main className='bg-slate-50 text-slate-950'>
      <PageHero
        eyebrow='Blog & Insights'
        title={section1.title ?? 'Insights & Updates'}
        description={
          section1.body ??
          'Follow public updates, project perspectives, and company insights from HEDO-BEC.'
        }
        imageSrc={featuredPost?.featuredMedia?.url || PLACEHOLDER_IMAGE}
      >
      </PageHero>

      <section className='px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='mx-auto container'>
          {featuredPost ? (
            <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm'>
              <div className='grid gap-0 lg:grid-cols-[1.1fr_0.9fr]'>
                <div className='p-6 sm:p-8'>
                  <div className='space-y-4'>
                    <span className='inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary'>
                      Featured Article
                    </span>
                    <h2 className='text-3xl font-semibold tracking-tight'>
                      {featuredPost.title}
                    </h2>
                    <p className='text-slate-600'>
                      {featuredPost.excerpt || 'Read the latest featured story from HEDO-BEC.'}
                    </p>
                    <Button asChild className='w-fit'>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read article
                        <ArrowRight className='h-4 w-4' />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className='border-t border-slate-200 lg:border-l lg:border-t-0'>
                  <AspectRatio ratio={16 / 10}>
                    <Image
                      src={featuredPost.featuredMedia?.url || PLACEHOLDER_IMAGE}
                      alt={featuredPost.featuredMedia?.alt || featuredPost.title}
                      fill
                      className='object-cover'
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto container'>
          <div className='mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
            <div>
              <h2 className='text-3xl font-semibold tracking-tight'>
                Latest articles
              </h2>
              <p className='mt-2 text-slate-600'>
                Browse the latest public stories and updates.
              </p>
            </div>
          </div>

        {isLoading ? (
          <Loading
            className='py-14 text-muted-foreground'
            label='Loading posts…'
          />
        ) : null}

        {!isLoading && posts.length === 0 ? (
          <Empty className='mt-10 rounded-2xl border bg-muted/20'>
            <EmptyHeader>
              <EmptyTitle>No posts yet</EmptyTitle>
              <EmptyDescription>
                Check back soon for new articles.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : null}

        {remainingPosts.length > 0 ? (
          <div className='mt-10 grid gap-5 lg:grid-cols-3'>
            {remainingPosts.map((post) => (
              <Card key={post.id} className='bg-white shadow-sm'>
                <CardHeader className='space-y-3'>
                  <div className='text-sm text-slate-500'>
                    {post.category.name} · {post.stats.readingTime} min read
                  </div>
                  <CardTitle className='text-xl'>{post.title}</CardTitle>
                  <CardDescription>
                    {post.excerpt || 'Read the latest public update from HEDO-BEC.'}
                  </CardDescription>
                </CardHeader>
                <div className='px-6 pb-6'>
                  <Button asChild variant='outline' className='rounded-full'>
                    <Link href={`/blog/${post.slug}`}>Read article</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : null}

        {pagination && pagination.totalPages > 1 ? (
          <div className='mt-12 flex items-center justify-between gap-4'>
            <div className='text-sm text-muted-foreground'>
              Page {pagination.page} of {pagination.totalPages}
            </div>
            <div className='flex items-center gap-2'>
              <Link
                className={cn(
                  'rounded-xl border px-4 py-2 text-sm font-semibold',
                  pagination.page <= 1
                    ? 'pointer-events-none opacity-50'
                    : 'hover:bg-muted/40',
                )}
                href={{
                  pathname: '/blog',
                  query: { page: pagination.page - 1, limit },
                }}
              >
                Previous
              </Link>
              <Link
                className={cn(
                  'rounded-xl border px-4 py-2 text-sm font-semibold',
                  pagination.page >= pagination.totalPages
                    ? 'pointer-events-none opacity-50'
                    : 'hover:bg-muted/40',
                )}
                href={{
                  pathname: '/blog',
                  query: { page: pagination.page + 1, limit },
                }}
              >
                Next
              </Link>
            </div>
          </div>
        ) : null}
        </div>
      </section>
    </main>
  );
}
