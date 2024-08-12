import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const TensorflowIcon = ({
  theme,
  cursor,
  cardRef,
  mouseOnCard,
  fill,
}: HoverIconProps) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (cardRef && cardRef.current && cursor && cursor.x && cursor.y) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100;
      const cyPercentage = (cursor.y / cardRect.width) * 100 + 24;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, cardRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        width: "80%",
        height: "80%",
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms, 200ms",
      }}
    >
      <defs>
        <radialGradient
          id="hoverIconGradient"
          gradientUnits="userSpaceOnUse"
          r="40%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor={theme.palette.secondary.main} />}
          <stop offset={1} stopColor={theme.palette.grey[900]} />
        </radialGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={mouseOnCard ? "url(#hoverIconGradient)" : ""}
        style={{ fill: fill }}
        d="M22.0493 11.2192L22.0365 6.24224L12.432 0.752991V23.2462L16.2698 21.0172V14.6887L19.1678 16.3642L19.1505 12.036L16.2698 10.3905V7.87799L22.0508 11.2185L22.0493 11.2192ZM1.96426 6.24149L11.5688 0.752991V23.2462L7.73101 21.0172V7.87799L1.95001 11.2185L1.96426 6.24149Z"
      />
    </svg>
  );
};
export default TensorflowIcon;
