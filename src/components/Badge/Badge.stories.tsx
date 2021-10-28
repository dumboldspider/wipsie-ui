// Generated with util/create-component.js
import React from "react";
import { Badge } from "./Badge";
import { Button } from "../Button";
import { Spacing } from "../Spacing";
import { ShopFilled } from "@ant-design/icons";

export default {
  title: "Prototypes/Badge",
};

export const WithBar = () => (
  <>
    <Badge content={"NEW"} position="bottom right" color="success">
      <Button backgroundColor="secondary">Test</Button>
    </Badge>
    <Spacing height={50} />
    <Badge content={"+99"} position="top right" color="danger">
      <Button backgroundColor="success">Test</Button>
    </Badge>
    <Spacing height={50} />
    <Badge content={"BETA"} position="top right" color="info">
      <Button backgroundColor="primary" variant="outlined">
        Test
      </Button>
    </Badge>
    <Spacing height={50} />
    <Badge dot position="top right" color="info">
      <Button backgroundColor="primary" variant="outlined">
        Test
      </Button>
    </Badge>
    <Spacing height={50} />
    <Badge dot position="center right" color="info">
      <Button backgroundColor="primary" variant="outlined">
        Test
      </Button>
    </Badge>
    <Spacing height={50} />
    <Badge dot position="top left" color="info">
      <Button backgroundColor="primary" variant="outlined">
        Test
      </Button>
    </Badge>
    <Spacing height={50} />
    <Badge dot position="top left" color="success">
      <Button backgroundColor="primary" icon={<ShopFilled />} />
    </Badge>
  </>
);
