import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
