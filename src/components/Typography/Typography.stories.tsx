// Generated with util/create-component.js
import React from "react";
import { Typography } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,

  argTypes: {
    color: { control: "color" },
    variant: {
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption1",
        "caption2",
        "code",
        "label",
      ],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const Custom = Template.bind({}) as any;
Custom.args = {
  color: "primary",
  children: "Hello World",
  variant: "h1",
};

export const Variants = () => (
  <div style={{ display: "block", width: "100%" }}>
    <Typography variant="h1">H1 Headline</Typography>
    <br />
    <Typography variant="h2">H2 Headline</Typography>
    <br />
    <Typography variant="h3">H3 Headline</Typography>
    <br />
    <Typography variant="h4">H4 Headline</Typography>
    <br />
    <Typography variant="h5">H5 Headline</Typography>
    <br />
    <Typography variant="h6">H6 Headline</Typography>
    <br />
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <br />
    <Typography variant="subtitle2">Subtitle 2</Typography>
    <br />
    <Typography variant="body1">body 1</Typography>
    <br />
    <Typography variant="body2">Body 2</Typography>
    <br />
    <Typography variant="caption1">Caption 1</Typography>
    <br />
    <Typography variant="caption2">Caption 2</Typography>
    <br />
    <Typography variant="code">Code</Typography>
    <br />
    <Typography variant="label">Label</Typography>
  </div>
);
