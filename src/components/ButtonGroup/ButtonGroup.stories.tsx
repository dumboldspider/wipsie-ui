// Generated with util/create-component.js
import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";
import { Spacing } from "../Spacing";
import { Container } from "../Container";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export default {
  title: "Prototypes/ButtonGroup",
};

export const WithBar = () => (
  <>
    <Container>
      <ButtonGroup shape="round" orientation="horizontal">
        <Button>1a</Button>
        <Button>2</Button>
        <Button>3</Button>
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
    </Container>

    <Spacing height={20} />

    <Container>
      <ButtonGroup shape="round" orientation="vertical">
        <Button>1213</Button>
        <Button>2aaaaaa</Button>
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
