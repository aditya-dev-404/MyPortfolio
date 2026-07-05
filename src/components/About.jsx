import { personalInfo, education } from '../data/portfolioData';
import './About.css';

const HIGHLIGHTS = [
  { label: 'Fresher', desc: 'Ready to bring fresh energy and a fast learning curve to a team.' },
  { label: 'MERN Focused', desc: 'Comfortable across the full stack — from schema design to UI polish.' },
  { label: 'Self-Taught', desc: 'Learned by building real projects, not just following tutorials.' },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">
          Get to know <span className="highlight">my journey</span>
        </h2>
        <p className="section-subtitle">{personalInfo.intro}</p>

        <div className="about-grid">
          <div className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <div className="highlight-card" key={item.label}>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="about-education">
            <h3 className="about-subheading">Education</h3>
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-duration">{item.duration}</span>
                    <h4>{item.degree}</h4>
                    <p className="timeline-institution">{item.institution}</p>
                    <p className="timeline-details">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
