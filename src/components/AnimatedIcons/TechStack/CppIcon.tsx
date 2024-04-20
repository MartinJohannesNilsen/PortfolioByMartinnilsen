import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const CppIcon = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.9892 6.12497C21.8284 5.84107 21.6064 5.59314 21.3623 5.44955L12.8876 0.465378C12.3995 0.178207 11.6005 0.178207 11.1123 0.465378L2.63767 5.44955C2.14942 5.73666 1.75 6.44149 1.75 7.01574V16.9842C1.75 17.2713 1.85017 17.5912 2.01109 17.875C2.17194 18.1589 2.39389 18.4069 2.63795 18.5504L11.1126 23.5346C11.6008 23.8218 12.3998 23.8218 12.8879 23.5346L21.3626 18.5504C21.6067 18.4068 21.8284 18.1587 21.9893 17.8749C22.1501 17.591 22.25 17.2713 22.25 16.9841V7.01574C22.25 6.72856 22.1501 6.4088 21.9892 6.12497ZM5.16663 11.4405C5.16663 15.1427 8.24684 18.1548 12.0328 18.1548C14.4315 18.1548 16.6716 16.9155 17.9112 14.9117L14.9645 13.1889C14.3422 14.1834 13.2267 14.7976 12.0328 14.7976C10.1398 14.7976 8.59978 13.2916 8.59978 11.4405C8.59978 9.58936 10.1398 8.08335 12.0328 8.08335C13.2299 8.08335 14.3482 8.70106 14.9695 9.70023L17.9099 7.96736C16.67 5.96473 14.4307 4.7262 12.0328 4.7262C8.24684 4.7262 5.16663 7.73823 5.16663 11.4405ZM17.1249 11.0165H17.9791V11.8513H17.1249V12.6863H16.2709V11.8513H15.4166V11.0165H16.2709V10.1816H17.1249V11.0165ZM21.3959 11.0208H20.5416V10.1816H19.6876V11.0208H18.8334V11.86H19.6876V12.6994H20.5416V11.86H21.3959V11.0208Z"
      />
    </svg>
  );
};
export default CppIcon;
