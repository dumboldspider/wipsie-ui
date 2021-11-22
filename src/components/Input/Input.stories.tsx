// Generated with util/create-component.js
import React, { useState } from "react";
import { Input } from "./Input";
import { Select } from "../Select";
import { Spacing } from "../Spacing";
import { IconButton } from "../IconButton";
import { Container } from "../Container";
import {
  EyeFilled,
  LockFilled,
  EyeInvisibleFilled,
  SearchOutlined,
} from "@ant-design/icons";
export default {
  title: "Prototypes/Input",
};

export const WithBar = () => {
  const [value, setValue] = useState(0);

  const numberNegativeRegex = /^-?\d*\.?\d*$/;

  return (
    <Container>
      <Input
        placeholder="placeholder"
        size="mini"
        variant="contained"
        value={value}
        onChange={(v) => {
          numberNegativeRegex.test(v.currentTarget.value.toString())
            ? setValue(parseInt(v.currentTarget.value))
            : setValue(0);
        }}
        type="number"
      />

      <Spacing height={1} />
      <Select
        placeholder="placeholder"
        size="medium"
        variant="contained"
        fullWidth
        shape="square"
        color="primary"
      >
        <optgroup label="Grupo 1">
          <option>Opção 1.1</option>
        </optgroup>
        <optgroup label="Grupo 2">
          <option>Opção 2.1</option>
          <option>Opção 2.2</option>
        </optgroup>
        <optgroup label="Grupo 3">
          <option>Opção 3.1</option>
          <option>Opção 3.2</option>
          <option>Opção 3.3</option>
        </optgroup>
      </Select>
      <Spacing height={1} />
      <Input placeholder="placeholder" size="mini" variant="contained" />
      <Spacing height={1} />
      <Input
        success
        placeholder="placeholder"
        size="small"
        variant="contained"
      />
      <Spacing height={1} />
      <Input
        error
        placeholder="placeholder"
        size="medium"
        variant="contained"
      />
      <Spacing height={1} />
      <Input
        placeholder="placeholder"
        size="large"
        variant="contained"
        color="primary"
        shape="rounded"
        error
      />
      <Spacing height={1} />
      <Input
        disabled
        placeholder="placeholder"
        size="xlarge"
        variant="contained"
        shape="square"
        helperText="arroz"
      />

      <Spacing height={50} />

      <Input placeholder="placeholder" size="mini" variant="outlined" />
      <Spacing height={1} />
      <Input
        color="#d67328"
        placeholder="placeholder"
        size="small"
        variant="outlined"
        success
        helperText="arroz"
      />
      <Spacing height={1} />
      <Input placeholder="placeholder" size="medium" variant="outlined" />
      <Spacing height={1} />
      <Input
        placeholder="placeholder"
        size="large"
        variant="outlined"
        color="primary"
        shape="square"
        error
        disabled
        helperText="arroz"
      />
      <Spacing height={1} />
      <Input
        placeholder="placeholder"
        disabled
        size="xlarge"
        variant="outlined"
        shape="rounded"
        color="primary"
      />

      <Spacing height={50} />

      <Input placeholder="placeholder" size="mini" variant="ghost" />
      <Spacing height={1} />
      <Input
        color="#928472"
        placeholder="placeholder"
        size="small"
        variant="ghost"
        error
        helperText="arroz"
      />
      <Spacing height={1} />
      <Input
        color="#d67328"
        placeholder="placeholder"
        size="medium"
        variant="ghost"
        shape="rounded"
      />
      <Spacing height={1} />
      <Input
        placeholder="placeholder"
        size="large"
        variant="ghost"
        color="primary"
        shape="square"
        helperText="arroz"
        startAdornment={<LockFilled />}
        endAdornment={
          <IconButton>
            <EyeFilled />
          </IconButton>
        }
      />
      <Spacing height={50} />
      <Input placeholder="placeholder" disabled size="xlarge" variant="ghost" />
    </Container>
  );
};

export const FullFunctional = () => {
  const defaltHelperText = "type 'test' to sucess";
  const [success, setSuccess] = useState(false);
  const [helperText, setHelperText] = useState(defaltHelperText);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);

  function handleChange(e) {
    if (e.target.value.length > 4 && e.target.value !== "test") {
      setError(true);
      setHelperText("I said type TEST");
    } else {
      setError(false);
      setHelperText(defaltHelperText);
    }

    if (e.target.value.toLowerCase() === "test") {
      setSuccess(true);
      setHelperText("You are done!");
    } else {
      setSuccess(false);
    }

    setValue(e.target.value);
  }

  function handleHidden() {
    setHidden(!hidden);
  }

  return (
    <Container>
      <Input
        placeholder="placeholder"
        size="large"
        variant="ghost"
        color="primary"
        shape="square"
        helperText={helperText}
        onChange={handleChange}
        type={hidden ? "password" : "text"}
        value={value}
        error={error}
        success={success}
        startAdornment={<LockFilled />}
        endAdornment={
          <IconButton onClick={handleHidden}>
            {hidden ? <EyeFilled /> : <EyeInvisibleFilled />}
          </IconButton>
        }
      />
    </Container>
  );
};

export const SearchBar = () => {
  const defaltHelperText = "type 'test' to sucess";
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSearch() {
    alert("search for: " + value);
  }

  return (
    <Container>
      <Input
        placeholder="search..."
        size="large"
        variant="ghost"
        color="primary"
        shape="square"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        type={"text"}
        value={value}
        endAdornment={
          <IconButton onClick={handleSearch}>
            <SearchOutlined />
          </IconButton>
        }
      />
    </Container>
  );
};
