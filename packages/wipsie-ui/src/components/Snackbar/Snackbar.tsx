// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import { SnackbarProps } from "./Snackbar.types";

// component dependencies
import { Portal } from "../Portal";
import { Fixed } from "../Fixed";
import { Animated } from "../Animated";
import { Backdrop } from "../Backdrop";

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  const theme = useTheme();
  const {
    id = "modal",
    type = "fixed",
    open = false,
    spacing = 2,
    position = "bottom center",
    duration = 200,
    animation = "fadeInBottom",
    fullWidth,
    fullHeight,

    backdrop = false,
    backdropColor = "basic",
    onBackdropClick = () => {},
    backdropProps = {},

    portalProps = {},
    noPortal = false,

    style = {},
    fixedStyle = {},
    animatedStyle = {},
    children,
    ...otherProps
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
      : "0px";
  }

  const Component = (
    <>
      {backdrop && (
        <Backdrop
          visible={animationTrigger}
          duration={backdropProps?.duration || duration || 300}
          color={backdropProps?.color || backdropColor || "basic"}
          onClick={backdropProps?.onClick || onBackdropClick}
          noPortal={backdropProps?.noPortal || true}
          type={backdropProps?.type || "fixed"}
          {...backdropProps}
        />
      )}
      <Fixed
        type={type}
        position={position}
        spacing={0}
        style={{
          width: fullWidth ? "100%" : "auto",
          height: fullHeight ? "100%" : "auto",
          margin: handleValue(spacing),
          ...fixedStyle,
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
            ...animatedStyle,
            ...style,
          }}
          {...otherProps}
        >
          {children}
        </Animated>
      </Fixed>
    </>
  );

  if (noPortal) {
    return Component;
  } else {
    return (
      <Portal id={id} visible={isOpen} {...portalProps}>
        {Component}
      </Portal>
    );
  }
};
