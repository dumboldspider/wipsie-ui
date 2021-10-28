// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import isThemePalette from "../../utils/isThemePalette";
import useTheme from "../../hooks/useTheme";
import contrast from "../../utils/contrast";
import brightness from "../../utils/brightness";

import { SwitchProps } from "./Switch.types";

export const Switch: React.FC<SwitchProps> = (props) => {
  const theme = useTheme();
  const {
    wrapperProps,
    checked,
    icon,
    iconColor = null,
    color = "primary",
    size = "medium",
    shape = "round",
    ...otherProps
  } = props;

  function handleBackgroundColor() {
    return theme.palette.shade;
    // return isThemePalette(color) ? theme.palette[color][500] : color;
  }
  function handleShadowColor() {
    return "#0000003D";
  }

  function handleBackgroundColorActive() {
    return isThemePalette(color) ? theme.palette[color][500] : color;
  }

  function handleDotColor() {
    return isThemePalette(color)
      ? theme.palette[color][700]
      : brightness(color, -20);
  }

  function handleDotColorClick() {
    return isThemePalette(color)
      ? theme.palette[color][300]
      : brightness(color, 10);
  }

  function handleTextColor() {
    if (iconColor) return `${iconColor}`; // if value is defined by props

    return contrast(
      isThemePalette(color) ? theme.palette[color][700] : brightness(color, -20)
    );
  }

  function handleWidth() {
    switch (size) {
      case "xlarge":
        return `${5}em`;
      case "large":
        return `${4}em`;
      case "small":
        return `${2.2}em`;
      case "mini":
        return `${1.8}em`;
      case "medium":
      default:
        return `${3}em`;
    }
  }

  function handleHeight() {
    switch (size) {
      case "xlarge":
        return `${5 / 2}em`;
      case "large":
        return `${4 / 2}em`;
      case "small":
        return `${2.2 / 2}em`;
      case "mini":
        return `${1.8 / 2}em`;
      case "medium":
      default:
        return `${3 / 2}em`;
    }
  }

  function handleInternalSize() {
    switch (size) {
      case "xlarge":
        return `${1.35}em`;
      case "large":
        return `${1.28}em`;
      case "small":
        return `${1}em`;
      case "mini":
        return `${1.15}em`;
      case "medium":
      default:
        return `${1.15}em`;
    }
  }

  function handleInternalMargin() {
    switch (size) {
      case "xlarge":
        return `${4}px`;
      case "large":
        return `${4}px`;
      case "small":
        return `${3}px`;
      case "mini":
        return `${3}px`;
      case "medium":
      default:
        return `${3}px`;
    }
  }

  function handleIconSize() {
    switch (size) {
      case "xlarge":
        return `${1.5}em`;
      case "large":
        return `${1.2}em`;
      case "small":
        return `${0.75}em`;
      case "mini":
        return `${0.5}em`;
      case "medium":
      default:
        return `${1}em`;
    }
  }

  function handleShape() {
    switch (shape) {
      case "round":
        return "border-radius: 10em;";
      case "rounded":
        return "border-radius: 0.3em;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em;";
    }
  }

  return (
    <div className="Wps-SwitchWrapper" {...wrapperProps}>
      <input
        type="checkbox"
        data-testid="Wps-Switch"
        className={classnames("Wps-Switch")}
        checked={checked}
      />
      <div className="Wps-SwExternal" {...otherProps}>
        <div className="Wps-SwInternal">{icon && icon}</div>
      </div>
      <style jsx>{`
        .Wps-SwitchWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .Wps-SwitchWrapper input[type="checkbox"] {
          height: 0;
          width: 0;
          visibility: hidden;
        }

        .Wps-SwitchWrapper .Wps-SwExternal {
          cursor: pointer;
          width: ${handleWidth()};
          height: ${handleHeight()};
          background: ${handleBackgroundColor()};
          display: block;
          ${handleShape()};
          position: relative;
          transition: all 0.3s ease;
        }

        .Wps-SwitchWrapper .Wps-SwExternal .Wps-SwInternal {
          position: absolute;
          top: ${handleInternalMargin()};
          left: ${handleInternalMargin()};
          width: ${handleInternalSize()};
          height: ${handleInternalSize()};
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${handleDotColor()};
          ${handleShape()};
          transition: all 0.3s ease;
          font-size: 100%;
          color: ${handleTextColor()};
          box-shadow: 0px 0px 5px ${handleShadowColor()};
        }

        .Wps-SwitchWrapper .Wps-SwExternal .Wps-SwInternal {
          font-size: ${handleIconSize()};
        }

        .Wps-SwitchWrapper input:checked + .Wps-SwExternal {
          background: ${handleBackgroundColorActive()};
        }

        .Wps-SwitchWrapper input:checked + .Wps-SwExternal .Wps-SwInternal {
          left: calc(100% - ${handleInternalMargin()});
          transform: translateX(-100%);
        }

        .Wps-SwitchWrapper .Wps-SwExternal:active .Wps-SwInternal {
          background: ${handleDotColorClick()};
        }
      `}</style>
    </div>
  );
};
