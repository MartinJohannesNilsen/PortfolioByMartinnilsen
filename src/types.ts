import { Theme } from "@mui/material";
import { FC, ReactNode, RefObject } from "react";

// Object types

export type LandingViewCardProps = {
  topic: string;
  img: {
    path: string;
    alt: string;
  };
  title: string;
  text: string;
};

export type techStackItemProps = {
  icon: FC<HoverIconProps>;
  name: string;
  description: string;
  level?: string;
};

export type TechStackCardProps = {
  techStackActive: techStackItemProps[];
  techStackSelected: number;
  setTechStackSelected: (num: number) => void;
};

export type SvgProps = {
  drawers: string;
  countertop: string;
  monitor_arm: string;
  monitor: string;
  keyboard: string;
  mouse: string;
  lamp: string;
  lamp_light: string;
  desktop_bg: string;
};

export type ArticleProps = {
  title: string;
  description: string;
  img: {
    path: string;
    alt: string;
  };
  url: string;
  publisher: {
    icon: string;
    name: string;
  };
  readTimeMinutes: string;
  date: string;
};

export type ThemeProps = {
  fontFamily: string;
  accentColor: string;
};

// Component types

export type NavbarProps = {
  data: NavbarDataProps;
  language: string;
  setLanguage: (language: string) => void;
  triggerRefreshScrollTriggers?: () => void;
};

export type FABProps = {
  data: NavbarDataProps;
  language: string;
  setLanguage: (language: string) => void;
  triggerRefreshScrollTriggers?: () => void;
  handleSettingsModalOpen: () => void;
};

export type FooterProps = {
  id: string;
  data: {
    text: string;
    links: [
      {
        text: string;
        value: string;
        copyText?: string;
      }
    ];
  };
  language: string;
};

export type ProjectProps = {
  title: string;
  description: string;
  img: {
    path: string;
    type: "landscape" | "portrait" | "square";
  };
  linkToWebsite?: string;
  linkToGitHub?: string;
  linkToDemovideo?: string;
  linkToReadMe?: string;
  linkToPaper?: string;
  technologies?: string[];
};

export type ProjectElementProps = {
  index: number;
  projectData: ProjectProps;
  imgPosition: "left" | "right";
  linkButtonText: string[];
  language: string;
};

export type ProjectListProps = {
  projects: ProjectProps[];
  numShowing: number;
  setNumShowing: (num: number) => void;
  numIncrease: number;
  buttonTexts: string[];
  language: string;
};

export type ScrollTriggerProps = {
  markers?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  x?: string;
  y?: string;
  trigger?: gsap.DOMTarget;
  children?: ReactNode;
};

export type SettingsModalProps = {
  language: string;
  setLanguage: (language: string) => void;
  open: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
  handleThemeChange: (event: any) => void;
  triggerRefreshScrollTriggers?: () => void;
};

export type RevealProps = {
  markers?: boolean;
  repeat?: boolean;
  start?: string;
  x?: string;
  y?: string;
  children?: ReactNode;
};

export type TweenProps = {
  x?: string;
  y?: string;
  z?: string;
  children?: ReactNode;
};

export type ArticleCardProps = {
  index: number;
  article: ArticleProps;
  language: string;
};

// View types

export type ReaderViewProps = {
  ids: string[];
  landing: {
    cards: [LandingViewCardProps, LandingViewCardProps, LandingViewCardProps];
  };
  projects: {
    title: string;
    buttonTexts: string[];
    projects: [ProjectProps];
  };
  featuredIn: {
    title: string;
    readButtonText: string;
    copyButtonText: string;
    articles: [ArticleProps];
  };
  footer: {
    text: string[];
    links: [
      {
        text: string;
        value: string;
        copyText?: string;
      }
    ];
  };
  language: string;
};

export type LandingViewProps = {
  id: string;
  data: LandingViewDataProps;
  language: string;
};

export type ProjectViewProps = {
  id: string;
  data: ProjectViewDataProps;
  triggerRefreshScrollTriggers?: () => void;
  language: string;
};

export type TechStackViewProps = {
  id: string;
  // data: LandingViewDataProps;
  language: string;
};

export type HoverIconProps = {
  theme: Theme;
  cursor?: { x: number; y: number };
  cardRef?: RefObject<HTMLElement>;
  mouseOnCard?: boolean;
  fill: string;
};

export type FeaturedInViewProps = {
  id: string;
  data: FeaturedInViewDataProps;
  language: string;
};

export type DeskViewProps = { language: string; refreshScrollTriggers: number };

// Data props

export type NavbarDataProps = {
  title: string;
  languages: string[];
  sections: string[];
};

export type LandingViewDataProps = {
  navbar: NavbarDataProps;
  cards: [LandingViewCardProps, LandingViewCardProps, LandingViewCardProps];
};

export type ProjectViewDataProps = {
  title: string;
  buttonTexts: string[];
  projects: ProjectProps[];
};

export type FeaturedInViewDataProps = {
  title: string;
  copySuccessText: string;
  copyFailureText: string;
  articles: ArticleProps[];
};

// Types
export type directionType = "left" | "right" | "up" | "down";

export type language = {
  landingView: LandingViewProps;
  projectView: ProjectViewProps;
  featuredInView: FeaturedInViewProps;
  footer: FooterProps;
};

export type info = {
  fetched: boolean;
};
