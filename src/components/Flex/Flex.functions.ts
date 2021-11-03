import { BreakpointsVariants } from "./Flex.types";

export function getBreakpoints(
  property,
  breakpoint: BreakpointsVariants,
  callback
) {
  if (!property) return "";
  if (typeof property === "string" || typeof property === "number") {
    return callback(property);
  } else {
    switch (breakpoint) {
      case "sm":
        return callback(property.sm);
      case "md":
        return callback(property.md);
      case "lg":
        return callback(property.lg);
      case "xl":
        return callback(property.xl);
      default:
      case "xs":
        return callback(property?.xs);
    }
  }
}

export function getAlign(align) {
  switch (align) {
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "start":
      return "flex-start";
    default:
      return "";
  }
}

export function getJustify(value) {
  switch (value) {
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    case "start":
      return "flex-start";
    default:
      return "";
  }
}
