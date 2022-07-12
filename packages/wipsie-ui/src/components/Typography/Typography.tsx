// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";

import { TypographyProps } from "./Typography.types";

export const Typography: React.FC<TypographyProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    color = theme.palette.text,
    component,
    variant = "body1",
    className = null,
    weight = null,
    align = "left",
    ...otherProps
  } = props;

  function handleTextAlign() {
    return align;
  }

  function handleVariantComponent() {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      case "subtitle1":
        return "div";
      case "subtitle2":
        return "div";
      case "body1":
        return "p";
      case "body2":
        return "span";
      case "caption1":
        return "caption";
      case "caption2":
        return "span";
      case "code":
        return "pre";
      case "label":
        return "label";
    }
  }

  function handleColor() {
    if (!color) return `color: ${theme.palette.text};`;
    switch (color) {
      case "text":
        return `color: ${theme.palette.text};
                stroke: ${theme.palette.text}`;
      case "subtext":
        return `color: ${theme.palette.subtext};
                stroke: ${theme.palette.subtext}`;
      case "background":
        return `color: ${theme.palette.background};
                stroke: ${theme.palette.background}`;
      case "highlight":
        return `color: ${theme.palette.highlight};
                stroke: ${theme.palette.highlight}`;
      case "shade":
        return `color: ${theme.palette.shade};
                stroke: ${theme.palette.shade}`;
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };
                stroke: ${
                  isThemePalette(color) ? theme.palette[color][500] : color
                }`;
    }
  }

  const Component = component ? component : handleVariantComponent();

  return (
    <Component
      data-testid="Typography"
      className={classnames("Typography", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Typography {
          font-size: ${theme.font[variant].fontSize};
          font-family: ${theme.font[variant].fontFamily};
          font-weight: ${weight ? weight : theme.font[variant].fontWeight};
          line-height: ${theme.font[variant].lineHeight};
          text-transform: ${theme.font[variant].textTransform};
          letter-spacing: ${theme.font[variant].letterSpacing};
          text-align: ${handleTextAlign()};
          ${handleColor()}
        }
      `}</style>
      {children}
    </Component>
  );
};
