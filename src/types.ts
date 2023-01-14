import { ReactNode } from "react";

// Object types

export type landingViewCardProps = {
  topic: string;
  img: {
    path: string;
    alt: string;
  };
  title: string;
  text: string;
};

export type svgProps = {
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

export type directionType = "left" | "right" | "up" | "down";

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

export type themeProps = {
  fontFamily: string;
  accentColor: string;
};

// Component types

export type NavbarProps = {
  data: NavbarDataProps;
  language: string;
  setLanguage: (language: string) => void;
};

export type FABProps = {
  data: NavbarDataProps;
  language: string;
  setLanguage: (language: string) => void;
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
    cards: [landingViewCardProps, landingViewCardProps, landingViewCardProps];
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
  cards: [landingViewCardProps, landingViewCardProps, landingViewCardProps];
};

export type ProjectViewDataProps = {
  title: string;
  buttonTexts: string[];
  projects: ProjectProps[];
};

export type FeaturedInViewDataProps = {
  title: string;
  copyText: string;
  articles: ArticleProps[];
};

export type language = {
  landingView: LandingViewProps;
  projectView: ProjectViewProps;
  featuredInView: FeaturedInViewProps;
  footer: FooterProps;
};

export type info = {
  fetched: boolean;
};
