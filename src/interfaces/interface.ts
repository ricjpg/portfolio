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

export interface HorizontalCardProps {
  tittle: string;
  description: string;
}

export interface DataPage {
  slug: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface TerminalProps {
  title: string;
  description: string;
}

export interface ProjectProps {
  slug: string;
  title: string;
  img?: string;
  description: string;
  href?: string;
}
