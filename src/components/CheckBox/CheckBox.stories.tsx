// Generated with util/create-component.js
import React, { useState } from "react";
import { CheckBox } from "./CheckBox";
import { Container } from "../Container";
import { Spacing } from "../Spacing";
import {
  RightOutlined,
  LeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

export default {
  title: "Prototypes/CheckBox",
};

export const WithBar = () => {
  const [checked, setChecked] = useState(true);

  function handleChecked() {
    setChecked(!checked);
    console.log("awd", checked);
  }

  return (
    <Container>
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="mini"
        //   icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="small"
        //   icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="medium"
        color="info"
        //   icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="large"
        disabled

        //   icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="xlarge"
        textColor="primary"
        //   icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="mini"
        icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="small"
        icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="medium"
        icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="large"
        disabled
        icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <CheckBox
        checked={checked}
        onClick={handleChecked}
        label="bar"
        size="xlarge"
        icon={<CheckCircleFilled />}
      />
      <Spacing height={10} />
      <input
        type="checkbox"
        name=""
        id=""
        checked={checked}
        disabled
        onClick={handleChecked}
      />
    </Container>
  );
};
