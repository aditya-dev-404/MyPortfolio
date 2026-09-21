import { useState } from 'react';
import { projects } from '../data/portfolioData';
import Tilt from './Tilt';
import GlassCube from './GlassCube';

const INITIAL_VISIBLE = 6;

const LINK =
  'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-(--text-muted) outline-none transition duration-200 hover:border-(--accent-2)/50 hover:text-(--accent-2) focus-visible:ring-2 focus-visible:ring-(--accent-2)/60';

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hiddenCount = projects.length - INITIAL_VISIBLE;

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Soft colour blobs so the glass has something to frost */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-32 size-[400px] rounded-full bg-(--accent-2)/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 size-[440px] rounded-full bg-(--accent)/20 blur-3xl" />

      {/* Floating 3D glass cubes */}
      <GlassCube size={64} duration={24} className="absolute top-24 right-[5%] hidden animate-[hero-float_8s_ease-in-out_infinite] md:block" />
      <GlassCube size={40} duration={30} className="absolute bottom-40 left-[3%] hidden animate-[hero-float_10s_ease-in-out_infinite] md:block" />

      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">
          Things I've <span className="highlight">built</span>
        </h2>
        <p className="section-subtitle">
          A mix of MERN-stack apps and front-end builds I've worked on while learning full-stack development.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {visibleProjects.map((project) => (
            <Tilt className="h-full rounded-[20px]" max={6} key={project.id}>
              <article className="glass glass-gloss relative flex h-full flex-col gap-3.5 rounded-[20px] p-[26px] transition duration-300 hover:-translate-y-1.5 hover:border-(--accent)/50 hover:[--glass-glow:0_20px_40px_-20px_rgba(124,107,255,0.6)]">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[19px]">{project.title}</h3>
                  <div className="flex shrink-0 gap-2 text-[12.5px] [font-family:var(--font-mono)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className={LINK}
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className={LINK}
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="grow text-[14.5px] text-(--text-muted)">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-(--accent)/25 bg-(--accent-soft) px-3 py-[5px] text-xs text-(--accent-2) [font-family:var(--font-mono)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Tilt>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-11 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="glass glass-gloss relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-(--text-primary) outline-none transition duration-300 hover:-translate-y-0.5 hover:border-(--accent-2)/50 hover:[--glass-glow:0_12px_30px_-10px_rgba(34,211,238,0.6)] focus-visible:ring-2 focus-visible:ring-(--accent-2)/60"
            >
              {showAll ? 'Show Less' : `View More Projects (${hiddenCount})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;