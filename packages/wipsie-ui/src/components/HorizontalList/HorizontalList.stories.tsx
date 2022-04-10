// Generated with util/create-component.js
import React from "react";
import { HorizontalList } from "./HorizontalList";
import { Button } from "../Button";
import { Container } from "../Container";
import { Spacing } from "../Spacing";
import { Tabs, TabPanel } from "../Tabs";
import {
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

export default {
  title: "Prototypes/HorizontalList",
};

export const Tabsa = () => {
  const items = [
    {
      label: "Item 1",
      icon: <HomeOutlined />,
    },
    {
      label: "Item 2",
      icon: <InfoCircleOutlined />,
    },
    {
      label: "Item 3",
      icon: <PhoneOutlined />,
    },
    {
      label: "Item 4",
      icon: <PhoneOutlined />,
    },
    {
      label: "Item 5",
      icon: <PhoneOutlined />,
    },
    {
      label: "Item 6",
      icon: <PhoneOutlined />,
    },
  ];

  const [current, setCurrent] = React.useState(0);

  function handleChange(value: number) {
    setCurrent(value);
  }

  return (
    <>
      <Tabs
        items={items}
        value={current}
        onChange={handleChange}
        width="400px"
      />
      <Spacing height={2} />
      <Container width="400px">
        <TabPanel value={current} index={0}>
          <p>Item 1</p>
        </TabPanel>
        <TabPanel value={current} index={1}>
          <p>Item 2</p>
        </TabPanel>
        <TabPanel value={current} index={2}>
          <p>Item 3</p>
        </TabPanel>
        <TabPanel value={current} index={3}>
          <p>Item 4</p>
        </TabPanel>
        <TabPanel value={current} index={4}>
          <p>Item 5</p>
        </TabPanel>
        <TabPanel value={current} index={5}>
          <p>Item 6</p>
        </TabPanel>
      </Container>
    </>
  );
};

export const WithBar = () => (
  <HorizontalList color="info">
    <Button>Concept Art</Button>
    <Button>Illustration</Button>
    <Button>Comics Art</Button>
    <Button>Animation</Button>
    <Button>Storyboard</Button>
    <Button>Character/Environment Design</Button>
    <Button>Concept Art</Button>
    <Button>Illustration</Button>
    <Button>Comics Art</Button>
    <Button>Animation</Button>
    <Button>Storyboard</Button>
    <Button>Character/Environment Design</Button>
    <Button>Concept Art</Button>
    <Button>Illustration</Button>
    <Button>Comics Art</Button>
    <Button>Animation</Button>
    <Button>Storyboard</Button>
    <Button>Character/Environment Design</Button>
    <Button>Concept Art</Button>
    <Button>Illustration</Button>
    <Button>Comics Art</Button>
    <Button>Animation</Button>
    <Button>Storyboard</Button>
    <Button>Character/Environment Design</Button>
    <Button>Concept Art</Button>
    <Button>Illustration</Button>
    <Button>Comics Art</Button>
    <Button>Animation</Button>
    <Button>Storyboard</Button>
    <Button>Character/Environment Design</Button>
    <Button>Concept Art</Button>
    <Button>Illustration</Button>
    <Button>Comics Art</Button>
    <Button>Animation</Button>
    <Button>Storyboard</Button>
    <Button>Character/Environment Design</Button>
  </HorizontalList>
);
