import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe, Camera, Briefcase, ArrowRight } from 'lucide-react'
import FamabyLogo from './FamabyLogo'

const footerLinks = {
  'Entreprise': [
    { label: 'À propos', path: '/a-propos' },
    { label: 'Activités', path: '/activites' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Partenaires', path: '/partenaires' },
  ],
  'Services': [
    { label: 'Produits', path: '/produits' },
    { label: 'Demander un devis', path: '/devis' },
    { label: 'Contact', path: '/contact' },
    { label: 'Actualités', path: '/actualites' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FamabyLogo size={72} variant="icon" />
              <span className="text-xl font-bold tracking-tight">FAMABY</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Votre partenaire de confiance pour la fourniture de produits pétroliers et dérivés au Sénégal et en Afrique de l'Ouest.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Camera size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Briefcase size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-secondary-light">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 text-sm hover:text-white hover:pl-1 transition-all flex items-center gap-1"
                    >
                      <ArrowRight size={12} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold mb-4 text-secondary-light">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>37 Avenue Cheikh Anta Diop,<br />Immeubles Palazzo Suite, 5e étage<br />Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+221338653733" className="hover:text-white transition-colors">+221 33 865 37 33</a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:contact@famaby.sn" className="hover:text-white transition-colors">contact@famaby.sn</a><br />
                <a href="mailto:gerant@famaby.sn" className="hover:text-white transition-colors">gerant@famaby.sn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/50">
          <span>&copy; {new Date().getFullYear()} FAMABY. Tous droits réservés.</span>
          <Link to="/mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
