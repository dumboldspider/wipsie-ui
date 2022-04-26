import React from "react";
import { Typography } from "@wipsie/ui";
import { HeadingExtraProps } from "./Heading.types";

export function HeadingElement({
  level,
  align,
  children,
  attributes,
}: HeadingExtraProps) {
  return (
    <Typography variant={level || "body1"} align={align || "left"}>
      <span {...attributes}>{children}</span>
    </Typography>
  );
}
