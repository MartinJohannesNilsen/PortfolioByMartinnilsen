import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const SQLIcon = ({
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
        width: "60%",
        height: "60%",
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms, 200ms",
      }}
    >
      <defs>
        <radialGradient
          id="hoverIconGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
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
        d="M12.5 8.60938C15.0151 8.60938 17.248 8.09776 18.8192 7.31216C19.4305 7.0727 20.8049 6.31147 21.7607 5.08173C21.9234 4.87247 21.9931 4.60575 21.9526 4.34385C21.9254 4.16776 21.8874 3.98638 21.8387 3.87393C21.0165 1.66908 17.1481 0 12.5 0C7.8519 0 3.98344 1.66908 3.16125 3.87393C3.11258 3.98638 3.07462 4.16776 3.04737 4.34385C3.00685 4.60575 3.07665 4.87247 3.23929 5.08173C4.19507 6.31147 5.56957 7.0727 6.1808 7.31216C7.752 8.09776 9.98494 8.60938 12.5 8.60938ZM12.5 10.3906C15.2316 10.3906 17.7487 9.83891 19.6159 8.90536C20.5573 8.43463 21.4036 7.82632 22 7.09409V11.875C22 12.4283 20.1582 13.5913 19.0493 14.2916C18.9684 14.3427 18.8913 14.3914 18.8192 14.4371C17.248 15.2228 15.0151 15.7344 12.5 15.7344C9.98493 15.7344 7.75199 15.2228 6.18079 14.4371C4.78125 13.7374 3 12.4687 3 11.875V7.09409C3.59637 7.82632 4.44275 8.43463 5.38419 8.90536C7.2513 9.83891 9.76836 10.3906 12.5 10.3906ZM22 19C22 21.6233 17.7467 23.75 12.5 23.75C7.25329 23.75 3 21.6233 3 19V14.2191C3.59637 14.9513 4.44275 15.5597 5.38419 16.0303C7.2513 16.9639 9.76836 17.5156 12.5 17.5156C15.2316 17.5156 17.7487 16.9639 19.6159 16.0303C20.5573 15.5597 21.4036 14.9513 22 14.2191V19Z"
      />
    </svg>
  );
};
export default SQLIcon;
