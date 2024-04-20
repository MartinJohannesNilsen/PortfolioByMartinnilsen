import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const PythonIcon = ({
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
        d="M8.89298 0.247986C9.81298 0.0859858 10.76 0.00098584 11.727 -1.41601e-05L11.729 -0.00201416H11.831C12.847 -0.00201416 13.844 0.0829858 14.71 0.231986L14.724 0.232986C16.258 0.397986 17.468 1.64699 17.572 3.20799V8.65899V8.68499C17.572 10.271 16.293 11.557 14.709 11.57H8.98998H8.98698C7.03498 11.604 5.45798 13.174 5.41298 15.127V17.743H3.44398C1.80542 17.743 0.837374 16.5684 0.420787 14.9094C0.147196 13.9647 0.000976562 12.9652 0.000976562 11.932C0.000976562 10.896 0.147977 9.89399 0.403977 9.02199L0.407977 8.99899C0.730977 7.35699 2.17798 6.11799 3.91498 6.11799C3.92688 6.11799 3.93878 6.11825 3.95027 6.11851C3.96098 6.11875 3.97133 6.11899 3.98098 6.11899H11.855V5.39199H6.12898V3.20999C6.12898 1.55799 6.56798 0.661986 8.99098 0.233986L8.89298 0.247986ZM8.64798 1.75499H8.63098C8.03698 1.76099 7.55698 2.24499 7.55698 2.84099V2.84899C7.55898 3.44999 8.04698 3.93699 8.64798 3.93699C9.24998 3.93699 9.73898 3.44799 9.73898 2.84599C9.73898 2.24399 9.25098 1.75499 8.64798 1.75499ZM18.287 8.66099V6.11899H20.435C22.0818 6.11899 22.8715 7.34077 23.2859 8.9726C23.5805 9.90534 23.739 10.899 23.739 11.93C23.739 12.969 23.578 13.97 23.298 14.84C22.719 16.581 22.099 17.742 20.435 17.742H11.853V18.469H17.572V20.653C17.572 22.305 16.15 23.146 14.71 23.563L14.778 23.544C13.856 23.84 12.872 24 11.851 24C10.83 24 9.84603 23.84 8.99103 23.563C7.47803 23.117 6.12903 22.204 6.12903 20.653V15.2C6.13503 13.613 7.40703 12.324 8.99103 12.291H14.71H14.715C16.683 12.239 18.265 10.638 18.287 8.66099ZM15.088 19.926H15.071C14.477 19.929 13.997 20.411 13.997 21.006V21.013V21.017C13.997 21.619 14.485 22.108 15.088 22.108C15.69 22.108 16.179 21.619 16.179 21.017C16.179 20.415 15.691 19.926 15.088 19.926Z"
      />
    </svg>
  );
};
export default PythonIcon;
