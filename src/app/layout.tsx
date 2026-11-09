import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import Script from 'next/script';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ContentService } from '@/services/content.service';
import { SystemSettings } from '@/models/settings';
import { Providers } from '@/providers';
import { SYSTEM_SETTINGS, THEME_COLOR } from '@/constants/content';
import './globals.css';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter_24pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export async function generateMetadata() {
  try {
    const content = await ContentService.getContent();

    if (!content) {
      return {
        title: {
          template: `%s | ${SYSTEM_SETTINGS.siteName}`,
          default: SYSTEM_SETTINGS.siteName,
        },
        themeColor: THEME_COLOR,
        manifest: '/manifest.webmanifest',
      } as Metadata;
    }

    const systemSettings = content.systemSettings || ({} as SystemSettings);

    return {
      title: {
        template: `%s | ${systemSettings?.siteName}`,
        default: systemSettings?.siteSlogan,
      },
      description: systemSettings?.siteDescription,
      metadataBase: new URL(systemSettings?.siteUrl || 'http://localhost:3000'),
      keywords: systemSettings?.siteKeywords,
      authors: [{ name: systemSettings?.siteAuthor }],
      themeColor: THEME_COLOR,
      manifest: '/manifest.webmanifest',
      openGraph: {
        title: systemSettings?.ogTitle,
        description: systemSettings?.ogDescription,
        url: systemSettings?.siteUrl,
        siteName: systemSettings?.siteName,
        images: [
          {
            url: systemSettings?.ogImage,
            alt: systemSettings?.ogImageAlt,
          },
        ],
        locale: systemSettings?.siteLocale,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: systemSettings?.siteType as any,
      },
      twitter: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        card: systemSettings?.twitterCard as any,
        title: systemSettings?.twitterTitle,
        description: systemSettings?.twitterDescription,
        site: systemSettings?.twitterSite,
        creator: systemSettings?.twitterCreator,
        images: [systemSettings?.twitterImage || ''],
      },
    } as Metadata;
  } catch {
    return {
      title: {
        template: `%s | ${SYSTEM_SETTINGS.siteName}`,
        default: SYSTEM_SETTINGS.siteName,
      },
    } as Metadata;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const GA_ID = 'G-[CODE]';

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy='afterInteractive'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script> */}
        <TooltipProvider>
          <Providers>{children}</Providers>
        </TooltipProvider>
      </body>
    </html>
  );
}
