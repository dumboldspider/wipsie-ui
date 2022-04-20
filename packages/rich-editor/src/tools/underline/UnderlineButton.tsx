import React from "react";
import { UnderlineOutlined } from "@ant-design/icons";
import { BaseToggleButton } from "../../components/BaseToggleButton";

export const UnderlineButton = () => (
  <BaseToggleButton format="underline" icon={<UnderlineOutlined />} />
);
