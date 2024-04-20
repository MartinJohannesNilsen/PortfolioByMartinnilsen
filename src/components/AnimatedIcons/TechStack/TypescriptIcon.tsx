import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const TypescriptIcon = ({
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
        d="M0 12V24H24V0H0V12ZM19.3395 11.043C19.9492 11.1952 20.4135 11.469 20.8433 11.91C21.0623 12.144 21.39 12.5738 21.4177 12.6795C21.4252 12.711 20.3827 13.41 19.7498 13.8007C19.7265 13.8165 19.6327 13.719 19.5308 13.566C19.2225 13.1167 18.8977 12.9217 18.402 12.8865C17.6752 12.8392 17.2065 13.2188 17.2103 13.8555C17.2065 14.0115 17.2418 14.1683 17.3115 14.3048C17.472 14.637 17.7728 14.8358 18.702 15.2385C20.421 15.9765 21.1553 16.4648 21.612 17.1562C22.1235 17.9295 22.2367 19.164 21.8932 20.0858C21.5107 21.0818 20.565 21.7612 19.2367 21.984C18.8265 22.0583 17.85 22.0462 17.4083 21.9645C16.4438 21.7927 15.5295 21.3158 14.967 20.691C14.7442 20.4487 14.3145 19.812 14.3422 19.7692C14.3542 19.7535 14.4518 19.6912 14.5613 19.6283C14.6708 19.5653 15.0728 19.3312 15.4523 19.1122L16.1437 18.7103L16.2885 18.9247C16.4918 19.233 16.9327 19.6552 17.199 19.7955C17.9648 20.202 19.0155 20.1435 19.5353 19.6785C19.746 19.503 19.8638 19.233 19.848 18.96C19.848 18.6825 19.8127 18.558 19.668 18.3503C19.4805 18.0847 19.1017 17.8582 18.0195 17.3895C16.7812 16.854 16.2458 16.5263 15.762 15.999C15.4575 15.651 15.231 15.2415 15.102 14.7997C15.012 14.46 14.9888 13.608 15.0592 13.2682C15.3135 12.069 16.2195 11.2372 17.52 10.9913C17.9423 10.9095 18.9263 10.9402 19.3403 11.0422L19.3395 11.043ZM13.707 12.0472L13.7145 13.0275H10.5893V21.9067H8.37825V13.0275H5.2575V12.0668C5.2575 11.5313 5.2695 11.0865 5.2845 11.0745C5.2965 11.0588 7.19475 11.0512 9.4995 11.055L13.695 11.067L13.707 12.0472Z"
      />
    </svg>
  );
};
export default TypescriptIcon;
