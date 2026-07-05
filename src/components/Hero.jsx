import { techIcons, profileImage } from '../assets/assets';
import { personalInfo, contactInfo } from '../data/portfolioData';
import './Hero.css';

// Tech icons that orbit the profile photo — purely decorative.
const ORBIT_ICONS = ['react', 'nodejs', 'mongodb', 'express', 'git'];

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="section-eyebrow">Hi, I'm {personalInfo.name} 👋</span>
          <h1 className="hero-title">
            MERN Full Stack <br />
            <span className="highlight">Web Developer</span>
          </h1>
          <p className="hero-text">{personalInfo.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-quick-links">
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="dot">•</span>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="dot">•</span>
            <a href={contactInfo.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            {profileImage ? (
              <img src={profileImage} alt={personalInfo.name} className="hero-photo" />
            ) : (
              <div className="hero-photo-placeholder">
                <span>Aditya's Photo</span>
                <small>src/assets/profile.jpg</small>
              </div>
            )}
          </div>

          <div className="hero-orbit" aria-hidden="true">
            {ORBIT_ICONS.map((key, index) => (
              <div className={`orbit-icon orbit-icon-${index + 1}`} key={key}>
                <img src={techIcons[key]} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
