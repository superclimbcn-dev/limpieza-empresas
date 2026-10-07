import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig, whatsappUrl } from '@/config/business';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-950/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Superclim Empresas — inicio" className="flex items-center gap-3">
          <img src="/images/logo-superclim.png" alt="Superclim" className="h-14 w-auto" />
          <span className="hidden text-sm font-semibold tracking-wide text-emerald-50 sm:block">Empresas</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-emerald-50/85 transition hover:text-brand-400">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${businessConfig.phone}`} className="hidden items-center gap-2 text-sm font-semibold md:flex">
            <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
            {businessConfig.phoneDisplay.replace('+34 ', '')}
          </a>
          <a
            href={whatsappUrl('Hola, me gustaría recibir información sobre Superclim Empresas.')}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-brand-600 to-teal-500 px-5 py-2.5 text-sm font-bold shadow-lg shadow-emerald-950/30 transition hover:brightness-110 sm:inline-flex"
          >
            Contactar
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" aria-label="Navegación móvil" className="border-t border-white/10 bg-brand-950 px-4 py-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-white/10">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
