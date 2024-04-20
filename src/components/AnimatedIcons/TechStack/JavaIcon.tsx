import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const JavaIcon = ({
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
        d="M14.4425 0C14.4425 0 16.9784 2.49455 12.0373 6.33047C8.97338 8.7099 10.1077 10.2985 11.1966 11.8234L11.1973 11.8243C11.5162 12.2711 11.8313 12.7124 12.0356 13.1666C9.72286 11.1145 8.34841 9.48637 9.16418 7.6269C9.63002 6.56514 10.5915 5.77492 11.5692 4.97127C13.101 3.71234 14.6728 2.42043 14.4425 0ZM13.1354 11.4756C14.3126 12.8084 12.8261 14.0078 12.8261 14.0078C12.8261 14.0078 15.8153 12.4904 14.4425 10.5902C13.1603 8.81806 12.3988 7.35939 17.5 4.90189C17.5 4.90189 9.14484 6.95391 13.1354 11.4756ZM17.2027 17.5842C21.7817 15.2444 19.6646 12.9959 18.1869 13.2988C17.8246 13.3729 17.6632 13.4372 17.6632 13.4372C17.6632 13.4372 17.7976 13.23 18.0544 13.1403C20.9779 12.1297 23.2261 16.1212 17.1107 17.7021C17.1107 17.7021 17.1816 17.6399 17.2027 17.5842ZM9.24564 13.2104C9.24564 13.2104 4.80986 14.2465 7.67477 14.6227C8.88444 14.782 11.2959 14.7459 13.5421 14.5609C15.3778 14.4085 17.2211 14.0848 17.2211 14.0848C17.2211 14.0848 16.5738 14.3574 16.1055 14.6719C11.6011 15.8368 2.89934 15.2949 5.40446 14.1032C7.52304 13.0962 9.24564 13.2104 9.24564 13.2104ZM8.76483 16.8568C7.16721 16.6944 8.21328 15.9329 8.21328 15.9329C4.07926 17.2822 10.5134 18.8122 16.29 17.1511C15.6759 16.9383 15.2855 16.549 15.2855 16.549C12.4623 17.0836 10.8308 17.0665 8.76483 16.8568ZM8.79711 18.5605C8.79711 18.5605 7.86449 19.0939 9.46086 19.2743C11.3948 19.4913 12.3833 19.4602 14.5146 19.0636C14.5146 19.0636 15.0749 19.409 15.8575 19.7083C11.0797 21.7219 5.04444 19.5916 8.79711 18.5605ZM19.454 20.5041C19.454 20.5041 20.1442 21.0633 18.6939 21.4959C15.9361 22.3175 7.2157 22.5656 4.79321 21.5287C3.92238 21.1562 5.55542 20.6392 6.06911 20.5307C6.60485 20.4164 6.91099 20.4377 6.91099 20.4377C5.94255 19.7669 0.651367 21.755 4.22333 22.3244C13.9646 23.8779 21.9808 21.6248 19.454 20.5041ZM9.69555 23.9245C14.0908 24.2012 20.8402 23.771 21 21.7259C21 21.7259 20.6927 22.5012 17.3676 23.1169C13.6162 23.8111 8.98942 23.7301 6.24518 23.2852C6.25359 23.2918 6.82824 23.7437 9.69555 23.9245Z"
      />
    </svg>
  );
};
export default JavaIcon;
