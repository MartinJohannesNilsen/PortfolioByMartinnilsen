import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const JupyterIcon = ({
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
        d="M20.105 1.55761C20.1222 1.83973 20.0551 2.1206 19.9122 2.36445C19.7692 2.60829 19.5569 2.80407 19.3023 2.92683C19.0477 3.0496 18.7623 3.09381 18.4825 3.05382C18.2027 3.01383 17.9412 2.89146 17.7311 2.70229C17.5211 2.51312 17.3722 2.26571 17.3033 1.99159C17.2343 1.71747 17.2486 1.42904 17.3442 1.16304C17.4397 0.897042 17.6123 0.665514 17.84 0.49795C18.0676 0.330387 18.34 0.234373 18.6223 0.222139C18.8075 0.21192 18.9929 0.238411 19.1677 0.300088C19.3426 0.361765 19.5036 0.457411 19.6414 0.581524C19.7792 0.705637 19.8911 0.855768 19.9706 1.02328C20.0502 1.19079 20.0958 1.37238 20.105 1.55761ZM11.8009 18.0043C8.02139 18.0043 4.69944 16.648 2.98195 14.6446C3.64839 16.4467 4.8509 18.0014 6.42763 19.0994C8.00435 20.1974 9.87961 20.786 11.801 20.786C13.7223 20.786 15.5976 20.1974 17.1743 19.0994C18.751 18.0014 19.9536 16.4467 20.62 14.6446C18.9066 16.6479 15.5973 18.0043 11.8009 18.0043ZM20.62 8.33778C18.9024 6.33446 15.5806 4.97818 11.8009 4.97818C8.00463 4.97818 4.69953 6.33041 2.98195 8.33778C3.64839 6.5357 4.8509 4.98103 6.42763 3.88304C8.00435 2.78505 9.87961 2.19644 11.801 2.19644C13.7223 2.19644 15.5976 2.78505 17.1743 3.88304C18.751 4.98103 19.9536 6.5357 20.62 8.33778ZM6.59792 21.9025C6.62123 22.3429 6.47994 22.7761 6.20153 23.118C5.92312 23.4599 5.52749 23.6861 5.09159 23.7524C4.65569 23.8188 4.21068 23.7207 3.84311 23.4772C3.47555 23.2336 3.2117 22.8621 3.1029 22.4348C2.99409 22.0075 3.04811 21.555 3.25443 21.1653C3.46075 20.7756 3.80464 20.4766 4.2192 20.3265C4.63377 20.1763 5.08937 20.1857 5.4974 20.3528C5.90543 20.5199 6.23671 20.8328 6.42682 21.2306C6.52704 21.4413 6.58516 21.6696 6.59792 21.9025ZM2.83436 4.36433C3.00696 4.47253 3.20769 4.52728 3.41132 4.52171C3.68652 4.51077 3.9463 4.39172 4.13426 4.19041C4.32222 3.98909 4.42317 3.72176 4.41522 3.44646C4.40682 3.24292 4.33843 3.04642 4.21866 2.88164C4.09888 2.71687 3.93306 2.59118 3.74205 2.52039C3.55105 2.4496 3.34337 2.43686 3.14514 2.48377C2.94691 2.53069 2.76697 2.63516 2.62795 2.78406C2.48894 2.93296 2.39704 3.11963 2.36383 3.32061C2.33062 3.52159 2.35756 3.72791 2.44128 3.91361C2.52501 4.09932 2.66176 4.25613 2.83436 4.36433Z"
      />
    </svg>
  );
};
export default JupyterIcon;
