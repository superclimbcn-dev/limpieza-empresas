import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig } from '@/config/business';

export function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div>
          <Link to="/" className="text-3xl font-extrabold tracking-tight">
            Super<span className="text-brand-400">clim</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">Soluciones profesionales de limpieza para empresas en Sabadell, Barcelona y Vallès Occidental.</p>
        </div>
        <div>
          <h2 className="font-bold">Empresas</h2>
          <nav aria-label="Enlaces de empresa" className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/limpieza-de-oficinas/" className="transition hover:text-brand-400">Limpieza de oficinas</Link>
            <Link to="/limpieza-de-naves-industriales/" className="transition hover:text-brand-400">Naves industriales</Link>
            <Link to="/limpieza-de-locales-comerciales/" className="transition hover:text-brand-400">Locales comerciales</Link>
            <Link to="/limpieza-de-moquetas-empresas/" className="transition hover:text-brand-400">Moquetas para empresas</Link>
            <Link to="/mantenimiento-de-limpieza/" className="transition hover:text-brand-400">Mantenimiento</Link>
          </nav>
        </div>
        <div>
          <h2 className="font-bold">Particulares</h2>
          <nav aria-label="Servicios para particulares" className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <a href={businessConfig.urls.privateServices.sofas} className="transition hover:text-brand-400">Sofás y sillones</a>
            <a href={businessConfig.urls.privateServices.carpets} className="transition hover:text-brand-400">Alfombras particulares</a>
            <a href={businessConfig.urls.privateServices.mattresses} className="transition hover:text-brand-400">Colchones a domicilio</a>
          </nav>
        </div>
        <address className="space-y-3 not-italic text-sm text-slate-300">
          <h2 className="font-bold text-white">Contacto</h2>
          <a href={`tel:${businessConfig.phone}`} className="flex items-center gap-3 transition hover:text-brand-400">
            <Phone className="h-5 w-5 text-brand-400" aria-hidden="true" /> {businessConfig.phoneDisplay}
          </a>
          <a href={`mailto:${businessConfig.email}`} className="flex items-center gap-3 transition hover:text-brand-400">
            <Mail className="h-5 w-5 text-brand-400" aria-hidden="true" /> {businessConfig.email}
          </a>
          <span className="flex max-w-sm items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" /> {businessConfig.address}
          </span>
        </address>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Superclim Servicios. Todos los derechos reservados.
      </div>
    </footer>
  );
}
