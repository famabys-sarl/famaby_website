import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Activites from './pages/Activites'
import Produits from './pages/Produits'
import Realisations from './pages/Realisations'
import Partenaires from './pages/Partenaires'
import Actualites from './pages/Actualites'
import Contact from './pages/Contact'
import Devis from './pages/Devis'
import MentionsLegales from './pages/MentionsLegales'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Route>
    </Routes>
  )
}

export default App
