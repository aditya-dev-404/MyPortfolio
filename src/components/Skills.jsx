import { techIcons } from '../assets/assets.js';
import { skills } from '../data/portfolioData';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">
          Tools I <span className="highlight">work with</span>
        </h2>
        <p className="section-subtitle">
          A snapshot of the technologies I use to build, and ship full-stack applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => {
            const iconSrc = skill.icon ? techIcons[skill.icon] : null;
            return (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  {iconSrc ? (
                    <img src={iconSrc} alt={skill.name} />
                  ) : (
                    <span className="skill-icon-fallback">{skill.name.charAt(0)}</span>
                  )}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
