import { Flex } from "@wipsie/ui";
import React from "react";

export const BaseGroupWrapper = ({ children, style = {} }) => {
  return (
    <Flex align="center" justify="start" direction="row" style={style}>
      {children}
    </Flex>
  );
};
