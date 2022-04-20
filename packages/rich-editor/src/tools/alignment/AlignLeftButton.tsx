import { AlignLeftOutlined } from "@ant-design/icons";
import React from "react";
import { BaseBlockToggleButton } from "../../components/BaseBlockToggleButton";

export const AlignLeftButton = () => {
  return <BaseBlockToggleButton format="left" icon={<AlignLeftOutlined />} />;
};
