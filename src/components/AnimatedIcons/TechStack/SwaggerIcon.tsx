import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const SwaggerIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2756 19.6134C23.037 17.4674 23.9998 14.7771 24 12.0009C24.0022 10.4247 23.6928 8.86357 23.0897 7.4073C22.4866 5.95104 21.6017 4.62832 20.4857 3.51517C18.5227 1.55196 15.9397 0.330134 13.1768 0.0578652C10.414 -0.214403 7.64217 0.479735 5.33372 2.02201C3.02526 3.56428 1.32298 5.85926 0.516924 8.51592C-0.289136 11.1726 -0.149102 14.0265 0.913165 16.5915C1.97543 19.1565 3.89421 21.2738 6.34256 22.5827C8.79091 23.8916 11.6173 24.311 14.3403 23.7696C17.0632 23.2281 19.5142 21.7593 21.2756 19.6134ZM4.81631 12.7637V11.2654C5.07289 11.2651 5.32778 11.224 5.57145 11.1437C5.7299 11.0556 5.86031 10.9246 5.94774 10.7657C6.06313 10.5604 6.1371 10.3344 6.16545 10.1006C6.20446 9.75458 6.22021 9.40637 6.2126 9.05828C6.19488 8.49337 6.23018 7.92804 6.31802 7.36971C6.37174 7.08219 6.50407 6.81517 6.70031 6.59828C6.88095 6.37657 7.12217 6.21218 7.3946 6.12514C7.76359 6.03571 8.14321 5.99793 8.52259 6.01285H8.83374V7.24457C8.55224 7.22704 8.26973 7.25336 7.99631 7.32257C7.88056 7.36788 7.78398 7.45174 7.72288 7.56C7.65654 7.82349 7.62768 8.09502 7.63717 8.36657C7.63717 8.62885 7.61945 9.12628 7.58402 9.85885C7.57612 10.198 7.52484 10.5347 7.43145 10.8609C7.36339 11.0884 7.25701 11.3026 7.11688 11.4943C6.94985 11.695 6.75264 11.8685 6.53231 12.0086C6.75004 12.1381 6.94233 12.3063 7.09974 12.5049C7.25456 12.7101 7.36915 12.9427 7.43745 13.1906C7.5282 13.5458 7.57937 13.91 7.59002 14.2766C7.61745 14.9674 7.63117 15.4086 7.63117 15.6C7.62097 15.8696 7.65278 16.1391 7.72545 16.3989C7.79128 16.5099 7.89147 16.5966 8.01088 16.6457C8.27936 16.7199 8.55832 16.7489 8.83631 16.7314V18.0051H8.52517C8.14934 18.0139 7.77479 17.9582 7.41774 17.8406C7.14521 17.7588 6.89879 17.6072 6.70288 17.4008C6.50456 17.1842 6.36938 16.9174 6.31202 16.6294C6.23191 16.1521 6.19832 15.6681 6.21174 15.1843C6.2321 14.6849 6.2005 14.1848 6.11745 13.692C6.06508 13.4187 5.92839 13.1687 5.7266 12.9771C5.44718 12.8273 5.13322 12.7537 4.81631 12.7637ZM17.8534 13.6954C17.9058 13.4222 18.0425 13.1722 18.2443 12.9806C18.5241 12.8291 18.8391 12.7543 19.1571 12.7637V11.2689C18.8999 11.2682 18.6444 11.2265 18.4003 11.1454C18.2418 11.0573 18.1114 10.9263 18.024 10.7674C17.9086 10.5621 17.8346 10.3361 17.8063 10.1023C17.7673 9.75631 17.7515 9.4081 17.7591 9.06001C17.7769 8.49509 17.7416 7.92976 17.6537 7.37144C17.6 7.08392 17.4677 6.8169 17.2714 6.60001C17.0908 6.37829 16.8496 6.2139 16.5771 6.12687C16.2081 6.03744 15.8285 5.99965 15.4491 6.01458H15.138V7.25487C15.4195 7.23734 15.702 7.26366 15.9754 7.33287C16.0912 7.37818 16.1878 7.46204 16.2489 7.57029C16.3152 7.83379 16.3441 8.10532 16.3346 8.37687C16.3346 8.63915 16.3523 9.13658 16.3877 9.86915C16.3956 10.2083 16.4469 10.545 16.5403 10.8711C16.6083 11.0987 16.7147 11.3129 16.8549 11.5046C17.0219 11.7053 17.2191 11.8788 17.4394 12.0189C17.2217 12.1484 17.0294 12.3166 16.872 12.5151C16.7172 12.7204 16.6026 12.953 16.5343 13.2009C16.443 13.5558 16.3913 13.9197 16.38 14.286C16.3526 14.9769 16.3389 15.418 16.3389 15.6094C16.349 15.879 16.3172 16.1485 16.2446 16.4083C16.1787 16.5194 16.0786 16.606 15.9591 16.6551C15.6907 16.7293 15.4117 16.7583 15.1337 16.7409V18.012H15.4449C15.8207 18.0207 16.1952 17.9651 16.5523 17.8474C16.8252 17.7636 17.0714 17.6096 17.2663 17.4009C17.4646 17.1843 17.5998 16.9175 17.6571 16.6294C17.7376 16.1533 17.7718 15.6705 17.7591 15.1877C17.7388 14.6884 17.7704 14.1883 17.8534 13.6954ZM8.27998 11.9863C8.27538 11.8751 8.29389 11.7642 8.33436 11.6606C8.37482 11.5569 8.43636 11.4628 8.51507 11.3842C8.59378 11.3056 8.68796 11.2441 8.79164 11.2038C8.89532 11.1634 9.00625 11.145 9.11741 11.1497C9.28283 11.1499 9.44449 11.1991 9.58195 11.2911C9.71941 11.3832 9.8265 11.5139 9.88969 11.6667C9.95288 11.8196 9.96932 11.9878 9.93695 12.15C9.90457 12.3122 9.82483 12.4612 9.7078 12.5781C9.59077 12.695 9.4417 12.7746 9.27945 12.8069C9.11719 12.8391 8.94903 12.8224 8.79621 12.7591C8.6434 12.6958 8.5128 12.5885 8.42091 12.451C8.32903 12.3134 8.27998 12.1517 8.27998 11.9863ZM11.2238 11.6606C11.1833 11.7642 11.1648 11.8751 11.1694 11.9863C11.1694 12.1517 11.2185 12.3134 11.3103 12.451C11.4022 12.5885 11.5328 12.6958 11.6856 12.7591C11.8385 12.8224 12.0066 12.8391 12.1689 12.8069C12.3311 12.7746 12.4802 12.695 12.5972 12.5781C12.7143 12.4612 12.794 12.3122 12.8264 12.15C12.8588 11.9878 12.8423 11.8196 12.7791 11.6667C12.7159 11.5139 12.6088 11.3832 12.4714 11.2911C12.3339 11.1991 12.1723 11.1499 12.0068 11.1497C11.8957 11.145 11.7848 11.1634 11.6811 11.2038C11.5774 11.2441 11.4832 11.3056 11.4045 11.3842C11.3258 11.4628 11.2643 11.5569 11.2238 11.6606ZM14.1115 11.6606C14.0711 11.7642 14.0526 11.8751 14.0572 11.9863C14.0572 12.1517 14.1062 12.3134 14.1981 12.451C14.29 12.5885 14.4206 12.6958 14.5734 12.7591C14.7262 12.8224 14.8944 12.8391 15.0566 12.8069C15.2189 12.7746 15.3679 12.695 15.485 12.5781C15.602 12.4612 15.6818 12.3122 15.7141 12.15C15.7465 11.9878 15.7301 11.8196 15.6669 11.6667C15.6037 11.5139 15.4966 11.3832 15.3591 11.2911C15.2217 11.1991 15.06 11.1499 14.8946 11.1497C14.7834 11.145 14.6725 11.1634 14.5688 11.2038C14.4651 11.2441 14.371 11.3056 14.2923 11.3842C14.2135 11.4628 14.152 11.5569 14.1115 11.6606Z"
      />
    </svg>
  );
};
export default SwaggerIcon;