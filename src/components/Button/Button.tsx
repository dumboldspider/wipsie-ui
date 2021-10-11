import React from "react";
// import PropTypes from "prop-types";
import clsx from "clsx";
// import styles from "./Button.module.scss";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import ButtonTypes from "./Button.types";

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonTypes) => {
  const theme = useTheme();
  const {
    color = null,
    variant = "contained",
    backgroundColor = "primary",
    hoverBackgroundColor = null,
    size = "medium",
    label = null,
    children,
    ...otherProps
  } = props;

  console.log(theme);

  return (
    <button className={clsx("button")} {...otherProps}>
      <style jsx>{`
        .button {
          background: ${isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor};
          color: ${color
            ? color
            : contrast(
                isThemePalette(backgroundColor)
                  ? theme.palette[backgroundColor][500]
                  : backgroundColor
              )};
          font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
            sans-serif;
          font-weight: 700;
          border: 0;
          border-radius: 3em;
          cursor: pointer;
          display: inline-block;
          line-height: 1;
          padding: ${size === "large"
            ? "1.6em"
            : size === "medium"
            ? "1.2em"
            : size === "small"
            ? "0.8em"
            : "1.2em"};
          transition: all 250ms ease 0ms;
          position: relative;
          overflow: hidden;
        }
        .button:hover {
          background: ${hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][300]
            : backgroundColor};
        }
      `}</style>
      {label}
      {children}
    </button>
  );
};
