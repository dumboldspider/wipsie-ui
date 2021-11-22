// Generated with util/create-component.js
import React from "react";
import { TabsProps } from "./Tabs.types";

import { HorizontalList } from "../HorizontalList";
import { Button } from "../Button";

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    items = [],
    value = -1,
    onChange = () => {},
    size = "medium",
    variant = "ghost",
    shape = "square",
    backgroundColor = "primary",
    hoverBackgroundColor = null,
    tabColor = null,
    hoverTabColor = null,
    align = "left",

    children,
    className,
    ...otherProps
  } = props;

  return (
    <HorizontalList {...otherProps}>
      {items.map((item, index) => (
        <Button
          key={index}
          startIcon={item.icon}
          label={item.label}
          active={index === value}
          shape={shape}
          size={size}
          variant={variant}
          backgroundColor={backgroundColor}
          hoverBackgroundColor={hoverBackgroundColor}
          color={tabColor}
          hoverColor={hoverTabColor}
          align={align}
          onClick={() => onChange(index)}
        />
      ))}
    </HorizontalList>
  );
};
