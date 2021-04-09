import { FC, useEffect, useRef } from "react";
import { Box } from "@material-ui/core";
import "./skill.css";
import React from "react";

type CirclegraphProps = {
  data: {};
};

const Circlegraph: FC<CirclegraphProps> = (props) => {
    const graph = useRef<any>(null);

    useEffect(() => {
      const ciclegraph = graph.current;
      const circleElements = ciclegraph.childNodes;
  
      let angle = 360 - 90;
      let dangle = 360 / circleElements.length;
  
      for (let i = 0; i < circleElements.length; i++) {
        let circle = circleElements[i];
        angle += dangle;
        circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
          2}px) rotate(-${angle}deg)`;
      }
    }, []);

  const childrenWithLayout = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: child.props.className + " circlegraphItem",
      });
    }
    return child;
  });

  return <div className="circlegraph" ref={graph}>{childrenWithLayout}</div>;
};
export default Circlegraph;
