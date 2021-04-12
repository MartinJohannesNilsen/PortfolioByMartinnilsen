import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

export const FadeIn = ({
  children,
  direction = null,
  duration = 1,
  distance = 200,
}) => {
  let componentRef = useRef(null);
  let fadeDirection: gsap.TweenVars;
  switch (direction) {
    case "left":
      fadeDirection = { x: distance };
      break;
    case "right":
      fadeDirection = { x: -distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(componentRef.current, {
      duration,
      opacity: 0,
      ...fadeDirection,
    });
  }, [duration, fadeDirection]);
  return <div ref={componentRef}>{children}</div>;
};
export default FadeIn;

FadeIn.propTypes = {
  /**
   * The component to animate
   */
  children: PropTypes.node.isRequired,
  /**
   * The direction of the animation
   */
  direction: PropTypes.string,
  /**
   * The duration over which the animation will be done (in seconds)
   */
  duration: PropTypes.number,
  /**
   * The distance where the animated component will move in pixels
   */
  distance: PropTypes.number,
};

FadeIn.defaultProps = {
  direction: null,
  duration: 1,
  distance: 200,
};
