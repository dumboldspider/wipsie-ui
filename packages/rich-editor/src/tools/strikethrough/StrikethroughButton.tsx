import React from "react";
import { StrikethroughOutlined } from "@ant-design/icons";
import { BaseToggleButton } from "../../components/BaseToggleButton";

export const StrikethroughButton = () => (
  <BaseToggleButton format="strikethrough" icon={<StrikethroughOutlined />} />
);
