// Generated with util/create-component.js
import { Spacing } from "../Spacing";
import React, { useState } from "react";
import { Select } from "./Select";
import ThemeProvider from "../../theme/themeProvider";
import { Container } from "../Container";

export default {
  title: "Prototypes/Select_New",
  component: Select,
};

export const Default = () => {
  const helperText = "";

  const [selected, setSelected] = useState(null);

  const onSelect = (value) => {
    setSelected(value);
  };
  return (
    <ThemeProvider theme="dark">
      <Container>
        {selected}
        <Select
          variant="ghost"
          color="info"
          helperText={helperText}
          value={selected}
          onChange={onSelect}
        >
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </Select>
        <Spacing height={2} />
        <Select
          variant="outlined"
          color="info"
          disabled
          helperText={helperText}
          value={selected}
          onChange={onSelect}
        >
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </Select>
        <Spacing height={2} />
        <Select
          size="mini"
          color="primary"
          shape="square"
          helperText={helperText}
          value={selected}
          onChange={onSelect}
        >
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </Select>
        <Spacing height={2} />
        <Select
          size="large"
          color="info"
          shape="rounded"
          helperText={helperText}
          value={selected}
          onChange={onSelect}
        >
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </Select>
      </Container>
    </ThemeProvider>
  );
};
