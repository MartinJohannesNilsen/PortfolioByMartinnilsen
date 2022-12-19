import { FC } from "react";
import { Reveal, ScrollTrigger } from "react-gsap";
import {} from "react-gsap";
import {
  FadeInFromLeft,
  FadeInFromRight,
  FadeInFromDown,
  FadeInFromXY,
  defaultFadeAmount,
} from "./Tweens";
import { RevealProps } from "../../types";

// Original Reveal Components

export const RevealFromLeft: FC<RevealProps> = (props: RevealProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInFromLeft x={props.x || defaultFadeAmount}>
        {props.children}
      </FadeInFromLeft>
    </Reveal>
  );
};

export const RevealFromRight: FC<RevealProps> = (props: RevealProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInFromRight x={props.x || defaultFadeAmount}>
        {props.children}
      </FadeInFromRight>
    </Reveal>
  );
};

export const RevealFromUp: FC<RevealProps> = (props: RevealProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInFromDown y={props.y || defaultFadeAmount}>
        {props.children}
      </FadeInFromDown>
    </Reveal>
  );
};

// Empty scrolltrigger which makes it not change on theme change/language

export const RevealFromLeftOnEnter: React.FC<RevealProps> = (props) => {
  return (
    <ScrollTrigger
      start={props.start || "top 80%"}
      end="+=0px"
      scrub={false}
      markers={props.markers || false}
    >
      <FadeInFromLeft x={props.x}>{props.children}</FadeInFromLeft>
    </ScrollTrigger>
  );
};

export const RevealFromRightOnEnter: React.FC<RevealProps> = (props) => {
  return (
    <ScrollTrigger
      start={props.start || "top 80%"}
      end="+=0px"
      scrub={false}
      markers={props.markers || false}
    >
      <FadeInFromRight x={props.x}>{props.children}</FadeInFromRight>
    </ScrollTrigger>
  );
};

export const RevealFromDownOnEnter: React.FC<RevealProps> = (props) => {
  return (
    <ScrollTrigger
      start={props.start || "top 80%"}
      end="+=0px"
      scrub={false}
      markers={props.markers || false}
    >
      <FadeInFromDown y={props.y}>{props.children}</FadeInFromDown>
    </ScrollTrigger>
  );
};

export const RevealFromXYOnEnter: React.FC<RevealProps> = (props) => {
  return (
    <ScrollTrigger
      start={props.start || "top 80%"}
      end="+=0px"
      scrub={false}
      markers={props.markers || false}
    >
      <FadeInFromXY x={props.x} y={props.y}>
        {props.children}
      </FadeInFromXY>
    </ScrollTrigger>
  );
};
