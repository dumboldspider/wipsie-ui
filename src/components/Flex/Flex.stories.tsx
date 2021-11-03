// Generated with util/create-component.js
import React from "react";
import { Flex, FlexBase } from "./Flex";

export default {
  title: "Prototypes/Flex",
};

export const WithBar = () => (
  <>
    <Flex
      align={{ xs: "center" }}
      justify={{ xs: "between" }}
      direction={{ xs: "column", md: "row", lg: "column" }}
      mx={{ xs: 2, md: 5 }}
      m={{ xs: 4, md: 5 }}
      p={{ xs: 4, sm: 9, md: 20 }}
      width={{ xs: "100%", md: "50%", lg: "33%" }}
      style={{ backgroundColor: "red" }}
    >
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </Flex>
    <FlexBase />
  </>
);
