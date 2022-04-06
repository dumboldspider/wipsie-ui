import React from "react";
import { Flex, Button, Typography } from "@wipsie/ui";

/**
 * Primary UI component for user interaction
 */
export const ProfileAvatar = ({
  backgroundColor = "primary",
  label = "test",
  ...props
}) => {
  return (
    <Flex direction="column" fullWidth align="center">
      <Typography>{label}</Typography>
      <Button backgroundColor={backgroundColor} {...props}>
        this is a profile avatar
      </Button>
    </Flex>
  );
};
