import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projects.json";
import "./ProjectsList.css";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Charger les projets depuis le JSON
    setProjects(projectsData.projects);
  }, []);

  const addProject = (newProject) => {
    const projectWithId = {
      id: projects.length + 1,
      date: new Date().toISOString().split("T")[0],
      ...newProject,
    };
    setProjects([...projects, projectWithId]);
  };

  return (
    <div className="projects-list-container">
      <h2 className="projects-list-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
