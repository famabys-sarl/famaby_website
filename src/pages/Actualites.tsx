import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ChevronRight, X } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const articles = [
  {
    date: '15 Juin 2026',
    category: 'Hydrocarbures',
    title: 'Nouveau contrat de fourniture carburant',
    excerpt: 'FAMABY signe un accord de longue durée pour la fourniture de gasoil à une flotte de transport national.',
    image: IMAGES.news.gaz,
    full: 'FAMABY a signé un contrat stratégique de longue durée avec l\'un des plus grands groupes de transport du Sénégal. Cet accord garantit l\'approvisionnement continu en gasoil de qualité pour une flotte de plus de 200 véhicules. Ce partenariat renforce la position de FAMABY comme fournisseur de confiance dans le secteur des hydrocarbures et témoigne de la qualité constante de nos produits. La livraison assurée 24h/24 depuis nos dépôts stratégiques permet d\'optimiser la logistique de nos clients professionnels.',
    color: 'from-blue-600',
  },
  {
    date: '28 Mai 2026',
    category: 'Agriculture',
    title: 'Campagne de distribution d\'engrais NPK',
    excerpt: 'Distribution massive d\'engrais aux producteurs agricoles en vue de la saison des pluies.',
    image: IMAGES.news.engrais,
    full: 'À l\'approche de la saison des pluies, FAMABY a lancé une vaste campagne de distribution d\'engrais NPK et d\'urée auprès des producteurs agricoles sénégalais. Cette opération, menée en partenariat avec Yara International, vise à soutenir les agriculteurs avec des intrants de qualité à des prix compétitifs. Plus de 500 tonnes d\'engrais ont déjà été distribuées dans les régions de Saint-Louis, Kaolack et Thiès. FAMABY s\'engage à accompagner l\'agriculture sénégalaise avec des solutions adaptées à chaque type de culture.',
    color: 'from-green-600',
  },
  {
    date: '10 Avril 2026',
    category: 'Construction',
    title: 'Partenariat avec des promoteurs immobiliers',
    excerpt: 'FAMABY devient fournisseur officiel de fer à béton pour le groupe immobilier Sénégal Construction.',
    image: IMAGES.news.bitume,
    full: 'FAMABY a conclu un partenariat majeur avec Sénégal Construction, l\'un des groupes immobiliers les plus dynamiques du pays. En tant que fournisseur officiel de fer à béton et d\'aciers de construction, FAMABY assure la livraison de matériaux certifiés pour plusieurs projets immobiliers d\'envergure incluant des immeubles résidentiels et commerciaux à Dakar. Ce partenariat démontre la capacité de FAMABY à répondre aux exigences de qualité et de volume du secteur BTP.',
    color: 'from-slate-600',
  },
  {
    date: '15 Mars 2026',
    category: 'Gaz',
    title: 'Extension du réseau de distribution de gaz',
    excerpt: 'Ouverture de 5 nouveaux points de vente de gaz butane dans les régions du Sénégal.',
    image: IMAGES.news.carburant,
    full: 'Dans le cadre de son développement national, FAMABY a ouvert 5 nouveaux points de distribution de gaz butane dans les régions de Tambacounda, Kolda, Ziguinchor, Matam et Louga. Cette extension permet de desservir des milliers de foyers et d\'entreprises supplémentaires. FAMABY s\'inscrit ainsi dans la politique gouvernementale d\'accès à l\'énergie propre pour tous les Sénégalais, tout en proposant des prix accessibles et un service de livraison à domicile.',
    color: 'from-cyan-600',
  },
]

export default function Actualites() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-[#0a1f10] to-primary-dark text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[160px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-secondary-light font-semibold text-sm uppercase tracking-wider mb-3">Actualités</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">Nos dernières <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">nouvelles</span></motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/60 leading-relaxed">
              Suivez les dernières nouvelles de FAMABY dans les hydrocarbures, gaz, agriculture et construction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <motion.article key={i} variants={fadeUp} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${article.color} to-transparent rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                  <div className="h-56 overflow-hidden relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className={`bg-gradient-to-r ${article.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>{article.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-text-light mb-3">
                      <Calendar size={12} />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{article.excerpt}</p>

                    <AnimatePresence>
                      {expandedIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-text-light leading-relaxed">{article.full}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      {expandedIndex === i ? (
                        <>
                          <X size={14} />
                          Réduire
                        </>
                      ) : (
                        <>
                          Lire la suite
                          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
