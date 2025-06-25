import type {
  SkillSetProps,
  NavItemProps,
  HorizontalCardProps,
  Social,
  TerminalProps,
  ProjectProps,
} from "../interfaces/interface";

export const skills: SkillSetProps[] = [
  {
    tittle: "Frontend Development",
    skills: [
      { name: "HTML+CSS", level: 50 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 70 },
      { name: "AstroJS", level: 80 },
    ],
  },
  {
    tittle: "Backen Development",
    skills: [
      { name: "Python+FastAPI", level: 50 },
      { name: "Java+Spring", level: 60 },
      { name: "Python+Django", level: 70 },
      { name: "PHP+Laravel", level: 80 },
    ],
  },
  {
    tittle: "DevOps",
    skills: [
      { name: "Terraform", level: 50 },
      { name: "AzureCloud", level: 60 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 50 },
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

export const HorizontalCardList: HorizontalCardProps[] = [
  {
    tittle: "About me 🧑🏾‍💻",
    description:
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
  },
  {
    tittle: "Academic Background 📚",
    description:
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
  },
  {
    tittle: "Experience 📐",
    description:
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
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
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
  },
  {
    title: "Academic Background 📚",
    description:
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
  },
  {
    title: "Experience 📐",
    description:
      "I'm in the final year of my Systems Engineering degree at the National Autonomous University of Honduras. My academic journey began with a technical high school education in Computer Science, which laid a strong foundation in IT and problem-solving. I'm fluent in both Spanish and English, and I also have skills in graphic design. I hold a CCNA 1 certification in networking fundamentals, and I completed the Oracle Next Education (ONE) programming course offered by Alura Latam, where I gained practical experience in software development and industry best practices.",
  },
];

export const projectsList: ProjectProps[] = [
  {
    slug: "/prosene",
    title: "PROSENE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    img: "prosene.png",
    href: "/projects/prosene",
  },
  {
    slug: "/xatruch",
    title: "Xatruch",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    img: "plane.jpg",
    href: "/projects/xatruch",
  },
  {
    slug: "/classifier",
    title: "Cats and dogs classifier",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there",
    img: "classifier.png",
    href: "/projects/classifier",
  },
];
