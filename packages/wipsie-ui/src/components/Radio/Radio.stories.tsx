// Generated with util/create-component.js
import React, { useState } from "react";
import { Spacing } from "../Spacing";
import { Radio } from "./Radio";
import { Container } from "../Container";
import {
  RightOutlined,
  LeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
export default {
  title: "Prototypes/Radio",
};

export const WithBar = () => {
  const [checked, setChecked] = useState(true);

  function handleChecked() {
    setChecked(!checked);
    console.log("awd", checked);
  }
  return (
    <>
      <Container>
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="mini"
          textColor="primary"
          //   icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="small"
          textColor="primary"
          //   icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="medium"
          textColor="primary"
          //   icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="large"
          textColor="primary"
          //   icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="xlarge"
          textColor="primary"
          //   icon={<CheckCircleFilled />}
        />
        <Spacing height={10} />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="mini"
          icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="small"
          icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="medium"
          icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="large"
          icon={<CheckCircleFilled />}
        />
        <Radio
          checked={checked}
          onClick={handleChecked}
          label="bar"
          size="xlarge"
          icon={<CheckCircleFilled />}
        />
      </Container>
    </>
  );
};
