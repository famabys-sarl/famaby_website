// images.ts — Configuration centralisée des images
// Place tes images dans public/images/ puis mets à jour les chemins ici

const IMAGES = {
  // ─── Hero Slider (6 slides) ───
  hero: {
    petrole:      'https://images.unsplash.com/photo-1726111440333-ab02a5a36d5f?w=1920&h=1080&fit=crop&q=85',
    petrole1:     'https://images.unsplash.com/photo-1707960189679-1ea1e312f63f?w=1920&h=1080&fit=crop&q=85',
    petrole01:    'https://images.unsplash.com/photo-1706466777992-a05c6c402ae9?w=1920&h=1080&fit=crop&q=85',
    uree:         'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&h=1080&fit=crop&q=85',
    butume:       'https://images.unsplash.com/photo-1772852340517-b11ec88979fc?w=1920&h=1080&fit=crop&q=85',
    butume01:     'https://images.unsplash.com/photo-1772852331753-fc11e83a7288?w=1920&h=1080&fit=crop&q=85',
  },

  // ─── Produits ───
  products: {
    petrole:      'https://images.unsplash.com/photo-1722246128616-76c934278e0a?w=800&h=600&fit=crop&q=80',
    essence:      'https://images.unsplash.com/photo-1748761751275-e55a2a29e1bf?w=800&h=600&fit=crop&q=80',
    gasoil:       'https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=800&h=600&fit=crop&q=80',
    terrains:     'https://images.unsplash.com/photo-1637555754372-54538a035312?w=800&h=600&fit=crop&q=80',
    uree:         'https://images.unsplash.com/photo-1637500980709-6e65a6c2418a?w=800&h=600&fit=crop&q=80',
    npk:          'https://images.unsplash.com/photo-1589923188651-268a9765e432?w=800&h=600&fit=crop&q=80',
    intrants:     'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&q=80',
    ferBeton:     'https://images.unsplash.com/photo-1763771420303-0f11ccf613d1?w=800&h=600&fit=crop&q=80',
    ferT:         'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
    aciers:       'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop&q=80',
    bitume:       'https://images.unsplash.com/photo-1683880695653-3afd290c9e41?w=800&h=600&fit=crop&q=80',
    enrobes:      'https://images.unsplash.com/photo-1772852340517-b11ec88979fc?w=800&h=600&fit=crop&q=80',
    etancheite:   'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&h=600&fit=crop&q=80',
  },

  // ─── Actualités ───
  news: {
    gaz:         'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80',
    engrais:     'https://images.unsplash.com/photo-1589923188651-268a9765e432?w=800&h=600&fit=crop&q=80',
    bitume:      'https://images.unsplash.com/photo-1772852340517-b11ec88979fc?w=800&h=600&fit=crop&q=80',
    carburant:   'https://images.unsplash.com/photo-1748761751275-e55a2a29e1bf?w=800&h=600&fit=crop&q=80',
  },

  // ─── About ───
  about: {
    hero:            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=85',
    hydrocarbures:   'https://images.unsplash.com/photo-1722246128616-76c934278e0a?w=800&h=600&fit=crop&q=80',
    gaz:             'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80',
    agriculture:     'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&q=80',
    construction:    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
  },

  // ─── Réalisations ───
  realisations: {
    petrole:         'https://images.unsplash.com/photo-1722246128616-76c934278e0a?w=800&h=600&fit=crop&q=80',
    gaz:             'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80',
    agriculture:     'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&q=80',
    fer:             'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
    bitume:          'https://images.unsplash.com/photo-1772852340517-b11ec88979fc?w=800&h=600&fit=crop&q=80',
    terrains:        'https://images.unsplash.com/photo-1637555754372-54538a035312?w=800&h=600&fit=crop&q=80',
  },

  // ─── Activités ───
  activites: {
    distribution:    'https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=800&h=600&fit=crop&q=80',
    immobilier:      'https://images.unsplash.com/photo-1637555754372-54538a035312?w=800&h=600&fit=crop&q=80',
    agriculture:     'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&q=80',
    construction:    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80',
    routes:          'https://images.unsplash.com/photo-1772852340517-b11ec88979fc?w=800&h=600&fit=crop&q=80',
    importExport:    'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=600&fit=crop&q=80',
    conseil:         'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
  },

  // ─── Partenaires (logos) ───
  partners: {
    petrosen:       '/images/partners/petrosen.png',
    totalenergies:  '/images/partners/totalenergies.png',
    butagaz:        '/images/partners/butagaz.png',
    yara:           '/images/partners/yara.png',
    arcelormittal:  '/images/partners/arcelormittal.png',
    ocp:            '/images/partners/ocp.png',
    sar:            '/images/partners/sar.png',
    dangote:        '/images/partners/dangote.png',
  },

  // ─── Général / backgrounds ───
  general: {
    contact:     'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=85',
    devis:       'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=85',
    partenaires: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=85',
    activites:   'https://images.unsplash.com/photo-1771575519808-53cdb4c36fa5?w=1920&h=1080&fit=crop&q=85',
    produits:    'https://images.unsplash.com/photo-1722246128616-76c934278e0a?w=1920&h=1080&fit=crop&q=85',
    realisations:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&q=85',
    mentions:    'https://images.unsplash.com/photo-1450101499163-c8848e9c0b69?w=1920&h=1080&fit=crop&q=85',
  },

  // ─── Logo ───
  logo: {
    main:       '/images/logo/famaby-logo.png',
    icon:       '/images/logo/famaby-icon.png',
    white:      '/images/logo/famaby-white.png',
  },
}

export default IMAGES
