

export const personalInfo = {
  name: "Aditya",
  role: "MERN Full Stack Web Developer",
  tagline: "I build fast, functional web apps",
  intro:
    "I'm a fresher MERN Full Stack Developer who enjoys turning ideas into clean, working products — from database schema to the last pixel of the UI. Currently sharpening my skills one project at a time.",
  resumeLink: "#", 
};


export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "IEC College of Engineering and Technology",
    duration: "2023 — 2027",
    details:
      "Focused on web development, data structures, and database management. Built multiple full-stack projects alongside coursework.",
  },
  {
    id: 2,
    degree: "Higher Secondary (Science)",
    institution: "T.P. Verma College",
    duration: "2020 — 2022",
    details: "Completed higher secondary education with PCM Subjects.",
  },
];


export const skills = [
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redux", icon: null },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Bootstrap", icon: null },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextjs" },
];

export const projects = [
  {
    id: 1,
    title: "Food Recipe Blog",
    description:
      "A complete MERN-stack blogging platform for recipes with authentication, CRUD posts, and a category-based recipe feed.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/aditya-dev-404/FoodRecipeBlog",
    live: "https://recipesblogap.netlify.app/",
  },
  {
    id: 2,
    title: "Auth System",
    description:
      "A MERN authentication system with JWT-based login/register, protected routes, and secure password handling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    github: "https://github.com/aditya-dev-404/authentication-system",
    live: "#",
  },
  {
    id: 3,
    title: "My Portfolio",
    description:
      "A portfolio project prioritizing code maintainability through isolated React components and a reusable, structured CSS design system",
    tech: ["React", "Css"],
    github: "https://github.com/aditya-dev-404/MyPortfolio",
    live: "https://itsadityakt.netlify.app/",
  },
  {
    id: 4,
    title: "Shopyy",
    description:
      "A React-based e-commerce shopping web app with product listings, cart management, and a responsive storefront UI.",
    tech: ["React", "Redux", "CSS3"],
    github: "https://github.com/aditya-dev-404/ShopYY",
    live: "https://aditya-shopyy.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A simple weather lookup app fetching live weather data for any city, built with vanilla JS.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/aditya-dev-404?tab=repositories",
    live: "",
  },
  {
    id: 6,
    title: "To-Do App",
    description: "A lightweight to-do list app with add, complete, and delete task functionality.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/aditya-dev-404?tab=repositories",
    live: "",
  },
  {
    id: 7,
    title: "Spotify UI Clone",
    description: "A pixel-focused static clone of the Spotify web player interface, built with pure HTML & CSS.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/aditya-dev-404?tab=repositories",
    live: "",
  },
  {
    id: 8,
    title: "Movie Search ",
    description:
      "A movie discovery and selection website built in React, letting users browse and pick movies with a clean card-based UI.",
    tech: ["React", "CSS3"],
    github: "https://github.com/aditya-dev-404/MovieSearch",
    live: "",
  },
  {
    id: 9,
    title: "Quiz App",
    description:
      "its an intresting quiz game where you can play quiz game and get your score out of 10",
    tech: ["React", "CSS3"],
    github: "https://github.com/aditya-dev-404/QuizApp",
    live: "https://aditya-dev-404.github.io/QuizApp/",
  },
];
import SigmaDSA from '../assets/tech/SigmaDSA.jpg';
import SigmaWebDev from '../assets/tech/SigmaWebDev.jpg';
import lc from '../assets/tech/leetcode100days.png';
export const certifications = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "Aapna College",
    date: "2025",
    image: SigmaWebDev,
    credentialLink: "https://www.linkedin.com/in/aditya-kumar-787103290/recent-activity/all/",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "Aapna College",
    date: "2026",
    image: SigmaDSA,
    credentialLink: "https://www.linkedin.com/in/aditya-kumar-787103290/recent-activity/all/",
  },
  {
    id: 3,
    title: "LeeCcode 100 Days Streak",
    issuer: "LeetCode",
    date: "2026",
    image: lc,
    credentialLink: "https://www.linkedin.com/posts/aditya-kumar-787103290_leetcode-dsa-100daysofcode-activity-7457708063991418880-uMH6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ-pJcBZGZH5koFmmdnUtfxvCtjQfJtYnA",
  }
];

export const contactInfo = {
  whatsappNumber: "919608712030", 
  whatsappDisplay: "+91 9608712030",
  email: "aditya932973@gmail.com",
  github: "https://github.com/aditya-dev-404",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-787103290/",
  leetcode: "https://leetcode.com/u/_itsAdityaKt_/",
};

export const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];
