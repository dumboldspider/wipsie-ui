// Generated with util/create-component.js
import React, { useState } from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio";
import { Container } from "../Container";
import { Spacing } from "../Spacing";

export default {
  title: "Prototypes/RadioGroup",
};

export const WithBar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(4);
  return (
    <>
      <RadioGroup size="mini" justify="between" fullWidth>
        <Radio label="Checkbox 1" />
        <Radio label="Checkbox 2" />
        <Radio label="Checkbox 3" color="#f0d443" />
        <Radio label="Checkbox 4" />
        <Radio label="Checkbox 5" size="large" />
      </RadioGroup>
      <Spacing height={50} />
      select
      <RadioGroup
        size="large"
        direction="column"
        color="info"
        spacing={2}
        defaultSelected={selectedIndex}
        max={2}
        onChange={(selected) => {
          setSelectedIndex(selected);
          console.log(selected);
        }}
      >
        <Radio label="Checkbox 1" color="danger" />
        <Radio label="Checkbox 2" />
        <Radio label="Checkbox 3" disabled />
        <Radio label="Checkbox 4" color="#f0d443" />
        <Radio label="Checkbox 5" />
      </RadioGroup>
      {selectedIndex}
    </>
  );
};
