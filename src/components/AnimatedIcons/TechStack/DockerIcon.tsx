import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const DockerIcon = ({
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
        d="M23.772 9.90399C23.7 9.85599 23.1 9.38799 21.804 9.38799C21.468 9.38799 21.132 9.42399 20.796 9.48399C20.544 7.80399 19.14 6.95199 19.08 6.91599L18.732 6.71199L18.516 7.03599C18.228 7.46799 18 7.95999 17.904 8.46399C17.664 9.424 17.808 10.336 18.3 11.116C17.712 11.452 16.752 11.536 16.548 11.536H0.744C0.336 11.536 0 11.872 0 12.292C0 13.672 0.216 15.052 0.696 16.348C1.236 17.776 2.052 18.832 3.096 19.48C4.272 20.2 6.204 20.608 8.4 20.608C9.348 20.608 10.332 20.524 11.304 20.344C12.648 20.104 13.944 19.636 15.132 18.952C16.116 18.388 16.992 17.668 17.736 16.804C18.996 15.4 19.74 13.804 20.28 12.424H20.508C21.876 12.424 22.728 11.872 23.196 11.404C23.508 11.116 23.736 10.768 23.904 10.36L24 10.072L23.772 9.90399ZM2.22 11.092H4.332C4.428 11.092 4.524 11.008 4.524 10.9V9.00399C4.524 8.90799 4.44 8.81199 4.332 8.81199H2.22C2.112 8.81199 2.028 8.89599 2.028 9.00399V10.9C2.04 11.008 2.112 11.092 2.22 11.092ZM5.136 11.092H7.248C7.344 11.092 7.44 11.008 7.44 10.9V9.00399C7.44 8.90799 7.356 8.81199 7.248 8.81199H5.136C5.028 8.81199 4.944 8.89599 4.944 9.00399V10.9C4.956 11.008 5.028 11.092 5.136 11.092ZM8.1 11.092H10.2C10.32 11.092 10.404 11.008 10.404 10.9V9.00399C10.404 8.90799 10.332 8.81199 10.2 8.81199H8.1C8.004 8.81199 7.92 8.89599 7.92 9.00399V10.9C7.92 11.008 7.992 11.092 8.1 11.092ZM11.028 11.092H13.152C13.248 11.092 13.332 11.008 13.332 10.9V9.00399C13.332 8.90799 13.26 8.81199 13.152 8.81199H11.028C10.932 8.81199 10.848 8.89599 10.848 9.00399V10.9C10.848 11.008 10.932 11.092 11.028 11.092ZM5.136 8.40399H7.248C7.344 8.40399 7.44 8.29599 7.44 8.18799V6.30399C7.44 6.19599 7.356 6.11199 7.248 6.11199H5.136C5.028 6.11199 4.944 6.18399 4.944 6.30399V8.18799C4.956 8.29599 5.028 8.40399 5.136 8.40399ZM8.1 8.40399H10.2C10.32 8.40399 10.404 8.29599 10.404 8.18799V6.30399C10.404 6.19599 10.332 6.11199 10.2 6.11199H8.1C8.004 6.11199 7.92 6.18399 7.92 6.30399V8.18799C7.92 8.29599 7.992 8.40399 8.1 8.40399ZM11.028 8.40399H13.152C13.248 8.40399 13.332 8.29599 13.332 8.18799V6.30399C13.332 6.19599 13.248 6.11199 13.152 6.11199H11.028C10.932 6.11199 10.848 6.18399 10.848 6.30399V8.18799C10.848 8.29599 10.932 8.40399 11.028 8.40399ZM11.028 5.66799H13.152C13.248 5.66799 13.332 5.58399 13.332 5.47599V3.60399C13.332 3.48399 13.248 3.39999 13.152 3.39999H11.028C10.932 3.39999 10.848 3.47199 10.848 3.60399V5.47599C10.848 5.57199 10.932 5.66799 11.028 5.66799ZM13.98 11.092H16.092C16.2 11.092 16.284 11.008 16.284 10.9V9.00399C16.284 8.90799 16.2 8.81199 16.092 8.81199H13.98C13.884 8.81199 13.8 8.89599 13.8 9.00399V10.9C13.8 11.008 13.884 11.092 13.98 11.092Z"
      />
    </svg>
  );
};
export default DockerIcon;
