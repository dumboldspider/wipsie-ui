// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { AvatarProps } from "./Avatar.types";
import Broken from "./broken";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import randomColor from "../../utils/randomColor";

export const Avatar: React.FC<AvatarProps> = (props) => {
  const theme = useTheme();
  const {
    src,
    alt,
    brokenSrc = null,
    imageProps = null as any,
    wrapperProps = null as any,
    href = null,
    groupXS = "medium",
    groupSM = null,
    groupMD = null,
    groupLG = null,
    groupXL = null,
    icon,
    bordered,
    borderColor = theme.palette.background,
    groupBackgroundColor = null,
    textColor = null,
    clickable = false,
    className = null,
    ...otherProps
  } = props;

  // Component definition
  const Component = href ? "a" : "div";

  // Size definitions
  const xs = props.xs ? props.xs : groupXS ? groupXS : "medium";
  const sm = props.sm ? props.sm : groupSM ? groupSM : null;
  const md = props.md ? props.md : groupMD ? groupMD : null;
  const lg = props.lg ? props.lg : groupLG ? groupLG : null;
  const xl = props.xl ? props.xl : groupXL ? groupXL : null;

  const backgroundColor = props.backgroundColor
    ? props.backgroundColor
    : groupBackgroundColor
    ? groupBackgroundColor
    : randomColor();

  function handleClickable() {
    if (href || clickable) {
      return `cursor: pointer;`;
    } else {
      return "";
    }
  }

  function handleBorderColor() {
    if (!bordered) return "border: none;";

    if (borderColor) return `border: solid 1px ${borderColor};`; // if value is defined by props
    return `border: solid 1px: ${contrast(
      isThemePalette(borderColor)
        ? theme.palette[borderColor][500]
        : borderColor
    )};`;
  }

  function handleBackgroundColor() {
    return `background: ${
      isThemePalette(backgroundColor)
        ? theme.palette[backgroundColor][500]
        : backgroundColor
    };`;
  }

  function handleTextColor() {
    if (textColor) return `color: ${textColor};`; // if value is defined by props
    return `color: ${contrast(
      isThemePalette(backgroundColor)
        ? theme.palette[backgroundColor][500]
        : backgroundColor
    )};`;
  }

  function handleSize(breakpoint) {
    if (!breakpoint) return "";
    switch (breakpoint) {
      case "mini":
        return "width: 20px; height: 20px; font-size: 8px;";
      case "small":
        return "width: 32px; height: 32px; font-size: 12px;";
      case "medium":
        return "width: 48px; height: 48px; font-size: 20px;";
      case "large":
        return "width: 64px; height: 64px; font-size: 24px;";
      case "xlarge":
        return "width: 96px; height: 96px; font-size: 36px;";
      default:
        return `width: ${breakpoint}; height: ${breakpoint}; `;
    }
  }

  function handleAltLetters() {
    if (alt) {
      if (alt?.indexOf(" ") >= 0) {
        return (
          alt.split(" ")[0].charAt(0).toUpperCase() +
          alt.split(" ")[1].charAt(0).toUpperCase()
        );
      } else {
        return alt.substring(0, 2).toUpperCase();
      }
    }
  }

  return (
    <Component
      data-testid="Wps-AvatarWrapper"
      href={href}
      className={classnames("Wps-AvatarWrapper", className)}
      {...wrapperProps}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-AvatarWrapper {
          ${handleClickable()}
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.25rem;
          line-height: 1;
          font-weight: 500;
          border-radius: 50%;
          overflow: hidden;
          user-select: none;
          ${handleBorderColor()}
          ${handleBackgroundColor()}
          ${handleTextColor()}
          ${handleSize(xs)}
        }
        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-AvatarWrapper {
            ${handleSize(sm)}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-AvatarWrapper {
            ${handleSize(md)}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-AvatarWrapper {
            ${handleSize(lg)}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-AvatarWrapper {
            ${handleSize(xl)}
          }
        }
      `}</style>
      {(src || brokenSrc) && (
        <img
          src={src ? src : brokenSrc}
          alt={alt}
          data-testid="Wps-Avatar"
          className={classnames("Wps-Avatar")}
          {...imageProps}
        />
      )}
      {!src && !brokenSrc && !icon && !alt && <Broken />}
      {!src && !brokenSrc && !icon && alt && <>{handleAltLetters()}</>}
      {!src && !brokenSrc && icon && <>{icon}</>}
      <style jsx>{`
        .Wps-Avatar {
          width: 100%;
          height: 100%;
          text-align: center;
          object-fit: cover;
          object-position: center;
          color: transparent;
          text-indent: 10000px;
        }
      `}</style>
    </Component>
  );
};
