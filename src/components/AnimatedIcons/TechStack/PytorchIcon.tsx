import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const PytorchIcon = ({
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
        d="M15.3488 4.40774C15.3488 4.12349 15.5798 3.89324 15.864 3.89324C16.1483 3.89324 16.3793 4.12349 16.3793 4.40849C16.3793 4.69349 16.149 4.92374 15.864 4.92374C15.5798 4.92374 15.3495 4.69349 15.3488 4.40924V4.40774ZM12.0045 0.752991L5.394 7.36349C3.70125 9.04724 2.6535 11.3775 2.6535 13.953C2.6535 19.0852 6.81375 23.2455 11.946 23.2455C14.5215 23.2455 16.8518 22.1977 18.5348 20.5057L18.5355 20.505C20.2695 18.8332 21.3465 16.4895 21.3465 13.8945C21.3465 11.3385 20.3018 9.02699 18.6158 7.36274L18.615 7.36199L16.9808 8.99549C18.2445 10.2592 19.026 12.0052 19.026 13.9335C19.026 17.7907 15.8993 20.9175 12.042 20.9175C8.18475 20.9175 5.058 17.7907 5.058 13.9335C5.058 12.0052 5.8395 10.2592 7.10325 8.99549L11.4585 4.64099L12.0038 4.01774L12.0045 0.752991Z"
      />
    </svg>
  );
};
export default PytorchIcon;
