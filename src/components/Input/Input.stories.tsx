// Generated with util/create-component.js
import React, { useState } from "react";
import { Input } from "./Input";
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

export const WithBar = () => (
  <Container>
    <Input placeholder="placeholder" size="mini" variant="contained" />
    <Spacing height={30} />
    <Input success placeholder="placeholder" size="small" variant="contained" />
    <Spacing height={30} />
    <Input error placeholder="placeholder" size="medium" variant="contained" />
    <Spacing height={30} />
    <Input
      placeholder="placeholder"
      size="large"
      variant="contained"
      color="primary"
      shape="rounded"
      error
    />
    <Spacing height={30} />
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
    <Spacing height={30} />
    <Input
      color="#d67328"
      placeholder="placeholder"
      size="small"
      variant="outlined"
      success
      helperText="arroz"
    />
    <Spacing height={30} />
    <Input placeholder="placeholder" size="medium" variant="outlined" />
    <Spacing height={30} />
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
    <Spacing height={30} />
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
    <Spacing height={30} />
    <Input
      color="#928472"
      placeholder="placeholder"
      size="small"
      variant="ghost"
      error
      helperText="arroz"
    />
    <Spacing height={30} />
    <Input
      color="#d67328"
      placeholder="placeholder"
      size="medium"
      variant="ghost"
      shape="rounded"
    />
    <Spacing height={30} />
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
