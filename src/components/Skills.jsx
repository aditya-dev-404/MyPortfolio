import { techIcons } from '../assets/assets.js';
import { skills } from '../data/portfolioData';
import Tilt from './Tilt';
import GlassCube from './GlassCube';

function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Soft colour blobs so the glass has something to frost */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-32 size-[400px] rounded-full bg-(--accent-2)/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-32 size-[420px] rounded-full bg-(--accent)/20 blur-3xl" />

      {/* Floating 3D glass cubes */}
      <GlassCube size={56} duration={26} className="absolute top-24 left-[4%] hidden animate-[hero-float_8s_ease-in-out_infinite] md:block" />
      <GlassCube size={84} duration={30} className="absolute right-[4%] bottom-20 hidden animate-[hero-float_10s_ease-in-out_infinite] md:block" />

      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">
          Tools I <span className="highlight">work with</span>
        </h2>
        <p className="section-subtitle">
          A snapshot of the technologies I use to build, and ship full-stack applications.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-[18px]">
          {skills.map((skill) => {
            const iconSrc = skill.icon ? techIcons[skill.icon] : null;
            return (
              <Tilt className="rounded-[18px]" max={10} key={skill.name}>
                <div className="glass glass-gloss relative flex flex-col items-center gap-3.5 rounded-[18px] px-3.5 py-[22px] text-center transition duration-300 hover:-translate-y-1.5 hover:border-(--accent)/50 hover:[--glass-glow:0_16px_36px_-12px_rgba(124,107,255,0.6)]">
                  <div className="grid size-[42px] place-items-center drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] transition duration-300 group-hover:scale-[1.15] group-hover:-rotate-[4deg] group-hover:drop-shadow-[0_0_12px_rgba(124,107,255,0.7)]">
                    {iconSrc ? (
                      <img src={iconSrc} alt={skill.name} className="h-full w-full" />
                    ) : (
                      <span className="grid size-full place-items-center rounded-[10px] bg-(--accent-soft) text-base font-semibold text-(--accent-2) [font-family:var(--font-mono)]">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-[13.5px] font-medium text-(--text-muted) transition-colors duration-300 group-hover:text-(--text-primary)">
                    {skill.name}
                  </span>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;