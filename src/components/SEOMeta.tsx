import { Helmet } from 'react-helmet-async';
import { canonicalUrl, type SEOConfig } from '@/config/seo';

interface SEOMetaProps {
  config: SEOConfig;
}

export function SEOMeta({ config }: SEOMetaProps) {
  const canonical = canonicalUrl(config.path);

  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta
        name="robots"
        content={config.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      {!config.noindex && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}
