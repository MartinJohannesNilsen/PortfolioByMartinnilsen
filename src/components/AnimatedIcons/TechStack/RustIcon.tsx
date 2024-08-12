import { useEffect, useState } from "react";
import { HoverIconProps } from "../../../types";

export const RustIcon = ({
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
        d="M23.8357 11.706L22.8284 11.082C22.82 10.9841 22.8105 10.8864 22.7999 10.7887L23.6654 9.98098C23.7091 9.94095 23.7417 9.89035 23.7601 9.83406C23.7785 9.77778 23.7821 9.7177 23.7706 9.6596C23.7591 9.60151 23.7328 9.54737 23.6943 9.50238C23.6557 9.45739 23.6063 9.42308 23.5507 9.40274L22.4437 8.98874C22.4161 8.89316 22.3873 8.7979 22.3574 8.703L23.0474 7.74376C23.0821 7.69588 23.104 7.63992 23.1109 7.58121C23.1178 7.5225 23.1096 7.46299 23.0871 7.40834C23.0645 7.35369 23.0284 7.30572 22.9821 7.26899C22.9357 7.23227 22.8808 7.208 22.8224 7.19851L21.6547 7.00876C21.6097 6.92026 21.5624 6.83327 21.5144 6.74627L22.0049 5.67003C22.03 5.61629 22.0408 5.55701 22.0363 5.49789C22.0317 5.43878 22.0121 5.38182 21.9791 5.33252C21.9462 5.28323 21.9011 5.24325 21.8482 5.21645C21.7953 5.18966 21.7364 5.17694 21.6772 5.17953L20.4929 5.22078C20.4316 5.14431 20.3691 5.0688 20.3054 4.99428L20.5777 3.84005C20.5915 3.78251 20.5904 3.72238 20.5743 3.66542C20.5583 3.60846 20.5278 3.55658 20.486 3.51473C20.4442 3.47289 20.3923 3.44249 20.3353 3.42643C20.2784 3.41038 20.2182 3.40921 20.1607 3.42305L19.0072 3.69455C18.9322 3.63155 18.8572 3.5693 18.78 3.50705L18.8212 2.32356C18.8238 2.26433 18.8111 2.20543 18.7843 2.15254C18.7575 2.09965 18.7175 2.05456 18.6682 2.02162C18.6189 1.98868 18.562 1.969 18.5028 1.96448C18.4437 1.95996 18.3844 1.97075 18.3307 1.99581L17.2545 2.48631C17.1675 2.43827 17.08 2.39127 16.992 2.34531L16.8022 1.17832C16.7928 1.12003 16.7686 1.06512 16.7319 1.0188C16.6953 0.972488 16.6474 0.936305 16.5929 0.913688C16.5383 0.891071 16.4789 0.882773 16.4203 0.889578C16.3616 0.896384 16.3056 0.918069 16.2577 0.952574L15.2977 1.64257C15.2031 1.6125 15.1081 1.58375 15.0127 1.55632L14.5987 0.44933C14.5783 0.393798 14.544 0.344436 14.499 0.305968C14.4541 0.267501 14.4 0.241215 14.342 0.229626C14.2839 0.218036 14.2239 0.221531 14.1676 0.239776C14.1113 0.258021 14.0607 0.290405 14.0205 0.33383L13.2127 1.20082C13.1152 1.19032 13.0177 1.17982 12.9195 1.17232L12.2955 0.164332C12.2644 0.11409 12.2211 0.0726196 12.1695 0.0438583C12.1179 0.0150971 12.0598 0 12.0007 0C11.9417 0 11.8836 0.0150971 11.832 0.0438583C11.7804 0.0726196 11.7371 0.11409 11.706 0.164332L11.082 1.17232C10.9845 1.17982 10.8863 1.19032 10.7888 1.20082L9.98102 0.33458C9.94059 0.291729 9.88994 0.259845 9.83382 0.241913C9.7777 0.223982 9.71795 0.22059 9.66016 0.232057C9.60237 0.243525 9.54844 0.269476 9.50343 0.307477C9.45841 0.345479 9.42377 0.394288 9.40277 0.44933L8.98877 1.55632C8.89277 1.58407 8.79752 1.61332 8.70377 1.64332L7.74378 0.952574C7.69602 0.917465 7.64002 0.895253 7.58117 0.888082C7.52233 0.880911 7.46264 0.889023 7.40784 0.911635C7.35304 0.934247 7.305 0.970595 7.26834 1.01718C7.23168 1.06376 7.20764 1.119 7.19853 1.17757L7.00804 2.34531C6.92029 2.39106 6.83329 2.43831 6.74554 2.48631L5.67004 1.99581C5.61637 1.97079 5.55716 1.96 5.49811 1.96449C5.43905 1.96897 5.38215 1.98858 5.33288 2.02143C5.2836 2.05428 5.24361 2.09927 5.21676 2.15205C5.1899 2.20483 5.17709 2.26364 5.17955 2.32281L5.2208 3.5078C5.1443 3.5693 5.06855 3.63155 4.99355 3.6953L3.84006 3.42305C3.78255 3.40972 3.7226 3.41123 3.66584 3.42745C3.60908 3.44367 3.55738 3.47406 3.5156 3.51576C3.47383 3.55746 3.44334 3.60911 3.42702 3.66584C3.4107 3.72257 3.40908 3.78252 3.42231 3.84005L3.69456 4.99428C3.63081 5.06928 3.56856 5.14428 3.50706 5.22078L2.32282 5.17953C2.26373 5.17736 2.20506 5.19036 2.15241 5.21727C2.09976 5.24418 2.05487 5.28412 2.02202 5.33329C1.98917 5.38245 1.96945 5.43921 1.96473 5.49815C1.96001 5.55709 1.97046 5.61626 1.99507 5.67003L2.48557 6.74702C2.43832 6.83326 2.39107 6.92026 2.34532 7.00951L1.17832 7.19851C1.11991 7.2079 1.06487 7.23208 1.01845 7.26877C0.972029 7.30545 0.935774 7.35341 0.913141 7.40807C0.890508 7.46274 0.88225 7.52229 0.889153 7.58105C0.896056 7.63981 0.917892 7.69582 0.952577 7.74376L1.64257 8.703C1.61257 8.79749 1.58407 8.89274 1.55632 8.98799L0.449331 9.40274C0.394001 9.42341 0.344874 9.45789 0.306617 9.50289C0.268361 9.5479 0.242244 9.60193 0.230746 9.65987C0.219249 9.71781 0.222754 9.77772 0.240927 9.83392C0.2591 9.89012 0.291338 9.94075 0.334581 9.98098L1.20083 10.7887C1.18958 10.8862 1.17983 10.9837 1.17158 11.082L0.164332 11.706C0.114091 11.737 0.0726198 11.7804 0.0438585 11.832C0.0150971 11.8836 0 11.9416 0 12.0007C0 12.0598 0.0150971 12.1179 0.0438585 12.1694C0.0726198 12.221 0.114091 12.2644 0.164332 12.2955L1.17158 12.9187C1.17983 13.017 1.18958 13.1152 1.20083 13.2127L0.334581 14.0204C0.291338 14.0607 0.2591 14.1113 0.240927 14.1675C0.222754 14.2237 0.219249 14.2836 0.230746 14.3416C0.242244 14.3995 0.268361 14.4535 0.306617 14.4985C0.344874 14.5435 0.394001 14.578 0.449331 14.5987L1.55632 15.0127C1.58407 15.1087 1.61332 15.2039 1.64332 15.2977L0.952577 16.2577C0.918072 16.3056 0.896387 16.3615 0.889581 16.4202C0.882775 16.4789 0.891074 16.5383 0.913691 16.5928C0.936307 16.6474 0.972491 16.6953 1.01881 16.7319C1.06512 16.7685 1.12003 16.7927 1.17832 16.8022L2.34532 16.9919C2.39107 17.0804 2.43757 17.1682 2.48632 17.2544L1.99507 18.3306C1.97046 18.3844 1.96001 18.4436 1.96473 18.5025C1.96945 18.5615 1.98917 18.6182 2.02202 18.6674C2.05487 18.7166 2.09976 18.7565 2.15241 18.7834C2.20506 18.8103 2.26373 18.8233 2.32282 18.8211L3.50706 18.7799C3.56856 18.8571 3.63081 18.9321 3.69456 19.0071L3.42231 20.1614C3.40835 20.219 3.40947 20.2792 3.42554 20.3362C3.44162 20.3933 3.47212 20.4452 3.51409 20.487C3.55607 20.5288 3.60811 20.5591 3.66521 20.575C3.7223 20.5909 3.78252 20.5918 3.84006 20.5776L4.99355 20.3061C5.06855 20.3699 5.1443 20.4314 5.2208 20.4929L5.17955 21.6779C5.1773 21.737 5.19026 21.7957 5.21717 21.8483C5.24408 21.901 5.28405 21.9459 5.33326 21.9787C5.38247 22.0115 5.43927 22.0311 5.49824 22.0357C5.5572 22.0403 5.61635 22.0297 5.67004 22.0049L6.74629 21.5144C6.83254 21.5624 6.92029 21.6096 7.00878 21.6554L7.19853 22.8216C7.20762 22.8802 7.23161 22.9355 7.26822 22.9821C7.30483 23.0287 7.35281 23.0652 7.40756 23.0879C7.46232 23.1107 7.522 23.119 7.58088 23.112C7.63976 23.105 7.69586 23.083 7.74378 23.0481L8.70302 22.3566C8.79752 22.3866 8.89277 22.4166 8.98802 22.4436L9.40202 23.5506C9.42236 23.6062 9.45667 23.6557 9.50166 23.6942C9.54665 23.7327 9.60079 23.759 9.65889 23.7705C9.71698 23.7821 9.77706 23.7784 9.83334 23.76C9.88963 23.7416 9.94023 23.709 9.98026 23.6653L10.7888 22.7991C10.8863 22.8104 10.9838 22.8201 11.082 22.8291L11.706 23.8363C11.7372 23.8864 11.7806 23.9277 11.8322 23.9563C11.8838 23.985 11.9418 24 12.0007 24C12.0597 24 12.1177 23.985 12.1693 23.9563C12.2209 23.9277 12.2643 23.8864 12.2955 23.8363L12.9187 22.8284C13.017 22.8201 13.1152 22.8104 13.2127 22.7991L14.0205 23.6653C14.0605 23.7088 14.1111 23.7412 14.1673 23.7596C14.2235 23.7779 14.2834 23.7814 14.3414 23.7699C14.3994 23.7584 14.4534 23.7322 14.4984 23.6938C14.5433 23.6554 14.5776 23.6061 14.598 23.5506L15.0127 22.4436C15.108 22.4166 15.2032 22.3866 15.2977 22.3566L16.2577 23.0481C16.3058 23.0824 16.3617 23.1039 16.4204 23.1105C16.479 23.1172 16.5384 23.1088 16.5929 23.0861C16.6474 23.0635 16.6952 23.0273 16.7318 22.981C16.7685 22.9347 16.7927 22.8799 16.8022 22.8216L16.9927 21.6546C17.0805 21.6096 17.1675 21.5616 17.2545 21.5144L18.3307 22.0049C18.3845 22.0297 18.4437 22.0403 18.5027 22.0357C18.5617 22.0311 18.6186 22.0114 18.6678 21.9785C18.7171 21.9456 18.757 21.9006 18.7839 21.8478C18.8107 21.7951 18.8236 21.7363 18.8212 21.6771L18.78 20.4921C18.8565 20.4321 18.9322 20.3699 19.0072 20.3061L20.1607 20.5776C20.2182 20.5916 20.2783 20.5906 20.3353 20.5747C20.3923 20.5587 20.4442 20.5284 20.4861 20.4866C20.528 20.4448 20.5584 20.3929 20.5744 20.336C20.5905 20.279 20.5916 20.2189 20.5777 20.1614L20.3062 19.0071C20.3692 18.9321 20.4314 18.8571 20.4929 18.7799L21.6779 18.8211C21.7371 18.8236 21.7959 18.8108 21.8487 18.7839C21.9015 18.7571 21.9465 18.7171 21.9793 18.6678C22.0122 18.6185 22.0318 18.5616 22.0363 18.5026C22.0407 18.4435 22.03 18.3843 22.0049 18.3306L21.5144 17.2544C21.5624 17.1682 21.6089 17.0804 21.6547 16.9919L22.8217 16.8022C22.8802 16.7931 22.9354 16.7691 22.982 16.7326C23.0285 16.696 23.0649 16.6481 23.0876 16.5934C23.1103 16.5387 23.1185 16.479 23.1114 16.4203C23.1044 16.3615 23.0824 16.3055 23.0474 16.2577L22.3574 15.2977C22.3873 15.203 22.416 15.108 22.4437 15.0127L23.5507 14.5987C23.6063 14.5783 23.6557 14.544 23.6943 14.499C23.7328 14.4541 23.7591 14.3999 23.7706 14.3418C23.7821 14.2837 23.7785 14.2236 23.7601 14.1674C23.7417 14.1111 23.7091 14.0605 23.6654 14.0204L22.7992 13.2127C22.8097 13.1152 22.8194 13.017 22.8284 12.9187L23.8357 12.2955C23.8859 12.2644 23.9274 12.221 23.9561 12.1694C23.9849 12.1179 24 12.0598 24 12.0007C24 11.9416 23.9849 11.8836 23.9561 11.832C23.9274 11.7804 23.8859 11.737 23.8357 11.706ZM17.0925 20.0639C16.9117 20.0199 16.7553 19.9072 16.6564 19.7497C16.5575 19.5922 16.524 19.4023 16.563 19.2204C16.602 19.0386 16.7104 18.8791 16.8652 18.7759C17.0199 18.6728 17.2089 18.6341 17.3917 18.6681C17.5731 18.7115 17.7304 18.8241 17.8298 18.982C17.9293 19.1398 17.963 19.3302 17.9238 19.5126C17.8846 19.695 17.7756 19.8548 17.6201 19.9578C17.4646 20.0608 17.2757 20.0989 17.0925 20.0639ZM16.7497 17.7487C16.6663 17.7308 16.5802 17.7296 16.4963 17.745C16.4124 17.7605 16.3323 17.7923 16.2607 17.8387C16.1892 17.8851 16.1274 17.9451 16.079 18.0154C16.0306 18.0856 15.9965 18.1647 15.9787 18.2481L15.621 19.9176C14.4836 20.4334 13.2489 20.6994 12 20.6976C10.68 20.6976 9.42752 20.4051 8.30328 19.8824L7.94553 18.2136C7.9278 18.1302 7.89378 18.051 7.84543 17.9806C7.79707 17.9103 7.73533 17.8502 7.66372 17.8037C7.59212 17.7573 7.51206 17.7254 7.42812 17.7099C7.34418 17.6944 7.25801 17.6956 7.17453 17.7134L5.70079 18.0299C5.42695 17.7481 5.17237 17.4482 4.9388 17.1322H12.1095C12.1905 17.1322 12.2445 17.1172 12.2445 17.0437V14.5072C12.2445 14.4329 12.1905 14.4187 12.1095 14.4187H10.0125V12.81H12.2805C12.4875 12.81 13.3875 12.8692 13.6755 14.0197C13.7655 14.3729 13.9635 15.5242 14.0985 15.8924C14.2335 16.3057 14.7825 17.1314 15.3675 17.1314H18.9405C18.984 17.131 19.0274 17.1268 19.0702 17.1187C18.8227 17.4554 18.5505 17.7742 18.258 18.0712L16.7505 17.7479L16.7497 17.7487ZM6.83254 20.0286C6.64968 20.0627 6.46077 20.024 6.30599 19.9208C6.15122 19.8177 6.04281 19.6582 6.00381 19.4764C5.96482 19.2945 5.99834 19.1046 6.09722 18.9471C6.19611 18.7896 6.35256 18.6768 6.53329 18.6329C6.62498 18.6133 6.71964 18.6119 6.81186 18.6289C6.90407 18.6459 6.99204 18.6809 7.07074 18.7319C7.14943 18.7829 7.21732 18.8488 7.27052 18.926C7.32371 19.0033 7.36118 19.0902 7.38078 19.1819C7.40038 19.2736 7.40173 19.3682 7.38475 19.4605C7.36777 19.5527 7.33279 19.6406 7.28181 19.7193C7.23083 19.798 7.16485 19.8659 7.08763 19.9191C7.01042 19.9723 6.92348 20.0098 6.83179 20.0294L6.83254 20.0286ZM4.11231 8.99849C4.15027 9.08403 4.17102 9.17621 4.17336 9.26977C4.17571 9.36333 4.1596 9.45643 4.12596 9.54376C4.09233 9.63109 4.04182 9.71095 3.97732 9.77876C3.91282 9.84657 3.8356 9.90102 3.75006 9.93898C3.66452 9.97695 3.57234 9.9977 3.47878 10C3.38522 10.0024 3.29212 9.98628 3.20479 9.95264C3.11745 9.919 3.0376 9.86849 2.96979 9.804C2.90198 9.7395 2.84753 9.66228 2.80956 9.57674C2.73288 9.40398 2.72797 9.20784 2.79591 9.03147C2.86384 8.85509 2.99906 8.71293 3.17181 8.63625C3.34457 8.55957 3.54071 8.55465 3.71708 8.62259C3.89346 8.69052 4.03562 8.82574 4.11231 8.99849ZM3.27606 10.9807L4.8113 10.2982C4.96885 10.228 5.09209 10.0981 5.15396 9.93713C5.21584 9.77612 5.21128 9.59714 5.1413 9.43949L4.82555 8.72474H6.06904V14.3302H3.56031C3.2506 13.2425 3.15458 12.1051 3.27606 10.9807ZM10.0133 10.4362V8.78399H12.9742C13.1272 8.78399 14.0542 8.96099 14.0542 9.65399C14.0542 10.2292 13.3432 10.4362 12.7582 10.4362H10.0133ZM20.7749 11.9235C20.7749 12.1425 20.7667 12.3592 20.7502 12.5745H19.8502C19.7602 12.5745 19.7242 12.6345 19.7242 12.7222V13.1355C19.7242 14.1089 19.1752 14.3204 18.6945 14.3744C18.237 14.4254 17.7285 14.1824 17.6662 13.9019C17.3962 12.3832 16.9462 12.0585 16.2352 11.4975C17.1172 10.938 18.0352 10.1115 18.0352 9.00524C18.0352 7.8105 17.2162 7.05826 16.6582 6.68927C15.8752 6.17327 15.0082 6.06977 14.7742 6.06977H5.4638C6.75027 4.63089 8.47581 3.65699 10.3725 3.2993L11.4698 4.45054C11.718 4.71004 12.1298 4.72054 12.3885 4.47154L13.617 3.29705C14.8685 3.53203 16.0539 4.03634 17.0911 4.77503C18.1283 5.51372 18.9925 6.46912 19.6237 7.57501L18.783 9.47399C18.7132 9.63167 18.7087 9.81057 18.7706 9.97152C18.8324 10.1325 18.9555 10.2624 19.113 10.3327L20.7322 11.0512C20.7599 11.3385 20.7749 11.6287 20.7749 11.9235ZM11.4705 2.31981C11.5382 2.2551 11.618 2.20436 11.7053 2.1705C11.7926 2.13664 11.8857 2.12033 11.9793 2.12249C12.0729 2.12465 12.1652 2.14524 12.2509 2.18309C12.3365 2.22093 12.4139 2.2753 12.4785 2.34306C12.5432 2.41092 12.5939 2.49086 12.6277 2.57832C12.6616 2.66577 12.6778 2.75903 12.6756 2.85278C12.6734 2.94652 12.6527 3.0389 12.6147 3.12465C12.5768 3.2104 12.5224 3.28784 12.4545 3.35255C12.3868 3.41719 12.3071 3.46786 12.2198 3.50164C12.1325 3.53543 12.0395 3.55167 11.9459 3.54944C11.8523 3.54721 11.7601 3.52655 11.6746 3.48865C11.589 3.45075 11.5118 3.39634 11.4473 3.32855C11.3169 3.19154 11.2461 3.00845 11.2505 2.81938C11.2548 2.6303 11.334 2.45067 11.4705 2.31981ZM19.8127 9.03299C19.8895 8.86024 20.0317 8.72506 20.2082 8.6572C20.3846 8.58933 20.5808 8.59434 20.7536 8.67112C20.9263 8.7479 21.0615 8.89016 21.1294 9.06661C21.1972 9.24305 21.1922 9.43923 21.1154 9.61199C21.0774 9.69753 21.0229 9.77474 20.9551 9.83922C20.8872 9.9037 20.8073 9.95418 20.7199 9.98778C20.6326 10.0214 20.5394 10.0375 20.4459 10.0351C20.3523 10.0327 20.2601 10.0119 20.1746 9.97386C20.089 9.93584 20.0118 9.88135 19.9473 9.81349C19.8829 9.74563 19.8324 9.66574 19.7988 9.57837C19.7652 9.491 19.7491 9.39787 19.7515 9.3043C19.7539 9.21072 19.7747 9.11853 19.8127 9.03299Z"
      />
    </svg>
  );
};
export default RustIcon;
