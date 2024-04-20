import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const KubernetesIcon = ({
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
        d="M23.9461 14.1259L21.8687 5.18466C21.733 4.74756 21.404 4.39212 20.9933 4.17358L12.6549 0.180898C12.4363 0.071625 12.1902 0.0440063 11.9716 0.0440063C11.7531 0.0440063 11.5069 0.0440063 11.2884 0.0980427L2.94758 4.11834C2.74219 4.21225 2.56129 4.35238 2.41902 4.52777C2.27675 4.70316 2.17695 4.90907 2.12743 5.12942L0.0764555 14.1259C-0.00519932 14.5906 0.104074 15.0553 0.376657 15.4383L6.14653 22.5747C6.47435 22.9025 6.93906 23.1223 7.40377 23.1499H16.5911C17.0835 23.2039 17.5482 22.9854 17.8496 22.5747L23.6195 15.4383C23.892 15.0553 24.0013 14.5906 23.9461 14.1259ZM20.5298 14.7275C20.4745 14.7275 20.4481 14.7275 20.3929 14.6998C20.3665 14.6722 20.3665 14.6722 20.3389 14.6722C20.3068 14.6722 20.2844 14.6633 20.2657 14.6558C20.2521 14.6505 20.2405 14.6458 20.2284 14.6458C20.1462 14.625 20.0797 14.5893 20.0053 14.5494L20.0053 14.5494C19.9807 14.5363 19.9553 14.5226 19.9282 14.5089C19.8699 14.5037 19.8137 14.4852 19.7637 14.4549H19.7372C19.4541 14.3447 19.1609 14.2622 18.8619 14.2087H18.8354C18.7548 14.2067 18.6765 14.2359 18.6169 14.2904C18.6169 14.2904 18.6169 14.318 18.5893 14.318L18.3695 14.2892C17.8672 15.8454 16.8177 17.1666 15.4155 18.0081L15.4972 18.2266C15.4972 18.2266 15.4708 18.2266 15.4708 18.253C15.4461 18.2937 15.4309 18.3395 15.4263 18.3869C15.4218 18.4343 15.4279 18.4821 15.4444 18.5268C15.5536 18.8006 15.6905 19.0732 15.8815 19.3193V19.3734C15.926 19.4118 15.9631 19.4583 15.9907 19.5103C16.0697 19.5898 16.1343 19.6825 16.1817 19.7841C16.2093 19.8105 16.2369 19.8381 16.2369 19.8657C16.2369 19.8657 16.2633 19.8657 16.2633 19.8921C16.3135 20.0231 16.3232 20.1662 16.2909 20.3028C16.2745 20.3679 16.2439 20.4285 16.2014 20.4804C16.1588 20.5323 16.1054 20.5741 16.0448 20.603C16.0269 20.6088 16.0102 20.6147 15.9943 20.6203C15.9375 20.6402 15.8897 20.657 15.825 20.657C15.7172 20.6529 15.6123 20.6205 15.521 20.5629C15.4298 20.5054 15.3553 20.4248 15.3051 20.3292C15.2787 20.3292 15.2787 20.3028 15.2787 20.3028C15.266 20.2896 15.2594 20.2767 15.2529 20.2638C15.2457 20.2497 15.2385 20.2356 15.2234 20.2211C15.1694 20.1395 15.1418 20.0302 15.1141 19.9209L15.0589 19.7564V19.73C14.9691 19.4362 14.8501 19.1522 14.7035 18.8822C14.6508 18.8048 14.5739 18.7469 14.4849 18.7177C14.4849 18.7039 14.4849 18.697 14.4815 18.6936C14.478 18.6901 14.4711 18.6901 14.4573 18.6901L14.348 18.4992C14.2769 18.5204 14.2038 18.5435 14.1295 18.567L14.1291 18.5671L14.1291 18.5671C13.9174 18.6341 13.6947 18.7045 13.4726 18.7454C12.9803 18.8822 12.488 18.9363 11.9969 18.9363C11.1834 18.942 10.3763 18.7937 9.61806 18.4992L9.50878 18.7177C9.50878 18.7454 9.50878 18.7454 9.48117 18.7454C9.39201 18.7743 9.31508 18.8322 9.26262 18.9099L9.25911 18.9169C9.12339 19.1883 8.98814 19.4588 8.90718 19.7576L8.85314 19.9221C8.83934 19.9768 8.81892 20.0245 8.79851 20.0722C8.77809 20.12 8.75768 20.1677 8.74387 20.2223L8.73786 20.2286C8.71343 20.254 8.68984 20.2785 8.68984 20.304C8.66222 20.304 8.66222 20.3304 8.66222 20.3304C8.61232 20.4262 8.5379 20.507 8.44655 20.5646C8.3552 20.6222 8.25019 20.6545 8.14227 20.6582C8.07575 20.6526 8.01093 20.6343 7.95134 20.6042C7.82794 20.5319 7.73669 20.4153 7.6961 20.2782C7.65551 20.141 7.66863 19.9935 7.73279 19.8657C7.76041 19.8657 7.76041 19.8381 7.76041 19.8381C7.77332 19.8246 7.77992 19.8114 7.78652 19.7982C7.79342 19.7844 7.80032 19.7706 7.81445 19.7564C7.8505 19.7082 7.88139 19.66 7.90931 19.6164L7.90933 19.6163C7.94465 19.5612 7.9752 19.5135 8.00538 19.4827L8.01499 19.4728C8.06279 19.4241 8.08872 19.3976 8.11465 19.3458V19.3181C8.28673 19.0694 8.43318 18.8039 8.55174 18.5256C8.56766 18.4808 8.57345 18.433 8.56867 18.3856C8.5639 18.3383 8.54868 18.2926 8.52412 18.2518C8.52412 18.2518 8.49771 18.2518 8.49771 18.2254L8.6346 18.0333C8.3721 17.8951 8.12461 17.7301 7.8961 17.5409C6.84295 16.7255 6.06137 15.6102 5.6542 14.342L5.40803 14.3684C5.40803 14.3684 5.40803 14.342 5.38041 14.342C5.32113 14.2871 5.24262 14.2578 5.16187 14.2603H5.13545C4.82758 14.313 4.52556 14.3954 4.23364 14.5065H4.20483C4.15079 14.5065 4.09555 14.5341 4.04032 14.5617C4.00857 14.572 3.97266 14.5866 3.93419 14.6023L3.93416 14.6023L3.93414 14.6023C3.87367 14.627 3.80689 14.6541 3.74011 14.671C3.7322 14.671 3.71924 14.6687 3.70495 14.666C3.67151 14.6599 3.63084 14.6525 3.63084 14.671C3.63084 14.6986 3.63084 14.6986 3.60322 14.6986C3.54919 14.7263 3.52157 14.7263 3.46634 14.7263H3.46633C3.34421 14.7392 3.22153 14.7075 3.12091 14.6371C3.02028 14.5667 2.94849 14.4624 2.91876 14.3432C2.90512 14.2731 2.90567 14.201 2.92038 14.1311C2.9351 14.0612 2.96367 13.9949 3.00442 13.9363C3.04517 13.8776 3.09726 13.8277 3.15763 13.7895C3.21799 13.7514 3.28539 13.7257 3.35586 13.714C3.37174 13.6981 3.37849 13.6913 3.38661 13.6885C3.39261 13.6864 3.39936 13.6864 3.41109 13.6864C3.4426 13.6864 3.46513 13.6774 3.48391 13.6699C3.49734 13.6645 3.50885 13.6599 3.52037 13.6599C3.575 13.6599 3.62962 13.653 3.68425 13.6461L3.68428 13.6461C3.73891 13.6392 3.79355 13.6323 3.84819 13.6323C3.90222 13.6059 3.95746 13.6059 4.0127 13.6059C4.32697 13.5802 4.63814 13.5252 4.94212 13.4414L4.94935 13.4365C5.02862 13.3829 5.10745 13.3297 5.13425 13.2493C5.13425 13.2493 5.16067 13.2493 5.16067 13.2228L5.37921 13.1676C5.13305 11.609 5.48849 10.0239 6.33626 8.6838C6.34961 8.65649 6.36327 8.63593 6.37708 8.61514C6.39059 8.59479 6.40425 8.57423 6.41791 8.54691L6.2606 8.38841C6.27261 8.31035 6.22338 8.21429 6.17415 8.16506C5.9556 7.94651 5.68182 7.782 5.40803 7.61869L5.24472 7.53583C5.14133 7.48699 5.04071 7.43247 4.94332 7.37252C4.9169 7.37252 4.86167 7.31849 4.86167 7.31849C4.86167 7.31849 4.86167 7.29087 4.83525 7.29087C4.72698 7.19807 4.6561 7.06912 4.63578 6.92798C4.61546 6.78684 4.64709 6.64313 4.72477 6.52355C4.80643 6.38666 4.94332 6.33263 5.10783 6.33263C5.2469 6.33599 5.38119 6.38398 5.49089 6.46952L5.51851 6.49714C5.53157 6.5102 5.54492 6.5168 5.55843 6.52348C5.57224 6.53031 5.5862 6.53721 5.60016 6.55117C5.6402 6.5918 5.67389 6.63214 5.70745 6.67233L5.70746 6.67234C5.74234 6.71411 5.77709 6.75572 5.81871 6.79734C5.82655 6.80484 5.83652 6.81243 5.8474 6.82073L5.84741 6.82073C5.87488 6.84166 5.9082 6.86706 5.92798 6.90661C6.11891 7.12516 6.36508 7.3437 6.61124 7.53583L6.61477 7.53756C6.66768 7.56344 6.72171 7.58987 6.77575 7.58987C6.80726 7.58987 6.82979 7.58048 6.84857 7.57265C6.862 7.56705 6.87351 7.56225 6.88502 7.56225H6.91264L7.07715 7.67152C7.97858 6.70758 9.15148 6.0401 10.4406 5.75744L10.5534 5.73834L10.5534 5.73833C10.838 5.69004 11.1035 5.64497 11.37 5.62055L11.3977 5.402V5.34797C11.4788 5.29427 11.5066 5.21213 11.534 5.13098L11.5345 5.12942C11.5345 4.8016 11.5345 4.5002 11.4805 4.2V4.17238C11.4805 4.11834 11.4805 4.0631 11.4529 4.00787C11.4215 3.90122 11.4034 3.79112 11.3989 3.68005V3.54436C11.3989 3.40746 11.4529 3.27057 11.5634 3.1613C11.7003 3.02441 11.8636 2.94275 12.0281 2.97037C12.1639 2.98922 12.2875 3.059 12.3738 3.16559C12.4601 3.27217 12.5026 3.40757 12.4928 3.54436V3.70887C12.4787 3.76472 12.4718 3.82057 12.4649 3.87642C12.4583 3.92984 12.4517 3.98326 12.4387 4.03669C12.4387 4.0637 12.4318 4.09102 12.4249 4.11834C12.418 4.14566 12.4111 4.17298 12.4111 4.2V4.22761C12.3535 4.55543 12.3535 4.85684 12.3535 5.15704L12.355 5.16146C12.3821 5.24163 12.409 5.32134 12.4904 5.37558V5.34797L12.518 5.56651C13.8117 5.70161 15.0424 6.19388 16.0724 6.98827C16.1797 7.095 16.293 7.20173 16.4064 7.30846C16.5251 7.42027 16.6438 7.53209 16.7556 7.64391L16.9754 7.50701H17.0018C17.0282 7.53463 17.0835 7.53463 17.1111 7.53463C17.163 7.53463 17.2139 7.51019 17.2658 7.4853L17.2756 7.4806C17.5218 7.31609 17.7679 7.09754 17.9589 6.87899C17.9673 6.8702 17.9786 6.8614 17.991 6.85175C18.0177 6.8311 18.0493 6.80655 18.0681 6.76972C18.1234 6.68807 18.205 6.60521 18.2879 6.52355C18.3143 6.52355 18.3419 6.49714 18.3695 6.46952L18.3959 6.4419C18.5056 6.35705 18.6392 6.30912 18.7778 6.30501C18.9147 6.30501 19.0792 6.38666 19.1609 6.49714C19.3518 6.7433 19.2966 7.07112 19.0516 7.26205C19.0516 7.2726 19.0554 7.27912 19.0587 7.28469C19.0641 7.2937 19.0679 7.30022 19.0516 7.31729C19.0382 7.33006 19.0249 7.33666 19.0117 7.34319C18.9975 7.35016 18.9836 7.35706 18.9699 7.37132C18.9116 7.39986 18.8613 7.42872 18.8107 7.45775L18.8107 7.45777L18.8107 7.45778C18.7655 7.48371 18.7201 7.50977 18.6685 7.53583L18.504 7.61749C18.2318 7.77476 17.9753 7.95771 17.7379 8.16385C17.6839 8.21909 17.6562 8.32837 17.6562 8.41002V8.43764L17.4929 8.60215C17.93 9.28541 18.2591 10.0515 18.45 10.8441C18.6145 11.6366 18.6685 12.4567 18.5593 13.2493L18.7778 13.3045C18.7947 13.348 18.8205 13.3874 18.8536 13.4203C18.8867 13.4532 18.9263 13.4788 18.9699 13.4954C19.2701 13.5771 19.598 13.6323 19.8982 13.6599H19.9258C19.9778 13.6816 20.0341 13.6907 20.0903 13.6864C20.1996 13.6864 20.3088 13.6864 20.4169 13.714C20.4721 13.714 20.5274 13.714 20.5274 13.7416C20.5274 13.768 20.5538 13.768 20.5814 13.768C20.7136 13.7997 20.8325 13.8724 20.9209 13.9757C21.0093 14.079 21.0628 14.2077 21.0737 14.3432C21.0325 14.4547 20.9585 14.5511 20.8614 14.6197C20.7643 14.6883 20.6487 14.7259 20.5298 14.7275ZM6.2606 8.38841C6.25971 8.39614 6.2581 8.40378 6.2558 8.41122V8.3836L6.2606 8.38841ZM9.61928 13.6875L6.91267 14.1523C7.30517 15.2499 8.04399 16.1902 9.01768 16.8313L10.0564 14.3156C10.0806 14.2747 10.0955 14.2289 10.1001 14.1816C10.1046 14.1343 10.0987 14.0866 10.0828 14.0418C10.0564 13.8256 9.83783 13.6875 9.61928 13.6875ZM10.658 10.1884C10.9041 10.1884 11.1227 9.99747 11.1227 9.75131L11.2596 7.01707L10.712 7.12635C9.75327 7.35186 8.87404 7.83424 8.16871 8.52168L10.4382 10.1344C10.4571 10.1404 10.4745 10.1464 10.4911 10.1522C10.5476 10.1719 10.5949 10.1884 10.658 10.1884ZM9.45477 11.9656C9.49344 11.9211 9.52278 11.8694 9.54104 11.8134C9.5593 11.7573 9.56611 11.6982 9.56107 11.6395C9.55603 11.5808 9.53924 11.5237 9.5117 11.4717C9.48415 11.4196 9.44642 11.3736 9.40074 11.3364L7.37738 9.53156C6.7803 10.5371 6.50346 11.7007 6.58365 12.8674L9.23623 12.1025C9.3455 12.0749 9.40074 12.0472 9.45477 11.9656ZM11.2043 12.9226L11.944 13.2781L12.6813 12.9226L12.8735 12.1289L12.3535 11.4733H11.5334L11.0134 12.1289L11.2043 12.9226ZM12.8182 9.99747C12.9551 10.1884 13.2277 10.216 13.4186 10.1067L15.6605 8.52168C14.8294 7.6911 13.7392 7.1699 12.5709 7.04469L12.7354 9.80654C12.7352 9.84237 12.7424 9.87786 12.7567 9.91073C12.771 9.9436 12.7919 9.97314 12.8182 9.99747ZM11.8136 14.8162C11.9141 14.7961 12.0185 14.8132 12.1074 14.8643C12.189 14.9184 12.2442 14.9736 12.3271 15.0564L13.6396 17.4352C13.4751 17.4629 13.3106 17.4905 13.1196 17.5445C12.7366 17.6274 12.3535 17.6814 11.944 17.6814C11.3701 17.6814 10.7685 17.5709 10.2209 17.4076L11.561 14.9736C11.6233 14.8922 11.7131 14.8363 11.8136 14.8162ZM14.4321 11.3904L16.4831 9.53154C16.7845 10.0314 17.0054 10.5756 17.1375 11.1442C17.2691 11.7086 17.3065 12.2908 17.248 12.8674L14.6507 12.1289C14.4045 12.0748 14.2676 11.8287 14.3228 11.5825C14.342 11.5101 14.3797 11.4439 14.4321 11.3904ZM13.7756 13.9301C13.8206 13.8349 13.8979 13.7587 13.9938 13.7151C14.0727 13.6839 14.1564 13.666 14.2412 13.6623L16.9754 14.127C16.8373 14.5089 16.674 14.8655 16.4555 15.1657C16.038 15.8281 15.4776 16.3886 14.8152 16.806L13.7477 14.2351C13.7206 14.1333 13.7305 14.0252 13.7756 13.9301Z"
      />
    </svg>
  );
};
export default KubernetesIcon;
