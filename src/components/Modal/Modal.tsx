// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import useTheme from "../../hooks/useTheme";
import { ModalProps } from "./Modal.types";

// component dependencies
import { Portal } from "../Portal";
import { Flex } from "../Flex";
import { Animated } from "../Animated";
import { Backdrop } from "../Backdrop";
import useScrollBlock from "../../hooks/useScrollBlock";
import useKeyPress from "../../hooks/useKeyPress";

export const Modal: React.FC<ModalProps> = (props) => {
  const theme = useTheme();
  const {
    id = "modal",
    open = false,
    duration = 200,
    animation = "fadeInScale",
    transition = "ease-in-out",
    onCloseEnd = () => {},
    onCloseStart = () => {},
    onOpenEnd = () => {},
    onOpenStart = () => {},
    backdropColor = "basic",
    onBackdropClick = () => {},
    onEscapeKeyDown = () => {},
    disableScrollLock = false,
    closeKey = "Escape",
    backdropProps = {},
    portalProps = { style: {} },
    children,
    ...otherProps
  } = props;
  const [, setLocked] = useScrollBlock();
  const escapePress: boolean = useKeyPress(closeKey);
  const [animationTrigger, setAnimationTrigger] = useState(open);
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsOpen(open);
      onOpenStart();
      !disableScrollLock && setLocked(true);
      setTimeout(() => {
        setAnimationTrigger(true);
        onOpenEnd();
      }, 10);
    } else {
      setAnimationTrigger(false);
      onCloseStart();
      setTimeout(() => {
        setIsOpen(open);
        onCloseEnd();
        !disableScrollLock && setLocked(false);
      }, duration);
    }
  }, [open]);

  useEffect(() => {
    if (escapePress) {
      onEscapeKeyDown();
    }
  }, [escapePress]);

  return (
    <Portal
      id={id}
      visible={isOpen}
      style={{ zIndex: theme.layout.modalIndex, ...portalProps.style }}
      {...portalProps}
    >
      <Backdrop
        visible={animationTrigger}
        duration={backdropProps?.duration || duration}
        color={backdropProps?.color || backdropColor}
        onClick={backdropProps?.onClick || onBackdropClick}
        transition={backdropProps?.transition || transition}
        noPortal={backdropProps?.noPortal || true}
        type={backdropProps?.type || "fixed"}
        {...backdropProps}
      />

      <Flex
        align="center"
        justify="center"
        fullHeight
        fullWidth
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <Animated
          visible={animationTrigger}
          animation={animation as any}
          duration={duration}
          transition={transition}
          style={{ pointerEvents: "all", ...otherProps.style }}
          {...otherProps}
        >
          {children}
        </Animated>
      </Flex>
    </Portal>
  );
};
