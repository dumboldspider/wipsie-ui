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
      <ButtonGroup shape="round" orientation="vertical">
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
