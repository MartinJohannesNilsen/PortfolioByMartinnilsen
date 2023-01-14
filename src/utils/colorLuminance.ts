import tinycolor from "tinycolor2";

// Change luminance of color by given amount
// color: "#000", "#000000", "rgb(0,0,0)" or "rgba(0,0,0,0.5)"
// amount: -1 to 1 (change from brighten to darken)
export const colorLumincance = (color: string, amount: number) => {
  return amount < 0
    ? tinycolor(color)
        .darken(amount * 100)
        .toString()
    : tinycolor(color)
        .lighten(amount * 100)
        .toString();
};
export default colorLumincance;
