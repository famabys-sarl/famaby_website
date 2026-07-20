import { motion } from 'framer-motion'
import { Target, Eye, Award, Heart } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const values = [
  { icon: Target, title: 'Mission', description: 'Fournir hydrocarbures, gaz, engrais et matériaux de construction de qualité aux entreprises et particuliers du Sénégal.' },
  { icon: Eye, title: 'Vision', description: 'Devenir le leader de la distribution dans les 5 secteurs clés en Afrique de l\'Ouest.' },
  { icon: Award, title: 'Excellence', description: 'Des produits conformes aux normes internationales avec un contrôle qualité rigoureux.' },
  { icon: Heart, title: 'Engagement', description: 'Un engagement envers nos clients, nos partenaires et l\'environnement.' },
]

const timeline = [
  { year: '2022', title: 'Création', description: 'FAMABY est fondée à Dakar pour commercialiser des produits pétroliers de qualité.' },
  { year: '2023', title: 'Expansion Gaz', description: 'Extension vers la distribution de gaz butane et propane.' },
  { year: '2024', title: 'Agriculture', description: 'Lancement de la gamme engrais et intrants agricoles.' },
  { year: '2025', title: 'Construction', description: 'Diversification avec le fer à béton et les aciers de construction.' },
]

export default function APropos() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.about.hero} alt="FAMABY" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">À propos de FAMABY</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80">
              Votre partenaire de confiance pour l'approvisionnement en pétrole, terrains, engrais, fer et bitume.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-text mb-6">Notre Histoire</motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-text-light leading-relaxed">
                <p>Fondée à Dakar, FAMABY est née de la volonté de fournir des produits de qualité dans les secteurs stratégiques de l'économie sénégalaise.</p>
                <p>En 5 secteurs d'activité — hydrocarbures, terrains, agriculture, fer et bitume — nous avons bâti une réputation de fiabilité et d'excellence.</p>
                <p>Aujourd'hui, FAMABY approvisionne des centaines d'entreprises et particuliers à travers tout le Sénégal.</p>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={IMAGES.about.hydrocarbures} alt="Hydrocarbures" className="w-full h-40 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={IMAGES.about.gaz} alt="Gaz" className="w-full h-40 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={IMAGES.about.agriculture} alt="Agriculture" className="w-full h-40 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={IMAGES.about.construction} alt="Construction" className="w-full h-40 object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-2 lg:order-1">
              {timeline.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{item.year.slice(-2)}</div>
                    {i < timeline.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-sm font-medium text-primary">{item.year}</span>
                    <h3 className="font-semibold text-text mt-1">{item.title}</h3>
                    <p className="text-sm text-text-light mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMAGES.about.agriculture} alt="Agriculture FAMABY" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-text mb-4">Nos Valeurs</motion.h2>
            <motion.p variants={fadeUp} className="text-text-light max-w-2xl mx-auto">Les principes qui guident chacune de nos actions.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">{value.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
