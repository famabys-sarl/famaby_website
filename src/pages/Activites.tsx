import { motion } from 'framer-motion'
import { Fuel, Sprout, Hammer, Layers, MapPin, Truck, Wrench } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const activities = [
  {
    icon: Fuel,
    title: 'Pétrole brut & Dérivés',
    description: 'FAMABY dispose d\'un large partenariat avec les géants du pétrole et d\'un grand stock prêt à être fourni sur tout le territoire sénégalais et en sous-région.',
    details: ['Pétrole brut', 'Essence Super', 'Gasoil Standard', 'Gasoil Spécial'],
    image: IMAGES.activites.distribution,
  },
  {
    icon: MapPin,
    title: 'Vente de Terrains',
    description: 'Terrains disponibles pour vos projets résidentiels, commerciaux et industriels. Des emplacements stratégiques au Sénégal.',
    details: ['Terrains résidentiels', 'Terrains commerciaux', 'Terrains industriels'],
    image: IMAGES.activites.immobilier,
  },
  {
    icon: Sprout,
    title: 'Urée & Engrais',
    description: 'Utilisée commercialement comme engrais et dans diverses applications industrielles, y compris la fabrication de produits chimiques.',
    details: ['Urée 46% N', 'Engrais NPK', 'Intrants agricoles'],
    image: IMAGES.activites.agriculture,
  },
  {
    icon: Hammer,
    title: 'Commercialisation du Fer',
    description: 'Très prisé dans l\'architecture et le génie civil, le fer est incontournable dans la construction d\'édifices, maisons, immeubles, stades.',
    details: ['Fer à béton FT', 'Fer à béton T', 'Aciers spéciaux'],
    image: IMAGES.activites.construction,
  },
  {
    icon: Layers,
    title: 'Bitume',
    description: 'Composant essentiel des enrobés routiers, contribuant à leur stabilité et durabilité avec ses propriétés adhésives et cohésives.',
    details: ['Bitume routier', 'Enrobés', 'Étanchéité'],
    image: IMAGES.activites.routes,
  },
  {
    icon: Wrench,
    title: 'Conseil & Approvisionnement',
    description: 'Accompagnement personnalisé pour identifier les produits les mieux adaptés à vos besoins professionnels.',
    details: ['Étude de besoins', 'Devis personnalisé', 'Suivi de commande'],
    image: IMAGES.activites.conseil,
  },
  {
    icon: Truck,
    title: 'Logistique & Livraison',
    description: 'Service de livraison sécurisé et rapide sur tout le territoire sénégalais et en sous-région.',
    details: ['Livraison express', 'Flotte sécurisée', 'Couverture nationale'],
    image: IMAGES.activites.importExport,
  },
]

export default function Activites() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.general.activites} alt="Nos activités" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">Nos Activités</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80">
              FAMABY opère dans 5 secteurs clés : pétrole, terrains, urée & engrais, fer et bitume.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-surface rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors -mt-10 relative z-10 shadow-md bg-white">
                    <activity.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">{activity.title}</h3>
                  <p className="text-text-light leading-relaxed mb-4">{activity.description}</p>
                  <ul className="space-y-2">
                    {activity.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-text-light">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
