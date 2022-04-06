// Generated with util/create-component.js
import React, { useState } from "react";
import { Switch } from "./Switch";
import { Container } from "../Container";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";
import {
  CheckOutlined,
  StepForwardOutlined,
  RightOutlined,
  LeftOutlined,
  StepBackwardOutlined,
  SyncOutlined,
  HeartTwoTone,
} from "@ant-design/icons";

export default {
  title: "Components/Switch",
};

export const Variants = () => {
  const [state, setState] = useState(false);
  function handleState() {
    setState(!state);
  }
  return (
    <Container style={{ width: "50%" }}>
      <Container>
        <Typography variant="h2">Switch Sizes Primary</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="primary"
            checked={state}
            onClick={handleState}
            icon={"✅"}
          />
          <Switch
            size="small"
            color="primary"
            checked={state}
            onClick={handleState}
            icon={"✅"}
          />
          <Switch
            size="medium"
            color="primary"
            checked={state}
            onClick={handleState}
            icon={"✅"}
          />
          <Switch
            size="large"
            color="primary"
            checked={state}
            onClick={handleState}
            icon={"✅"}
          />
          <Switch
            size="xlarge"
            color="primary"
            // color="#91CAFA"
            checked={state}
            onClick={handleState}
            icon={"✅"}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Secondary</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="secondary"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="secondary"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="secondary"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="secondary"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="secondary"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Success</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="success"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="success"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="success"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="success"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="success"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Info</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="info"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="info"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="info"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="info"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="info"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Warning</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="warning"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="warning"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="warning"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="warning"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="warning"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Danger</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="danger"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="danger"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="danger"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="danger"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="danger"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
    </Container>
  );
};
export const Shapes = () => {
  const [state, setState] = useState(false);
  function handleState() {
    setState(!state);
  }
  return (
    <Container style={{ width: "50%" }}>
      <Container>
        <Typography variant="h2">Switch Sizes Primary</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="primary"
            shape="round"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="primary"
            shape="round"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="primary"
            shape="round"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="primary"
            shape="round"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="primary"
            shape="round"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Primary</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="primary"
            shape="rounded"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="primary"
            shape="rounded"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="primary"
            shape="rounded"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="primary"
            shape="rounded"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="primary"
            shape="rounded"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
      <Container>
        <Typography variant="h2">Switch Sizes Primary</Typography>
        <Spacing height="1em" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Switch
            size="mini"
            color="primary"
            shape="square"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="small"
            color="primary"
            shape="square"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="medium"
            color="primary"
            shape="square"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="large"
            color="primary"
            shape="square"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
          <Switch
            size="xlarge"
            color="primary"
            shape="square"
            checked={state}
            onClick={handleState}
            icon={<StepForwardOutlined />}
          />
        </div>
      </Container>
      <Spacing height="1em" />
    </Container>
  );
};
