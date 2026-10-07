import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/layouts/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { OfficeCleaningPage } from '@/pages/OfficeCleaningPage';
import { IndustrialCleaningPage } from '@/pages/IndustrialCleaningPage';
import { BusinessCarpetCleaningPage } from '@/pages/BusinessCarpetCleaningPage';
import { CleaningMaintenancePage } from '@/pages/CleaningMaintenancePage';
import { RetailCleaningPage } from '@/pages/RetailCleaningPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/limpieza-de-oficinas/" element={<OfficeCleaningPage />} />
        <Route path="/limpieza-de-naves-industriales/" element={<IndustrialCleaningPage />} />
        <Route path="/limpieza-de-moquetas-empresas/" element={<BusinessCarpetCleaningPage />} />
        <Route path="/mantenimiento-de-limpieza/" element={<CleaningMaintenancePage />} />
        <Route path="/limpieza-de-locales-comerciales/" element={<RetailCleaningPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>;
}
