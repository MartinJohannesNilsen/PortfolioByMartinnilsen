import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const PandasIcon = ({
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
        d="M8.88675 2.10975H11.3385V7.2H8.8875L8.88675 2.10975ZM8.88675 12.5663H11.3385V17.658H8.8875L8.88675 12.5663ZM8.88675 8.6865H11.3385V11.0888H8.8875L8.88675 8.6865ZM4.9485 6.29475H7.3995V23.217H4.94775L4.9485 6.29475ZM12.744 16.767H15.1958V21.8573H12.744V16.767ZM12.744 6.30075H15.1958V11.391H12.744V6.30075ZM12.744 12.8783H15.1958V15.2805H12.744V12.8783ZM16.6005 0.783752H19.0523V17.706H16.6005V0.783752Z"
      />
    </svg>
  );
};
export default PandasIcon;
