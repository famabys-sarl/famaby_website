import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import IMAGES from '../config/images'

const slides = [
  {
    image: IMAGES.hero.petrole,
    category: 'Pétrole',
    titleLine1: 'Pétrole brut',
    titleLine2: '& Dérivés',
    highlight: 'Dérivés',
    subtitle: 'Pétrole brut, essence, gasoil — un grand stock prêt à être fourni sur tout le territoire et en sous-région.',
    overlay: 'from-black/60 via-black/30 to-black/5',
    accent: 'text-[#64b5f6]',
    badge: 'bg-[#1e88e5]',
    label: 'Énergie & Hydrocarbures',
  },
  {
    image: IMAGES.hero.petrole1,
    category: 'Pétrole',
    titleLine1: 'Essence',
    titleLine2: '& Gasoil',
    highlight: 'Gasoil',
    subtitle: 'Carburants haute qualité pour véhicules particuliers, engins et générateurs.',
    overlay: 'from-black/60 via-black/30 to-black/5',
    accent: 'text-[#64b5f6]',
    badge: 'bg-[#1e88e5]',
    label: 'Carburants & Énergie',
  },
  {
    image: IMAGES.hero.petrole01,
    category: 'Pétrole',
    titleLine1: 'Distribution',
    titleLine2: 'Pétrolière',
    highlight: 'Pétrolière',
    subtitle: 'Un réseau de distribution couvrant tout le Sénégal et la sous-région ouest-africaine.',
    overlay: 'from-black/60 via-black/30 to-black/5',
    accent: 'text-[#64b5f6]',
    badge: 'bg-[#1e88e5]',
    label: 'Réseau de Distribution',
  },
  {
    image: IMAGES.hero.uree,
    category: 'Agriculture',
    titleLine1: 'Urée &',
    titleLine2: 'Engrais',
    highlight: 'Engrais',
    subtitle: 'Urée, engrais NPK et intrants agricoles de haute qualité pour optimiser vos récoltes.',
    overlay: 'from-black/60 via-black/30 to-black/5',
    accent: 'text-[#81c784]',
    badge: 'bg-[#2e7d32]',
    label: 'Agroalimentaire & Agriculture',
  },
  {
    image: IMAGES.hero.butume,
    category: 'Routes',
    titleLine1: 'Bitume &',
    titleLine2: 'Enrobés',
    highlight: 'Enrobés',
    subtitle: 'Bitume pour enrobés routiers haute performance, stabilité et durabilité garanties.',
    overlay: 'from-black/60 via-black/30 to-black/5',
    accent: 'text-[#ffb74d]',
    badge: 'bg-[#e65100]',
    label: 'Travaux Publics & Routes',
  },
  {
    image: IMAGES.hero.butume01,
    category: 'Routes',
    titleLine1: 'Enrobés',
    titleLine2: '& Chaussées',
    highlight: 'Chaussées',
    subtitle: 'Des enrobés haute performance pour des routes plus durables et sûres au Sénégal.',
    overlay: 'from-black/60 via-black/30 to-black/5',
    accent: 'text-[#ffb74d]',
    badge: 'bg-[#e65100]',
    label: 'Construction Routière',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const interval = 5000
    const step = 50
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % slides.length)
          return 0
        }
        return prev + (step / interval) * 100
      })
    }, step)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    slides.forEach((slide, i) => {
      const img = new Image()
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }))
      img.src = slide.image
    })
  }, [])

  const goTo = (index: number) => { setCurrent(index); setProgress(0) }
  const prev = () => { setCurrent((c) => (c - 1 + slides.length) % slides.length); setProgress(0) }
  const next = () => { setCurrent((c) => (c + 1) % slides.length); setProgress(0) }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden bg-gray-900">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt=""
          className="hidden"
          loading="eager"
        />
      ))}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={`${slides[current].titleLine1} ${slides[current].titleLine2}`}
            className="w-full h-full object-cover"
            style={{ opacity: loaded[current] ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
          />
          {!loaded[current] && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].overlay}`} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-2 ${slides[current].badge} text-white text-[11px] font-bold px-5 py-2.5 rounded-full mb-7 uppercase tracking-[0.2em] border border-white/30 shadow-xl shadow-black/30`}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                {slides[current].label}
              </motion.span>

              <h1 className="mb-7">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="block text-5xl md:text-6xl lg:text-[5.2rem] font-black text-white leading-[1.05] tracking-tight"
                  style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7), 0 4px 32px rgba(0,0,0,0.4)' }}
                >
                  {slides[current].titleLine1}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="block text-5xl md:text-6xl lg:text-[5.2rem] font-black leading-[1.05] tracking-tight text-white"
                  style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7), 0 4px 32px rgba(0,0,0,0.4)' }}
                >
                  <span>{slides[current].titleLine2.split(slides[current].highlight)[0]}</span>
                  <span className={slides[current].accent}>{slides[current].highlight}</span>
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="h-1 bg-white/80 rounded-full mb-7"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-base md:text-lg text-white mb-10 max-w-lg leading-relaxed font-medium"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/produits"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-[#e8960c] hover:from-[#e8960c] hover:to-secondary text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/devis"
                  className="group inline-flex items-center gap-3 bg-white/[0.15] border border-white/[0.3] hover:bg-white/[0.25] hover:border-white/[0.4] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play size={16} fill="white" />
                  </div>
                  <span>Demander un devis</span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/[0.3] hover:bg-black/[0.5] border border-white/[0.25] hover:border-white/[0.4] rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-x-1 shadow-xl shadow-black/30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/[0.3] hover:bg-black/[0.5] border border-white/[0.25] hover:border-white/[0.4] rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:translate-x-1 shadow-xl shadow-black/30"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative h-1.5 rounded-full transition-all duration-500 overflow-hidden"
            style={{ width: i === current ? 56 : 20, background: 'rgba(255,255,255,0.2)' }}
          >
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            )}
            {i !== current && (
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/60 rounded-full transition-colors" />
            )}
          </button>
        ))}
      </div>

      {/* Decorative corner glow */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl pointer-events-none" />
    </section>
  )
}
