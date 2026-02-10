# 📖 Documentation API - Composants

## Table des matières

1. [ProjectsList](#projectslist)
2. [ProjectCard](#projectcard)
3. [ProjectDetail](#projectdetail)
4. [ScheduleHeader](#scheduleheader)

---

## ProjectsList

### 📍 Localisation

`src/modules/ProjectsList/ProjectsList.jsx`

### 📝 Description

Composant parent qui affiche une grille de tous les projets.

### ⚙️ Props

Aucune prop requise

### 📤 État interne

```javascript
const [projects, setProjects] = useState([]);
```

### 🎨 Rendu

```jsx
<div className="projects-list-container">
  <h2 className="section-title">My Projects</h2>
  <div className="projects-grid">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</div>
```

### 📚 Dépendances

- `react` (useState, useEffect)
- `ProjectCard` (composant local)
- `projects.json` (données)

### 💻 Utilisation

```jsx
import ProjectsList from "./modules/ProjectsList/ProjectsList.jsx";

function App() {
  return <ProjectsList />;
}
```

### 🔄 Cycle de vie

1. Composant monte
2. `useEffect` s'exécute
3. Charge les projets depuis `projects.json`
4. Met à jour l'état avec `setProjects()`
5. Composant re-render avec les projets

### 🎯 Méthodes

#### addProject(newProject)

Ajoute un nouveau projet à la liste.

```javascript
const addProject = (newProject) => {
  const projectWithId = {
    id: projects.length + 1,
    date: new Date().toISOString().split("T")[0],
    ...newProject,
  };
  setProjects([...projects, projectWithId]);
};
```

**Paramètres** :

- `newProject` (object) - Données du projet sans `id` et `date`

**Retour** : void

---

## ProjectCard

### 📍 Localisation

`src/modules/ProjectsList/ProjectCard.jsx`

### 📝 Description

Composant de carte affichant un projet individuel avec image, technos et lien de navigation.

### ⚙️ Props

```typescript
interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    date: string;
  };
}
```

### 📤 État interne

Aucun état (composant sans état)

### 🎨 Rendu

```jsx
<Link to={`/projects/${id}`} className="project-card-link">
  <div className="project-card">
    <div className="project-card-image">
      <img src={image} alt={name} />
    </div>
    <div className="project-card-content">
      <h3 className="project-card-title">{name}</h3>
      <p className="project-card-description">{description}</p>
      <div className="project-card-tech">
        {technologies.map((tech) => (
          <span className="tech-badge">{tech}</span>
        ))}
      </div>
      <p className="project-card-date">{formatDate(date)}</p>
    </div>
  </div>
</Link>
```

### 📚 Dépendances

- `react-router-dom` (Link)
- `ProjectCard.css` (styles)

### 💻 Utilisation

```jsx
import ProjectCard from "./ProjectCard.jsx";

const myProject = {
  id: 1,
  name: "Project Alpha",
  description: "A web app...",
  image: "https://example.com/image.jpg",
  technologies: ["React", "Node.js"],
  date: "2025-12-01",
};

<ProjectCard project={myProject} />;
```

### 🎨 Classes CSS disponibles

| Classe                      | Description                        |
| --------------------------- | ---------------------------------- |
| `.project-card-link`        | Lien cliquable (pas de décoration) |
| `.project-card`             | Container principal                |
| `.project-card-image`       | Container image                    |
| `.project-card-content`     | Container contenu                  |
| `.project-card-title`       | Titre du projet                    |
| `.project-card-description` | Description                        |
| `.tech-badge`               | Badge technologie                  |
| `.project-card-date`        | Date de création                   |

### 🎯 Interactions

- **Hover** : Translate Y(-8px), change de couleur de border, shadow
- **Click** : Navigation vers `/projects/{id}`
- **Image hover** : Scale(1.05)

---

## ProjectDetail

### 📍 Localisation

`src/modules/ProjectsList/pages/ProjectDetail.jsx`

### 📝 Description

Page de détail affichant les informations complètes d'un projet.

### ⚙️ Props

Aucune prop - utilise React Router params

### 📤 État interne

```javascript
const { projectId } = useParams();
const [project, setProject] = useState(null);
```

### 🎨 Rendu

```jsx
<div className="project-detail-container">
  <button onClick={() => navigate("/")} className="back-button">
    ← Retour aux projets
  </button>
  <div className="project-detail-header">
    <img src={project.image} />
  </div>
  <div className="project-detail-content">
    <h1>{project.name}</h1>
    <p className="project-detail-date">Créé le {date}</p>
    <div className="project-detail-description">
      <h2>Description</h2>
      <p>{project.description}</p>
    </div>
    <div className="project-detail-tech">
      <h2>Technologies</h2>
      {/* Tech list */}
    </div>
    <div className="project-detail-link">
      <a href={project.href} target="_blank">
        Visiter le projet →
      </a>
    </div>
  </div>
</div>
```

### 📚 Dépendances

- `react-router-dom` (useParams, useNavigate)
- `projects.json` (données)
- `ProjectDetail.css` (styles)

### 💻 Utilisation

Accédée via routing automatique :

```javascript
<Route path="/projects/:projectId" element={<ProjectDetail />} />
```

URL : `http://localhost:5174/projects/1`

### 🔄 Cycle de vie

1. Route `/projects/:projectId` activée
2. `useParams()` extrait l'ID
3. `useEffect` lance une recherche du projet
4. Si trouvé : met à jour l'état et affiche
5. Si non trouvé : redirige vers `/`

### 🎯 Méthodes

#### Recherche de projet

```javascript
useEffect(() => {
  const foundProject = projectsData.projects.find(
    (p) => p.id === parseInt(projectId),
  );
  if (foundProject) {
    setProject(foundProject);
  } else {
    navigate("/");
  }
}, [projectId, navigate]);
```

### 🎨 Classes CSS disponibles

| Classe                        | Description         |
| ----------------------------- | ------------------- |
| `.project-detail-container`   | Container principal |
| `.back-button`                | Bouton retour       |
| `.project-detail-header`      | Header avec image   |
| `.project-hero-image`         | Image grande        |
| `.project-detail-content`     | Contenu principal   |
| `.project-detail-title`       | Titre               |
| `.project-detail-date`        | Date                |
| `.project-detail-description` | Description         |
| `.project-detail-tech`        | Section tech        |
| `.tech-item`                  | Badge tech          |
| `.visit-button`               | Bouton CTA          |

---

## ScheduleHeader

### 📍 Localisation

`src/modules/ScheduleHeader/ScheduleHeader.jsx`

### 📝 Description

Composant header affiché en haut de toutes les pages.

### ⚙️ Props

Aucune prop requise

### 📤 État interne

Aucun état (composant sans état)

### 🎨 Rendu

```jsx
<header className="...">
  <div className="...">
    <div className="flex items-center gap-3">
      <div className="logo">
        <svg>...</svg>
      </div>
      <h1>React-Schedule</h1>
    </div>
    <div className="flex items-center gap-2">
      <span>Semaine-51</span>
      <span>Décembre-2025</span>
    </div>
  </div>
</header>
```

### 📚 Dépendances

- `ScheduleHeader.css` (styles)

### 💻 Utilisation

```jsx
import ScheduleHeader from "./modules/ScheduleHeader/ScheduleHeader.jsx";

function App() {
  return (
    <div>
      <ScheduleHeader />
      {/* Contenu page */}
    </div>
  );
}
```

### 🎨 Design

- Gradient background : indigo → purple
- Logo avec icône calendrier
- Affichage semaine et mois

---

## 🔗 Relations entre composants

```
App (main.jsx)
├── ScheduleHeader
└── Routes
    ├── ProjectsList
    │   └── ProjectCard[] (Link to /projects/:id)
    └── ProjectDetail (useParams)
```

---

## 📝 Conventions

### Nommage des props

```javascript
// ✅ Bon
<ProjectCard project={projectData} />

// ❌ Mauvais
<ProjectCard data={projectData} />
<ProjectCard p={projectData} />
```

### Destruction des props

```javascript
// ✅ Recommandé
function ProjectCard({ project }) {
  const { id, name, description } = project;
  // ...
}

// ❌ À éviter
function ProjectCard(props) {
  const id = props.project.id;
  // ...
}
```

### Gestion des erreurs

```javascript
// ✅ Bon
if (!project) {
  return <LoadingSpinner />;
}

// ❌ Mauvais
const name = project.name; // Peut planter si project est null
```

---

**Version** : 1.0.0
