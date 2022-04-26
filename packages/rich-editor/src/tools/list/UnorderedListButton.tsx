import React from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import { BaseBlockToggleButton } from "../../components/BaseBlockToggleButton";

export const UnorderedListButton = () => {
  return (
    <BaseBlockToggleButton
      format="bulleted-list"
      icon={<UnorderedListOutlined />}
    />
  );
};
