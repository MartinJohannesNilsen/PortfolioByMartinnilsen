import { FC } from "react";
import { ScrollTrigger } from "react-gsap";
import {
  FadeInFromLeft,
  FadeInFromRight,
  FadeInFromDown,
  FadeInFromXY,
} from "./Tweens";
import { ScrollTriggerProps } from "../../types";

export const ScrollTriggerFromLeft: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      trigger={props.trigger}
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInFromLeft x={props.x}>{props.children}</FadeInFromLeft>
    </ScrollTrigger>
  );
};

export const ScrollTriggerFromRight: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      trigger={props.trigger}
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInFromRight x={props.x}>{props.children}</FadeInFromRight>
    </ScrollTrigger>
  );
};

export const ScrollTriggerFromUp: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      trigger={props.trigger}
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInFromDown y={props.y}>{props.children}</FadeInFromDown>
    </ScrollTrigger>
  );
};

export const ScrollTriggerFromXY: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger
      trigger={props.trigger}
      start={props.start || "-100px center"}
      end={props.end || "100px center"}
      scrub={props.scrub || 0.5}
      markers={props.markers || false}
    >
      <FadeInFromXY x={props.x} y={props.y}>
        {props.children}
      </FadeInFromXY>
    </ScrollTrigger>
  );
};
