import { personalInfo, education } from '../data/portfolioData';
import Tilt from './Tilt';
import GlassCube from './GlassCube';

const HIGHLIGHTS = [
  { label: 'Fresher', desc: 'Ready to bring fresh energy and a fast learning curve to a team.' },
  { label: 'MERN Focused', desc: 'Comfortable across the full stack — from schema design to UI polish.' },
  { label: 'Self-Taught', desc: 'Learned by building real projects, not just following tutorials.' },
];

// 3D glass card: frosted, glossy top, lifts and glows on hover.
const CARD =
  'glass glass-gloss relative rounded-[20px] transition duration-300 hover:-translate-y-1 hover:border-(--accent)/50 hover:[--glass-glow:0_16px_36px_-12px_rgba(124,107,255,0.6)]';

function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Soft colour blobs so the glass has something to frost */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-32 size-[420px] rounded-full bg-(--accent)/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 size-[380px] rounded-full bg-(--accent-2)/15 blur-3xl" />

      {/* Floating 3D glass cubes */}
      <GlassCube size={72} duration={22} className="absolute top-20 right-[6%] hidden animate-[hero-float_7s_ease-in-out_infinite] md:block" />
      <GlassCube size={44} duration={28} className="absolute bottom-24 left-[3%] hidden animate-[hero-float_9s_ease-in-out_infinite] md:block" />

      <div className="container">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">
          Get to know <span className="highlight">my journey</span>
        </h2>
        <p className="section-subtitle">{personalInfo.intro}</p>

        <div className="grid items-start gap-8 min-[900px]:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-5">
            {HIGHLIGHTS.map((item) => (
              <Tilt className="rounded-[20px]" key={item.label}>
                <div className={`${CARD} p-6`}>
                  <h4 className="mb-2 text-[17px] text-(--accent-2)">{item.label}</h4>
                  <p className="text-[14.5px] text-(--text-muted)">{item.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>

          <div>
            <h3 className="mb-7 text-xl">Education</h3>
            <div className="relative flex flex-col gap-9 border-l-[1.5px] border-white/15 pl-7">
              {education.map((item) => (
                <Tilt className="rounded-[20px]" key={item.id} max={5}>
                  <div className={`${CARD} p-5`}>
                    <div className="absolute top-6 -left-[33.5px] size-[11px] rounded-full border-2 border-(--accent-2) bg-(--bg) shadow-[0_0_10px_1px_rgba(34,211,238,0.5)]" />
                    <span className="text-[12.5px] tracking-[0.03em] text-(--accent-2) [font-family:var(--font-mono)]">
                      {item.duration}
                    </span>
                    <h4 className="mt-1.5 mb-1 text-lg">{item.degree}</h4>
                    <p className="mb-2 text-[14.5px] font-medium text-(--text-primary)/85">{item.institution}</p>
                    <p className="text-[14.5px] text-(--text-muted)">{item.details}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;