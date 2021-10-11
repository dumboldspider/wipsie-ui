import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    hoverBackgroundColor: { control: "color" },
    variant: {
      options: ["contained", "outlined", "ghost"],
      control: { type: "radio" },
    },
    size: {
      options: ["large", "medium", "small"],
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

export const Primary = () => (
  <Button backgroundColor="primary" variant="contained" label="Button" />
);

export const Secondary = () => (
  <Button backgroundColor="secondary" label="Button" />
);
