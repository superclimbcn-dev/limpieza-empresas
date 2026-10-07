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

export const officeCleaningSEO: SEOConfig = {
  title: 'Limpieza de Oficinas en Barcelona y Sabadell | Superclim Empresas',
  description: 'Limpieza profesional de oficinas en Sabadell, Barcelona y Vallès. Servicio puntual o mantenimiento periódico adaptado a tu empresa. Solicita presupuesto.',
  path: '/limpieza-de-oficinas/',
};

export const industrialCleaningSEO: SEOConfig = {
  title: 'Limpieza de Naves Industriales en Barcelona | Superclim Empresas',
  description: 'Limpieza profesional de naves, almacenes y centros logísticos en Sabadell, Barcelona y Vallès. Servicio puntual o periódico adaptado a tu instalación.',
  path: '/limpieza-de-naves-industriales/',
};

export const businessCarpetCleaningSEO: SEOConfig = {
  title: 'Limpieza de Moquetas para Empresas en Barcelona | Superclim',
  description: 'Limpieza profesional de moquetas, sillas y tapicerías para oficinas y empresas en Sabadell, Barcelona y Vallès. Solicita un presupuesto personalizado.',
  path: '/limpieza-de-moquetas-empresas/',
};

export const cleaningMaintenanceSEO: SEOConfig = {
  title: 'Mantenimiento de Limpieza para Empresas | Superclim Empresas',
  description: 'Mantenimiento de limpieza para oficinas, naves y locales en Sabadell, Barcelona y Vallès. Servicio periódico con frecuencias y horarios adaptados.',
  path: '/mantenimiento-de-limpieza/',
};

export const retailCleaningSEO: SEOConfig = {
  title: 'Limpieza de Locales Comerciales en Barcelona | Superclim Empresas',
  description: 'Limpieza profesional de tiendas y locales comerciales en Sabadell, Barcelona y Vallès. Servicio puntual o mantenimiento adaptado a cada negocio.',
  path: '/limpieza-de-locales-comerciales/',
};

export const notFoundSEO: SEOConfig = {
  title: 'Página no encontrada | Superclim Empresas',
  description: 'La página solicitada no está disponible.',
  noindex: true,
};

export const canonicalUrl = (path = '/') => new URL(path, businessConfig.siteUrl).toString();
