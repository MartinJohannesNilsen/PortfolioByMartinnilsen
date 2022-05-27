import { FC, ReactNode } from "react";
import { Reveal, Tween, ScrollTrigger } from "react-gsap";

type ScrollTriggerProps = {
  repeat?: boolean;
  children?: ReactNode;
};

const FadeInLeft: React.FC = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(-5vw, 0, 0)" }}
    ease="back.out(0.2)"
  >
    {children}
  </Tween>
);

const FadeInRight: React.FC = ({ children }) => (
  <Tween from={{ opacity: 0, transform: "translate3d(5vw, 0, 0)" }}>
    {children}
  </Tween>
);

const FadeInUp: React.FC = ({ children }) => (
  <Tween from={{ opacity: 0, transform: "translate3d(0, -10vh, 0)" }}>
    {children}
  </Tween>
);

export const RevealLeft: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger start="-100px center" end="100px center" scrub={0.5} markers>
      <FadeInLeft>{props.children}</FadeInLeft>
    </ScrollTrigger>
  );
};

export const RevealRight: FC<ScrollTriggerProps> = (
  props: ScrollTriggerProps
) => {
  return (
    <ScrollTrigger start="-100px center" end="100px center" scrub={0.5} markers>
      <FadeInRight>{props.children}</FadeInRight>
    </ScrollTrigger>
  );
};

export const RevealUp: FC<ScrollTriggerProps> = (props: ScrollTriggerProps) => {
  return (
    <Reveal repeat={props.repeat || false} trigger={<div />}>
      <FadeInUp>{props.children}</FadeInUp>
    </Reveal>
  );
};
