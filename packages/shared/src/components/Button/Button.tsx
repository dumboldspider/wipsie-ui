import React from "react";
import { Flex, Button, Typography } from "@wipsie/ui";

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({
  backgroundColor = "primary",
  label = "test",
  ...props
}) => {
  return (
    <Flex direction="column" fullWidth align="center">
      <Typography>{label}</Typography>
      <Button backgroundColor={backgroundColor} {...props}>
        {label}
      </Button>
    </Flex>
  );
};
