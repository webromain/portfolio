# 🚀 Guide de Déploiement

## 📋 Table des matières

1. [Préparation](#préparation)
2. [Vercel (Recommandé)](#vercel-recommandé)
3. [Netlify](#netlify)
4. [GitHub Pages](#github-pages)
5. [Heroku](#heroku)
6. [Docker](#docker)
7. [Optimisations](#optimisations)

---

## ✅ Préparation

### 1. Vérifier la build locale

```bash
# Nettoyer
npm run lint

# Builder
npm run build

# Tester la production
npm run preview
```

### 2. Vérifier la structure

```bash
# Vérifier que dist/ est généré
ls -la dist/

# Vérifier les assets
cat dist/index.html
```

### 3. Variables d'environnement

Créer `.env.production` :

```env
VITE_ENV=production
VITE_API_BASE_URL=https://api.example.com
```

### 4. Git (si applicable)

```bash
# Vérifier que tout est commité
git status

# Créer une branche de déploiement
git checkout -b deploy/production
```

---

## 🎯 Vercel (Recommandé)

### Avantages

✅ Déploiement automatique depuis Git  
✅ Preview automatiques  
✅ Domaine custom gratuit  
✅ Support Vite natif  
✅ Analytics gratuit

### Étapes

#### 1. Installation CLI

```bash
npm install -g vercel
```

#### 2. Première déploiement

```bash
vercel
```

**Questions** :

- Project name : `portfolio`
- Which scope : Select your account
- Link to existing project? : No
- Which directory : `./` (racine)
- Modify vercel.json : No

#### 3. Configuration vercel.json

Créer `vercel.json` à la racine :

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

#### 4. Domaine custom

```bash
# Ajouter un domaine
vercel domains add mon-portfolio.com

# Vérifier DNS
vercel domains ls
```

#### 5. Variables d'environnement

```bash
# Ajouter via CLI
vercel env add VITE_API_BASE_URL https://api.example.com

# Ou dans dashboard Vercel
# Settings → Environment Variables
```

#### 6. Déploiement automatique

- Push vers `main` branch
- Vercel redéploie automatiquement

#### 7. Monitoring

```bash
# Voir les déploiements
vercel ls

# Logs en direct
vercel logs
```

---

## 🌐 Netlify

### Avantages

✅ Interface simple  
✅ Build gratuit  
✅ Formulaires gratuits  
✅ Redirection automatique

### Étapes

#### 1. Créer un compte

```bash
# https://netlify.com
# S'inscrire avec GitHub/GitLab
```

#### 2. Configuration netlify.toml

Créer `netlify.toml` à la racine :

```toml
[build]
command = "npm run build"
publish = "dist"

[build.environment]
NODE_VERSION = "18"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

#### 3. Déploiement depuis Git

- Connecter repo GitHub
- Sélectionner branche (`main`)
- Netlify configure automatiquement

#### 4. Domaine custom

- Settings → Domain Management
- Add custom domain
- Configurer DNS

#### 5. Preview deployments

```bash
# Préview sur chaque PR
# Automatique si git est connecté
```

#### 6. Formulaires Netlify

```html
<form name="contact" method="POST" netlify>
  <input type="text" name="name" />
  <button type="submit">Envoyer</button>
</form>
```

---

## 📄 GitHub Pages

### Configuration

#### 1. Créer le fichier vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // Si pas de domaine custom
  // ou
  // base: '/', // Si domaine custom
});
```

#### 2. Créer workflow GitHub Actions

`.github/workflows/deploy.yml` :

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install & Build
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 3. Activer GitHub Pages

- Settings → Pages
- Source : `Deploy from a branch`
- Branch : `gh-pages` / `root`

---

## 🐳 Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### docker-compose.yml

```yaml
version: "3.8"

services:
  portfolio:
    build: .
    ports:
      - "80:80"
    environment:
      - VITE_ENV=production
```

### Commandes

```bash
# Build
docker build -t portfolio:latest .

# Run
docker run -p 80:80 portfolio:latest

# Avec Docker Compose
docker-compose up -d
```

---

## ⚡ Optimisations

### 1. Compression

```bash
npm install -D compression

# Dans vite.config.js
import compression from 'vite-plugin-compression'

export default {
  plugins: [
    compression({
      ext: '.gz'
    })
  ]
}
```

### 2. Lazy Loading des images

```jsx
<img src={image} alt={name} loading="lazy" decoding="async" />
```

### 3. Code splitting

```jsx
// Lazy loading de routes
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));

<Suspense fallback={<Loading />}>
  <ProjectDetail />
</Suspense>;
```

### 4. Service Worker

```bash
npm install vite-plugin-pwa
```

### 5. Optimiser les CSS

```css
/* Purger les styles inutilisés */
@purge;
```

### 6. Minimiser les assets

```javascript
// vite.config.js
export default {
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Retirer console.log en prod
      },
    },
  },
};
```

---

## 🔍 Monitoring en Production

### Sentry (Error tracking)

```bash
npm install @sentry/react
```

```javascript
// main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://key@sentry.io/project",
  environment: import.meta.env.VITE_ENV,
});
```

### Analytics

**Google Analytics** :

```javascript
// Ajouter dans index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🚨 Checklist pré-déploiement

- [ ] Pas d'erreurs ESLint (`npm run lint`)
- [ ] Build OK (`npm run build`)
- [ ] Preview OK (`npm run preview`)
- [ ] Tests passent (si applicable)
- [ ] Pas de `console.log()` en prod
- [ ] Variables d'env configurées
- [ ] Images optimisées
- [ ] Métadonnées Open Graph
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] SSL/HTTPS activé
- [ ] Domaine custom configuré

---

## 🔄 Rollback

### Vercel

```bash
# Voir l'historique
vercel deployments

# Redéployer une version précédente
vercel rollback
```

### Netlify

- Deployments → Sélectionner une version antérieure
- Publish deploy

### GitHub Pages

```bash
# Créer une branche de secours
git checkout -b deploy/backup
git push origin deploy/backup
```

---

## 📞 Support

**Vercel** : https://vercel.com/support  
**Netlify** : https://support.netlify.com  
**GitHub Pages** : https://docs.github.com/en/pages

---

**Version** : 1.0.0  
**Dernière mise à jour** : 13 Janvier 2026
