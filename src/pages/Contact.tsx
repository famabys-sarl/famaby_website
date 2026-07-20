import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ nom: '', prenom: '', telephone: '', email: '', message: '' })

  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact.php', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.general.contact} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">Contact</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80">
              N'hésitez pas à nous contacter pour toute question ou demande d'information.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text mb-6">Nos Coordonnées</motion.h2>
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Adresse</h3>
                    <p className="text-sm text-text-light">37 Avenue Cheikh Anta Diop<br />Immeubles Palazzo Suite, 5e étage<br />Dakar, Sénégal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Téléphone</h3>
                    <a href="tel:+221338653733" className="text-sm text-text-light hover:text-primary transition-colors">+221 33 865 37 33</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Email</h3>
                    <a href="mailto:contact@famaby.sn" className="text-sm text-text-light hover:text-primary transition-colors">contact@famaby.sn</a><br />
                    <a href="mailto:gerant@famaby.sn" className="text-sm text-text-light hover:text-primary transition-colors">gerant@famaby.sn</a>
                  </div>
                </div>
              </motion.div>

              <div className="mt-8 bg-surface rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-text text-sm mb-3">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm text-text-light">
                  <div className="flex justify-between"><span>Lundi - Vendredi</span><span className="font-medium text-text">8h00 - 18h00</span></div>
                  <div className="flex justify-between"><span>Samedi</span><span className="font-medium text-text">8h00 - 13h00</span></div>
                  <div className="flex justify-between"><span>Dimanche</span><span className="font-medium text-red-500">Fermé</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 text-center border border-green-100 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-emerald-400" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-3">Message envoyé !</h3>
                    <p className="text-text-light max-w-md mx-auto mb-8">
                      Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <button onClick={() => { setSubmitted(false); setFormData({ nom: '', prenom: '', telephone: '', email: '', message: '' }) }} className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-medium border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                      <Send size={16} />
                      Envoyer un autre message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-text mb-6">Envoyez-nous un message</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Nom *</label>
                      <input type="text" name="nom" required value={formData.nom} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Prénom *</label>
                      <input type="text" name="prenom" required value={formData.prenom} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Téléphone *</label>
                      <input type="tel" name="telephone" required value={formData.telephone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text mb-1">Message *</label>
                    <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white resize-none" />
                  </div>
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md">
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
                        Envoyer
                      </>
                    )}
                  </button>
                  {error && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      {error}
                    </motion.div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-8">
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text mb-2">Notre Localisation</motion.h2>
            <motion.p variants={fadeUp} className="text-text-light">37 Avenue Cheikh Anta Diop, Immeubles Palazzo Suite, 5e étage, Dakar</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.7!2d-17.4677!3d14.7103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f3c2b2b2b2%3A0x1234567890abcdef!2sAvenue%20Cheikh%20Anta%20Diop%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1700000000000!5m2!1sfr!2ssn"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte FAMABY Dakar"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
