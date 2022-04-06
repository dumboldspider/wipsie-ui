import React from "react";
import {
  Button,
  Container,
  Spacing,
  Typography,
  useTheme,
  useScrollBlock,
} from "../../index";
import {
  StepForwardOutlined,
  RightOutlined,
  LeftOutlined,
  StepBackwardOutlined,
  SyncOutlined,
  HeartTwoTone,
  CheckOutlined,
} from "@ant-design/icons";

export default {
  title: "Laboratory/Experiments",
  component: Button,
};

export const Base = () => {
  const theme = useTheme();
  const [locked, setLocked] = useScrollBlock();
  return (
    <Container style={{ width: "100%" }}>
      <Typography variant="h2" style={{ margin: "10px" }}>
        Basic
      </Typography>
      <Spacing height="1em" />
      <div style={{ width: "100%", margin: "10px" }}>
        <Container>
          <Container
            backgroundColor={theme.palette.danger[900]}
            onMouseEnter={() => setLocked(true)}
            onMouseLeave={() => setLocked(false)}
          >
            <Spacing height="6em" />
          </Container>
          <Spacing height="2em" />
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Danger
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            900
          </Typography>
        </Container>
      </div>
      <Spacing height="1em" />
    </Container>
  );
};
