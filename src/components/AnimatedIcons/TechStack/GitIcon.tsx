import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const GitIcon = ({
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
        d="M0.501738 10.7887C-0.167246 11.4577 -0.167246 12.5423 0.501738 13.2113L10.7887 23.4982C11.4577 24.1672 12.5423 24.1672 13.2113 23.4982L23.4982 13.2113C24.1672 12.5423 24.1672 11.4577 23.4982 10.7887L13.2113 0.501738C12.5423 -0.167246 11.4577 -0.167246 10.7887 0.501738L0.501738 10.7887ZM7.65738 3.66589L8.69907 2.62417L11.4598 5.38484C11.6304 5.33196 11.8117 5.30348 11.9997 5.30348C13.0056 5.30348 13.8211 6.11896 13.8211 7.12492C13.8211 7.31289 13.7926 7.49427 13.7398 7.66484L16.5019 10.427C16.6785 10.37 16.8667 10.3392 17.0622 10.3392C18.0682 10.3392 18.8836 11.1547 18.8836 12.1606C18.8836 13.1666 18.0682 13.9821 17.0622 13.9821C16.0563 13.9821 15.2408 13.1666 15.2408 12.1606C15.2408 11.8932 15.2984 11.6392 15.4019 11.4105L12.8301 8.83861V15.4944C13.4185 15.7963 13.8211 16.4092 13.8211 17.116C13.8211 18.1219 13.0056 18.9374 11.9997 18.9374C10.9937 18.9374 10.1782 18.1219 10.1782 17.116C10.1782 16.3363 10.6681 15.6711 11.3568 15.4113V8.82961C10.6681 8.56981 10.1782 7.90458 10.1782 7.12492C10.1782 6.8503 10.239 6.58989 10.3479 6.35638L7.65738 3.66589Z"
      />
    </svg>
  );
};
export default GitIcon;
