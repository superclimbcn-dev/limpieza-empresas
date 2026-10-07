import {
  ArrowRight,
  Armchair,
  Building2,
  CalendarClock,
  CheckCircle2,
  Factory,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SEOMeta } from '@/components/SEOMeta';
import { SchemaOrg } from '@/components/SchemaOrg';
import { businessConfig, whatsappUrl } from '@/config/business';
import { homeSEO } from '@/config/seo';

interface CardItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: CardItem[] = [
  { title: 'Oficinas', description: 'Espacios de trabajo limpios, cuidados y preparados para cada jornada.', icon: Building2 },
  { title: 'Naves industriales', description: 'Limpieza adaptada a superficies amplias y entornos de actividad industrial.', icon: Factory },
  { title: 'Locales comerciales', description: 'Una imagen impecable para recibir a clientes y equipos.', icon: ShoppingBag },
  { title: 'Centros logísticos', description: 'Soluciones organizadas para instalaciones con movimiento constante.', icon: Truck },
  { title: 'Moquetas y tapicerías', description: 'Limpieza especializada de textiles de uso profesional.', icon: Armchair },
  { title: 'Mantenimiento periódico', description: 'Planes recurrentes ajustados al ritmo de cada empresa.', icon: CalendarClock },
];

const benefits: CardItem[] = [
  { title: 'Servicio personalizado', description: 'Estudiamos las necesidades reales de cada espacio antes de proponer el servicio.', icon: Sparkles },
  { title: 'Planes de mantenimiento', description: 'Frecuencias y tareas definidas para conservar las instalaciones cada día.', icon: PanelsTopLeft },
  { title: 'Horarios adaptados', description: 'Organizamos el trabajo para reducir el impacto en tu actividad.', icon: CalendarClock },
  { title: 'Limpieza profesional', description: 'Experiencia, atención al detalle y un equipo orientado a resultados.', icon: ShieldCheck },
];

const sectors = ['Oficinas', 'Naves', 'Comercios', 'Centros de trabajo', 'Comunidades', 'Clínicas y despachos'];
const textileServices = ['Moquetas', 'Sillas', 'Tapicerías', 'Textiles corporativos'];
const locations = ['Sabadell', 'Terrassa', 'Sant Cugat', 'Rubí', 'Cerdanyola', 'Barberà', 'Barcelona'];
const privateServices = [
  { label: 'Limpieza profesional de sofás', href: businessConfig.urls.privateServices.sofas },
  { label: 'Cuidado y limpieza de alfombras', href: businessConfig.urls.privateServices.carpets },
  { label: 'Limpieza de colchones a domicilio', href: businessConfig.urls.privateServices.mattresses },
  { label: 'Protección e impermeabilización de sofás', href: businessConfig.urls.privateServices.waterproofing },
];

const budgetUrl = whatsappUrl('Hola, quiero solicitar un presupuesto de limpieza para mi empresa.');

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <SEOMeta config={homeSEO} />
      <SchemaOrg />

      <section id="inicio" className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-brand-950 px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(16,185,129,0.28),transparent_36%)]" />
        <div className="absolute -right-40 top-28 -z-10 h-96 w-96 rounded-full border border-brand-400/20" />
        <div className="absolute -bottom-48 left-1/3 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-sm font-semibold text-brand-400"><Building2 className="h-4 w-4" aria-hidden="true" /> Superclim Empresas</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Empresa de limpieza profesional en <span className="text-brand-400">Sabadell, Barcelona y Vallès</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Soluciones de limpieza y mantenimiento adaptadas a oficinas, naves, comercios y centros de trabajo.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={budgetUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-teal-500 px-6 py-3.5 font-bold shadow-soft transition hover:brightness-110">Solicitar presupuesto <ArrowRight className="h-5 w-5" aria-hidden="true" /></a>
              <a href={budgetUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold transition hover:bg-white/10"><MessageCircle className="h-5 w-5 text-brand-400" aria-hidden="true" /> WhatsApp</a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ['+16 años', 'de experiencia'],
              ['Servicios', 'para empresas'],
              ['Cobertura', 'Sabadell · Barcelona · Vallès Occidental'],
            ].map(([value, label]) => <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur"><p className="text-2xl font-black text-brand-400">{value}</p><p className="mt-1 text-sm leading-6 text-slate-300">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Servicios principales" title="Limpieza profesional para cada espacio" description="Un servicio claro, flexible y dimensionado según las necesidades de tu empresa." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <article key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-soft"><div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><service.icon className="h-6 w-6" aria-hidden="true" /></div><h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="ventajas" className="scroll-mt-20 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Por qué Superclim" title="Un servicio pensado alrededor de tu actividad" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => <article key={benefit.title} className="rounded-2xl bg-white p-7 shadow-sm"><benefit.icon className="h-7 w-7 text-brand-600" aria-hidden="true" /><h3 className="mt-5 text-lg font-bold">{benefit.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="sectores" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Limpieza según tu actividad</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Cada empresa funciona de forma diferente</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Adaptamos tareas, frecuencia y horario al uso real de tus instalaciones para ofrecer una solución proporcionada y práctica.</p></div>
          <div className="grid grid-cols-2 gap-3">{sectors.map((sector) => <div key={sector} className="flex min-h-24 items-center gap-3 rounded-2xl border border-slate-200 p-5 font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />{sector}</div>)}</div>
        </div>
      </section>

      <section id="textil" className="scroll-mt-20 overflow-hidden bg-brand-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8"><Armchair className="h-12 w-12 text-brand-400" aria-hidden="true" /><div className="mt-8 grid grid-cols-2 gap-3">{textileServices.map((service) => <div key={service} className="rounded-xl bg-white/[0.07] px-4 py-4 text-sm font-semibold text-slate-200">{service}</div>)}</div></div>
          <div><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-400">Especialistas en textil B2B</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Cuidamos los textiles que forman parte de tu espacio profesional</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">La experiencia de Superclim en limpieza textil se traslada al entorno empresarial para conservar moquetas, sillas, tapicerías y otros elementos de uso intensivo.</p></div>
        </div>
      </section>

      <section id="cobertura" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Cobertura" title="Cerca de tu empresa" description="Prestamos servicio en Sabadell, Barcelona y las principales poblaciones del Vallès Occidental." />
          <div className="flex flex-wrap justify-center gap-3">{locations.map((location) => <div key={location} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm"><MapPin className="h-4 w-4 text-brand-600" aria-hidden="true" />{location}</div>)}</div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-3xl bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[1fr_.9fr]">
          <div><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">La misma Superclim</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">¿Buscas un servicio para tu hogar?</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Superclim también sigue cuidando los textiles de hogares particulares. En nuestra web principal encontrarás los servicios especializados de siempre.</p></div>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 px-6">{privateServices.map((service) => <a key={service.label} href={service.href} className="flex items-center justify-between py-4 font-bold text-slate-800 transition hover:text-brand-600">{service.label}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>)}</div>
        </div>
      </section>

      <section id="presupuesto" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-teal-600 px-7 py-14 text-center text-white shadow-soft sm:px-12"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-100">Presupuesto personalizado</p><h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Cuéntanos qué necesita tu empresa</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-emerald-50">Estudiaremos tu espacio, actividad y frecuencia para preparar una propuesta adaptada.</p><a href={budgetUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-brand-700 transition hover:bg-emerald-50">Solicitar presupuesto <ArrowRight className="h-5 w-5" aria-hidden="true" /></a></div>
      </section>
    </>
  );
}
