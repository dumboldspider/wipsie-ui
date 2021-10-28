import React from "react";

import { Button } from "./Button";
import { Container } from "../Container";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";
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
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    hoverBackgroundColor: { control: "color" },
    variant: {
      options: ["contained", "outlined", "ghost"],
      control: { type: "radio" },
    },
    size: {
      options: ["xlarge", "large", "medium", "small", "mini"],
      control: { type: "radio" },
    },
    shape: {
      options: ["rounded", "round", "square"],
      control: { type: "radio" },
    },
    label: {
      control: "text",
      default: "Button",
    },
  },
};
const Template = (args) => <Button {...args} />;

export const Custom = Template.bind({}) as any;
Custom.args = {
  label: "Custom Button",
};

export const Variants = () => (
  <Container>
    <Container>
      <Typography variant="h2">Contained Buttons</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="secondary"
          variant="contained"
          label="secondary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="success"
          variant="contained"
          label="success"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="info"
          variant="contained"
          label="info"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="warning"
          variant="contained"
          label="warning"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="danger"
          variant="contained"
          label="danger"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="basic"
          variant="contained"
          label="basic"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="contained"
          label="disabled"
          disabled
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Outlined Buttons</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="secondary"
          variant="outlined"
          label="secondary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="success"
          variant="outlined"
          label="success"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="info"
          variant="outlined"
          label="info"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="warning"
          variant="outlined"
          label="warning"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="danger"
          variant="outlined"
          label="danger"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="basic"
          variant="outlined"
          label="basic"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="disabled"
          disabled
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Ghost Buttons</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="secondary"
          variant="ghost"
          label="secondary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="success"
          variant="ghost"
          label="success"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="info"
          variant="ghost"
          label="info"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="warning"
          variant="ghost"
          label="warning"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="danger"
          variant="ghost"
          label="danger"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="basic"
          variant="ghost"
          label="basic"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="disabled"
          disabled
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
  </Container>
);

export const Sizes = () => (
  <Container>
    <Container>
      <Typography variant="h2">Mini Size</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          size="mini"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          size="mini"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          size="mini"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Small Size</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          size="small"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          size="small"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          size="small"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Medium Size</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          size="medium"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          size="medium"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          size="medium"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Large Size</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          size="large"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          size="large"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          size="large"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">xLarge Size</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          size="xlarge"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          size="xlarge"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          size="xlarge"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
  </Container>
);

export const Shapes = () => (
  <Container>
    <Container>
      <Typography variant="h2">Round Buttons</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Rounded Buttons</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          shape="rounded"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          shape="rounded"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          shape="rounded"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Square Buttons</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex" }}>
        <Button
          backgroundColor="primary"
          variant="contained"
          label="primary"
          shape="square"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="outlined"
          label="primary"
          shape="square"
          style={{ marginRight: "10px" }}
        />
        <Button
          backgroundColor="primary"
          variant="ghost"
          label="primary"
          shape="square"
          style={{ marginRight: "10px" }}
        />
      </div>
    </Container>
  </Container>
);

export const Icons = () => {
  return (
    <Container style={{ display: "flex" }}>
      <Button
        startIcon={<CheckOutlined />}
        label="Start Icon"
        style={{ marginRight: "10px" }}
      />

      <Button
        startIcon={<HeartTwoTone twoToneColor="purple" />}
        label="DuoTone Icon"
        variant="outlined"
        style={{ marginRight: "10px" }}
      />

      <Button
        endIcon={<CheckOutlined />}
        label="End Icon"
        style={{ marginRight: "10px" }}
      />

      <Button
        endIcon={<SyncOutlined spin />}
        label="Loading"
        style={{ marginRight: "10px" }}
      />
      <Button icon={<SyncOutlined spin />} style={{ marginRight: "10px" }} />

      <Button
        startIcon={<StepBackwardOutlined />}
        endIcon={<StepForwardOutlined />}
        label="Both Side Icons"
        style={{ marginRight: "10px" }}
      />
      <Button
        startIcon={<LeftOutlined />}
        endIcon={<RightOutlined />}
        label="Both Side Icons"
        size="small"
        style={{ marginRight: "10px" }}
      />
    </Container>
  );
};
