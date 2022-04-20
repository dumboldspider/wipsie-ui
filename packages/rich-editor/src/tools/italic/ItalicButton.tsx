import React from "react";
import { ItalicOutlined } from "@ant-design/icons";
import { BaseToggleButton } from "../../components/BaseToggleButton";

export const ItalicButton = () => (
  <BaseToggleButton format="italic" icon={<ItalicOutlined />} />
);
