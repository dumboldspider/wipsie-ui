import React from "react";

import { Button2 } from ".";

export default {
  title: "Rich Editor/Button",
  component: Button2,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WithBar = () => (
  <>
    <Button2>teste</Button2>
    <Button2 backgroundColor="warning">teste</Button2>
    <Button2 backgroundColor="info">teste</Button2>
    <Button2 backgroundColor="danger">teste</Button2>
    <Button2 backgroundColor="success">teste</Button2>
  </>
);
