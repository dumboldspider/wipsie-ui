// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import classnames from "classnames";
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
    onCloseEnd = () => {},
    onCloseStart = () => {},
    onOpenEnd = () => {},
    onOpenStart = () => {},
    backdropColor = "basic",
    onBackdropClick = () => {},
    onEscapeKeyDown = () => {},
    disableScrollLock = false,
    closeKey = "Escape",
    children,
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
      style={{ zIndex: theme.layout.modalIndex }}
    >
      <Backdrop
        visible={animationTrigger}
        duration={duration}
        color={backdropColor}
        onClick={onBackdropClick}
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
          style={{ pointerEvents: "all" }}
        >
          {children}
        </Animated>
      </Flex>
    </Portal>
  );
};
