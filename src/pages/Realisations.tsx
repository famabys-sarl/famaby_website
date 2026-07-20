import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const projects = [
  {
    title: 'Approvisionnement carburant pour flotte de transport',
    sector: 'Hydrocarbures',
    description: 'Fourniture continue de gasoil spécial pour une grande entreprise de transport maritime et terrestre.',
    result: 'Réduction de 15% des coûts carburant et garantie d\'approvisionnement permanent.',
    image: IMAGES.realisations.petrole,
  },
  {
    title: 'Gaz pour complexe hôtelier',
    sector: 'Gaz',
    description: 'Approvisionnement en gaz butane et propane pour le réseau d\'hôtels de luxe à Dakar.',
    result: 'Économie de 25% sur la facture énergétique et transition vers une énergie plus propre.',
    image: IMAGES.realisations.gaz,
  },
  {
    title: 'Engrais pour exploitation agricole',
    sector: 'Agriculture',
    description: 'Fourniture d\'engrais NPK et urée pour une exploitation maraîchère de Casamance.',
    result: 'Augmentation de 40% des rendements grâce à une fertilisation optimisée.',
    image: IMAGES.realisations.agriculture,
  },
  {
    title: 'Fer à béton pour programme immobilier',
    sector: 'Construction',
    description: 'Fourniture de fers à béton FT et T pour la construction d\'un ensemble résidentiel.',
    result: 'Respect des normes NFC et livraisons ponctuelles adaptées au planning du chantier.',
    image: IMAGES.realisations.fer,
  },
  {
    title: 'Gasoil pour industrie minière',
    sector: 'Hydrocarbures',
    description: 'Fourniture de gasoil standard pour le parc de machinerie d\'une mine d\'or.',
    result: 'Optimisation des coûts et sécurisation de l\'approvisionnement saisonnier.',
    image: IMAGES.realisations.bitume,
  },
  {
    title: 'Engrais pour coopérative agricole',
    sector: 'Agriculture',
    description: 'Fourniture massive d\'engrais pour une coopérative de producteurs de arachide.',
    result: 'Prix négociés pour les gros volumes et livraison avant la saison des pluies.',
    image: IMAGES.realisations.terrains,
  },
]

export default function Realisations() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.general.realisations} alt="Réalisations" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80">
              Découvrez nos projets accomplis dans les hydrocarbures, le gaz, l'agriculture et la construction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-surface rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">{project.sector}</span>
                  <h3 className="text-lg font-semibold text-text mt-4 mb-3">{project.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-primary font-medium">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
