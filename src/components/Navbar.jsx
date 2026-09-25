import { useEffect, useState } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { IoIosBookmarks } from "react-icons/io";

const FOCUS = 'outline-none focus-visible:ring-2 focus-visible:ring-(--accent-2)/60';
const BAR = 'block h-0.5 w-[18px] rounded-full bg-(--text-primary) transition duration-300';

// Glass "pressed key" look for the active link, soft hover for the rest.
function linkClass(active, mobile) {
  const size = mobile ? 'block rounded-2xl px-5 py-3.5 text-base' : 'rounded-full px-5 py-2.5 text-[15.5px]';
  const state = active
    ? 'bg-white/10 text-(--accent-2) shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(0,0,0,0.2),0_6px_18px_-6px_rgba(124,107,255,0.65)]'
    : 'text-(--text-muted) hover:bg-white/5 hover:text-(--text-primary)';
  return `relative font-medium transition duration-300 ${FOCUS} ${size} ${state}`;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.to))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Make the glass bar denser and tighter once the page has scrolled a bit.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* Full-width glass bar */}
      <div
        className={`glass glass-gloss relative border-x-0! border-t-0! transition-all duration-300 ${
          isScrolled
            ? '[--glass-tint:rgba(13,17,34,0.7)] [--glass-glow:0_10px_50px_-15px_rgba(124,107,255,0.5)]'
            : '[--glass-glow:0_10px_40px_-20px_rgba(124,107,255,0.3)]'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1180px] items-center justify-between px-6 transition-[padding] duration-300 ${
            isScrolled ? 'py-3' : 'py-5'
          }`}
        >
          <a
            href="#hero"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 rounded-full pr-2 text-2xl font-bold text-(--text-primary) [font-family:var(--font-display)] ${FOCUS}`}
          >
            <span className="glass-gloss relative grid size-11 place-items-center overflow-hidden rounded-xl bg-[image:var(--gradient)] text-base font-bold text-[#060911] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_6px_16px_-4px_rgba(124,107,255,0.75)] transition-transform duration-700 group-hover:-translate-y-0.5 group-hover:[transform:perspective(200px)_rotateY(360deg)] [font-family:var(--font-mono)]">
              <IoIosBookmarks />
            </span>
            {personalInfo.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                onClick={handleLinkClick}
                aria-current={activeSection === link.to ? 'true' : undefined}
                className={linkClass(activeSection === link.to, false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`glass relative grid size-11 place-items-center rounded-full md:hidden ${FOCUS}`}
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`${BAR} ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`${BAR} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`${BAR} ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {/* Mobile menu — full-width glass panel under the bar */}
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          inert={!isOpen}
          className={`glass glass-gloss absolute inset-x-0 top-full flex origin-top flex-col gap-1 rounded-b-3xl border-x-0! border-t-0! px-6 py-4 [--glass-tint:rgba(13,17,34,0.85)] transition duration-300 md:hidden ${
            isOpen ? 'translate-y-0 scale-y-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-y-95 opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={handleLinkClick}
              aria-current={activeSection === link.to ? 'true' : undefined}
              className={linkClass(activeSection === link.to, true)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;