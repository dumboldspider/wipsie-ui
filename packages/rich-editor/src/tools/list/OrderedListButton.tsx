import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { BaseBlockToggleButton } from "../../components/BaseBlockToggleButton";

export const OrderedListButton = () => {
  return (
    <BaseBlockToggleButton
      format="numbered-list"
      icon={<OrderedListOutlined />}
    />
  );
};
