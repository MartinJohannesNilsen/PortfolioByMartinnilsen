import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const ReactIcon = ({
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
        d="M17.0574 1.30029C18.454 1.3358 19.1775 3.0148 19.2731 4.25481C19.292 4.5013 19.2991 4.74881 19.296 4.99631C19.2931 5.26431 19.2785 5.53231 19.2551 5.79931C19.1914 6.51365 19.0711 7.22064 18.9035 7.91942C20.4167 8.3397 21.8235 9.00583 23.0066 10.0609C23.0906 10.1358 23.1715 10.2138 23.2506 10.2943C23.9251 10.9818 24.2775 12.0918 23.7331 13.0054C22.8107 14.5541 20.9466 15.3817 18.9632 15.9066C19.4444 17.5911 19.62 19.324 19.0535 20.9914C18.764 21.8438 18.0315 22.6238 17.0551 22.6438C15.2645 22.6798 13.605 21.3778 12.165 19.9763C12.1405 19.9524 12.116 19.9284 12.0915 19.9045C11.1469 20.839 10.1019 21.6243 8.93096 22.1594C7.97746 22.5954 6.84345 22.8644 5.99945 22.3778C4.84245 21.7114 4.71594 20.1523 4.73745 18.9698C4.74294 18.6794 4.76194 18.3889 4.79194 18.0994C4.86675 17.3791 4.99042 16.6652 5.15732 15.9592C3.60079 15.5444 2.11468 14.9037 0.99847 13.8463C0.422974 13.3014 -0.069028 12.5843 0.00797238 11.7863C0.132973 10.4954 1.37147 9.66686 2.41398 9.10584C3.28893 8.63505 4.22163 8.2747 5.18911 8.00124C5.10009 7.63342 5.02075 7.26363 4.95144 6.89225C4.88544 6.54025 4.83293 6.18525 4.79693 5.82875C4.76744 5.53775 4.74893 5.24525 4.74393 4.95275C4.73993 4.71675 4.74493 4.48075 4.76144 4.24575C4.77244 4.08875 4.78844 3.93275 4.80993 3.77724C4.83044 3.63124 4.85644 3.48574 4.88893 3.34174C4.91044 3.24624 4.93444 3.15174 4.96193 3.05774C5.23144 2.13623 5.93244 1.31523 7.05445 1.32223C8.83646 1.35673 10.437 2.56623 11.858 3.92075C11.9114 3.97166 11.9645 4.02286 12.0174 4.07434C13.1677 2.91078 14.4608 1.94059 15.937 1.48029C16.3065 1.3648 16.6 1.2948 17.0574 1.30029ZM12.4518 4.51042C12.4928 4.47006 12.5341 4.42986 12.5754 4.38981C13.879 3.1273 15.351 1.91229 16.9905 1.88629C17.6951 1.8848 18.2125 2.4208 18.4325 3.0203C18.4615 3.0998 18.488 3.1803 18.5115 3.2618C18.54 3.3618 18.5651 3.46281 18.5865 3.56481C18.8858 4.98954 18.7435 6.4049 18.3791 7.78437C17.2006 7.50372 15.9673 7.35814 14.7321 7.28304C14.0406 6.30078 13.2832 5.37027 12.4518 4.51042ZM11.6409 4.46696C10.8312 3.68796 9.94397 3.0139 8.96195 2.49574C8.34395 2.16974 7.67494 1.90323 6.98694 1.90874C5.94344 1.93174 5.46593 3.16224 5.36993 4.02575C5.35044 4.20275 5.33844 4.38124 5.33293 4.55975C5.32593 4.78775 5.32893 5.01624 5.34044 5.24425C5.38417 6.12415 5.52115 6.99626 5.73227 7.85755C6.907 7.5674 8.1256 7.3959 9.34841 7.30244C9.60011 6.95383 9.85801 6.61019 10.121 6.27182C10.5988 5.65705 11.104 5.04379 11.6409 4.46696ZM5.31101 8.48114C3.9503 8.86015 2.67684 9.44746 1.57747 10.3578C1.47998 10.4383 1.38598 10.5229 1.29547 10.6114C1.23698 10.6683 1.18047 10.7278 1.12598 10.7889C0.636468 11.3389 0.467974 12.2223 0.929976 12.8829C1.39498 13.5474 2.10098 14.0269 2.82798 14.4178C3.61427 14.8406 4.44187 15.1628 5.29689 15.4076C5.61085 14.2427 6.03992 13.101 6.55839 11.9898C6.04925 10.8513 5.6293 9.67756 5.31101 8.48114ZM6.92606 11.2358C6.49681 10.2887 6.13146 9.32212 5.85865 8.34063C6.85406 8.10618 7.88871 7.97182 8.93018 7.89473C8.18987 8.96727 7.5119 10.0838 6.92606 11.2358ZM6.89435 12.7095C6.50198 13.6435 6.16886 14.5987 5.90071 15.5668C6.85512 15.7977 7.83881 15.9413 8.83326 16.0282C8.10504 14.971 7.45426 13.8602 6.89435 12.7095ZM9.67237 16.0887C9.35596 15.6158 9.05239 15.1355 8.75945 14.6548C8.21696 13.7645 7.70279 12.8493 7.24543 11.9136C7.90178 10.4937 8.69502 9.12986 9.6042 7.85243C10.3698 7.8125 11.1354 7.79845 11.888 7.79334C12.7261 7.7915 13.5699 7.81309 14.4091 7.87145C14.8936 8.60168 15.3466 9.35465 15.7754 10.1082C16.1193 10.7127 16.4521 11.3258 16.763 11.9478C16.0859 13.3806 15.3186 14.7736 14.4379 16.0793C13.5895 16.1351 12.7375 16.1534 11.8925 16.1504C11.1544 16.1478 10.4119 16.1314 9.67237 16.0887ZM9.27937 16.656C8.40817 16.5751 7.54191 16.4555 6.685 16.2984C6.37627 16.2417 6.0665 16.1787 5.75797 16.1079C5.70442 16.3215 5.65406 16.5357 5.60694 16.7503C5.52845 17.1089 5.46245 17.4698 5.41394 17.8334C5.37645 18.1149 5.34894 18.3978 5.33445 18.6818C5.32294 18.9078 5.31894 19.1343 5.32594 19.3609C5.33094 19.5378 5.34245 19.7149 5.36194 19.8909C5.37645 20.0254 5.39594 20.1594 5.42045 20.2923C5.43894 20.3909 5.46045 20.4889 5.48545 20.5863C5.50594 20.6654 5.52894 20.7438 5.55494 20.8218C5.75945 21.4384 6.28645 22.0274 6.99395 22.0469C8.64446 22.0918 10.1985 20.8884 11.542 19.5803C11.5804 19.543 11.6186 19.5054 11.6567 19.4677C10.8034 18.5902 10.007 17.649 9.27937 16.656ZM12.0288 19.0894C11.3347 18.3617 10.6984 17.5586 10.1069 16.7212C11.4005 16.8047 12.7019 16.8029 13.9968 16.7123C13.3936 17.5502 12.7398 18.3471 12.0288 19.0894ZM12.4615 19.5257C13.2998 20.3371 14.2203 21.0343 15.2434 21.5518C16.0474 21.9583 17.0245 22.2778 17.7191 21.8938C18.59 21.4118 18.6971 20.2634 18.7435 19.4074C18.756 19.1743 18.7575 18.9403 18.75 18.7068C18.7411 18.4137 18.718 18.1213 18.6835 17.8303C18.6129 17.2327 18.4997 16.6422 18.3513 16.0587C18.1341 16.1095 17.9165 16.1572 17.6995 16.2024C16.716 16.4071 15.7203 16.5567 14.719 16.6525C14.0323 17.6709 13.286 18.653 12.4615 19.5257ZM18.7947 15.3553C19.6015 15.1172 20.3856 14.8124 21.1361 14.4243C22.2521 13.8469 23.5081 12.9989 23.4635 11.9069C23.4226 10.9049 22.4455 10.2858 21.7141 9.84379C21.5161 9.72432 21.3126 9.61379 21.1061 9.50979C20.3453 9.12859 19.5487 8.82698 18.7278 8.59008C18.4001 9.74451 17.9502 10.8755 17.4221 11.9791C17.5565 12.2663 17.6873 12.5552 17.8145 12.8453C18.1699 13.6557 18.5162 14.4975 18.7947 15.3553ZM17.0965 12.6373C17.5353 13.5774 17.9163 14.5373 18.2031 15.5172C17.203 15.7702 16.1727 15.9293 15.1324 16.0247C15.317 15.7381 15.4972 15.4498 15.6734 15.1614C16.1764 14.3387 16.6579 13.4967 17.0965 12.6373ZM17.078 11.2643C17.4895 10.3504 17.8851 9.40729 18.1878 8.44427C17.2083 8.19744 16.1985 8.03602 15.177 7.93565C15.8794 8.99929 16.5098 10.1163 17.078 11.2643ZM13.9815 7.24553C13.3718 7.22121 12.7641 7.21091 12.1651 7.20683C11.4633 7.20525 10.7525 7.21951 10.0407 7.25761C10.6689 6.4269 11.347 5.63649 12.0686 4.89527C12.7603 5.61556 13.3939 6.4107 13.9815 7.24553ZM14.2395 11.9263C14.2395 13.163 13.2371 14.1654 12.0006 14.1654C10.7641 14.1654 9.76153 13.163 9.76153 11.9263C9.76153 10.6898 10.7641 9.6874 12.0006 9.6874C13.2371 9.6874 14.2395 10.6898 14.2395 11.9263Z"
      />
    </svg>
  );
};
export default ReactIcon;
