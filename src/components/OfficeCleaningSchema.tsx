import { Helmet } from 'react-helmet-async';
import { businessConfig } from '@/config/business';
import { officeCleaningFaqs } from '@/content/officeCleaning';

export function OfficeCleaningSchema() {
  const canonical = `${businessConfig.siteUrl}/limpieza-de-oficinas/`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Limpieza profesional de oficinas',
      url: canonical,
      serviceType: 'Limpieza de oficinas',
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
        { '@type': 'ListItem', position: 2, name: 'Limpieza de oficinas', item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: officeCleaningFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  return <Helmet>{schemas.map((schema) => <script key={schema['@type']} type="application/ld+json">{JSON.stringify(schema)}</script>)}</Helmet>;
}
