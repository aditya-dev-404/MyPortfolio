
import { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const INITIAL_VISIBLE = 6;

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hiddenCount = projects.length - INITIAL_VISIBLE;

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">
          Things I've <span className="highlight">built</span>
        </h2>
        <p className="section-subtitle">
          A mix of MERN-stack apps and front-end builds I've worked on while learning full-stack development.
        </p>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github &&<a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                    GitHub
                  </a>}
                   {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                    Live
                  </a>}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="section-toggle">
            <button className="btn btn-outline" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'Show Less' : `View More Projects (${hiddenCount})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;


