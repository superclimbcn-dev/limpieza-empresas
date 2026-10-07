import { businessConfig } from '@/config/business';

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

export const homeSEO: SEOConfig = {
  title: 'Superclim Empresas | Limpieza profesional',
  description: 'Limpieza profesional para empresas.',
  path: '/',
};

export const notFoundSEO: SEOConfig = {
  title: 'Página no encontrada | Superclim Empresas',
  description: 'La página solicitada no está disponible.',
  noindex: true,
};

export const canonicalUrl = (path = '/') => new URL(path, businessConfig.siteUrl).toString();
