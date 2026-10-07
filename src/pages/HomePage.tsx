import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { SEOMeta } from '@/components/SEOMeta';
import { SchemaOrg } from '@/components/SchemaOrg';
import { whatsappUrl } from '@/config/business';
import { homeSEO } from '@/config/seo';

export function HomePage() {
  return (
    <>
      <SEOMeta config={homeSEO} />
      <SchemaOrg />
      <section id="inicio" className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-brand-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(16,185,129,0.25),transparent_38%)]" />
        <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full border border-brand-400/20" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-sm font-semibold text-brand-400">
              <Building2 className="h-4 w-4" aria-hidden="true" /> Superclim Empresas
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Limpieza profesional <span className="text-brand-400">para empresas</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Una nueva área de Superclim, preparada sobre una base técnica rápida, accesible y escalable.</p>
            <a
              href={whatsappUrl('Hola, me gustaría recibir información sobre Superclim Empresas.')}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-teal-500 px-6 py-3.5 font-bold shadow-soft transition hover:brightness-110"
            >
              Hablar con Superclim <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div id="empresas" className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400">Fundación preparada</p>
            <ul className="mt-6 space-y-4 text-slate-200">
              {['Experiencia responsive', 'Identidad visual Superclim', 'Base de SEO y datos estructurados'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
