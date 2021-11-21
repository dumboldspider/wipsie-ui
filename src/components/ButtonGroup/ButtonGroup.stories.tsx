// Generated with util/create-component.js
import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Spacing } from "../Spacing";
import { Container } from "../Container";
import {
  RightOutlined,
  LeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

export default {
  title: "Prototypes/ButtonGroup",
};

export const WithBar = () => (
  <>
    <Container>
      <ButtonGroup shape="round" orientation="horizontal" fullWidth>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <ButtonGroup shape="round" orientation="horizontal" variant="contained">
        <IconButton icon={<CheckCircleFilled />} size="mini" />
        <IconButton icon={<CheckCircleFilled />} size="mini" />
        <Button size="mini">22343awdwa</Button>
        <IconButton icon={<CheckCircleFilled />} size="mini" />
      </ButtonGroup>
      <ButtonGroup shape="round" orientation="horizontal" variant="contained">
        <IconButton icon={<CheckCircleFilled />} size="mini" />
        <IconButton icon={<CheckCircleFilled />} size="mini" />
        <Button size="mini">22343awdwa</Button>
        <IconButton icon={<CheckCircleFilled />} size="mini" />
      </ButtonGroup>
      <Spacing height={20} />
      <ButtonGroup shape="round" orientation="horizontal">
        <Button variant="outlined">1</Button>
        <Button variant="outlined">22343awdwa</Button>
        <Button variant="outlined">32323</Button>
      </ButtonGroup>
      <Spacing height={20} />
      <ButtonGroup shape="round" orientation="horizontal">
        <Button variant="ghost">1</Button>
        <Button variant="ghost">2</Button>
        <Button variant="ghost">3</Button>
      </ButtonGroup>
      <Spacing height={20} />
      <ButtonGroup shape="round" orientation="horizontal">
        <Button variant="outlined" startIcon={<LeftOutlined />}>
          Previous
        </Button>
        <Button variant="outlined">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">3</Button>
        <Button variant="outlined">4</Button>
        <Button variant="outlined" endIcon={<RightOutlined />}>
          Next
        </Button>
      </ButtonGroup>
      <ButtonGroup shape="round" orientation="horizontal" variant="ghost">
        <Button variant="contained" startIcon={<LeftOutlined />}>
          Previous
        </Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button variant="contained" endIcon={<RightOutlined />}>
          Next
        </Button>
      </ButtonGroup>
    </Container>

    <Spacing height={20} />

    <Container>
      <ButtonGroup shape="round" orientation="vertical">
        <Button>1213</Button>
        <Button variant="outlined">2aaaaaa</Button>
        <Button>3</Button>
      </ButtonGroup>
      <Spacing height={20} />
      <ButtonGroup shape="round" orientation="vertical" fullHeight>
        <Button variant="outlined">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">3</Button>
      </ButtonGroup>
      <Spacing height={20} />
      <ButtonGroup shape="round" orientation="vertical">
        <Button variant="ghost">1</Button>
        <Button variant="ghost">2</Button>
        <Button variant="ghost">3</Button>
      </ButtonGroup>
    </Container>

    <Container style={{ height: 500 }}>
      <ButtonGroup shape="round" orientation="vertical" fullHeight>
        <Button variant="outlined">1</Button>
        <Button variant="outlined">2</Button>
        <IconButton size="mini">|</IconButton>
        <Button variant="outlined">3</Button>
      </ButtonGroup>
    </Container>

    <Container style={{ height: 500 }}>
      <ButtonGroup shape="square" orientation="horizontal" variant="contained">
        <Button>Test</Button>
        <Button>Test</Button>
        <Button size="mini" chip>
          |
        </Button>
        <Button>Test</Button>
        <Button>Test</Button>
        <IconButton variant="outlined" icon={<RightOutlined />} />
        <IconButton variant="outlined" icon={<LeftOutlined />} />
        <IconButton variant="outlined" icon={<CheckCircleFilled />} />

        <Button>Test</Button>
        <Button>Test</Button>
      </ButtonGroup>
    </Container>
  </>
);

export const AnotherTest = () => {
  return (
    <ButtonGroup
      size="small"
      variant="outlined"
      backgroundColor="info"
      shape="rounded"
    >
      <IconButton icon={<CheckCircleFilled />} variant="contained" />
      <Button>3</Button>
      <Button>3</Button>
      <Button>long label</Button>
      <Button>3</Button>
    </ButtonGroup>
  );
};

export const TabBar = () => {
  const [index, setIndex] = React.useState(0);

  function handleChange(value: number) {
    setIndex(value);
  }

  return (
    <ButtonGroup
      size="small"
      variant="outlined"
      backgroundColor="info"
      shape="rounded"
    >
      <IconButton
        icon={<CheckCircleFilled />}
        variant="contained"
        onClick={() => handleChange(0)}
      />
      <Button active={index === 1} onClick={() => handleChange(1)}>
        3
      </Button>
      <Button active={index === 2} onClick={() => handleChange(2)}>
        long label
      </Button>
      <Button active={index === 3} onClick={() => handleChange(3)}>
        3
      </Button>
    </ButtonGroup>
  );
};
