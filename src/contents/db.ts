import type { SkillSetProps, NavItemProps } from "../interfaces/interface";

export const Skills: SkillSetProps[] = [
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
    href: "/",
    position: "center",
  },
  {
    label: "About Me",
    href: "/",
    position: "center",
  },
  {
    label: "Projects",
    href: "/",
    position: "center",
  },
  {
    label: "Contact Me",
    href: "/",
    position: "right",
  },
];
