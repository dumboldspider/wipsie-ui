// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { BackdropProps } from "./Backdrop.types";
import isThemePalette from "../../utils/isThemePalette";

import { Portal } from "../Portal";

export const Backdrop: React.FC<BackdropProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    duration = 200,
    transition = "ease-in-out",
    visible = true,
    color = "basic",
    noPortal = false,
    type = "absolute",
    className,
    ...otherProps
  } = props;

  const [animationTrigger, setAnimationTrigger] = useState(visible);
  const [isOpen, setIsOpen] = useState(visible);

  useEffect(() => {
    if (visible) {
      setIsOpen(visible);
      setTimeout(() => {
        setAnimationTrigger(true);
      }, 10);
    } else {
      setAnimationTrigger(false);
      setTimeout(() => {
        setIsOpen(visible);
      }, duration);
    }
  }, [visible]);

  function handleBackgroundColor() {
    switch (color) {
      case "text":
        return theme.palette.text;
      case "subtext":
        return theme.palette.subtext;
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(color) ? theme.palette[color].shadow : color;
    }
  }

  const Component = (
    <div
      data-testid="Wps-Backdrop"
      className={classnames(
        "Wps-Backdrop",
        animationTrigger ? "visible" : "hidden",
        className
      )}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Backdrop {
          position: ${type};
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

  if (noPortal) {
    return Component;
  } else {
    return (
      <Portal id={otherProps.id || "backdrop"} visible={isOpen}>
        {Component}
      </Portal>
    );
  }
};
