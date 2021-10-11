export default function themePalette(type: string) {
  switch (type) {
    case "primary":
    case "secondary":
    case "success":
    case "info":
    case "warning":
    case "danger":
    case "basic":
      return true;
    default:
      return false;
  }
}
