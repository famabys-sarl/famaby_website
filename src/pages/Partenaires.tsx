import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Factory, Fuel, Flame, Leaf, HardHat, Beaker, Warehouse, Building } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const partners = [
  { name: 'PETROSEN', sector: 'Hydrocarbures', icon: Factory, color: 'from-[#1565c0] to-[#42a5f5]' },
  { name: 'TotalEnergies', sector: 'Distribution carburants', icon: Fuel, color: 'from-[#e53935] to-[#ef5350]' },
  { name: 'Butagaz', sector: 'Gaz butane & propane', icon: Flame, color: 'from-[#1e88e5] to-[#64b5f6]' },
  { name: 'Yara International', sector: 'Engrais & Agriculture', icon: Leaf, color: 'from-[#2e7d32] to-[#66bb6a]' },
  { name: 'ArcelorMittal', sector: 'Acier & Construction', icon: HardHat, color: 'from-[#546e7a] to-[#90a4ae]' },
  { name: 'OCP Group', sector: 'Engrais phosphates', icon: Beaker, color: 'from-[#f57f17] to-[#ffca28]' },
  { name: 'SAR', sector: 'Raffinage', icon: Warehouse, color: 'from-[#4527a0] to-[#7e57c2]' },
  { name: 'Dangote Cement', sector: 'Construction', icon: Building, color: 'from-[#3e2723] to-[#8d6e63]' },
]

export default function Partenaires() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-[#0a1f10] to-primary-dark text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[160px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-secondary-light font-semibold text-sm uppercase tracking-wider mb-3">Ils nous font confiance</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">Nos <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">Partenaires</span></motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/60 leading-relaxed">
              Nous collaborons avec des leaders mondiaux dans les hydrocarbures, le gaz, l'agriculture et la construction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${partner.color} rounded-3xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500`} />
                <div className="relative bg-surface rounded-2xl p-8 text-center border border-gray-100 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-500">
                  <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <partner.icon size={36} className="text-white" />
                  </div>
                  <h3 className="font-bold text-text text-lg mb-1">{partner.name}</h3>
                  <p className="text-sm text-text-light">{partner.sector}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-16">
            <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-[#0a3d12]" />
              <div className={`absolute inset-0 bg-[url('${IMAGES.general.partenaires}')] bg-cover bg-center opacity-[0.07] mix-blend-overlay`} />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[150px]" />
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-center text-white">
                <p className="text-secondary-light font-semibold text-sm uppercase tracking-wider mb-3">Rejoignez-nous</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Devenez partenaire</h2>
                <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
                  Vous souhaitez rejoindre notre réseau ? Contactez-nous pour les opportunités de collaboration dans les hydrocarbures, gaz, agriculture ou construction.
                </p>
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-[#e8960c] hover:from-[#e8960c] hover:to-secondary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1">
                  Nous contacter
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
