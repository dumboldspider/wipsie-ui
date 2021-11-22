// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { SnackbarProps } from "./Snackbar.types";

// component dependencies
import { Portal } from "../Portal";
import { Fixed } from "../Fixed";
import { Animated } from "../Animated";
import { Backdrop } from "../Backdrop";
import useScrollBlock from "../../hooks/useScrollBlock";
import useKeyPress from "../../hooks/useKeyPress";

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  const theme = useTheme();
  const {
    id = "modal",
    type = "fixed",
    position = "bottom center",
    spacing = 2,
    open = false,
    duration = 200,
    animation = "fadeInBottom",
    style = {},
    fullWidth,
    fullHeight,
    children,
  } = props;
  const [animationTrigger, setAnimationTrigger] = useState(open);
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsOpen(open);
      setTimeout(() => {
        setAnimationTrigger(true);
      }, 10);
    } else {
      setAnimationTrigger(false);
      setTimeout(() => {
        setIsOpen(open);
      }, duration);
    }
  }, [open]);

  function handleValue(value) {
    return value
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "10px";
  }

  return (
    <Portal id={id} visible={isOpen}>
      <Fixed
        type={type}
        position={position}
        spacing={0}
        style={{
          width: fullWidth ? "100%" : "auto",
          height: fullHeight ? "100%" : "auto",
          margin: handleValue(spacing),
        }}
      >
        <Animated
          visible={animationTrigger}
          animation={animation as any}
          duration={duration}
          style={{
            pointerEvents: "all",
            zIndex: theme.layout.modalIndex,
            width: fullWidth ? "100%" : "auto",
            height: fullHeight ? "100%" : "auto",
            ...style,
          }}
        >
          {children}
        </Animated>
      </Fixed>
    </Portal>
  );
};