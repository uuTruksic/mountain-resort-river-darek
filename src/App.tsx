import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OPobytuPage from './pages/OPobytuPage'
import VyletyPage from './pages/VyletyPage'
import VyletDetailPage from './pages/VyletDetailPage'
import CestaPage from './pages/CestaPage'
import ZastavkaDetailPage from './pages/ZastavkaDetailPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-pobytu" element={<OPobytuPage />} />
        <Route path="/vylety" element={<VyletyPage />} />
        <Route path="/vylet/:id" element={<VyletDetailPage />} />
        <Route path="/cesta" element={<CestaPage />} />
        <Route path="/zastavka/:id" element={<ZastavkaDetailPage />} />
      </Route>
    </Routes>
  )
}
