'use client';

import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { ArrowLeft, MessageSquare } from 'lucide-react';

import { Post, PostComment } from '@/models/post';
import { PostService } from '@/services/post.service';
import { useAppSelector } from '@/store/hooks';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import { Loading } from '@/components/ui/loading';
import { PostCard } from '@/components/ui/post-card';
import { Textarea } from '@/components/ui/textarea';

export default function BlogDetailsPage({ post }: { post: Post }) {
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const [commentText, setCommentText] = useState('');
  const [posting, setPosting] = useState(false);

  const { data: relatedPosts } = useSWR<Post[]>(
    post.slug ? `/post/slug/${post.slug}/related` : null,
  );

  const {
    data: comments,
    isLoading: commentsLoading,
    mutate: mutateComments,
  } = useSWR<PostComment[]>(
    post.allowComments ? `/post/${post.id}/comments` : null,
  );

  const publishedAt = useMemo(() => {
    const date = post.publishedAt || post.createdAt;
    return date ? format(new Date(date), 'MMM d, yyyy') : '';
  }, [post.createdAt, post.publishedAt]);

  const readingTime = post.stats?.readingTime ?? 0;

  const canComment = post.allowComments && isAuthenticated && !!user;

  const initials = useMemo(() => {
    return (name?: string) => {
      const v = (name ?? '').trim();
      if (!v) return '?';
      const parts = v.split(/\s+/).slice(0, 2);
      return parts.map((p) => p.slice(0, 1).toUpperCase()).join('');
    };
  }, []);

  async function submitComment() {
    const content = commentText.trim();
    if (!content) return;
    if (!post.allowComments) return;
    if (!canComment) return;

    try {
      setPosting(true);
      await PostService.addComment(post.id, { content });
      setCommentText('');
      await mutateComments();
    } finally {
      setPosting(false);
    }
  }

  return (
    <div className='bg-background text-foreground'>
      <section className='relative overflow-hidden border-b border-white/10 bg-primary py-24 text-white'>
        <div className='absolute inset-0'>
          <Image
            src={
              post.featuredMedia?.url ??
              '/images/placeholder.jpg'
            }
            alt={post.featuredMedia?.alt || post.title}
            fill
            priority
            sizes='100vw'
            className='object-cover opacity-25'
          />
          <div className='absolute inset-0 bg-primary/85' />
        </div>

        <div className='relative mx-auto max-w-4xl px-6 py-14'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between gap-3'>
              <Button
                asChild
                variant='secondary'
                className='rounded-full bg-white/10 text-white hover:bg-white/15'
              >
                <Link href='/blog'>
                  <ArrowLeft className='mr-2 h-4 w-4' />
                  Back to blog
                </Link>
              </Button>

              {post.category?.name ? (
                <Badge className='border-white/10 bg-white/10 text-white hover:bg-white/10'>
                  {post.category.name}
                </Badge>
              ) : null}
            </div>

            <h1 className='text-balance text-4xl font-semibold tracking-tight md:text-5xl'>
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className='text-pretty text-white/70 md:text-lg'>
                {post.excerpt}
              </p>
            ) : null}

            <div className='flex flex-wrap items-center gap-2 text-sm text-white/70'>
              {publishedAt ? <span>{publishedAt}</span> : null}
              {publishedAt && readingTime ? <span>•</span> : null}
              {readingTime ? <span>{readingTime} min read</span> : null}
              {post.stats?.commentCount ? (
                <>
                  <span>•</span>
                  <span className='inline-flex items-center gap-2'>
                    <MessageSquare className='h-4 w-4' />
                    {post.stats.commentCount}
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mx-auto max-w-4xl px-6 py-14'>
          <div className='prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline'>
            <div
              className='prose prose-slate max-w-none dark:prose-invert'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {post.allowComments ? (
        <section className='border-t bg-muted/20'>
          <div className='mx-auto max-w-4xl px-6 py-14'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl font-semibold tracking-tight'>
                Comments
              </h2>
              <p className='text-sm text-muted-foreground'>
                Sign in to join the conversation.
              </p>
            </div>

            {!isAuthenticated ? (
              <div className='mt-6 rounded-[2.25rem] border bg-background/70 p-6'>
                <div className='text-sm text-muted-foreground'>
                  You must be signed in to comment.
                </div>
                <div className='mt-4'>
                  <Button asChild className='rounded-full'>
                    <Link href='/admin'>Sign in</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className='mt-6 rounded-[2.25rem] border bg-background/70 p-6'>
                <div className='text-sm font-semibold'>Add a comment</div>
                <div className='mt-3'>
                  <Textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder='Write your comment…'
                    className='min-h-28'
                  />
                </div>
                <div className='mt-4 flex items-center justify-end'>
                  <Button
                    type='button'
                    className='rounded-full'
                    disabled={!commentText.trim() || posting || !canComment}
                    onClick={submitComment}
                  >
                    {posting ? 'Posting…' : 'Post comment'}
                  </Button>
                </div>
              </div>
            )}

            {commentsLoading ? (
              <Loading
                className='py-10 text-muted-foreground'
                label='Loading comments…'
              />
            ) : null}

            {!commentsLoading && (comments ?? []).length === 0 ? (
              <Empty className='mt-6 rounded-2xl border bg-background/70'>
                <EmptyHeader>
                  <EmptyTitle>No comments yet</EmptyTitle>
                  <EmptyDescription>
                    Be the first to leave a comment.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            ) : null}

            {(comments ?? []).length > 0 ? (
              <div className='mt-6 space-y-4'>
                {(comments ?? []).map((c) => (
                  <div
                    key={c.id}
                    className='rounded-[2.25rem] border bg-background/70 p-6'
                  >
                    <div className='flex items-start gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-semibold'>
                        {initials(c.author?.name)}
                      </div>
                      <div className='min-w-0 flex-1'>
                        <div className='flex flex-wrap items-center gap-2'>
                          <div className='font-semibold'>
                            {c.author?.name ?? 'Guest'}
                          </div>
                          <div className='text-xs text-muted-foreground'>
                            {c.createdAt
                              ? format(new Date(c.createdAt), 'MMM d, yyyy')
                              : ''}
                          </div>
                        </div>
                        <div className='mt-2 whitespace-pre-wrap text-sm text-muted-foreground'>
                          {c.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {(relatedPosts ?? []).length > 0 ? (
        <section className='border-t'>
          <div className='mx-auto container px-6 py-14'>
            <div className='flex items-center justify-between gap-4'>
              <h2 className='text-2xl font-semibold tracking-tight'>
                Related posts
              </h2>
              <Button asChild variant='secondary' className='rounded-full'>
                <Link href='/blog'>See all</Link>
              </Button>
            </div>

            <div className='mt-8 grid gap-5 lg:grid-cols-3'>
              {(relatedPosts ?? []).slice(0, 3).map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                  className='overflow-hidden rounded-[2.25rem] bg-background/70 shadow-none hover:shadow-none'
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
