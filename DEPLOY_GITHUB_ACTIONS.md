# Déploiement automatique avec GitHub Actions

## Le concept

```
PC                        GitHub                     OVH
┌─────────┐    push     ┌─────────────┐   FTP auto  ┌─────────────┐
│ Modifier │ ═════════→  │ GitHub      │ ═════════→   │ www/        │
│ le code  │             │ Actions     │              │ (site live) │
│          │             │ (build auto)│              │             │
└─────────┘             └─────────────┘              └─────────────┘
```

Vous push du code → GitHub build automatiquement → Le site se déploie sur OVH tout seul.

Le mot de passe SMTP est stocké dans **GitHub Secrets** (jamais dans le code).

---

## Prérequis

- Git installé sur votre PC
- Un compte GitHub
- Un hébergement OVH avec accès FTP

---

## Étape 1 : Créer le repo GitHub

1. Allez sur https://github.com/new
2. Remplissez :
   - **Name** : `famaby-site`
   - **Private** (recommandé)
3. Cliquez **Create repository**
4. Copiez l'URL (ex: `https://github.com/VOTRE_USER/famaby-site.git`)

---

## Étape 2 : Push le code sur GitHub

Sur votre PC, dans le terminal :

```bash
cd C:\Users\abdou\OneDrive\Bureau\Famaby_up\famaby_new

git remote add origin https://github.com/VOTRE_USER/famaby-site.git
git branch -M main
git push -u origin main
```

---

## Étape 3 : Créer les secrets GitHub

Les secrets stockent vos identifiants de manière sécurisée.

1. Sur GitHub, allez dans votre repo `famaby-site`
2. **Settings** → **Secrets and variables** → **Actions**
3. Cliquez **New repository secret**
4. Créez **4 secrets** :

| Nom | Valeur | Description |
|-----|--------|-------------|
| `FTP_HOST` | `ftp.famaby.sn` | Serveur FTP OVH |
| `FTP_USER` | `votre_login_ftp` | Login FTP |
| `FTP_PASSWORD` | `votre_mot_de_passe_ftp` | Mot de passe FTP |
| `SMTP_PASSWORD` | `#!Famaby@@690` | Mot de passe email contact@famaby.sn |

---

## Étape 4 : Le fichier deploy.yml (déjà créé)

Le fichier `.github/workflows/deploy.yml` fait tout automatiquement :

```yaml
name: Deploy to OVH

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Install Composer dependencies
        run: |
          sudo apt-get install -y php-cli
          composer install --no-dev --optimize-autoloader --working-dir=public/api

      - name: Generate config.php
        run: |
          cat > dist/api/config.php << 'PHPEOF'
          <?php
          return [
              'smtp_host' => 'smtp.mail.ovh.net',
              'smtp_port' => 587,
              'smtp_secure' => 'tls',
              'smtp_username' => 'contact@famaby.sn',
              'smtp_password' => '${{ secrets.SMTP_PASSWORD }}',
              'email_to' => 'contact@famaby.sn',
              'from_name' => 'FAMABY',
          ];
          PHPEOF

      - name: Copy vendor to dist
        run: cp -r public/api/vendor dist/api/vendor

      - name: Deploy to OVH via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /www/
          delete: true
          exclude:
            - api/logs/**
```

---

## Étape 5 : Push pour déclencher

```bash
git add .
git commit -m "Update deploy workflow"
git push
```

Le site se déploie automatiquement !

---

## Comment ça marche

```
Vous modifiez src/pages/Contact.tsx
         ↓
git push origin main
         ↓
GitHub Actions se déclenche :
  1. Installe les dépendances (npm ci)
  2. Build le projet (npm run build)
  3. Installe PHPMailer (composer install)
  4. Génère config.php avec le mot de passe des Secrets
  5. Copie vendor/ dans dist/
  6. Upload tout sur OVH via FTP
         ↓
https://famaby.sn est mis à jour
```

---

## Sécurité

| Élément | Où est-il stocké ? | Visible dans le code ? |
|---------|-------------------|----------------------|
| Mot de passe FTP | GitHub Secrets | ❌ Non |
| Mot de passe SMTP | GitHub Secrets | ❌ Non |
| config.php | Généré pendant le déploiement | ❌ Non |
| Code source | GitHub repo | ✅ Oui |

**Le mot de passe n'est jamais dans le code, jamais dans le repo.**

---

## Changer le mot de passe email

1. Changez le mot de passe sur OVH (Email → Boîtes mail → contact@famaby.sn)
2. Allez sur GitHub → **Settings** → **Secrets** → modifiez `SMTP_PASSWORD`
3. Faites un `git push` (même sans changement de code)

```bash
git commit --allow-empty -m "Update SMTP password"
git push
```

**Pas besoin de toucher à config.php !**

---

## Structure du projet

```
famaby-site/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← script de déploiement
├── public/
│   └── api/
│       ├── contact.php       ← envoi email
│       ├── devis.php         ← envoi email
│       ├── helpers.php       ← fonctions utilitaires
│       └── .htaccess         ← protection
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSlider.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Accueil.tsx
│   │   ├── APropos.tsx
│   │   ├── Activites.tsx
│   │   ├── Contact.tsx
│   │   ├── Devis.tsx
│   │   ├── Produits.tsx
│   │   ├── Realisations.tsx
│   │   ├── Partenaires.tsx
│   │   ├── Actualites.tsx
│   │   └── MentionsLegales.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .gitignore
```

---

## Commandes utiles

```bash
# Build du projet
npm run build

# Lancer en local
npm run dev:all

# Push sur GitHub
git add .
git commit -m "Description des changements"
git push

# Voir les logs GitHub Actions
# → Allez sur GitHub → Actions → cliquez sur le workflow
```

---

## Dépannage

| Problème | Solution |
|----------|----------|
| Le push ne déclenche pas | Vérifiez que le workflow est dans `.github/workflows/deploy.yml` |
| Erreur FTP | Vérifiez les secrets GitHub (FTP_HOST, FTP_USER, FTP_PASSWORD) |
| Erreur SMTP | Vérifiez le secret SMTP_PASSWORD |
| Le build échoue | Vérifiez que `npm run build` fonctionne en local |
| Le site ne se met pas à jour | Vérifiez l'onglet Actions sur GitHub |
| config.php manquant | Vérifiez l'étape "Generate config.php" dans le workflow |

---

## Résumé

| Étape | Action | Fréquence |
|-------|--------|-----------|
| 1 | Créer repo GitHub | 1 fois |
| 2 | Push le code | 1 fois |
| 3 | Créer les 4 secrets GitHub | 1 fois |
| 4 | Push pour déployer | À chaque mise à jour |
| 5 | Changer mot de passe | Modifier le secret + push |

**Après la configuration initiale, vous n'avez plus qu'à faire `git push` pour mettre à jour le site.**
