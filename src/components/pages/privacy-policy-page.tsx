'use client';

import { useAppSelector } from '@/store/hooks';
import LegalPageTemplate from '@/components/pages/legal-page-template';

export default function PrivacyPolicyPage() {
  const { siteContent } = useAppSelector((s) => s.content.content);
  const section1 = siteContent?.privacyPolicy?.section1 ?? {};

  return (
    <LegalPageTemplate
      eyebrow='Privacy Policy'
      title={section1.title ?? 'Privacy Policy'}
      intro={
        section1.body ??
        'Understand how HEDO-BEC handles information shared through this website and related contact channels.'
      }
      summary={[
        'We only collect information relevant to communication and service inquiries.',
        'We do not position this website as a public data marketplace.',
        'We review and update practices as the website evolves.',
      ]}
      sections={[
        {
          title: 'Information we receive',
          body:
            'We may receive personal and business information you provide directly when contacting HEDO-BEC, requesting project discussions, or interacting with website forms and communication channels.',
        },
        {
          title: 'How information is used',
          body:
            'Information may be used to respond to inquiries, evaluate business opportunities, improve communication, and support the operation of the public website and related services.',
        },
        {
          title: 'Sharing and disclosure',
          body:
            'HEDO-BEC does not present the public website as a platform for selling visitor data. Information may only be shared where reasonably necessary for service delivery, operational support, legal compliance, or protection of legitimate business interests.',
        },
        {
          title: 'Retention and protection',
          body:
            'Reasonable steps are taken to limit access to information and retain it only as long as necessary for communication, compliance, operational continuity, or project-related follow-up.',
        },
        {
          title: 'Updates to this policy',
          body:
            'This privacy policy may be updated from time to time as the website, communication workflows, or legal obligations change. Continued use of the website indicates acceptance of the most recent version.',
        },
      ]}
    />
  );
}
