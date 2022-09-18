import { ReactNode } from "react";
import { Tween } from "react-gsap";

type TweenProps = {
  x?: string;
  y?: string;
  z?: string;
  children?: ReactNode;
};
const defaultFadeAmount = "10vw";

export const FadeInLeft: React.FC<TweenProps> = (props) => {
  const val = "-" + (props.x || defaultFadeAmount);
  return (
    <Tween
      from={{
        opacity: 0,
        transform: "translate3d(" + val + ", 0, 0)",
      }}
    >
      {props.children}
    </Tween>
  );
};

export const FadeInRight: React.FC<TweenProps> = (props) => {
  const val = props.x || defaultFadeAmount;
  return (
    <Tween
      from={{
        opacity: 0,
        transform: "translate3d(" + val + ", 0, 0)",
      }}
    >
      {props.children}
    </Tween>
  );
};

export const FadeInUp: React.FC<TweenProps> = (props) => {
  const val = props.y || defaultFadeAmount;
  return (
    <Tween
      from={{
        opacity: 0,
        transform: "translate3d(0, " + val + ", 0)",
      }}
    >
      {props.children}
    </Tween>
  );
};

export const FadeInXY: React.FC<TweenProps> = (props) => {
  const x = props.x || defaultFadeAmount;
  const y = props.x || defaultFadeAmount;
  return (
    <Tween
      from={{
        opacity: 0,
        transform: "translate3d(" + x + ", " + y + ", 0)",
      }}
    >
      {props.children}
    </Tween>
  );
};

export const FadeInSlowmo: React.FC<TweenProps> = (props) => {
  const val = props.x || defaultFadeAmount;
  return (
    <Tween
      from={{
        opacity: 0,
        transform: "translate3d(" + val + ", 0, 0)",
      }}
    >
      {props.children}
    </Tween>
  );
};
