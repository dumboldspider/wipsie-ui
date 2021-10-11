// Generated with util/create-component.js
import React from "react";
import Typography from "./Typography";

export default {
  title: "Typography",
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

export const WithH1 = () => (
  <>
    <Typography component="h1">test</Typography>
    <Typography variant="h1" component="div">
      testa
    </Typography>
  </>
);

export const WithH1Variant = () => <Typography variant="h1">test</Typography>;

export const WithH2 = () => <Typography component="h2">test</Typography>;

export const WithUndefined = () => <Typography>test</Typography>;
