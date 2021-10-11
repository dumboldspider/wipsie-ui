import isHexColor from "./isHexColor";

export default function opacity(hex: string, opacity: number) {
  if (!isHexColor(hex)) return null;

  return hex + opacity.toString(16);
}
