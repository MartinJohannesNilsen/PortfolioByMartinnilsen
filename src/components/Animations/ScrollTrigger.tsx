import { FC, ReactNode } from "react";
import { ScrollTrigger } from "react-gsap";
import { FadeInLeft, FadeInRight, FadeInUp } from "./Tweens";

type ScrollTriggerProps = {
  markers?: boolean;
  start?: string;
  end?: string;
  scrub?: number;
  x?: string;
  y?: string;
  children?: ReactNode;
};

export const ScrollTriggerLeft: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInLeft x={props.x}>{props.children}</FadeInLeft>
    </ScrollTrigger>
  );
};

export const ScrollTriggerRight: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInRight x={props.x}>{props.children}</FadeInRight>
    </ScrollTrigger>
  );
};

export const ScrollTriggerUp: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInUp y={props.y}>{props.children}</FadeInUp>
    </ScrollTrigger>
  );
};

export const ScrollTriggerXY: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInUp x={props.x} y={props.y}>
        {props.children}
      </FadeInUp>
    </ScrollTrigger>
  );
};
