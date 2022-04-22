import React from "react";
import {
  Container,
  ContainerProps,
  IconButton,
  responsive,
  Typography,
} from "@wipsie/ui";
import { WarningOutlined } from "@ant-design/icons";

export type StagingEnvironmentWarningProps = {
  backgroundColor?: string;
  textColor?: string;
  variant?: ContainerProps["variant"];
  shape?: ContainerProps["shape"];
  maxWidth?: string | number;
};

export const StagingEnvironmentWarning = ({
  backgroundColor = "info",
  textColor = "white",
  shape = "rounded",
  variant = "neumorphic",
  maxWidth = responsive(400, 600),
}: StagingEnvironmentWarningProps) => {
  if (process.env.NODE_ENV === "development") {
    return (
      <Container
        variant={variant}
        backgroundColor={backgroundColor}
        shape={shape}
        fullWidth
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
        maxWidth={maxWidth}
      >
        <IconButton size="xlarge" backgroundColor={textColor}>
          <WarningOutlined />
        </IconButton>
        <Typography variant="label" color={textColor}>
          Be Aware, this is a unstable Staging environment for testing purposes
          only. Thanks. Your feedback means the world to us.
        </Typography>
      </Container>
    );
  } else {
    return null;
  }
};
