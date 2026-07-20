# Guide de déploiement FAMABY sur OVH

## Prérequis

- [FileZilla](https://filezilla-project.org) installé sur votre PC
- Accès à votre espace client OVH
- Le site WordPress actuel sauvegardé

---

## Étape 1 : Build du projet

```bash
cd C:\Users\abdou\OneDrive\Bureau\Famaby_up\famaby_new
npm run build
```

Le dossier `dist/` contient tout le site prêt à déployer.

---

## Étape 2 : Connexion FTP

1. Ouvrez **FileZilla**
2. En haut, remplissez :
   ```
   Hôte : ftp.famaby.sn
   Utilisateur : votre_login_ftp
   Mot de passe : votre_mot_de_passe_ftp
   Port : 21
   ```
3. Cliquez **Connexion rapide**

> Trouvez vos identifiants FTP dans : OVH → Hébergements → votre hébergement → onglet **FTP**

---

## Étape 3 : Sauvegarder WordPress

1. Dans le panneau **droit** (serveur), double-cliquez sur `www/`
2. Sélectionnez tout (Ctrl+A)
3. Clic droit → **Télécharger** dans un dossier `sauvegarde_wordpress/` sur votre PC

---

## Étape 4 : Nettoyer le dossier www/

Dans le panneau **droit** (serveur), supprimez de `www/` :

- `wp-config.php`
- `wp-login.php`
- `wp-settings.php`
- `wp-admin/` (dossier)
- `wp-includes/` (dossier)
- `wp-content/` (dossier)
- `.htaccess` (fichier WordPress)

---

## Étape 5 : Uploader le nouveau site

1. Dans le panneau **gauche** (PC), naviguez jusqu'à `dist/`
2. Sélectionnez tout (Ctrl+A)
3. Dans le panneau **droit** (serveur), assurez-vous d'être dans `www/`
4. Clic droit → **Uploader**
5. Attendez que tout soit transféré

---

## Étape 6 : Vérifier les emails

1. OVH → **Email** → **Boîtes mail**
2. Vérifiez que **contact@famaby.sn** existe
3. Si non, créez-la avec le mot de passe de `config.php`

---

## Étape 7 : Configurer le domaine

1. OVH → **Domaines** → `famaby.sn` → **Zone DNS**
2. Vérifiez l'enregistrement **A** :
   ```
   Type : A
   Sous-domaine : (vide)
   Cible : IP de votre hébergement
   TTL : 3600
   ```
3. OVH → **Hébergements** → **Multisite** :
   - Ajoutez `famaby.sn`
   - Racine web : `www`

---

## Étape 8 : Activer HTTPS

1. OVH → **Hébergements** → **Sécurité**
2. **Certificat SSL** → **Activer** → **Let's Encrypt**
3. Activez **Rediriger vers HTTPS**

---

## Étape 9 : Tester

1. Allez sur **https://famaby.sn**
2. Testez chaque page
3. Testez le formulaire Contact
4. Vérifiez que l'email arrive dans `contact@famaby.sn`

---

## Structure sur le serveur

```
www/
├── index.html
├── favicon.svg
├── icons.svg
├── assets/
│   ├── index-BOYTI87u.css
│   └── index-BFX0SOU2.js
└── api/
    ├── contact.php
    ├── devis.php
    ├── helpers.php
    ├── config.php      ← protégé par .htaccess
    ├── .htaccess
    ├── vendor/
    │   └── phpmailer/
    └── logs/
```

---

## En cas de problème

| Problème | Solution |
|----------|----------|
| Site ne charge pas | Vérifiez la DNS (Zone DNS → enregistrement A) |
| Formulaire ne marche pas | Vérifiez que PHP fonctionne : `https://famaby.sn/api/contact.php` |
| Email ne part pas | Vérifiez `config.php` et la boîte mail OVH |
| Erreur SSL | Attendez 24h, puis réactivez le certificat |
| Page blanche | Vérifiez la console du navigateur (F12) |
