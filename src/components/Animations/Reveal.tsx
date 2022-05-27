import { Reveal, Tween } from "react-gsap";

export const FadeInLeft: React.FC = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }}
    ease="back.out(1.2)"
  >
    {children}
  </Tween>
);

export const FadeInRight: React.FC = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
    ease="back.out(1.2)"
  >
    {children}
  </Tween>
);
