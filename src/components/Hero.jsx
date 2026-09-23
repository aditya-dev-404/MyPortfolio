import { lazy, Suspense, useEffect, useState } from 'react';
import { techIcons, profileImage } from '../assets/assets';
import { personalInfo, contactInfo } from '../data/portfolioData';
import resume from '../assets/tech/Aditya_Resume.pdf';
import './hero-effects.css';
import Tilt from './Tilt';
import { MdDownload } from 'react-icons/md';

// Loaded separately so three.js doesn't slow down the first paint.
const HeroScene = lazy(() => import('./HeroScene'));

// Typed after the static "I'm" — only these words change.
const ROLES = ['Full Stack Developer', 'MERN Developer', 'Spring Boot Developer', 'Problem Solver'];

// Tech icons floating around the profile photo — purely decorative.
const ORBIT_ICONS = [
  { key: 'react', pos: 'top-[4%] left-1/2 -translate-x-1/2', delay: '0s' },
  { key: 'nodejs', pos: 'top-[30%] right-[2%]', delay: '0.6s' },
  { key: 'mongodb', pos: 'bottom-[12%] right-[12%]', delay: '1.2s' },
  { key: 'express', pos: 'bottom-[4%] left-[18%]', delay: '1.8s' },
  { key: 'git', pos: 'top-[30%] left-0', delay: '2.4s' },
];

const QUICK_LINKS = [
  ['GitHub', contactInfo.github],
  ['LinkedIn', contactInfo.linkedin],
  ['LeetCode', contactInfo.leetcode],
];

// 3D glass buttons: violet-tinted for main actions, neutral for secondary.
const BTN =
  'glass glass-gloss relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-(--text-primary) outline-none transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-(--accent-2)/60';
const BTN_PRIMARY = `${BTN} [--glass-tint:rgba(124,107,255,0.3)] [--glass-glow:0_10px_28px_-10px_rgba(124,107,255,0.75)] hover:[--glass-tint:rgba(124,107,255,0.45)] hover:[--glass-glow:0_14px_34px_-8px_rgba(124,107,255,0.95)]`;
const BTN_SECONDARY = `${BTN} hover:border-(--accent-2)/50 hover:[--glass-glow:0_12px_30px_-10px_rgba(34,211,238,0.6)]`;

// Largest box the profile photo may fill inside the dashed ring.
const PHOTO_MAX = { w: 450, h: 500 };

// Typewriter text with a glowing, blinking caret.
function TypedText({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1400;
    if (deleting && text === '') delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="relative block min-h-[1.1em] min-[900px]:whitespace-nowrap">
      <span className="bg-[linear-gradient(90deg,var(--accent-2),var(--accent),var(--accent-2))] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(124,107,255,0.45)] animate-[hero-shine_5s_linear_infinite]">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-full bg-(--accent-2) shadow-[0_0_12px_var(--accent-2)] animate-[hero-blink_1s_steps(1)_infinite]"
      />
    </span>
  );
}

function Hero() {
  // The frame is sized to the photo's real proportions, so the edge fade lines up
  // with the picture itself and the photo stays centred in the ring.
  const [photoSize, setPhotoSize] = useState({ w: 400, h: 460 });
  const handlePhotoLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (!w || !h) return;
    const scale = Math.min(PHOTO_MAX.w / w, PHOTO_MAX.h / h);
    setPhotoSize({ w: Math.round(w * scale), h: Math.round(h * scale) });
  };

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden pt-40 pb-24">
      {/* 3D background — behind everything, never blocks clicks */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        {/* Fades the scene into the page background at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,var(--bg))]" />
      </div>

      <div className="container grid items-center gap-16 text-center min-[900px]:grid-cols-2 min-[900px]:gap-20 min-[900px]:text-left">
        {/* Text side */}
        <div>
          <h1 className="mb-3 text-[clamp(36px,4.8vw,54px)] leading-[1.1]">
            <span className="bg-[linear-gradient(110deg,#fff_0%,#c9d0ff_30%,#fff_50%,#aeb8ff_70%,#fff_100%)] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(124,107,255,0.35)] animate-[hero-shine_8s_linear_infinite]">
              Hi, I'm {personalInfo.name}
            </span>{' '}
            <span className="inline-block origin-[70%_70%] animate-[hero-wave_2.5s_ease-in-out_infinite]">👋</span>
          </h1>

          <p className="mb-6 text-[clamp(20px,2.6vw,30px)] leading-snug font-semibold text-(--text-primary) [font-family:var(--font-display)]">
            <span className="sr-only">
              I'm a Full Stack Developer, MERN Developer, Spring Boot Developer and Problem Solver
            </span>
            <span aria-hidden="true">
              I'm a <TypedText words={ROLES} />
            </span>
          </p>

          <p className="mx-auto mb-9 max-w-[480px] text-[16.5px] leading-relaxed text-(--text-muted) min-[900px]:mx-0">
            {personalInfo.intro}
          </p>

          <div className="mb-9 flex flex-wrap justify-center gap-3 min-[900px]:justify-start">
            <a href="#projects" className={BTN_PRIMARY}>
              View Projects
            </a>
            <a href="#contact" className={BTN_SECONDARY}>
              Contact Me
            </a>
            <a
              href={resume}
              download="Aditya_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_PRIMARY}
            >
              Resume <MdDownload />
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-[13px] text-(--text-muted) min-[900px]:justify-start [font-family:var(--font-mono)]">
            {QUICK_LINKS.map(([label, href], i) => (
              <span key={label} className="flex items-center gap-3">
                {i > 0 && <span className="opacity-40">•</span>}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-(--accent-2)"
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <Tilt max={6} glare={false} className="flex min-h-[420px] items-center justify-center">
          <div className="relative z-0" style={{ width: photoSize.w, height: photoSize.h }}>
            {/* Soft glow behind the photo */}
            <div className="absolute inset-x-2 inset-y-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(124,107,255,0.45),rgba(34,211,238,0.15)_55%,transparent_70%)] blur-2xl animate-[hero-glow_5s_ease-in-out_infinite]" />
            {profileImage ? (
              <img
                src={profileImage}
                alt={personalInfo.name}
                onLoad={handlePhotoLoad}
                className="fade-edges h-full w-full select-none mt-[-40px]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-5 text-center text-(--text-muted)">
                <span className="text-[15px] font-semibold text-(--text-primary)">Aditya's Photo</span>
                <small className="text-xs opacity-70 [font-family:var(--font-mono)]">src/assets/profile.jpg</small>
              </div>
            )}
          </div>

          <div className="absolute inset-0 z-10" aria-hidden="true">
            {/* Slowly rotating dashed ring */}
            <div className="absolute top-1/2 left-1/2 size-[min(420px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-white/15 animate-[hero-spin_60s_linear_infinite]" />

            {ORBIT_ICONS.map(({ key, pos, delay }) => (
              <div
                key={key}
                style={{ animationDelay: delay }}
                className={`absolute ${pos} size-[52px] overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.06] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_30px_-10px_rgba(124,107,255,0.6)] backdrop-blur-md transition duration-300 animate-[hero-float_4.5s_ease-in-out_infinite] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-linear-to-b before:from-white/20 before:to-transparent hover:scale-[1.18] hover:border-(--accent) hover:shadow-[0_0_24px_-2px_rgba(124,107,255,0.7)]`}
              >
                <img src={techIcons[key]} alt="" className="relative h-full w-full" />
              </div>
            ))}
          </div>
        </Tilt>
      </div>
    </section>
  );
}

export default Hero;