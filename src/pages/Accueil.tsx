import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Fuel, Phone, Sprout, Hammer, Droplets, ClipboardCheck, Truck, ThumbsUp, Quote, Calendar, ChevronRight, Star, ShieldCheck, Clock, BadgeCheck, Layers, MapPin, CheckCircle2, Sparkles, Factory, Flame, Leaf, HardHat, Beaker, Warehouse, Building } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import FamabyLogo from '../components/FamabyLogo'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const stats = [
  { number: '5+', label: 'Années d\'expérience' },
  { number: '300+', label: 'Clients satisfaits' },
  { number: '5', label: 'Secteurs d\'activité' },
  { number: '24/7', label: 'Service disponible' },
]

const features = [
  { icon: Fuel, title: 'Pétrole brut & dérivés', description: 'FAMABY dispose d\'un large partenariat avec les géants du pétrole et d\'un grand stock prêt à être fourni sur tout le territoire et en sous-région.', color: 'from-blue-500 to-cyan-400', glow: 'shadow-blue-500/20', bg: 'bg-blue-50' },
  { icon: MapPin, title: 'Vente de terrains', description: 'Terrains disponibles pour vos projets résidentiels, commerciaux et industriels au Sénégal.', color: 'from-emerald-500 to-teal-400', glow: 'shadow-emerald-500/20', bg: 'bg-emerald-50' },
  { icon: Sprout, title: 'Urée & Engrais', description: 'Urée, engrais NPK et intrants agricoles de haute qualité pour optimiser vos récoltes et applications industrielles.', color: 'from-green-500 to-lime-400', glow: 'shadow-green-500/20', bg: 'bg-green-50' },
  { icon: Hammer, title: 'Commercialisation du Fer', description: 'Très prisé dans l\'architecture et le génie civil, le fer est incontournable pour la construction d\'édifices, maisons, immeubles, stades.', color: 'from-slate-500 to-gray-400', glow: 'shadow-slate-500/20', bg: 'bg-slate-50' },
  { icon: Layers, title: 'Bitume', description: 'Composant essentiel des enrobés routiers, contribuant à leur stabilité et durabilité avec ses propriétés adhésives et cohésives.', color: 'from-stone-600 to-amber-700', glow: 'shadow-stone-500/20', bg: 'bg-stone-50' },
]

const products = [
  { name: 'Pétrole brut & dérivés', description: 'Carburants et produits pétroliers de qualité pour les professionnels.', icon: Droplets, image: IMAGES.products.petrole, sector: 'Pétrole', color: 'from-blue-600 to-blue-400' },
  { name: 'Vente de terrains', description: 'Terrains pour projets résidentiels, commerciaux et industriels.', icon: MapPin, image: IMAGES.products.terrains, sector: 'Immobilier', color: 'from-emerald-600 to-emerald-400' },
  { name: 'Urée & Engrais', description: 'Engrais azoté, NPK et intrants agricoles.', icon: Sprout, image: IMAGES.products.uree, sector: 'Agriculture', color: 'from-green-600 to-green-400' },
  { name: 'Commercialisation du Fer', description: 'Fers et aciers pour l\'architecture et le génie civil.', icon: Hammer, image: IMAGES.products.ferBeton, sector: 'Construction', color: 'from-slate-600 to-slate-400' },
  { name: 'Bitume', description: 'Enrobés routiers pour stabilité et durabilité.', icon: Layers, image: IMAGES.products.bitume, sector: 'Routes', color: 'from-stone-600 to-amber-600' },
]

const steps = [
  { icon: ClipboardCheck, title: 'Choisissez votre produit', description: 'Parcourez notre catalogue et sélectionnez les produits adaptés à vos besoins.', color: 'from-primary to-emerald-600' },
  { icon: Truck, title: 'Demandez un devis', description: 'Remplissez notre formulaire en ligne et recevez une offre personnalisée rapidement.', color: 'from-secondary to-amber-500' },
  { icon: ThumbsUp, title: 'Livraison rapide', description: 'Nos équipes assurent une livraison sécurisée partout au Sénégal.', color: 'from-accent to-cyan-500' },
]

const testimonials = [
  { name: 'Amadou Diallo', role: 'Directeur, Transport Express', text: 'FAMABY est notre fournisseur de confiance depuis 5 ans. La qualité des carburants et la régularité des livraisons nous permettent d\'assurer notre service sans interruption.', rating: 5 },
  { name: 'Fatou Sow', role: 'Gérante, Agro-Service Sahel', text: 'Les engrais FAMABY ont transformé nos rendements agricoles. Le conseil technique et la qualité des produits sont incomparables sur le marché sénégalais.', rating: 5 },
  { name: 'Moussa Ndiaye', role: 'Chef de chantier, Bâtiment Plus', text: 'Le fer à béton certifié et le bitume de FAMABY répondent parfaitement aux normes de construction. Un partenaire sérieux et fiable.', rating: 5 },
]

