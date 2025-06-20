export interface SkillProps {
  name: string;
  level: number;
}

export interface SkillSetProps {
  tittle: string;
  skills: SkillProps[];
}

export interface NavItemProps {
  label: string;
  href: string;
  position: "left" | "center" | "right";
}
