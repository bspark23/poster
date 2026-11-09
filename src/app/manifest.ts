import type { MetadataRoute } from 'next';

import { ContentService } from '@/services/content.service';
import { SYSTEM_SETTINGS, THEME_COLOR } from '@/constants/content';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const content = await ContentService.getContent();
  const systemSettings = content?.systemSettings;

  const name = systemSettings?.siteName || SYSTEM_SETTINGS.siteName;
  const description =
    systemSettings?.siteDescription || SYSTEM_SETTINGS.siteDescription;

  return {
    name,
    short_name: name,
    description,
    start_url: '/admin',
    scope: '/admin/',
    display: 'standalone',
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/images/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
