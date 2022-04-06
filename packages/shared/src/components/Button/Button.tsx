import React from "react";
import PropTypes from "prop-types";
import { Flex, Button } from "@wipsie/ui";

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({
  backgroundColor = "primary",
  label = "test",
  ...props
}) => {
  return (
    <Button backgroundColor={backgroundColor} {...props}>
      {label}
    </Button>
  );
};
