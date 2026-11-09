'use client';

import { useAppSelector } from '@/store/hooks';
import LegalPageTemplate from '@/components/pages/legal-page-template';

export default function TermsOfServicePage() {
  const { siteContent } = useAppSelector((s) => s.content.content);
  const section1 = siteContent?.termsOfService?.section1 ?? {};

  return (
    <LegalPageTemplate
      eyebrow='Terms of Service'
      title={section1.title ?? 'Terms of Service'}
      intro={
        section1.body ??
        'These terms outline the general conditions for using the HEDO-BEC public website and engaging with its public-facing content.'
      }
      summary={[
        'Website content is provided for general information and business communication.',
        'Project discussions do not automatically create a formal contract.',
        'Use of the website should remain lawful, accurate, and respectful.',
      ]}
      sections={[
        {
          title: 'Use of the website',
          body:
            'The website is provided to share company information, public updates, and contact pathways. Visitors should use it only for lawful purposes and in ways that do not interfere with site availability, security, or integrity.',
        },
        {
          title: 'Content and accuracy',
          body:
            'HEDO-BEC aims to keep website information helpful and up to date, but public-facing content may change over time. Nothing on the website should be interpreted as a final technical, commercial, or contractual commitment unless confirmed separately in writing.',
        },
        {
          title: 'No automatic engagement',
          body:
            'Submitting a contact request, browsing service information, or reading public content does not by itself create a client relationship, employment relationship, or binding service agreement.',
        },
        {
          title: 'Intellectual property',
          body:
            'Unless stated otherwise, branding, written copy, website layouts, and other original materials on the site remain the property of HEDO-BEC or their respective owners and should not be reused in misleading or unauthorized ways.',
        },
        {
          title: 'Changes to these terms',
          body:
            'HEDO-BEC may revise these terms as the site evolves. Continued use of the website after updates means the current version will apply to ongoing use of the public site.',
        },
      ]}
    />
  );
}
