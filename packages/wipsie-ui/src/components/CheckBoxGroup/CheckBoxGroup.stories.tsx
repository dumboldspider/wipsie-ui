// Generated with util/create-component.js
import React, { useState } from "react";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { CheckBox } from "../CheckBox";
import { Container } from "../Container";
import { Spacing } from "../Spacing";

export default {
  title: "Prototypes/CheckBoxGroup",
};

export const WithBar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  return (
    <>
      <CheckBoxGroup size="mini" justify="between" fullWidth>
        <CheckBox label="Checkbox 1" />
        <CheckBox label="Checkbox 2" />
        <CheckBox label="Checkbox 3" color="#f0d443" />
        <CheckBox label="Checkbox 4" />
        <CheckBox label="Checkbox 5" size="large" />
      </CheckBoxGroup>
      <Spacing height={50} />
      select 2
      <CheckBoxGroup
        size="large"
        direction="column-reverse"
        color="info"
        spacing={2}
        max={2}
        onChange={(selected) => {
          setSelectedIndex(selected);
          console.log(selected);
        }}
      >
        <CheckBox label="Checkbox 1" color="danger" />
        <CheckBox label="Checkbox 2" />
        <CheckBox label="Checkbox 3" disabled />
        <CheckBox label="Checkbox 4" color="#f0d443" />
        <CheckBox label="Checkbox 5" />
      </CheckBoxGroup>
      {selectedIndex.map((index) => index.toString() + ", ")}
    </>
  );
};
