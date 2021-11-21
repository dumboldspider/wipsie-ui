// Generated with util/create-component.js
import React from "react";
import { Collapsible } from "./Collapsible";

import { Button } from "../Button";
import { Container } from "../Container";
import { Flex } from "../Flex";
import { Box } from "../Box";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";
import { IconButton } from "../IconButton";
import {
  StepForwardOutlined,
  RightOutlined,
  LeftOutlined,
  DownOutlined,
  StepBackwardOutlined,
  SyncOutlined,
  HeartTwoTone,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

export default {
  title: "Prototypes/Collapsible",
};

export const WithBar = () => (
  <Collapsible open header="collapse header">
    Consectetur adipiscing elit pellentesque habitant morbi tristique. Pulvinar
    pellentesque habitant morbi tristique. Vel quam elementum pulvinar etiam.
    Pulvinar pellentesque habitant morbi tristique senectus
  </Collapsible>
);

export const WithBar2 = () => {
  const [open, setOpen] = React.useState(0);

  function handleClick(state: number) {
    if (state === open) {
      setOpen(0);
    } else {
      setOpen(state);
    }
  }

  return (
    <>
      <Collapsible
        as={Flex}
        open={open === 1}
        header={
          <Button
            startIcon={<CheckOutlined />}
            endIcon={open === 1 ? <RightOutlined /> : <DownOutlined />}
            shape="square"
            fullWidth
          >
            title here
          </Button>
        }
        //   header={"titleee"}
        icon={false}
        onClick={() => handleClick(1)}
        p={0}
        direction="column"
        align="center"
        justify="center"
        style={{ overflow: "hidden" }}
        contentStyle={{
          paddingTop: 10,
        }}
      >
        <Flex direction="column" fullWidth>
          <Menuitem label="awdawd" />
          <Menuitem label="awdawd" />
          <Menuitem label="awdawd" />
          <Menuitem label="awdawd" />
        </Flex>
      </Collapsible>
      <Collapsible
        as={Flex}
        open={open === 2}
        header={
          <Button startIcon={<CheckOutlined />} shape="square" fullWidth>
            title here
          </Button>
        }
        //   header={"titleee"}
        icon={false}
        onClick={() => handleClick(2)}
        p={0}
        direction="column"
        align="center"
        justify="center"
        style={{ overflow: "hidden" }}
        contentStyle={{
          paddingTop: 10,
        }}
        fullWidth
      >
        <Flex direction="column" fullWidth>
          <Menuitem label="awdawd" />
          <Menuitem label="awdawd" />
          <Menuitem label="awdawd" />
          <Menuitem label="awdawd" />
        </Flex>
      </Collapsible>
    </>
  );
};

const Menuitem = ({ label }) => (
  <a href="#" style={{ width: "100%" }}>
    <Button
      size="small"
      fullWidth
      shape="square"
      align="left"
      variant="ghost"
      label={label}
      startIcon={<RightOutlined />}
      style={{ fontWeight: 500 }}
    />
  </a>
);
