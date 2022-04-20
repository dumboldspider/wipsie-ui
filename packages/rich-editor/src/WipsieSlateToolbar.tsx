import React from "react";

import { cloneElement } from "./utils/cloneElement";
import classNames from "classnames";
import { Container } from "@wipsie/ui";

export type SlateToolbarProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const WipsieSlateToolbar = ({
  children,
  style,
  className,
  ...rest
}: SlateToolbarProps) => {
  return (
    <Container
      shape="square"
      p={0}
      mb={1}
      className={classNames(className)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
    >
      {cloneElement(children, rest)}
    </Container>
  );
};
