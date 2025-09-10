// src/data.ts
export const DATA = {
  name: "Habibul Haque",
  initials: "HH",
  url: "https://habib-design.vercel.app",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  description:
    "Software Developer passionate about building web applications and solving real-world problems with code.",
  summary:
    "A Computer Science Engineering graduate specializing in Software Development, skilled in creating user-friendly and responsive web applications. Brings a positive attitude, strong problem-solving abilities, and a passion for continuous learning to deliver innovative solutions and grow with the organization.",

  // put your file public/me.jpg
  avatarUrl: "/me.jpg",

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Git/Github",
    "MySQL",
    "Python",
  ],

  contact: {
    email: "sameerhaque@gmail.com",
    tel: "+91-8873613291",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/habib-design", icon: null, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/habibhaq15", icon: null, navbar: true },
      // These prevent the page.tsx link error
      X: { name: "X", url: "#", icon: null, navbar: false },
      Youtube: { name: "YouTube", url: "#", icon: null, navbar: false },
      email: { name: "Send Email", url: "#", icon: null, navbar: false },
    },
  },

  navbar: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ],

  work: [
    {
      company: "Saiket Systems",
      href: "#",
      title: "Frontend Development Intern",
      start: "02.2025",
      end: "05.2025",
      description:
        "Worked on building responsive frontend features using React and modern web tools. Contributed to UI improvements and bug fixing.",
    },
    {
      company: "Sudvidha Foundation",
      href: "#",
      title: "Frontend Development Intern",
      start: "06.2024",
      end: "12.2024",
      description:
        "Assisted in developing user interfaces for web applications, focusing on clean and responsive design.",
    },
  ],

  education: [
    {
      school: "Jamia Hamdard",
      href: "https://jamiahamdard.edu",
      degree: "B.Tech in Computer Science & Engineering",
    },
  ],

  projects: [
    {
      title: "Design AI",
      href: "https://aishirtprint.netlify.app",
      dates: "2025",
      description:
        "An AI-powered design helper tool for generating creative ideas.",
      technologies: ["React", "JavaScript", "OpenAI API"],
    },
    {
      title: "HooBank",
      href: "https://hoo-bank-page-pi.vercel.app/",
      dates: "2024",
      description:
        "A modern banking landing page built as a frontend project.",
      technologies: ["React", "TailwindCSS"],
    },
  ],

  // MUST exist to avoid the page.tsx error
  hackathons: [],
} as const;
