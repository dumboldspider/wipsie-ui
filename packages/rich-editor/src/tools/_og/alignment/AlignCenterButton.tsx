import { AlignCenterOutlined } from "@ant-design/icons";
import React from "react";
import { BaseBlockToggleButton } from "../../components/BaseBlockToggleButton";

export const AlignCenterButton = () => {
  return (
    <BaseBlockToggleButton format="center" icon={<AlignCenterOutlined />} />
  );
};
