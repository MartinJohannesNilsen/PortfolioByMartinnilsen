import { FC, ReactNode } from "react";
import { Reveal } from "react-gsap";
import { FadeInLeft, FadeInRight, FadeInUp } from "./Tweens";

type RevealProps = {
  repeat?: boolean;
  children?: ReactNode;
};

export const RevealLeft: FC<RevealProps> = (props: RevealProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInLeft>{props.children}</FadeInLeft>
    </Reveal>
  );
};

export const RevealRight: FC<RevealProps> = (props: RevealProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInRight>{props.children}</FadeInRight>
    </Reveal>
  );
};

export const RevealUp: FC<RevealProps> = (props: RevealProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInUp>{props.children}</FadeInUp>
    </Reveal>
  );
};
