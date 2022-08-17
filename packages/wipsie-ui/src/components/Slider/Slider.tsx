// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import isThemePalette from "../../utils/isThemePalette";
import useTheme from "../../hooks/useTheme";
import { SliderProps } from "./Slider.types";

export const Slider: React.FC<SliderProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    className,
    value,
    max = 100,
    min = 1,
    wrapperProps = {},
    color = "primary",
    shape = "round",
    size = "medium",
    width = "100%",
    fullWidth = false,
    ...otherProps
  } = props;

  function handleBackgroundColor() {
    return theme.palette.shade;
    // return isThemePalette(color) ? theme.palette[color][500] : color;
  }

  function handleBackgroundColorActive() {
    return isThemePalette(color) ? theme.palette[color][500] : color;
  }

  function handleWidth() {
    return fullWidth ? "100%" : width;
  }

  function handleShape() {
    switch (shape) {
      case "round":
        return "border-radius: 10em;";
      case "square":
        return "border-radius: 0em;";
      case "rounded":
      default:
        return "border-radius: 0.25em;";
    }
  }

  function handleSize() {
    switch (size) {
      case "xlarge":
        return "25px";
      case "large":
        return "18px";
      case "small":
        return "8px";
      case "mini":
        return "5px";
      case "medium":
      default:
        return "12px";
    }
  }

  return (
    <div
      className={classnames(
        "Wps-Slider-Wrapper",
        wrapperProps?.className || ""
      )}
      {...wrapperProps}
    >
      <input
        type="range"
        className={classnames("Wps-Slider", className)}
        min={min}
        max={max}
        value={value}
        {...otherProps}
      />
      <style jsx>{`
        .Wps-Slider-Wrapper {
          width: ${handleWidth()};
        }
        .Wps-Slider {
          -webkit-appearance: none;
          width: ${handleWidth()};
          height: ${handleSize()};
          background: ${handleBackgroundColor()};
          outline: none;
          opacity: 0.7;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
          ${handleShape()};
        }
        .Wps-Slider:hover {
          opacity: 1;
        }
        .Wps-Slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: ${handleSize()};
          height: ${handleSize()};
          background: ${handleBackgroundColorActive()};
          ${handleShape()};
          cursor: pointer;
        }
        .Wps-Slider::-moz-range-thumb,
        .Wps-Slider::-ms-thumb {
          width: ${handleSize()};
          height: ${handleSize()};
          background: ${handleBackgroundColorActive()};
          ${handleShape()};
          cursor: pointer;
        }
      `}</style>
      {children}
    </div>
  );
};
