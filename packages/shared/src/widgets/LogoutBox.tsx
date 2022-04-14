import { Box, useTheme, Button, Link } from "@wipsie/ui";
import { serviceLinks } from "../";
import React from "react";

export const LogoutBox = () => {
  const theme = useTheme();

  return (
    <Box p={2}>
      <Link href={`${serviceLinks.auth}/logout?to=${window.location.href}`}>
        <Button
          fullWidth
          align="center"
          shape="rounded"
          variant="outlined"
          size="medium"
          backgroundColor={theme.palette.danger[500]}
          label="Logout"
        />
      </Link>
    </Box>
  );
};
