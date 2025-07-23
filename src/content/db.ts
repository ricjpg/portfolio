import type {
  SkillSetProps,
  NavItemProps,
  Social,
  TerminalProps,
  ProjectProps,
} from "../interfaces/interface";

export const skills: SkillSetProps[] = [
  {
    tittle: "Frontend Development",
    skills: [
      { name: "HTML+CSS", level: 60 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 65 },
      { name: "AstroJS", level: 65 },
    ],
  },
  {
    tittle: "Backend Development",
    skills: [
      { name: "Python+FastAPI", level: 70 },
      { name: "Java+Spring", level: 70 },
      { name: "Python+Django", level: 60 },
      { name: "PHP+Laravel", level: 70 },
    ],
  },
  {
    tittle: "DevOps",
    skills: [
      { name: "Terraform", level: 50 },
      { name: "AzureCloud", level: 50 },
      { name: "AWS", level: 55 },
      { name: "CI/CD", level: 50 },
    ],
  },
  {
    tittle: "Databases",
    skills: [
      { name: "SQL", level: 70 },
      { name: "Oracle", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 50 },
    ],
  },
  {
    tittle: "Other technologies",
    skills: [
      { name: "Jira", level: 70 },
      { name: "Mermaid Diagram", level: 70 },
      { name: "Notion", level: 70 },
      { name: "Figma", level: 70 },
    ],
  },
];

export const NavItems: NavItemProps[] = [
  {
    label: "Home",
    href: "/",
    position: "left",
  },
  {
    label: "Skills",
    href: "/skills",
    position: "center",
  },
  {
    label: "About Me",
    href: "/",
    position: "center",
  },
  {
    label: "Projects",
    href: "/projects",
    position: "center",
  },
  {
    label: "Contact Me",
    href: "/",
    position: "right",
  },
];

export const SocialList: Social[] = [
  {
    name: "instagram",
    url: "https://www.instagram.com/ric.null",
    icon: "https://s.magecdn.com/social/tc-instagram.svg",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@rictsx",
    icon: "https://s.magecdn.com/social/tc-youtube.svg",
  },
  {
    name: "github",
    url: "https://www.github.com/ricjpg",
    icon: "https://s.magecdn.com/social/tc-github.svg",
  },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/ricnull",
    icon: "https://s.magecdn.com/social/tc-linkedin.svg",
  },
];

export const terminalList: TerminalProps[] = [
  {
    title: "About me 🧑🏾‍💻",
    description:
      "Systems Engineering student at the National Autonomous University of Honduras, with experience in developing web and mobile applications. I began my journey in tech through hardware support and repair, later expanding into graphic design, and eventually finding my passion in software development. I stand out for my ability to learn quickly, adapt to new challenges, and maintain a strong commitment to quality in every project.",
  },
  {
    title: "Academic Background 📚",
    description:
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
  },
  {
    title: "Experience 📐",
    description:
      "Although I haven't yet worked in a formal job position, I've actively participated in several university and personal projects that reflect my technical skills and passion for software development. Throughout my studies, I've worked on web and mobile applications, applying technologies like React, Spring Boot, FastAPI, and SQL/NoSQL databases. These projects have helped me strengthen my abilities in full-stack development, version control with Git, and agile teamwork.",
  },
];

export const projectsList: ProjectProps[] = [
  {
    slug: "/prosene",
    title: "PROSENE",
    description:
      "Plataforma accesible desarrollada para PROSENE-UNAH, que permite a estudiantes con necesidades especiales enviar y rastrear solicitudes en línea. Desarrollada con Vue.js, FastAPI y PostgreSQL, mejora la comunicación y gestión entre estudiantes y el personal del programa de atención especial.",
    img: "prosene.png",
    href: "/projects/prosene",
    date: "2025-03-15T14:30:00.000Z",
  },
  {
    slug: "/xatruch",
    title: "Xatruch",
    description:
      "Sistema integral para la gestión de vuelos, rutas, horarios y pasajeros de la aerolínea Xatruch. Desarrollado con Java, Spring, Laravel y MySQL, permite registrar vuelos nacionales e internacionales, controlar aeronaves y ofrecer acceso por roles, optimizando procesos operativos y administrativos.",
    img: "plane.jpg",
    href: "/projects/xatruch",
    date: "2023-09-15T14:30:00.000Z",
  },
  {
    slug: "/classifier",
    title: "Cats and dogs classifier",
    description:
      "Aplicacion web que redes neuronales y convolucionales para clasificar si lo visto por la camara es un gato o un perro. Desarrollado en Python y herramientas web como HTML, CSS y JS",
    img: "classifier.png",
    href: "/projects/classifier",
    date: "2024-03-15T14:30:00.000Z",
  },
  {
    slug: "/ecommerce",
    title: "Plataforma de E-commerce y Analítica",
    description:
      "Infraestructura para una plataforma de e-commerce manejada con Terraform",
    img: "general-diagram.png",
    href: "/projects/ecommerce",
    date: "2025-06-28T14:30:00.000Z",
  },
  {
    slug: "/smart-cache",
    title: "Smart cache",
    description:
      "Creacion de un Pipeline de datos y API con cache inteligente, desarrollado en Python, desplegado en Azure",
    img: "smart-cache-low.gif",
    href: "/projects/smart-cache",
    date: "2025-07-22T14:30:00.000Z",
  },
];
