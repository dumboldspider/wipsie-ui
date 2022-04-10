import React from "react";
import { Button, Container, Spacing, Typography, useTheme } from "../../index";
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
  title: "Foundations/Colors",
  component: Button,
};

export const Base = () => {
  const theme = useTheme();
  return (
    <Container style={{ width: "100%" }}>
      <Typography variant="h2" style={{ margin: "10px" }}>
        Basic
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.basic[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Basic
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.basic[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Basic
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.basic[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Basic
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.basic[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Basic
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.basic[900]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Basic
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              900
            </Typography>
          </Container>
        </div>
      </div>
      <Spacing height="1em" />

      <Typography variant="h2" style={{ margin: "10px" }}>
        Primary
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.primary[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Primary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.primary[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Primary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.primary[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Primary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.primary[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Primary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.primary[900]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Primary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              900
            </Typography>
          </Container>
        </div>
      </div>
      <Spacing height="1em" />

      <Typography variant="h2" style={{ margin: "10px" }}>
        Secondary
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.secondary[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Secondary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.secondary[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Secondary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.secondary[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Secondary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.secondary[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Secondary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.secondary[900]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Secondary
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              900
            </Typography>
          </Container>
        </div>
      </div>
      <Spacing height="1em" />

      <Typography variant="h2" style={{ margin: "10px" }}>
        Success
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.success[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Success
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.success[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Success
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.success[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Success
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.success[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Success
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.success[900]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Success
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              900
            </Typography>
          </Container>
        </div>
      </div>
      <Spacing height="1em" />

      <Typography variant="h2" style={{ margin: "10px" }}>
        Info
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.info[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Info
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.info[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Info
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.info[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Info
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.info[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Info
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.info[900]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Info
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              900
            </Typography>
          </Container>
        </div>
      </div>
      <Spacing height="1em" />

      <Typography variant="h2" style={{ margin: "10px" }}>
        Warning
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.warning[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Warning
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.warning[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Warning
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.warning[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Warning
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.warning[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Warning
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.warning[900]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Warning
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              900
            </Typography>
          </Container>
        </div>
      </div>
      <Spacing height="1em" />

      <Typography variant="h2" style={{ margin: "10px" }}>
        Danger
      </Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.danger[100]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Danger
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              100
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.danger[300]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Danger
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              300
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.danger[500]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Danger
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              500
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.danger[700]}>
              <Spacing height="6em" />
            </Container>
            <Spacing height="2em" />
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              Danger
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              700
            </Typography>
          </Container>
        </div>
        <div style={{ width: "100%", margin: "10px" }}>
          <Container>
            <Container backgroundColor={theme.palette.danger[900]}>
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
      </div>
      <Spacing height="1em" />
    </Container>
  );
};
