import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OPobytuPage from './pages/OPobytuPage'
import VyletyPage from './pages/VyletyPage'
import VyletDetailPage from './pages/VyletDetailPage'
import CestaPage from './pages/CestaPage'
import ZastavkaDetailPage from './pages/ZastavkaDetailPage'
import ProgramPage from './pages/ProgramPage'
import ProgramDenPage from './pages/ProgramDenPage'
import PraktickePage from './pages/PraktickePage'
import BrozuraPage from './pages/BrozuraPage'
import PoukazPage from './pages/PoukazPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-pobytu" element={<OPobytuPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/program/:id" element={<ProgramDenPage />} />
        <Route path="/vylety" element={<VyletyPage />} />
        <Route path="/vylet/:id" element={<VyletDetailPage />} />
        <Route path="/cesta" element={<CestaPage />} />
        <Route path="/zastavka/:id" element={<ZastavkaDetailPage />} />
        <Route path="/prakticke" element={<PraktickePage />} />
      </Route>
      {/* brožura a poukaz k tisku — mimo Layout (bez navigace) */}
      <Route path="/brozura" element={<BrozuraPage />} />
      <Route path="/poukaz" element={<PoukazPage />} />
    </Routes>
  )
}
