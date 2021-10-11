import isHexColor from "./isHexColor";

export default function contrast(hex: string) {
  if (!isHexColor(hex)) return null;

  let threshold = 149;
  const r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > threshold ? "#000000" : "#ffffff";
}
