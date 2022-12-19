import { Tween } from "react-gsap";
import { TweenProps } from "react-gsap/dist/Tween";

export const defaultFadeAmount = "10vw";

export const FadeInFromLeft: React.FC<TweenProps> = (props) => {
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

export const FadeInFromRight: React.FC<TweenProps> = (props) => {
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

export const FadeInFromDown: React.FC<TweenProps> = (props) => {
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

export const FadeInFromXY: React.FC<TweenProps> = (props) => {
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
