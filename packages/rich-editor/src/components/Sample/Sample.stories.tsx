import React from "react";

import { Button2, Editor } from ".";

export default {
  title: "Rich Editor/SAMPLE",
  component: Button2,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WithBar = () => (
  <>
    <Button2>teste</Button2>
    <Editor />
  </>
);
