export const businessConfig = {
  name: 'Superclim',
  projectName: 'Superclim Empresas',
  phone: '+34624529442',
  phoneDisplay: '+34 624 529 442',
  whatsappNumber: '34624529442',
  email: 'superclimbcn@gmail.com',
  address: 'Carrer de Alfons Sala 57, 08203 Sabadell, Barcelona',
  siteUrl: 'https://empresas.superclim.es',
  urls: {
    mainSite: 'https://superclim.es',
    businessServices: {
      offices: '/limpieza-de-oficinas/',
      industrial: '/limpieza-de-naves-industriales/',
      carpets: '/limpieza-de-moquetas-empresas/',
    },
    privateServices: {
      sofas: 'https://superclim.es/limpieza-de-sofas/',
      carpets: 'https://superclim.es/limpieza-de-alfombras/',
      mattresses: 'https://superclim.es/mas-servicios/',
      waterproofing: 'https://superclim.es/impermeabilizacion-de-sofas',
    },
  },
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
