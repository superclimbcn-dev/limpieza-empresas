import { Helmet } from 'react-helmet-async';
import { businessConfig } from '@/config/business';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageSchemaProps {
  name: string;
  serviceType: string;
  path: string;
  breadcrumbName: string;
  faqs: FAQItem[];
}

export function ServicePageSchema({ name, serviceType, path, breadcrumbName, faqs }: ServicePageSchemaProps) {
  const canonical = new URL(path, businessConfig.siteUrl).toString();
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      url: canonical,
      serviceType,
      areaServed: ['Sabadell', 'Barcelona', 'Vallès Occidental'],
      provider: {
        '@type': 'Organization',
        name: businessConfig.name,
        url: businessConfig.siteUrl,
        telephone: businessConfig.phone,
        email: businessConfig.email,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${businessConfig.siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: breadcrumbName, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  return <Helmet>{schemas.map((schema) => <script key={schema['@type']} type="application/ld+json">{JSON.stringify(schema)}</script>)}</Helmet>;
}
