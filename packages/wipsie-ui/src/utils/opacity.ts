import isHexColor from "./isHexColor";

export default function opacity(hex: string, opacity: number) {
  if (!isHexColor(hex)) return null;

  return hex + Math.floor((opacity / 100) * 255).toString(16);
}
