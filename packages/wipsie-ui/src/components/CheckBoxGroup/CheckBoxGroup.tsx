// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { CheckBoxGroupProps } from "./CheckBoxGroup.types";

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props) => {
  const theme = useTheme();
  const {
    color = null,
    textColor = null,
    size = null,
    shape = null,
    onChange = () => {},
    align = "start",
    justify = "start",
    wrap = "nowrap",
    direction = "row",
    fullWidth = false,
    spacing = 1,
    max = 999999,
    children,
    className,
    ...otherProps
  } = props;
  const [selectedIndex, setSelectedIndex] = React.useState<number[]>([]);

  function handleAlign() {
    switch (align) {
      case "center":
        return "center";
      case "end":
        return "flex-end";
      default:
        return "flex-start";
    }
  }

  function handleJustify() {
    switch (justify) {
      case "center":
        return "center";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      case "evenly":
        return "space-evenly";
      default:
        return "flex-start";
    }
  }

  function handleMargin() {
    switch (direction) {
      case "row":
        return `margin-right: ${spacing * theme.layout.spacingUnit}px;`;
      case "column":
        return `margin-bottom: ${spacing * theme.layout.spacingUnit}px;`;
      case "row-reverse":
        return `margin-left: ${spacing * theme.layout.spacingUnit}px;`;
      case "column-reverse":
        return `margin-top: ${spacing * theme.layout.spacingUnit}px;`;
      default:
        return `margin-right: ${spacing * theme.layout.spacingUnit}px;`;
    }
  }

  function handleSelectedIndex(index: number, checked: boolean) {
    let newSelectedIndex = [...selectedIndex];
    if (checked) {
      newSelectedIndex = [...selectedIndex, index];
    } else {
      newSelectedIndex = selectedIndex.filter((i) => i !== index);
    }

    if (newSelectedIndex.length <= max) {
      setSelectedIndex(newSelectedIndex);
      onChange(newSelectedIndex);
    } else {
      onChange([...selectedIndex]);
    }
  }

  const childrenWithProps = React.Children.map(children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (
      React.isValidElement(child) &&
      typeof child.type === "function" &&
      child.type.name === "CheckBox"
    ) {
      return React.cloneElement(child, {
        groupShape: shape,
        groupSize: size,
        groupColor: color,
        groupTextColor: textColor,
        checked: selectedIndex.includes(index),
        onClick: () => {
          handleSelectedIndex(index, !selectedIndex.includes(index));
        },
      });
    }
    return child;
  });

  return (
    <div
      data-testid="Wps-CheckBoxGroup"
      className={classnames("Wps-CheckBoxGroup", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-CheckBoxGroup {
          display: flex;
          flex-direction: ${direction};
          flex-wrap: ${wrap};
          justify-content: ${handleJustify()};
          align-items: ${handleAlign()};
          width: ${fullWidth ? "100%" : "max-content"};
        }

        .Wps-CheckBoxGroup :global(.Wps-CheckBox:not(:last-child)) {
          ${handleMargin()}
        }
      `}</style>
      {childrenWithProps}
    </div>
  );
};
