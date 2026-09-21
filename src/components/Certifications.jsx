import { useEffect, useState } from 'react';
import { certifications } from '../data/portfolioData';
import Tilt from './Tilt';
import GlassCube from './GlassCube';

const INITIAL_VISIBLE = 3;

const LINK =
  'mt-1.5 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12.5px] text-(--accent-2) outline-none transition duration-200 hover:border-(--accent-2)/50 focus-visible:ring-2 focus-visible:ring-(--accent-2)/60 [font-family:var(--font-mono)]';

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
    <section id="certifications" className="section relative overflow-hidden">
      {/* Soft colour blobs so the glass has something to frost */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-32 size-[420px] rounded-full bg-(--accent)/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-32 size-[400px] rounded-full bg-(--accent-2)/15 blur-3xl" />

      {/* Floating 3D glass cubes */}
      <GlassCube size={48} duration={26} className="absolute top-32 right-[4%] hidden animate-[hero-float_9s_ease-in-out_infinite] md:block" />
      <GlassCube size={72} duration={32} className="absolute bottom-28 left-[4%] hidden animate-[hero-float_8s_ease-in-out_infinite] md:block" />

      <div className="container">
        <span className="section-eyebrow">Certifications</span>
        <h2 className="section-title">
          Courses & <span className="highlight">achievements</span>
        </h2>
        <p className="section-subtitle">
          Certifications from courses I've completed and achievements along the way.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {visibleCerts.map((cert) => (
            <Tilt className="h-full rounded-[20px]" max={6} key={cert.id}>
              <article className="glass glass-gloss relative flex h-full flex-col overflow-hidden rounded-[20px] transition duration-300 hover:-translate-y-1.5 hover:border-(--accent)/50 hover:[--glass-glow:0_20px_40px_-20px_rgba(124,107,255,0.6)]">
                <div className="aspect-[16/10] max-h-[280px] w-full overflow-hidden border-b border-white/10 bg-black/25">
                  {cert.image ? (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      aria-label={`Open ${cert.title} certificate`}
                      className="block size-full cursor-zoom-in p-0 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--accent-2)/60"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                      />
                    </button>
                  ) : (
                    <div className="flex size-full flex-col items-center justify-center gap-1.5 p-4 text-center text-(--text-muted)">
                      <span className="text-sm font-semibold text-(--text-primary)">Add certificate</span>
                      <small className="text-[11.5px] opacity-70 [font-family:var(--font-mono)]">src/assets/certificates/</small>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 px-[22px] pt-5 pb-6">
                  <h3 className="text-[17px]">{cert.title}</h3>
                  <p className="text-[13.5px] text-(--text-muted)">
                    {cert.issuer} <span className="opacity-50">•</span> {cert.date}
                  </p>
                  {cert.credentialLink && (
                    <a href={cert.credentialLink} target="_blank" rel="noreferrer" className={LINK}>
                      View Credential →
                    </a>
                  )}
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
              {showAll ? 'Show Less' : `View More Certifications (${hiddenCount})`}
            </button>
          </div>
        )}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          role="presentation"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass glass-gloss relative inline-flex max-h-[85vh] max-w-[90vw] items-center justify-center rounded-2xl p-3 animate-[modal-pop_0.35s_ease-out]"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate"
              className="glass absolute top-3 right-3 z-[1] grid size-10 cursor-pointer place-items-center rounded-full text-[24px] leading-none text-(--text-primary) outline-none transition duration-200 hover:border-(--accent-2)/50 focus-visible:ring-2 focus-visible:ring-(--accent-2)/60"
            >
              ×
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="block max-h-[calc(85vh-1.5rem)] max-w-[calc(90vw-1.5rem)] rounded-xl object-contain shadow-[0_30px_80px_-20px_rgba(124,107,255,0.5)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;