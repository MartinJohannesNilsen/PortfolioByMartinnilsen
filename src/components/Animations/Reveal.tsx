import { FC, ReactNode } from "react";
import { Reveal, Tween } from "react-gsap";

type RevealProps = {
  repeat?: boolean;
  children?: ReactNode;
};

const FadeInLeft: React.FC = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(-10vw, 0, 0)" }}
    ease="back.out(0.2)"
  >
    {children}
  </Tween>
);

const FadeInRight: React.FC = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(10vw, 0, 0)" }}
    ease="back.out(0.2)"
  >
    {children}
  </Tween>
);

const FadeInUp: React.FC = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(0, -10vh, 0)" }}
    ease="back.out(0.2)"
  >
    {children}
  </Tween>
);

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
