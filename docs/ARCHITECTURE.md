# 🏗️ Architecture du projet

## Vue d'ensemble

```
portfolio/
├── docs/                          # 📚 Documentation
│   ├── README.md                  # Documentation complète
│   ├── ARCHITECTURE.md            # Détails architecturaux
│   ├── API.md                     # Documentation API
│   └── DEPLOYMENT.md              # Guide de déploiement
├── src/                           # Code source
│   ├── main.jsx                   # Point d'entrée + Routing
│   ├── index.html                 # Template HTML
│   ├── index.css                  # Styles globaux
│   └── modules/
│       ├── ScheduleHeader/        # Composant header
│       │   ├── ScheduleHeader.jsx
│       │   └── ScheduleHeader.css
│       ├── ProjectsList/          # Module projets
│       │   ├── ProjectsList.jsx
│       │   ├── ProjectCard.jsx
│       │   ├── ProjectCard.css
│       │   ├── ProjectsList.css
│       │   ├── projects.json
│       │   └── pages/
│       │       ├── ProjectDetail.jsx
│       │       └── ProjectDetail.css
│       └── WeekSchedule/          # Planificateur
│           └── ...
├── public/                        # Assets statiques
├── node_modules/                  # Dépendances
├── package.json                   # Configuration npm
├── vite.config.js                 # Configuration Vite
├── tailwind.config.js             # Configuration Tailwind
├── postcss.config.js              # Configuration PostCSS
└── eslint.config.js               # Configuration ESLint
```

## 🔄 Flux de données

### 1. **Chargement des projets**

```
ProjectsList (parent)
    ↓
useEffect → Charge projects.json
    ↓
setProjects(projectsData.projects)
    ↓
Render ProjectCard × N
```

### 2. **Navigation vers détail**

```
ProjectCard (onClick)
    ↓
<Link to={`/projects/${id}`}>
    ↓
React Router → /projects/1
    ↓
ProjectDetail useParams({projectId})
    ↓
Cherche projet avec id=1 dans projects.json
    ↓
Affiche les détails
```

## 🧩 Composants et dépendances

### Graphe de dépendances

```
App (main.jsx)
├── Router (react-router-dom)
├── Snowfall (react-snowfall)
├── ScheduleHeader
│   └── CSS personnalisé
├── Routes
│   ├── ProjectsList (route: /)
│   │   └── ProjectCard (x N)
│   │       ├── Link (react-router-dom)
│   │       └── CSS + animations
│   └── ProjectDetail (route: /projects/:projectId)
│       ├── useParams (react-router-dom)
│       ├── useNavigate (react-router-dom)
│       └── CSS personnalisé
└── index.css (global)
```

## 📊 Structure des données

### Objet Projet

```javascript
{
  id: 1,                           // Identifiant unique
  name: "Project Alpha",           // Nom affiché
  description: "...",              // Description courte
  image: "https://...",            // Image de couverture
  technologies: ["React", "..."],  // Stack technique
  href: "/projects/alpha",         // Lien externe
  date: "2025-12-01"              // Date de création
}
```

### État React (ProjectsList)

```jsx
const [projects, setProjects] = useState([]);
// projects = Objet Projet[]
```

## 🎯 Points d'extension

### Ajouter une nouvelle fonctionnalité

**1. Nouvelle page** :

- Créer dossier `src/modules/MaPage/`
- Créer `MaPage.jsx` et `MaPage.css`
- Ajouter route dans `main.jsx`

**2. Nouveau composant** :

- Créer fichier `MonComposant.jsx`
- Importer dans le parent
- Passer les props nécessaires

**3. Nouvelles données** :

- Créer `donnees.json` dans le module
- Importer avec `import data from "./donnees.json"`
- Utiliser `data` dans le composant

## 🚀 Optimisations possibles

### Performance

- [ ] Lazy loading des images
- [ ] Code splitting par route
- [ ] Compression des assets
- [ ] Mise en cache des données

### UX

- [ ] Loading skeletons
- [ ] Animations de transition
- [ ] Filtres/recherche des projets
- [ ] Galerie d'images par projet

### SEO

- [ ] Meta tags dynamiques
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Open Graph meta tags

### API/Backend

- [ ] Intégration API REST
- [ ] Base de données
- [ ] Authentification
- [ ] Admin panel pour modifier les projets

## 🔐 Sécurité

### Actuellement

- ✅ Imports React sûrs
- ✅ Pas d'évaluation de code
- ✅ Validation basique des routes

### À améliorer

- [ ] Validation des données en entrée
- [ ] Sanitization des URLs
- [ ] CORS configuré correctement
- [ ] Rate limiting sur API

---

**Version** : 1.0.0
