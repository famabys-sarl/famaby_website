import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, FileText, ArrowRight } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const productOptions = [
  'Pétrole brut',
  'Essence Super',
  'Gasoil Standard',
  'Gasoil Spécial',
  'Terrain résidentiel',
  'Terrain commercial',
  'Terrain industriel',
  'Urée 46%',
  'Engrais NPK',
  'Intrants Agricoles',
  'Fer à Béton FT',
  'Fer à Béton T',
  'Aciers Spéciaux',
  'Bitume routier',
  'Enrobés',
  'Autre',
]

export default function Devis() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ nom: '', entreprise: '', telephone: '', email: '', produit: '', quantite: '', ville: '', commentaire: '' })

  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/devis.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || "Une erreur est survenue.")
      }
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.")
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.general.devis} alt="Demande de devis" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">Demande de Devis</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80">
              Remplissez le formulaire et recevez un devis pour hydrocarbures, gaz, engrais ou matériaux de construction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 text-center border border-green-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-emerald-400" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary/25">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-3">Demande envoyée !</h3>
                <p className="text-text-light max-w-md mx-auto mb-4">
                  Nous avons bien reçu votre demande de devis. Notre équipe vous contactera très rapidement.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/80 text-text-light px-4 py-2 rounded-lg text-sm mb-8 border border-gray-100">
                  <FileText size={16} className="text-secondary" />
                  Réponse sous 24h ouvrées
                </div>
                <div>
                  <button onClick={() => { setSubmitted(false); setFormData({ nom: '', entreprise: '', telephone: '', email: '', produit: '', quantite: '', ville: '', commentaire: '' }) }} className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-xl font-medium border border-secondary/20 hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                    <ArrowRight size={16} />
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} onSubmit={handleSubmit} className="bg-surface rounded-xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-xl overflow-hidden">
                  <img src={IMAGES.products.petrole} alt="Carburants" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src={IMAGES.products.ferBeton} alt="Construction" className="w-full h-48 object-cover" />
                </div>
              </div>

              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text mb-8">Informations</motion.h2>
              <div className="space-y-5">
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-text mb-1">Nom complet *</label>
                  <input type="text" name="nom" required value={formData.nom} onChange={handleChange} className={inputClass} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-text mb-1">Entreprise *</label>
                  <input type="text" name="entreprise" required value={formData.entreprise} onChange={handleChange} className={inputClass} />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={fadeUp}>
                    <label className="block text-sm font-medium text-text mb-1">Téléphone *</label>
                    <input type="tel" name="telephone" required value={formData.telephone} onChange={handleChange} className={inputClass} />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label className="block text-sm font-medium text-text mb-1">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                  </motion.div>
                </div>
                <motion.h3 variants={fadeUp} className="text-lg font-semibold text-text pt-4 border-t border-gray-200">Détails de la demande</motion.h3>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-text mb-1">Produit souhaité *</label>
                  <select name="produit" required value={formData.produit} onChange={handleChange} className={inputClass}>
                    <option value="">Sélectionnez un produit</option>
                    {productOptions.map((p) => (<option key={p} value={p}>{p}</option>))}
                  </select>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={fadeUp}>
                    <label className="block text-sm font-medium text-text mb-1">Quantité *</label>
                    <input type="text" name="quantite" required value={formData.quantite} onChange={handleChange} placeholder="Ex: 5000 litres" className={inputClass} />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label className="block text-sm font-medium text-text mb-1">Ville *</label>
                    <input type="text" name="ville" required value={formData.ville} onChange={handleChange} className={inputClass} />
                  </motion.div>
                </div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-text mb-1">Commentaire</label>
                  <textarea name="commentaire" rows={4} value={formData.commentaire} onChange={handleChange} placeholder="Précisez vos besoins, conditions de livraison, délais..." className={`${inputClass} resize-none`} />
                </motion.div>
                <motion.div variants={fadeUp} className="pt-4">
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md">
                    {sending ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Envoyer la demande
                      </>
                    )}
                  </button>
                  {error && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      {error}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  )
}
