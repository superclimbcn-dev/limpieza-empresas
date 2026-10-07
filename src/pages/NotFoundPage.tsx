import { Link } from 'react-router-dom';
import { SEOMeta } from '@/components/SEOMeta';
import { notFoundSEO } from '@/config/seo';

export function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 pb-20 pt-32 text-center">
      <SEOMeta config={notFoundSEO} />
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Error 404</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Página no encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">La dirección solicitada no existe o todavía no está disponible.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700">Volver al inicio</Link>
      </div>
    </section>
  );
}