const recentNews = [
  { title: 'FAMABY élargit son réseau de distribution de gaz', date: '15 Juin 2026', image: IMAGES.news.gaz, excerpt: 'Nouvelles dépôts ouverts dans 3 régions pour mieux servir nos clients.', color: 'from-blue-600' },
  { title: 'Partenariat stratégique avec Yara International', date: '28 Mai 2026', image: IMAGES.news.engrais, excerpt: 'Un accord majeur pour la fourniture d\'engrais de qualité premium.', color: 'from-green-600' },
  { title: 'Nouvelle gamme de bitume pour les routes sénégalaises', date: '10 Mai 2026', image: IMAGES.news.bitume, excerpt: 'Des enrobés haute performance pour des routes plus durables.', color: 'from-amber-600' },
]

const advantages = [
  { icon: ShieldCheck, title: 'Certifié & Garanti', description: 'Tous nos produits sont certifiés aux normes internationales.', gradient: 'from-emerald-500 via-green-500 to-teal-500' },
  { icon: Clock, title: 'Livraison Express', description: 'Livraison en 24h partout au Sénégal pour les commandes urgentes.', gradient: 'from-blue-500 via-indigo-500 to-cyan-500' },
  { icon: BadgeCheck, title: 'Prix Compétitifs', description: 'Les meilleurs tarifs du marché sans compromis sur la qualité.', gradient: 'from-secondary via-amber-500 to-orange-500' },
  { icon: Phone, title: 'Support 24/7', description: 'Une équipe dédiée disponible à tout moment pour vous accompagner.', gradient: 'from-primary via-primary-light to-emerald-500' },
]

const partners = [
  { name: 'PETROSEN', sub: 'Hydrocarbures', icon: Factory, color: 'from-[#1565c0] to-[#42a5f5]', letters: 'PT' },
  { name: 'TotalEnergies', sub: 'Carburants', icon: Fuel, color: 'from-[#e53935] to-[#ef5350]', letters: 'TE' },
  { name: 'Butagaz', sub: 'Gaz', icon: Flame, color: 'from-[#1e88e5] to-[#64b5f6]', letters: 'BG' },
  { name: 'Yara', sub: 'Engrais', icon: Leaf, color: 'from-[#2e7d32] to-[#66bb6a]', letters: 'YA' },
  { name: 'ArcelorMittal', sub: 'Acier', icon: HardHat, color: 'from-[#546e7a] to-[#90a4ae]', letters: 'AM' },
  { name: 'OCP Group', sub: 'Phosphates', icon: Beaker, color: 'from-[#f57f17] to-[#ffca28]', letters: 'OC' },
  { name: 'SAR', sub: 'Raffinage', icon: Warehouse, color: 'from-[#4527a0] to-[#7e57c2]', letters: 'SR' },
  { name: 'Colas', sub: 'Bitume', icon: Building, color: 'from-[#3e2723] to-[#8d6e63]', letters: 'CO' },
]

