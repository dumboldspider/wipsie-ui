// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { FixedProps } from "./Fixed.types";

export const Fixed: React.FC<FixedProps> = (props) => {
  const theme = useTheme();
  const {
    type = "fixed",
    position = "top right",
    spacing = 0,
    children,
    className,
    ...otherProps
  } = props;

  function handlePosition() {
    let spacingUnit = `${spacing * theme.layout.spacingUnit}`;

    if (position.indexOf(" ") >= 0) {
      const [vertical, horizontal] = position.split(" ");

      let verticalCss = "";
      switch (vertical) {
        case "center":
          verticalCss = `top: calc(50% + ${spacingUnit}px); transform: translateY(calc(-50% - ${spacingUnit}px));`;
          break;
        case "bottom":
          verticalCss = `bottom: calc(0% + ${spacingUnit}px);`;
          break;
        default:
        case "top":
          verticalCss = `top: calc(0% + ${spacingUnit}px);`;
          break;
      }

      let horizontalCss = "";
      switch (horizontal) {
        case "left":
          horizontalCss = `left: calc(0% + ${spacingUnit}px);`;
          break;
        case "center":
          horizontalCss = `left: calc(50% + ${spacingUnit}px); transform: translateX(calc(-50% - ${spacingUnit}px));`;
          break;
        default:
        case "right":
          horizontalCss = `right: calc(0% + ${spacingUnit}px);`;
          break;
      }
      return verticalCss + horizontalCss;
    } else {
      switch (position) {
        case "top":
          return `top: calc(0% + ${spacingUnit}px);`;
        case "center":
          return `top: calc(50% + ${spacingUnit}px); left: calc(50% + ${spacingUnit}px); ;
          transform: translateY(calc(-50% - ${spacingUnit}px)) translateX(calc(-50% - ${spacingUnit}px));`;
        case "bottom":
          return `bottom: calc(0% + ${spacingUnit}px);`;
        case "left":
          return `left: calc(0% + ${spacingUnit}px);`;
        case "right":
          return `right: calc(0% + ${spacingUnit}px);`;
        default:
          return `top: calc(0% + ${spacingUnit}px); right: calc(0% + ${spacingUnit}px);`;
      }
    }
  }

  return (
    <div
      data-testid="Wps-Fixed"
      className={classnames("Wps-Fixed", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Fixed {
          position: ${type};
          ${handlePosition()};
        }
      `}</style>
      {children}
    </div>
  );
};
