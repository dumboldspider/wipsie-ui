// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import isThemePalette from "../../utils/isThemePalette";
import useTheme from "../../hooks/useTheme";
import { normalSizes } from "../../config/propTypes";
import contrast from "../../utils/contrast";

import { SwitchProps } from "./Switch.types";

const Switch: React.FC<SwitchProps> = (props) => {
  const theme = useTheme();
  const {
    wrapperProps,
    checked,
    icon,
    iconColor = null,
    color = "primary",
    size = "medium",
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
    return isThemePalette(color) ? theme.palette[color][700] : color;
  }

  function handleDotColor() {
    return isThemePalette(color) ? theme.palette[color][500] : color;
  }

  function handleDotColorClick() {
    return isThemePalette(color) ? theme.palette[color][300] : color;
  }

  function handleTextColor() {
    if (iconColor) return `${iconColor}`; // if value is defined by props

    return contrast(isThemePalette(color) ? theme.palette[color][500] : color);
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

  return (
    <div className="SwitchWrapper" {...wrapperProps}>
      <input
        type="checkbox"
        id="switch"
        data-testid="Switch"
        className={classnames("Switch")}
        checked={checked}
      />
      <div className="SwitchExternal" {...otherProps}>
        <div className="SwitchInternal">{icon && icon}</div>
      </div>
      <style jsx>{`
        .SwitchWrapper input[type="checkbox"] {
          height: 0;
          width: 0;
          visibility: hidden;
        }

        .SwitchWrapper .SwitchExternal {
          cursor: pointer;
          width: ${handleWidth()};
          height: ${handleHeight()};
          background: ${handleBackgroundColor()};
          display: block;
          border-radius: 100px;
          position: relative;
          transition: all 0.3s ease;
        }

        .SwitchWrapper .SwitchExternal .SwitchInternal {
          position: absolute;
          top: ${handleInternalMargin()};
          left: ${handleInternalMargin()};
          width: ${handleInternalSize()};
          height: ${handleInternalSize()};
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${handleDotColor()};
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 100%;
          color: ${handleTextColor()};
          box-shadow: 0px 0px 5px ${handleShadowColor()};
        }

        .SwitchWrapper .SwitchExternal .SwitchInternal {
          font-size: ${handleIconSize()};
        }

        .SwitchWrapper input:checked + .SwitchExternal {
          background: ${handleBackgroundColorActive()};
        }

        .SwitchWrapper input:checked + .SwitchExternal .SwitchInternal {
          left: calc(100% - ${handleInternalMargin()});
          transform: translateX(-100%);
        }

        .SwitchWrapper .SwitchExternal:active .SwitchInternal {
          background: ${handleDotColorClick()};
        }
      `}</style>
    </div>
  );
};

export default Switch;
