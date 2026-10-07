import { Helmet } from 'react-helmet-async';
import { businessConfig } from '@/config/business';

export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessConfig.projectName,
    url: businessConfig.siteUrl,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer de Alfons Sala 57',
      postalCode: '08203',
      addressLocality: 'Sabadell',
      addressRegion: 'Barcelona',
      addressCountry: 'ES',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
