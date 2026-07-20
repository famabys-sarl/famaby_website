import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import FamabyLogo from './FamabyLogo'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/activites', label: 'Activités' },
  { path: '/produits', label: 'Produits' },
  { path: '/realisations', label: 'Réalisations' },
  { path: '/partenaires', label: 'Partenaires' },
  { path: '/actualites', label: 'Actualités' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="bg-primary text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+221338653733" className="flex items-center gap-1 hover:text-secondary-light transition-colors">
              <Phone size={12} />
              <span>+221 33 865 37 33</span>
            </a>
            <a href="mailto:contact@famaby.sn" className="flex items-center gap-1 hover:text-secondary-light transition-colors">
              <Mail size={12} />
              <span>contact@famaby.sn</span>
            </a>
           
          </div>
          <span className="hidden sm:block">Commercialisation de produits pétroliers au Sénégal</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <FamabyLogo size={52} variant="icon" />
          <span className="text-xl font-bold text-primary tracking-tight">FAMABY SARL</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-text-light hover:text-primary hover:bg-primary/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/devis"
            className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondary-dark transition-colors"
          >
            Demander un devis
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text hover:text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text-light hover:text-primary hover:bg-primary/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg text-center hover:bg-primary hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/devis"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-lg text-center hover:bg-secondary-dark transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
