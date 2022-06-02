// Generated with util/create-component.js
import { Spacing } from "../Spacing";
import { Button } from "../Button";
import React from "react";
import { Blueprint } from "./Blueprint";

export default {
  title: "Components/Blueprint",
  component: Blueprint,
  argTypes: {
    children: { control: "text" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    hoverBackgroundColor: { control: "color" },
    clickable: { control: "boolean" },
  },
};

export const Default = () => (
  <>
    <Blueprint backgroundColor="basic" shape="rounded" fullWidth>
      <Spacing height={2} />
      <Button label="Button" />
      <Spacing height={2} />
    </Blueprint>
    <Spacing height={2} />
    <Blueprint backgroundColor="warning" shape="rounded" fullWidth>
      <Spacing height={2} />
      <Button label="Button" />
      <Spacing height={2} />
    </Blueprint>
    <Spacing height={2} />
    <Blueprint backgroundColor="success" shape="rounded" fullWidth>
      <Spacing height={2} />
      <Button label="Button" />
      <Spacing height={2} />
    </Blueprint>
    <Spacing height={2} />
    <Blueprint backgroundColor="danger" shape="rounded" fullWidth>
      <Spacing height={2} />
      <Button label="Button" />
      <Spacing height={2} />
    </Blueprint>
    <Spacing height={2} />
    <Blueprint backgroundColor="info" shape="rounded" fullWidth>
      <Spacing height={2} />
      <Button label="Button" />
      <Spacing height={2} />
    </Blueprint>
  </>
);
