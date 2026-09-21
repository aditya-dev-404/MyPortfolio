import { personalInfo, contactInfo, navLinks } from '../data/portfolioData';
import Tilt from './Tilt';
import GlassCube from './GlassCube';

const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
  `Hi ${personalInfo.name}, I saw your portfolio and would like to connect!`
)}`;

// 3D glass contact card: lifts and glows on hover.
const CARD =
  'glass glass-gloss relative flex h-full flex-col gap-2 rounded-[20px] p-7 outline-none transition duration-300 hover:-translate-y-1.5 hover:border-(--accent)/50 hover:[--glass-glow:0_20px_40px_-20px_rgba(124,107,255,0.6)] focus-visible:ring-2 focus-visible:ring-(--accent-2)/60';
const CARD_PRIMARY = `${CARD} [--glass-tint:rgba(124,107,255,0.2)] [--glass-glow:0_0_45px_-15px_rgba(124,107,255,0.6)]`;

const SOCIAL =
  'glass glass-gloss relative rounded-full px-5 py-2.5 text-[14.5px] font-medium text-(--text-muted) outline-none transition duration-300 hover:-translate-y-0.5 hover:border-(--accent-2)/50 hover:text-(--accent-2) focus-visible:ring-2 focus-visible:ring-(--accent-2)/60';

function Contact() {
  return (
    <>
      <section id="contact" className="section relative overflow-hidden">
        {/* Soft colour blobs so the glass has something to frost */}
        <div aria-hidden="true" className="pointer-events-none absolute top-10 -left-32 size-[400px] rounded-full bg-(--accent-2)/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -bottom-20 size-[440px] rounded-full bg-(--accent)/20 blur-3xl" />

        {/* Floating 3D glass cubes */}
        <GlassCube size={60} duration={24} className="absolute top-28 right-[6%] hidden animate-[hero-float_8s_ease-in-out_infinite] md:block" />
        <GlassCube size={80} duration={30} className="absolute bottom-16 left-[5%] hidden animate-[hero-float_10s_ease-in-out_infinite] md:block" />

        <div className="container">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let's <span className="highlight">build something</span> together
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Reach out directly — I reply fast.
          </p>

          <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
            <Tilt className="h-full rounded-[20px]" max={6}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className={CARD_PRIMARY}>
                <span className="text-[12.5px] tracking-[0.06em] text-(--accent-2) uppercase [font-family:var(--font-mono)]">
                  WhatsApp
                </span>
                <span className="text-[19px] font-semibold [overflow-wrap:anywhere]">{contactInfo.whatsappDisplay}</span>
                <span className="mt-1.5 text-sm text-(--text-muted) transition-colors group-hover:text-(--accent-2)">
                  Message me directly →
                </span>
              </a>
            </Tilt>

            <Tilt className="h-full rounded-[20px]" max={6}>
              <a href={`mailto:${contactInfo.email}`} className={CARD}>
                <span className="text-[12.5px] tracking-[0.06em] text-(--accent-2) uppercase [font-family:var(--font-mono)]">
                  Email
                </span>
                <span className="text-[19px] font-semibold [overflow-wrap:anywhere]">{contactInfo.email}</span>
                <span className="mt-1.5 text-sm text-(--text-muted) transition-colors group-hover:text-(--accent-2)">
                  Send an email →
                </span>
              </a>
            </Tilt>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className={SOCIAL}>
              GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className={SOCIAL}>
              LinkedIn
            </a>
            <a href={contactInfo.leetcode} target="_blank" rel="noreferrer" className={SOCIAL}>
              LeetCode
            </a>
          </div>
        </div>
      </section>

      <footer className="glass glass-gloss relative border-x-0! border-b-0! py-[26px]">
        <div className="container flex flex-wrap items-center justify-between gap-3.5 text-[13.5px] text-(--text-muted) max-[600px]:flex-col max-[600px]:text-center">
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          <nav className="flex flex-wrap gap-5 max-[600px]:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className="transition-colors duration-200 hover:text-(--accent-2)"
              >
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