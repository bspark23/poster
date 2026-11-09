import Image from 'next/image';
import type { ReactNode } from 'react';

import { PLACEHOLDER_IMAGE } from '@/constants/hedobec';

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
  imageSrc = PLACEHOLDER_IMAGE,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className='relative overflow-hidden bg-primary px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8'>
      <div className='absolute inset-0'>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          sizes='100vw'
          className='object-cover opacity-25'
        />
        <div className='absolute inset-0 bg-primary/85' />
      </div>

      <div className='relative mx-auto grid container gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
        <div className='space-y-6'>
          <span className='inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white'>
            {eyebrow}
          </span>
          <div className='space-y-4'>
            <h1 className='text-balance text-4xl font-semibold tracking-tight sm:text-5xl'>
              {title}
            </h1>
            <p className='max-w-2xl text-lg leading-8 text-white/80'>
              {description}
            </p>
          </div>
          {actions ? <div className='flex flex-wrap gap-3'>{actions}</div> : null}
        </div>

        {children ? <div>{children}</div> : null}
      </div>
    </section>
  );
}
