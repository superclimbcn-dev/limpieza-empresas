export const businessSectors = [
  { key: 'offices', label: 'Oficinas', path: '/limpieza-de-oficinas/', published: true },
  { key: 'industrial', label: 'Naves industriales', path: '/limpieza-de-naves-industriales/', published: true },
  { key: 'retail', label: 'Locales comerciales', path: '/limpieza-de-locales-comerciales/', published: true },
  { key: 'logistics', label: 'Centros logísticos', published: false },
  { key: 'clinics', label: 'Clínicas', published: false },
  { key: 'education', label: 'Centros educativos', published: false },
  { key: 'professional', label: 'Despachos', published: false },
  { key: 'workplaces', label: 'Centros de trabajo', published: false },
] as const;
