import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";

// Object types

export type landingViewCard = {
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

// Component types

export type TweenProps = {
  x?: string;
  y?: string;
  z?: string;
  children?: ReactNode;
};

export type ProjectListProps = {
  projects: ProjectProps[];
  numShowing: number;
  setNumShowing: (num: number) => void;
  numIncrease: number;
  buttonTexts: string[];
};

export type ScrollTriggerProps = {
  markers?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  x?: string;
  y?: string;
  trigger?: ReactJSXElement;
  children?: ReactNode;
};

export type RevealProps = {
  markers?: boolean;
  repeat?: boolean;
  start?: string;
  x?: string;
  y?: string;
  children?: ReactNode;
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
  projectData: ProjectProps;
  imgPosition: "left" | "right";
  linkButtonText: string[];
};

export type NavbarProps = {
  data: {
    title: string;
    languages: string[];
    sections: string[];
  };
  language: string;
  setLanguage: (language: string) => void;
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

export type ArticleCardProps = {
  index: number;
  article: ArticleProps;
  language: string;
};

// View types

export type ReaderViewProps = {
  ids: string[];
  landing: {
    cards: [landingViewCard, landingViewCard, landingViewCard];
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

export type DeskViewProps = { language: string };

export type FeaturedInViewProps = {
  id: string;
  data: {
    title: string;
    copyText: string;
    articles: ArticleProps[];
  };
  refreshScrollTriggers: number;
  language: string;
};

export type LandingViewProps = {
  id: string;
  data: {
    navbar: {
      title: string;
      languages: string[];
      sections: string[];
    };
    cards: [landingViewCard, landingViewCard, landingViewCard];
  };
  language: string;
  setLanguage: () => void;
};

export type ProjectViewProps = {
  id: string;
  data: {
    title: string;
    buttonTexts: string[];
    projects: ProjectProps[];
  };
  triggerRefreshScrollTriggers?: () => void;
  language: string;
};
