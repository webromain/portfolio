# 🎓 Guide de Démarrage Rapide

## 5 minutes pour bien démarrer

### 1️⃣ Installation (1 min)

```bash
npm install
npm install react-router-dom
```

### 2️⃣ Démarrage (30 sec)

```bash
npm run dev
```

Accédez à **http://localhost:5174**

### 3️⃣ Explorer le code (2 min)

```bash
# Structure principale
src/main.jsx              # Routes et config
src/modules/ProjectsList/ # Module projets
```

### 4️⃣ Ajouter un projet (1 min 30)

Éditer `src/modules/ProjectsList/projects.json` :

```json
{
  "id": 4,
  "name": "Mon Projet",
  "description": "Description...",
  "image": "https://...",
  "technologies": ["React", "Node.js"],
  "href": "/projects/monprojet",
  "date": "2026-01-13"
}
```

### 5️⃣ Déployer (2 min)

```bash
# Vercel (recommandé)
npm install -g vercel
vercel
```

---

## 📚 Documentation Complète

1. **[README.md](README.md)** - Vue d'ensemble générale
2. **[ARCHITECTURE.md](ARCHITECTURE.md)** - Structure technique
3. **[API.md](API.md)** - Référence des composants
4. **[DEPLOYMENT.md](DEPLOYMENT.md)** - Guides de déploiement
5. **[QUICKSTART.md](QUICKSTART.md)** - Vous êtes ici !

---

## 🛠️ Commandes utiles

```bash
# Développement
npm run dev           # Démarrer le serveur
npm run build         # Build production
npm run preview       # Préview du build

# Qualité du code
npm run lint          # Vérifier avec ESLint
npm run lint -- --fix # Corriger automatiquement

# Installation
npm install           # Installer dépendances
npm install [package] # Ajouter un package
```

---

## ❓ FAQ

**Q: Comment ajouter une nouvelle page ?**  
A: Créer un dossier `src/modules/MaPage/`, puis ajouter une route dans `src/main.jsx`

**Q: Les images ne s'affichent pas ?**  
A: Vérifier les URLs dans `projects.json`

**Q: Comment changer la couleur du thème ?**  
A: Modifier les dégradés dans les fichiers CSS

**Q: Quelle est la meilleure plateforme de déploiement ?**  
A: Vercel pour React/Vite (gratuit, simple, rapide)

---

**Besoin d'aide ?** Consultez la documentation complète !
