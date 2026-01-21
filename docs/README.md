# 📚 Documentation du Portfolio

## 📋 Table des matières

1. [Aperçu général](#aperçu-général)
2. [Architecture du projet](#architecture-du-projet)
3. [Installation et démarrage](#installation-et-démarrage)
4. [Modules et composants](#modules-et-composants)
5. [Gestion des projets](#gestion-des-projets)
6. [Routing](#routing)
7. [Styles et design](#styles-et-design)
8. [Guide de développement](#guide-de-développement)
9. [Déploiement](#déploiement)

---

## 🎯 Aperçu général

Ce portfolio est une application React moderne construite avec **Vite** et **React Router**, déployée avec un design élégant et moderne utilisant **Tailwind CSS**.

### Fonctionnalités principales

- ✨ Affichage dynamique des projets
- 🔗 Navigation fluide entre pages
- 📱 Design responsive
- ❄️ Effet de neige animé
- 🎨 Gradients et animations modernes

---

## 🏗️ Architecture du projet

```
src/
├── main.jsx              # Point d'entrée (App + Routing)
├── index.css             # Styles globaux
├── index.html            # Template HTML
└── modules/
    ├── ScheduleHeader/       # Composant header principal
    │   ├── ScheduleHeader.jsx
    │   └── ScheduleHeader.css
    ├── ProjectsList/         # Gestion des projets
    │   ├── ProjectsList.jsx   # Composant liste
    │   ├── ProjectCard.jsx    # Composant carte projet
    │   ├── projects.json      # Données des projets
    │   ├── ProjectsList.css
    │   ├── ProjectCard.css
    │   └── pages/
    │       ├── ProjectDetail.jsx   # Page détail projet
    │       └── ProjectDetail.css
    └── WeekSchedule/         # Planificateur hebdomadaire
```

---

## 🚀 Installation et démarrage

### Prérequis

- Node.js 16+
- npm ou yarn

### Installation

```bash
# Cloner le dépôt (si applicable)
git clone <votre-repo>
cd portfolio

# Installer les dépendances
npm install

# Installer les dépendances supplémentaires si nécessaire
npm install react-router-dom
npm install react-snowfall
npm install tailwindcss postcss autoprefixer
```

### Démarrer le serveur de développement

```bash
npm run dev
```

L'application sera accessible à `http://localhost:5174`

### Build pour production

```bash
npm run build
```

### Preview du build

```bash
npm run preview
```

---

## 📦 Modules et composants

### 1. **ScheduleHeader**

Composant de header/navigation principal.

**Localisation** : `src/modules/ScheduleHeader/`

**Fichiers** :

- `ScheduleHeader.jsx` - Composant React
- `ScheduleHeader.css` - Styles

**Props** : Aucune actuellement

### 2. **ProjectsList**

Module de gestion complète des projets.

**Localisation** : `src/modules/ProjectsList/`

#### 2.1 **ProjectsList.jsx** - Composant parent

Récupère et affiche tous les projets en grille.

```jsx
import ProjectsList from "./modules/ProjectsList/ProjectsList.jsx";

// Utilisation
<ProjectsList />;
```

#### 2.2 **ProjectCard.jsx** - Composant de carte projet

Affiche une carte projet individuelle avec navigation.

**Props** :

```jsx
{
  project: {
    id: number,
    name: string,
    description: string,
    image: string,
    technologies: string[],
    date: string,
    href: string
  }
}
```

#### 2.3 **ProjectDetail.jsx** - Page de détail projet

Affiche les détails complets d'un projet.

**Route** : `/projects/:projectId`

### 3. **projects.json**

Fichier de données contenant tous les projets.

**Localisation** : `src/modules/ProjectsList/projects.json`

**Structure** :

```json
{
  "projects": [
    {
      "id": 1,
      "name": "Project Alpha",
      "description": "Description du projet",
      "image": "https://via.placeholder.com/300x200",
      "technologies": ["React", "Node.js"],
      "href": "/projects/alpha",
      "date": "2025-12-01"
    }
  ]
}
```

---

## 🎯 Gestion des projets

### Ajouter un nouveau projet

**Méthode 1 : Éditer projects.json directement**

```json
{
  "id": 4,
  "name": "Mon Nouveau Projet",
  "description": "Description détaillée...",
  "image": "https://mon-image.jpg",
  "technologies": ["React", "TypeScript", "Tailwind"],
  "href": "/projects/nouveau",
  "date": "2026-01-13"
}
```

**Méthode 2 : Via la fonction JavaScript**

```javascript
const addProject = (newProject) => {
  const projectWithId = {
    id: projects.length + 1,
    date: new Date().toISOString().split("T")[0],
    ...newProject,
  };
  setProjects([...projects, projectWithId]);
  // Persister dans le JSON
};
```

### Structure d'un projet

| Propriété      | Type     | Description                   |
| -------------- | -------- | ----------------------------- |
| `id`           | number   | Identifiant unique            |
| `name`         | string   | Nom du projet                 |
| `description`  | string   | Description courte            |
| `image`        | string   | URL de l'image                |
| `technologies` | string[] | Array de technologies         |
| `href`         | string   | URL externe du projet         |
| `date`         | string   | Date de création (YYYY-MM-DD) |

---

## 🔗 Routing

Le projet utilise **React Router v6** pour la navigation.

### Routes disponibles

| Route                  | Composant       | Description                        |
| ---------------------- | --------------- | ---------------------------------- |
| `/`                    | `ProjectsList`  | Page d'accueil - liste des projets |
| `/projects/:projectId` | `ProjectDetail` | Détail d'un projet spécifique      |

### Configuration du routeur

**Fichier** : `src/main.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<Router>
  <Routes>
    <Route path="/" element={<ProjectsList />} />
    <Route path="/projects/:projectId" element={<ProjectDetail />} />
  </Routes>
</Router>;
```

### Navigation

Utiliser le composant `Link` pour la navigation interne :

```jsx
import { Link } from "react-router-dom";

<Link to={`/projects/${id}`}>Voir le projet</Link>;
```

---

## 🎨 Styles et design

### Thème de couleurs

- **Primaire** : Indigo (#6366f1)
- **Secondaire** : Purple (#a855f7)
- **Fond** : Dark slate (#0f172a, #1e293b)
- **Texte** : Light slate (#e2e8f0)

### Dégradés utilisés

```css
/* Gradient primaire */
background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);

/* Gradient de texte */
background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Points de rupture responsifs

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

### CSS personnalisé

**Fichiers CSS principaux** :

- `src/index.css` - Styles globaux
- `src/modules/ProjectsList/ProjectsList.css` - Grille des projets
- `src/modules/ProjectsList/ProjectCard.css` - Carte de projet
- `src/modules/ProjectsList/pages/ProjectDetail.css` - Page détail
- `src/modules/ScheduleHeader/ScheduleHeader.css` - Header

---

## 👨‍💻 Guide de développement

### Ajouter un nouveau module

```bash
# 1. Créer le dossier
mkdir src/modules/MonModule

# 2. Créer les fichiers
touch src/modules/MonModule/MonModule.jsx
touch src/modules/MonModule/MonModule.css

# 3. Créer le composant
```

```jsx
// src/modules/MonModule/MonModule.jsx
function MonModule() {
  return <div className="mon-module">{/* Contenu */}</div>;
}

export default MonModule;
```

### Importer un module

```jsx
import MonModule from "./modules/MonModule/MonModule.jsx";

// Utilisation
<MonModule />;
```

### Ajouter une nouvelle route

**Fichier** : `src/main.jsx`

```jsx
<Routes>
  <Route path="/" element={<ProjectsList />} />
  <Route path="/projects/:projectId" element={<ProjectDetail />} />
  <Route path="/ma-page" element={<MonModule />} />
</Routes>
```

### Debug et développement

**Console navigateur** :

```javascript
// Vérifier les projets chargés
console.log(projectsData.projects);
```

**React DevTools** :

- Extension Firefox/Chrome disponible
- Inspecter l'état des composants

---

## 🌐 Déploiement

### Plateformes recommandées

#### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Drag & drop le dossier 'dist' sur Netlify
```

#### GitHub Pages

```bash
npm run build
# Pousser le dossier 'dist' sur la branche 'gh-pages'
```

### Variables d'environnement

Créer un fichier `.env` :

```env
VITE_API_URL=https://api.example.com
VITE_ENV=production
```

Accès dans le code :

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📝 Convention de nommage

### Fichiers

- Composants React : `PascalCase.jsx` (ex: `ProjectCard.jsx`)
- CSS : `kebab-case.css` (ex: `project-card.css`)
- JSON : `kebab-case.json` (ex: `projects.json`)

### Composants

- Composants : `PascalCase` (ex: `ProjectsList`)
- Hooks personnalisés : `useCamelCase` (ex: `useProjects`)

### Classes CSS

- Classes CSS : `kebab-case` (ex: `.project-card-title`)

---

## 🐛 Troubleshooting

### Le serveur ne démarre pas

```bash
# Vérifier les ports utilisés
lsof -i :5174

# Utiliser un autre port
npm run dev -- --port 3000
```

### Les projets ne s'affichent pas

1. Vérifier que `projects.json` existe
2. Vérifier la structure JSON (pas d'erreurs de virgule)
3. Vérifier les imports dans `ProjectsList.jsx`

### Les styles ne s'appliquent pas

1. Vérifier les chemins des fichiers CSS
2. Vérifier les noms des classes CSS
3. Nettoyer le cache : `npm run build && npm run preview`

---

## 📞 Support et contact

Pour toute question ou problème, vérifier :

1. Cette documentation
2. Les commentaires dans le code
3. La console du navigateur pour les erreurs

---

**Version** : 1.0.0  
**Dernière mise à jour** : 13 Janvier 2026  
**Auteur** : Développement Portfolio
