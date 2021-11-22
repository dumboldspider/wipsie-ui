// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { BackdropProps } from "./Backdrop.types";
import isThemePalette from "../../utils/isThemePalette";

export const Backdrop: React.FC<BackdropProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    duration = 200,
    transition = "ease-in-out",
    visible = true,
    color = "basic",
    className,
    ...otherProps
  } = props;

  function handleBackgroundColor() {
    return isThemePalette(color) ? theme.palette[color].shadow : color;
  }

  return (
    <div
      data-testid="Wps-Backdrop"
      className={classnames(
        "Wps-Backdrop",
        visible ? "visible" : "hidden",
        className
      )}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
          transition: all ${duration}ms ${transition};
          background-color: ${handleBackgroundColor()};
        }

        /* opacity */
        .Wps-Backdrop.hidden {
          visibility: hidden;
          opacity: 0;
        }
        .Wps-Backdrop.visible {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
      {children}
    </div>
  );
};
