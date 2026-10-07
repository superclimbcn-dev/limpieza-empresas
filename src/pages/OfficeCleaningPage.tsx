import {
  ArrowRight,
  Armchair,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { OfficeCleaningSchema } from '@/components/OfficeCleaningSchema';
import { SEOMeta } from '@/components/SEOMeta';
import { officeCleaningFaqs } from '@/content/officeCleaning';
import { businessConfig, whatsappUrl } from '@/config/business';
import { officeCleaningSEO } from '@/config/seo';

const budgetUrl = whatsappUrl('Hola, quiero solicitar un presupuesto de limpieza para una oficina.');
const audiences = ['Oficinas', 'Despachos profesionales', 'Centros administrativos', 'Espacios de coworking', 'Pequeñas y medianas empresas', 'Zonas de trabajo'];
const tasks = ['Suelos', 'Mesas y superficies', 'Zonas comunes', 'Aseos', 'Office o cocina', 'Cristales interiores', 'Sillas y tapicerías', 'Papeleras', 'Puntos de contacto', 'Zonas de recepción'];
const frequencies = [
  { title: 'Puntual', text: 'Para una necesidad concreta, una puesta a punto o un momento específico.' },
  { title: 'Periódica', text: 'Una planificación recurrente que ayuda a conservar el espacio de forma continuada.' },
  { title: 'Diaria o semanal', text: 'Frecuencias ajustadas al uso, tamaño y ritmo habitual de la oficina.' },
];

export function OfficeCleaningPage() {
  return (
    <>
      <SEOMeta config={officeCleaningSEO} />
      <OfficeCleaningSchema />

      <section className="relative isolate overflow-hidden bg-brand-950 px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_25%,rgba(16,185,129,0.27),transparent_35%)]" />
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Migas de pan" className="mb-10 flex items-center gap-2 text-sm text-slate-400"><Link to="/" className="transition hover:text-brand-400">Inicio</Link><span aria-hidden="true">/</span><span className="text-slate-200">Limpieza de oficinas</span></nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-sm font-semibold text-brand-400"><Building2 className="h-4 w-4" aria-hidden="true" /> Servicio para empresas</p>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Limpieza profesional de oficinas en Sabadell y Barcelona</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Un servicio de limpieza de oficinas adaptado al tamaño, la actividad y los horarios de cada empresa, tanto para actuaciones puntuales como para mantenimiento periódico.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={budgetUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-teal-500 px-6 py-3.5 font-bold shadow-soft transition hover:brightness-110">Solicitar presupuesto <ArrowRight className="h-5 w-5" aria-hidden="true" /></a><a href={budgetUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold transition hover:bg-white/10"><MessageCircle className="h-5 w-5 text-brand-400" aria-hidden="true" /> WhatsApp</a></div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-400">Una oficina cuidada cada jornada</p><ul className="mt-6 space-y-4 text-slate-200">{['Servicio ajustado a cada centro', 'Horarios acordados con la empresa', 'Atención puntual o recurrente', 'Experiencia en limpieza textil'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <nav aria-label="Contenido de la página" className="border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-4"><a href="#servicio" className="shrink-0 rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-100">Qué incluye</a><a href="#mantenimiento" className="shrink-0 rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-100">Mantenimiento</a><Link to="/#servicios" className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200">Otros servicios</Link></div></nav>

      <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Para quién es el servicio</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Limpieza adaptada a distintos espacios de trabajo</h2><p className="mt-5 text-lg leading-8 text-slate-600">Organizamos el servicio según la distribución, el uso y las necesidades de cada centro, sin aplicar una solución idéntica a todas las empresas.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{audiences.map((item) => <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 font-bold shadow-sm"><BriefcaseBusiness className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />{item}</div>)}</div></div></section>

      <section id="servicio" className="scroll-mt-24 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Qué puede incluir</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Las zonas que forman parte del día a día</h2><p className="mt-5 text-lg leading-8 text-slate-600">La propuesta se define después de conocer el espacio. Según las necesidades del centro, puede contemplar distintas superficies y áreas de uso común.</p></div><div className="grid grid-cols-2 gap-3">{tasks.map((task) => <div key={task} className="flex min-h-20 items-center gap-3 rounded-xl bg-white p-4 text-sm font-semibold shadow-sm sm:text-base"><Check className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />{task}</div>)}</div></div></section>

      <section id="mantenimiento" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Frecuencia</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Limpieza puntual o mantenimiento de oficinas</h2><p className="mt-5 text-lg leading-8 text-slate-600">La frecuencia se acuerda en función de la ocupación, el tipo de actividad y el nivel de atención que necesita cada zona.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{frequencies.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 p-7"><CalendarCheck className="h-7 w-7 text-brand-600" aria-hidden="true" /><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>)}</div></div></section>

      <section className="bg-brand-950 px-4 py-24 text-white sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><Clock3 className="h-10 w-10 text-brand-400" aria-hidden="true" /><p className="mt-7 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-400">Horarios adaptados</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">El servicio se integra en la actividad de la oficina</h2><p className="mt-5 text-lg leading-8 text-slate-300">Podemos estudiar horarios antes de la apertura, después del expediente o en franjas acordadas, buscando minimizar la interferencia en el trabajo diario.</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8"><p className="font-bold text-white">Planificación clara</p><p className="mt-3 leading-7 text-slate-300">Antes de empezar, se concretan zonas, prioridades, frecuencia y horario para que el alcance del servicio responda a las necesidades reales del centro.</p></div></div></section>

      <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]"><div className="rounded-3xl bg-brand-50 p-8"><Armchair className="h-12 w-12 text-brand-600" aria-hidden="true" /><div className="mt-8 grid grid-cols-2 gap-3">{['Sillas de oficina', 'Tapizados', 'Moquetas', 'Textiles corporativos'].map((item) => <div key={item} className="rounded-xl bg-white px-4 py-4 text-sm font-bold text-slate-800 shadow-sm">{item}</div>)}</div></div><div><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Textil de oficina</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Especial atención a sillas, tapicerías y moquetas</h2><p className="mt-5 text-lg leading-8 text-slate-600">La experiencia de Superclim en limpieza textil aporta un cuidado específico a elementos que acumulan uso diario y requieren un tratamiento distinto al de las superficies convencionales.</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><Link to={businessConfig.urls.businessServices.carpets} className="inline-flex items-center gap-2 font-bold text-brand-700 transition hover:text-brand-600">Ver limpieza de moquetas <ArrowRight className="h-4 w-4" /></Link><Link to={businessConfig.urls.businessServices.industrial} className="inline-flex items-center gap-2 font-bold text-brand-700 transition hover:text-brand-600">Ver limpieza de naves <ArrowRight className="h-4 w-4" /></Link></div><p className="mt-5 leading-7 text-slate-600">Además de los servicios para empresas, Superclim ofrece <a href={businessConfig.urls.privateServices.sofas} className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition hover:text-brand-600">limpieza profesional de sofás para particulares</a>.</p></div></div></section>

      <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Por qué Superclim</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Experiencia y atención personalizada</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[['Más de 16 años', 'Experiencia de la misma marca Superclim.'], ['Especialización', 'Conocimiento consolidado en limpieza y cuidado textil.'], ['Servicio personalizado', 'Una propuesta ajustada al espacio y su actividad.'], ['Cobertura regional', 'Atención en Sabadell, Barcelona y Vallès Occidental.']].map(([title, text]) => <article key={title} className="rounded-2xl bg-white p-7 shadow-sm"><Sparkles className="h-6 w-6 text-brand-600" aria-hidden="true" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl text-center"><MapPin className="mx-auto h-9 w-9 text-brand-600" aria-hidden="true" /><p className="mt-5 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Cobertura</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Limpieza de oficinas en Sabadell, Barcelona y Vallès</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Atendemos empresas en Sabadell, Terrassa, Sant Cugat, Rubí, Cerdanyola, Barberà, Barcelona y otras zonas del Vallès Occidental.</p></div></section>

      <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-600">Preguntas frecuentes</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Antes de solicitar tu presupuesto</h2></div><div className="mt-12 space-y-3">{officeCleaningFaqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-brand-300"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 focus-visible:outline-none">{faq.question}<ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-180" aria-hidden="true" /></summary><p className="mt-4 max-w-3xl pr-8 leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div></section>

      <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-brand-700 to-teal-600 px-7 py-14 text-center text-white shadow-soft sm:px-12"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-100">Presupuesto personalizado</p><h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Una propuesta adaptada a tu oficina</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-emerald-50">Cuéntanos el tamaño, las zonas y la frecuencia que necesitas. Prepararemos una propuesta acorde a tu centro de trabajo.</p><a href={budgetUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-brand-700 transition hover:bg-emerald-50">Solicitar presupuesto <ArrowRight className="h-5 w-5" aria-hidden="true" /></a></div></section>
    </>
  );
}
