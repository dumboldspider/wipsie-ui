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
        p={0}
        direction="column"
        align="center"
        justify="center"
        style={{ overflow: "hidden" }}
        contentStyle={{
          paddingTop: 10,
        }}
        open={open === 1}
        icon={false}
        onClick={() => handleClick(1)}
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
      >
        <Flex direction="column" fullWidth>
          <SubMenuitem icon={<RightOutlined />} label="awdawd" link="#" />
          <SubMenuitem icon={<RightOutlined />} label="awdawd" link="#" />
          <SubMenuitem icon={<RightOutlined />} label="awdawd" link="#" />
          <SubMenuitem icon={<RightOutlined />} label="awdawd" link="#" />
        </Flex>
      </Collapsible>
    </>
  );
};

const MenuGroup = ({ ref, label, link, icon, items }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible
      as={Flex}
      p={0}
      ref={ref}
      direction="column"
      align="center"
      justify="center"
      style={{ overflow: "hidden" }}
      contentStyle={
        {
          // paddingTop: 10,
        }
      }
      open={open}
      icon={false}
      onClick={() => setOpen(!open)}
      fullWidth
      header={
        <Button
          endIcon={open ? <DownOutlined /> : <RightOutlined />}
          shape="square"
          align="spaced"
          variant="ghost"
          fullWidth
        >
          <span>
            <span style={{ paddingRight: 5 }}>{icon}</span>
            {label}
          </span>
        </Button>
      }
    >
      <Flex direction="column" fullWidth>
        {items.map((item) => {
          return (
            <SubMenuitem label={item.label} link={item.link} icon={item.icon} />
          );
        })}
      </Flex>
    </Collapsible>
  );
};

const SubMenuitem = ({ label, link, icon }) => (
  <a href={link} style={{ width: "100%" }}>
    <Button
      size="small"
      fullWidth
      shape="square"
      align="left"
      variant="ghost"
      label={label}
      startIcon={icon}
      style={{ fontWeight: 500 }}
    />
  </a>
);
const Menuitem = ({ label, link, icon }) => (
  <a href={link} style={{ width: "100%" }}>
    <Button
      fullWidth
      align="left"
      shape="square"
      variant="ghost"
      label={label}
      startIcon={icon}
    />
  </a>
);

const menu = [
  {
    label: "Home",
    icon: <HeartTwoTone />,
    link: "",
    items: [
      {
        label: "Second",
        icon: <SyncOutlined />,
        link: "/second",
      },
      {
        label: "Third",
        icon: <SyncOutlined />,
        link: "/third",
      },
    ],
  },
  {
    label: "Second",
    icon: <SyncOutlined />,
    link: "/second",
  },
  {
    label: "Third",
    icon: <SyncOutlined />,
    link: "/third",
  },
  {
    label: "Fourth",
    icon: <SyncOutlined />,
    link: "",
    items: [
      {
        label: "Second",
        icon: <SyncOutlined />,
        link: "/second",
      },
      {
        label: "Third",
        icon: <SyncOutlined />,
        link: "/third",
      },
    ],
  },
];

export const MenuTest = () => {
  return (
    <Flex direction="column" width="300px">
      {menu.map((item, index) => {
        return item.items ? (
          <MenuGroup
            ref={React.createRef()}
            label={item.label}
            link={item.link}
            icon={item.icon}
            items={item.items}
          />
        ) : (
          <Menuitem label={item.label} link={item.link} icon={item.icon} />
        );
      })}
    </Flex>
  );
};
