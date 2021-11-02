// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { RadioGroupProps } from "./RadioGroup.types";

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const theme = useTheme();
  const {
    color = null,
    textColor = null,
    size = null,
    onChange = () => {},
    align = "start",
    justify = "start",
    wrap = "nowrap",
    direction = "row",
    fullWidth = false,
    spacing = 1,
    defaultSelected = 0,
    children,
    className,
    ...otherProps
  } = props;
  const [selectedIndex, setSelectedIndex] =
    React.useState<number>(defaultSelected);

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

  function handleSelectedIndex(index: number) {
    setSelectedIndex(index);
    onChange(index);
  }

  const childrenWithProps = React.Children.map(children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (
      React.isValidElement(child) &&
      typeof child.type === "function" &&
      child.type.name === "Radio"
    ) {
      return React.cloneElement(child, {
        groupSize: size,
        groupColor: color,
        groupTextColor: textColor,
        checked: selectedIndex === index,
        onClick: (e) => {
          handleSelectedIndex(index);
        },
      });
    }
    return child;
  });

  return (
    <div
      data-testid="Wps-RadioGroup"
      className={classnames("Wps-RadioGroup", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-RadioGroup {
          display: flex;
          flex-direction: ${direction};
          flex-wrap: ${wrap};
          justify-content: ${handleJustify()};
          align-items: ${handleAlign()};
          width: ${fullWidth ? "100%" : "max-content"};
        }
        .Wps-RadioGroup :global(.Wps-Radio:not(:last-child)) {
          ${handleMargin()}
        }
      `}</style>
      {childrenWithProps}
    </div>
  );
};