export default function Accueil() {
  return (
    <div>
      <HeroSlider />

      {/* ─── Stats ─── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#071f0a]" />
        <div className={`absolute inset-0 bg-[url('${IMAGES.general.activites}')] bg-cover bg-center opacity-[0.08] mix-blend-overlay`} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="group text-center bg-white/[0.07] backdrop-blur-md border border-white/[0.1] rounded-3xl p-6 md:p-8 hover:bg-white/[0.15] hover:border-white/[0.25] hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-br from-secondary-light via-secondary to-[#f0a000] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{stat.number}</div>
                  <div className="h-0.5 w-8 mx-auto mb-3 bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full" />
                  <div className="text-xs md:text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Pourquoi FAMABY ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-surface-dark" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[140px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                <Sparkles size={16} className="text-secondary" />
                Nos Expertises
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text mb-6 leading-tight">Pourquoi choisir <span className="bg-gradient-to-r from-primary via-primary-light to-emerald-500 bg-clip-text text-transparent">FAMABY ?</span></motion.h2>
              <motion.p variants={fadeUp} className="text-text-light mb-10 leading-relaxed text-lg">
                FAMABY est votre partenaire de confiance pour l'approvisionnement en pétrole brut, pétrochimie, gaz, fer, urée et bitume au Sénégal et en sous-région.
              </motion.p>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div key={i} variants={fadeUp} className={`group flex gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-${feature.glow} transition-all duration-300`}>
                    <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/50">
                <img src="/images/products/affiche_famaby.png" alt="Affiche Famaby" className=" h-auto min-h-[400px] object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
                      <FamabyLogo size={64} variant="icon" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-bold text-secondary-light uppercase tracking-wider mb-1">Fiabilité & Qualité</p>
                      <p className="text-2xl font-extrabold text-white leading-tight">Votre partenaire de confiance</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">Plus de 10 ans d'expertise au service de votre réussite — FAMABY, acteur majeur du pétrole, fer, engrais et bitume au Sénégal.</p>
                  <div className="flex items-center gap-4 mt-5">
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <CheckCircle2 size={14} className="text-secondary-light" />
                      <span>Certifié ISO</span>
                    </div>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <CheckCircle2 size={14} className="text-secondary-light" />
                      <span>Livraison nationale</span>
                    </div>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <CheckCircle2 size={14} className="text-secondary-light" />
                      <span>Stock permanent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Avantages ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-dark to-[#071f0a]" />
        <div className={`absolute inset-0 bg-[url('${IMAGES.general.partenaires}')] bg-cover bg-center opacity-[0.05] mix-blend-overlay`} />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-secondary-light font-semibold text-sm uppercase tracking-wider mb-3">Nos avantages</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Ce qui nous rend <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">unique</span></motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl mx-auto text-lg">Des engagements concrets pour votre satisfaction.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${adv.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-white/[0.06] backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-500 cursor-default h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${adv.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <adv.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 text-center">{adv.title}</h3>
                  <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors text-center leading-relaxed">{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Produits ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-surface-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[250px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Nos Produits</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text mb-4">5 secteurs d'activité pour répondre à tous vos <span className="bg-gradient-to-r from-primary via-primary-light to-emerald-500 bg-clip-text text-transparent">besoins professionnels</span>.</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${product.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-gray-100 hover:border-primary/20">
                  <div className="h-52 overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg`}>{product.sector}</span>
                  </div>
                  <div className="p-7">
                    <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                      <product.icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-text mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{product.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link to="/produits" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        En savoir plus <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-14">
            <Link to="/produits" className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
              Voir tous nos produits
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Comment ça marche ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-dark to-surface" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-secondary/[0.04] rounded-full blur-[140px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Simple & Rapide</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text mb-4">Comment ça <span className="bg-gradient-to-r from-secondary via-amber-500 to-orange-500 bg-clip-text text-transparent">marche</span> ?</motion.h2>
            <motion.p variants={fadeUp} className="text-text-light max-w-2xl mx-auto text-lg">Un processus en 3 étapes pour recevoir vos produits rapidement.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-[55%] w-[90%] h-[3px]">
                    <div className={`w-full h-full bg-gradient-to-r ${step.color} opacity-20 rounded-full`} />
                    <div className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r ${step.color} opacity-40 rounded-full group-hover:w-full transition-all duration-700`} />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="relative inline-block mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className={`relative w-28 h-28 bg-gradient-to-br ${step.color} rounded-3xl shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <step.icon size={44} className="text-white" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-10 h-10 bg-white text-text text-sm font-extrabold rounded-2xl flex items-center justify-center shadow-lg border-2 border-gray-100">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl text-text mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Témoignages ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-dark to-[#0a2e0c]" />
        <div className={`absolute inset-0 bg-[url('${IMAGES.general.activites}')] bg-cover bg-center opacity-[0.04] mix-blend-overlay`} />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-secondary-light font-semibold text-sm uppercase tracking-wider mb-3">Témoignages</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Ce que disent nos <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">clients</span></motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl mx-auto text-lg">La confiance de nos clients est notre meilleure carte de visite.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative">
                <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${
                  i % 3 === 0 ? 'bg-gradient-to-br from-primary to-emerald-500' :
                  i % 3 === 1 ? 'bg-gradient-to-br from-secondary to-amber-500' :
                  'bg-gradient-to-br from-accent to-cyan-500'
                }`} />
                <div className="relative bg-white/[0.06] backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-500 h-full">
                  <div className={`absolute -top-5 left-8 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl ${
                    i % 3 === 0 ? 'bg-gradient-to-br from-primary to-emerald-600' :
                    i % 3 === 1 ? 'bg-gradient-to-br from-secondary to-amber-500' :
                    'bg-gradient-to-br from-accent to-cyan-500'
                  }`}>
                    <Quote size={22} className="text-white" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 pt-4 italic group-hover:text-white/80 transition-colors">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Actualités ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-surface-dark" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-accent/[0.04] rounded-full blur-[140px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Actualités</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text mb-4">Nos dernières <span className="bg-gradient-to-r from-secondary via-amber-500 to-orange-500 bg-clip-text text-transparent">nouvelles</span></motion.h2>
            <motion.p variants={fadeUp} className="text-text-light max-w-2xl mx-auto text-lg">Suivez l'actualité de FAMABY et nos initiatives récentes.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${news.color} to-transparent rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                  <div className="h-52 overflow-hidden relative">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                        <Calendar size={12} />
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-text text-lg mb-3 group-hover:text-primary transition-colors leading-tight">{news.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed mb-5">{news.excerpt}</p>
                    <Link to="/actualites" className="group/link inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors">
                      Lire la suite
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-14">
            <Link to="/actualites" className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
              Toutes les actualités
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Partenaires ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a1f10] to-primary-dark" />
        <div className={`absolute inset-0 bg-[url('${IMAGES.products.bitume}')] bg-cover bg-center opacity-[0.04] mix-blend-overlay`} />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-secondary-light font-semibold text-sm uppercase tracking-wider mb-3">Ils nous font confiance</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">Nos <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">Partenaires</span></motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {partners.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${p.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />
                  <div className="relative bg-white/[0.05] backdrop-blur-sm rounded-2xl border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] hover:shadow-2xl transition-all duration-500 cursor-pointer p-8 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${p.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <p.icon size={36} className="text-white" />
                    </div>
                    <p className="font-bold text-white text-sm leading-tight mb-1">{p.name}</p>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider">{p.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-14 text-center">
            <motion.div variants={fadeUp}>
              <Link to="/partenaires" className="group inline-flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/[0.15] hover:border-white/[0.2] hover:shadow-xl transition-all duration-300">
                Voir tous nos partenaires
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Devis ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e0c] via-primary-dark to-[#0d3b0f]" />
        <img src={IMAGES.general.partenaires} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-overlay" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary-light text-xs font-bold px-5 py-2 rounded-full mb-8 uppercase tracking-wider border border-secondary/20">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    Devis gratuit & rapide
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
                    <span className="text-white">Besoin d'un</span><br />
                    <span className="bg-gradient-to-r from-secondary-light via-secondary to-[#f5a623] bg-clip-text text-transparent">devis sur mesure ?</span>
                  </h2>
                  <p className="text-white/50 max-w-lg mb-10 leading-relaxed text-lg">
                    Notre équipe d'experts analyse vos besoins et vous propose les meilleurs solutions pour pétrole, pétrochimie, gaz, fer, urée et bitume.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-12">
                    <Link to="/devis" className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-[#e8960c] hover:from-[#e8960c] hover:to-secondary text-white px-10 py-4.5 rounded-2xl font-bold text-base transition-all shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1">
                      <span>Demander un devis</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="tel:+221338653733" className="group inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] hover:bg-white/[0.12] text-white px-10 py-4.5 rounded-2xl font-bold text-base transition-all hover:-translate-y-1">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <Phone size={18} />
                      </div>
                      <span>+221 33 865 37 33</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 text-sm text-white/40">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/[0.05] rounded-xl flex items-center justify-center border border-white/[0.08]">
                        <Clock size={16} className="text-secondary-light" />
                      </div>
                      <div>
                        <p className="font-semibold text-white/70">Réponse sous 24h</p>
                        <p className="text-xs text-white/40">Délai garanti</p>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/[0.05] rounded-xl flex items-center justify-center border border-white/[0.08]">
                        <ShieldCheck size={16} className="text-secondary-light" />
                      </div>
                      <div>
                        <p className="font-semibold text-white/70">Sans engagement</p>
                        <p className="text-xs text-white/40">100% gratuit</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="hidden lg:grid grid-cols-3 gap-3">
                  {[
                    { icon: Fuel, label: 'Pétrole', gradient: 'from-[#1e88e5] to-[#42a5f5]' },
                    { icon: MapPin, label: 'Terrains', gradient: 'from-[#2e7d32] to-[#66bb6a]' },
                    { icon: Sprout, label: 'Urée & Engrais', gradient: 'from-[#43a047] to-[#81c784]' },
                    { icon: Hammer, label: 'Fer', gradient: 'from-[#78909c] to-[#b0bec5]' },
                    { icon: Layers, label: 'Bitume', gradient: 'from-[#37474f] to-[#90a4ae]' },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                      <div className={`relative bg-gradient-to-br ${item.gradient} bg-opacity-20 backdrop-blur-sm border border-white/[0.12] rounded-3xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/[0.08] transition-all duration-300 cursor-default`}>
                        <div className="w-14 h-14 bg-white/[0.15] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <item.icon size={26} className="text-white" />
                        </div>
                        <p className="font-bold text-white text-xs">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
