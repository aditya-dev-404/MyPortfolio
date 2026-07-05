import { personalInfo, contactInfo, navLinks } from '../data/portfolioData';
import './Contact.css';

const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
  `Hi ${personalInfo.name}, I saw your portfolio and would like to connect!`
)}`;

function Contact() {
  return (
    <>
      <section id="contact" className="contact section">
        <div className="container">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let's <span className="highlight">build something</span> together
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Reach out directly — I reply fast.
          </p>

          <div className="contact-grid">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-card contact-card-primary">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">{contactInfo.whatsappDisplay}</span>
              <span className="contact-cta">Message me directly →</span>
            </a>

            <a href={`mailto:${contactInfo.email}`} className="contact-card">
              <span className="contact-label">Email</span>
              <span className="contact-value">{contactInfo.email}</span>
              <span className="contact-cta">Send an email →</span>
            </a>
          </div>

          <div className="contact-socials">
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contactInfo.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.to} href={`#${link.to}`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Contact;
