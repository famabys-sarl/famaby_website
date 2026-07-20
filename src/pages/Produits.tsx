import { motion } from 'framer-motion'
import { Fuel, Sprout, Hammer, Layers, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const categories = [
  {
    title: 'Pétrole brut & Dérivés',
    description: 'FAMABY SARL connaît une expérience considérable dans l\'exploitation et la distribution du pétrole et ses dérivés. Doté d\'un large partenariat avec les géants du pétrole, la société dispose d\'un grand stock prêt à être fourni sur toute l\'étendue du territoire ainsi que dans la sous-région.',
    icon: Fuel,
    image: IMAGES.hero.petrole,
    products: [
      { name: 'Pétrole brut', description: 'Pétrole brut de qualité pour raffineries et industrie', specs: 'Livraison sous citerne', image: IMAGES.products.petrole },
      { name: 'Essence Super', description: 'Carburant haute qualité pour véhicules particuliers et utilitaires', specs: 'RON 91 / RON 95', image: IMAGES.products.essence },
      { name: 'Gasoil Standard', description: 'Gasoil pour véhicules diesel, engins et générateurs', specs: 'Sulfur < 10ppm', image: IMAGES.products.gasoil },
    ],
  },
  {
    title: 'Vente de Terrains',
    description: 'FAMABY propose des terrains disponibles pour vos projets résidentiels, commerciaux et industriels. Des emplacements stratégiques pour concrétiser vos ambitions immobilières au Sénégal.',
    icon: MapPin,
    image: IMAGES.products.terrains,
    products: [
      { name: 'Terrains résidentiels', description: 'Terrains constructibles pour projets résidentiels', specs: 'Titre foncier', image: IMAGES.products.terrains },
      { name: 'Terrains commerciaux', description: 'Emplacements stratégiques pour commerces et bureaux', specs: 'Zonage commercial', image: IMAGES.products.terrains },
      { name: 'Terrains industriels', description: 'Terrains vastes pour projets industriels et entrepôts', specs: 'Accès routes principales', image: IMAGES.products.terrains },
    ],
  },
  {
    title: 'Urée & Engrais',
    description: 'L\'urée est utilisée commercialement comme engrais et dans diverses applications industrielles, y compris la fabrication de produits chimiques. FAMABY fournit engrais NPK, urée et intrants agricoles.',
    icon: Sprout,
    image: IMAGES.hero.uree,
    products: [
      { name: 'Urée 46%', description: 'Engrais azoté pur pour renforcement végétal', specs: 'Urée 46% N', image: IMAGES.products.uree },
      { name: 'Engrais NPK', description: 'Engrais complet NPK pour toutes cultures', specs: 'NPK 15-15-15, 20-20-20', image: IMAGES.products.npk },
      { name: 'Intrants Agricoles', description: 'Semences, produits phytosanitaires et équipements', specs: 'Gamme complète', image: IMAGES.products.intrants },
    ],
  },
  {
    title: 'Commercialisation du Fer',
    description: 'Très prisé dans le domaine de l\'architecture et du génie civil, le fer est incontournable dans la construction d\'édifices tels que les maisons, immeubles, stades... FAMABY dispose de grands stocks de fer.',
    icon: Hammer,
    image: IMAGES.products.ferBeton,
    products: [
      { name: 'Fer à Béton FT', description: 'Fer à treillis soudé pour dalles et planchers', specs: '8mm à 12mm', image: IMAGES.products.ferBeton },
      { name: 'Fer à Béton T', description: 'Fers à béton en barres pour armatures', specs: '6mm à 16mm', image: IMAGES.products.ferT },
      { name: 'Aciers Spéciaux', description: 'Aciers certifiés aux normes pour constructions spéciales', specs: 'Normes NFC', image: IMAGES.products.aciers },
    ],
  },
  {
    title: 'Bitume',
    description: 'Un composant essentiel des enrobés routiers, contribuant à leur stabilité et durabilité avec ses propriétés adhésives, cohésives et sa viscosité variable selon la température.',
    icon: Layers,
    image: IMAGES.hero.butume,
    products: [
      { name: 'Bitume routier', description: 'Bitume pour enrobés routiers haute performance', specs: 'Toutes grades', image: IMAGES.products.bitume },
      { name: 'Enrobés', description: 'Préparation d\'enrobés pour chaussées durables', specs: 'Stabilité & durabilité', image: IMAGES.products.enrobes },
      { name: 'Étanchéité', description: 'Produits bitumineux pour étanchéité de toitures', specs: 'Adhésive & cohésive', image: IMAGES.products.etancheite },
    ],
  },
]

export default function Produits() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.general.produits} alt="Nos produits" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">Nos Produits</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80">
              Découvrez nos 5 gammes de produits : pétrole, terrains, urée & engrais, fer et bitume.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {categories.map((category, i) => (
        <section key={i} className={`py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon size={24} className="text-primary" />
                </div>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text">{category.title}</motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-text-light mb-6 max-w-3xl leading-relaxed">{category.description}</motion.p>
              <div className="rounded-xl overflow-hidden mb-8 h-48 md:h-64">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.products.map((product, j) => (
                  <motion.div key={j} variants={fadeUp} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                    <div className="h-40 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-text mb-2">{product.name}</h3>
                      <p className="text-sm text-text-light mb-3">{product.description}</p>
                      <p className="text-xs text-primary font-medium bg-primary/5 inline-block px-2 py-1 rounded">{product.specs}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <img src={IMAGES.general.activites} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-4">Besoin d'un produit spécifique ?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 mb-6">Contactez-nous pour toute demande de produit non référencé ou en volumes particuliers.</motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/devis" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Demander un devis personnalisé
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
