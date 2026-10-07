import { businessConfig } from '@/config/business';

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

export const homeSEO: SEOConfig = {
  title: 'Empresa de limpieza profesional | Superclim Empresas',
  description: 'Servicios de limpieza profesional para oficinas, naves, comercios y centros de trabajo en Sabadell, Barcelona y Vallès Occidental.',
  path: '/',
};

export const notFoundSEO: SEOConfig = {
  title: 'Página no encontrada | Superclim Empresas',
  description: 'La página solicitada no está disponible.',
  noindex: true,
};

export const canonicalUrl = (path = '/') => new URL(path, businessConfig.siteUrl).toString();
