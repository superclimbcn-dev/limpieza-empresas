import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/config/business';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl('Hola, me gustaría recibir información sobre Superclim Empresas.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar con Superclim por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
