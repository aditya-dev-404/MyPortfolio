import { useEffect, useState } from 'react';
import { certifications } from '../data/portfolioData';

import './Certifications.css';

const INITIAL_VISIBLE = 3;

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const visibleCerts = showAll ? certifications : certifications.slice(0, INITIAL_VISIBLE);
  const hiddenCount = certifications.length - INITIAL_VISIBLE;

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedCert(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <span className="section-eyebrow">Certifications</span>
        <h2 className="section-title">
          Courses & <span className="highlight">achievements</span>
        </h2>
        <p className="section-subtitle">
          Certifications from courses I've completed and achievements along the way.
        </p>

        <div className="certifications-grid">
          {visibleCerts.map((cert) => (
            <article className="cert-card" key={cert.id}>
              <div className="cert-thumb">
                {cert.image ? (
                  <button
                    className="cert-image-button"
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    aria-label={`Open ${cert.title} certificate`}
                  >
                    <img src={cert.image} alt={cert.title} />
                  </button>
                ) : (
                  <div className="cert-thumb-empty">
                    <span>Add certificate</span>
                    <small>src/assets/certificates/</small>
                  </div>
                )}
              </div>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">
                  {cert.issuer} <span className="dot">•</span> {cert.date}
                </p>
                {cert.credentialLink && <a href={cert.credentialLink} target="_blank" rel="noreferrer" className="cert-link">
                  View Credential →
                </a>}
              </div>
            </article>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="section-toggle">
            <button className="btn btn-outline" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'Show Less' : `View More Certifications (${hiddenCount})`}
            </button>
          </div>
        )}
      </div>

      {selectedCert && (
        <div className="cert-modal" role="presentation" onClick={() => setSelectedCert(null)}>
          <div
            className="cert-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="cert-modal-close" type="button" onClick={() => setSelectedCert(null)} aria-label="Close certificate">
              ×
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
