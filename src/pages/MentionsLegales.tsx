import { motion } from 'framer-motion'
import IMAGES from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function MentionsLegales() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
        <img src={IMAGES.general.mentions} alt="Mentions légales" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">Mentions Légales</motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="prose prose-gray max-w-none space-y-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-text mb-3">1. Éditeur du site</h2>
              <p className="text-text-light leading-relaxed">
                Le site <strong>www.famaby.sn</strong> est édité par la société FAMABY, dont le siège social est situé au 37 Avenue Cheikh Anta Diop, Immeubles Palazzo Suite, 5e étage, Dakar, Sénégal.
                <br />Email : <a href="mailto:contact@famaby.sn" className="text-primary hover:underline">contact@famaby.sn</a>
                <br />Téléphone : <a href="tel:+221338653733" className="text-primary hover:underline">+221 33 865 37 33</a>
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-text mb-3">2. Hébergeur</h2>
              <p className="text-text-light leading-relaxed">
                Le site est hébergé par OVH SAS, dont le siège social est situé 2 rue Kellermann, 59100 Roubaix, France.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-text mb-3">3. Propriété intellectuelle</h2>
              <p className="text-text-light leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de FAMABY ou de ses partenaires.
                Toute reproduction, représentation ou diffusion, totale ou partielle, du contenu de ce site sans autorisation est interdite.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-text mb-3">4. Données personnelles</h2>
              <p className="text-text-light leading-relaxed">
                Conformément à la loi sénégalaise sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                Pour exercer ce droit, veuillez nous contacter à l'adresse : <a href="mailto:contact@famaby.sn" className="text-primary hover:underline">contact@famaby.sn</a>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-text mb-3">5. Cookies</h2>
              <p className="text-text-light leading-relaxed">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-text mb-3">6. Contact</h2>
              <p className="text-text-light leading-relaxed">
                Pour toute question relative aux mentions légales du site, vous pouvez nous contacter à :
                <br />Email : <a href="mailto:contact@famaby.sn" className="text-primary hover:underline">contact@famaby.sn</a>
                <br />Téléphone : <a href="tel:+221338653733" className="text-primary hover:underline">+221 33 865 37 33</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
