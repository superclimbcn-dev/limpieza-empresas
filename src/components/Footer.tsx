import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig } from '@/config/business';

export function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Link to="/" className="text-3xl font-extrabold tracking-tight">
            Super<span className="text-brand-400">clim</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">Soluciones profesionales de limpieza para empresas.</p>
        </div>
        <address className="space-y-3 not-italic text-sm text-slate-300 md:justify-self-end">
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
        © {new Date().getFullYear()} Superclim. Todos los derechos reservados.
      </div>
    </footer>
  );
}
