import React from "react";
import { BoldOutlined } from "@ant-design/icons";
import { BaseToggleButton } from "../../components/BaseToggleButton";

export const BoldButton = () => (
  <BaseToggleButton format="bold" icon={<BoldOutlined />} />
);
