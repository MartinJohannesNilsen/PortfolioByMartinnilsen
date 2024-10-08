import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const GoIcon = ({
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
        d="M1.81098 10.231C1.76398 10.231 1.75298 10.208 1.77598 10.172L2.02198 9.85701C2.04498 9.82201 2.10298 9.79901 2.14998 9.79901H6.32198C6.36798 9.79901 6.37998 9.83401 6.35698 9.86901L6.15798 10.172C6.13498 10.208 6.07598 10.242 6.04098 10.242L1.81098 10.231ZM0.0469763 11.306C-2.37375e-05 11.306 -0.0120237 11.283 0.0119763 11.248L0.256976 10.932C0.279976 10.897 0.338976 10.874 0.385976 10.874H5.71398C5.76098 10.874 5.78398 10.909 5.77198 10.944L5.67898 11.224C5.66698 11.271 5.62098 11.294 5.57398 11.294L0.0469763 11.306ZM2.87498 12.381C2.82798 12.381 2.81598 12.346 2.83998 12.311L3.00298 12.019C3.02598 11.984 3.07298 11.949 3.11998 11.949H5.45698C5.50398 11.949 5.52698 11.984 5.52698 12.031L5.50398 12.311C5.50398 12.358 5.45698 12.393 5.42198 12.393L2.87498 12.381ZM15.004 10.021C14.268 10.208 13.765 10.348 13.041 10.535C12.865 10.581 12.854 10.593 12.701 10.418C12.527 10.219 12.398 10.091 12.153 9.97401C11.416 9.61201 10.703 9.71701 10.038 10.149C9.24298 10.663 8.83398 11.423 8.84598 12.369C8.85698 13.304 9.49998 14.075 10.423 14.204C11.218 14.309 11.883 14.029 12.41 13.434C12.515 13.304 12.608 13.164 12.725 13H10.47C10.225 13 10.166 12.848 10.248 12.65C10.4 12.288 10.68 11.68 10.844 11.376C10.869 11.3197 10.91 11.272 10.9619 11.2387C11.0138 11.2055 11.0743 11.1882 11.136 11.189H15.389C15.366 11.505 15.366 11.82 15.319 12.136C15.1979 12.9679 14.8684 13.7557 14.361 14.426C13.52 15.536 12.421 16.226 11.031 16.412C9.88598 16.564 8.82198 16.342 7.88798 15.642C7.02298 14.987 6.53198 14.122 6.40398 13.047C6.25198 11.773 6.62598 10.628 7.39698 9.62301C8.22698 8.53701 9.32498 7.84701 10.669 7.60301C11.767 7.40301 12.819 7.53301 13.765 8.17401C14.385 8.58401 14.828 9.14401 15.121 9.82201C15.191 9.92701 15.144 9.98601 15.004 10.022M18.872 16.483C17.808 16.459 16.838 16.155 16.02 15.454C15.3395 14.8805 14.8909 14.079 14.758 13.199C14.548 11.879 14.91 10.71 15.705 9.67001C16.558 8.54801 17.586 7.96401 18.977 7.72001C20.169 7.51001 21.291 7.62501 22.307 8.31501C23.23 8.94501 23.803 9.79901 23.955 10.92C24.153 12.498 23.698 13.783 22.611 14.882C21.84 15.665 20.893 16.155 19.806 16.377C19.491 16.437 19.176 16.447 18.872 16.483ZM21.652 11.763C21.641 11.61 21.641 11.493 21.618 11.376C21.408 10.219 20.344 9.56601 19.234 9.82201C18.147 10.067 17.446 10.757 17.189 11.855C16.979 12.767 17.423 13.69 18.264 14.065C18.907 14.345 19.549 14.309 20.169 13.995C21.092 13.515 21.594 12.767 21.653 11.762L21.652 11.763Z"
      />
    </svg>
  );
};
export default GoIcon;
