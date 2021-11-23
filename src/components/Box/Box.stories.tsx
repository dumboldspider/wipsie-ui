// Generated with util/create-component.js
import React from "react";
import { Box } from "./Box";

export default {
  title: "Prototypes/Box",
};

export const WithBar = () => (
  <Box style={{ border: "dashed 2px gray" }} as="aside">
    rendered as aside
  </Box>
);

export const WithBaz = () => <Box />;
