import { Box, Button, ButtonProps, Link } from "@wipsie/ui";
import { linkPattern } from "../";
import React from "react";

export type LogoutBoxProps = {
  backgroundColor?: string;
  label?: string;
  variant?: ButtonProps["variant"];
  shape?: ButtonProps["shape"];
  size?: ButtonProps["size"];
};

export const LogoutBox = ({
  backgroundColor = "danger",
  label = "Logout",
  variant = "outlined",
  shape = "rounded",
  size = "medium",
}: LogoutBoxProps) => {
  return (
    <Box p={2}>
      <Link href={linkPattern({ type: "loginPage" })}>
        <Button
          fullWidth
          align="center"
          shape={shape}
          variant={variant}
          size={size}
          backgroundColor={backgroundColor}
          label={label}
        />
      </Link>
    </Box>
  );
};
