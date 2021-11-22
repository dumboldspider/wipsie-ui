// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { AnimatedProps } from "./Animated.types";

export const Animated: React.FC<AnimatedProps> = (props) => {
  const theme = useTheme();
  const {
    animation = "fadeInScale",
    duration = 500,
    transition = "ease-in-out",
    visible = true,
    children,
    className,
    ...otherProps
  } = props;
  return (
    <div
      data-testid="Wps-Animated"
      className={classnames(
        "Wps-Animated",
        animation,
        visible ? "visible" : "hidden",
        className
      )}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Animated {
          visibility: hidden;
          transition: all ${duration}ms ${transition};
        }
        .Wps-Animated.visible {
          visibility: visible;
        }
        .Wps-Animated.hidden {
          visibility: hidden;
        }

        /* opacity */
        .Wps-Animated.opacity.hidden {
          opacity: 0;
        }
        .Wps-Animated.opacity.visible {
          opacity: 1;
        }

        /* rotate */
        .Wps-Animated.rotate {
          animation: Wps-Animated-rotate ${duration}ms ${transition} infinite;
        }
        @keyframes Wps-Animated-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* scale */
        .Wps-Animated.scale.hidden {
          transform: scale(0.7);
        }
        .Wps-Animated.scale.visible {
          transform: scale(1);
        }

        /* fadeIn */
        .Wps-Animated.fadeIn.hidden {
          opacity: 0;
        }
        .Wps-Animated.fadeIn.visible {
          opacity: 1;
        }

        /* fadeInScale */
        .Wps-Animated.fadeInScale.hidden {
          transform: scale(0.7);
          opacity: 0;
        }
        .Wps-Animated.fadeInScale.visible {
          transform: scale(1);
          opacity: 1;
        }

        /* fadeInTop */
        .Wps-Animated.fadeInTop.hidden {
          opacity: 0;
          transform: translateY(-50%);
        }
        .Wps-Animated.fadeInTop.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* fadeInBottom */
        .Wps-Animated.fadeInBottom.hidden {
          opacity: 0;
          transform: translateY(50%);
        }
        .Wps-Animated.fadeInBottom.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* fadeInLeft */
        .Wps-Animated.fadeInLeft.hidden {
          opacity: 0;
          transform: translateX(-50%);
        }
        .Wps-Animated.fadeInLeft.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* fadeInRight */
        .Wps-Animated.fadeInRight.hidden {
          opacity: 0;
          transform: translateX(50%);
        }
        .Wps-Animated.fadeInRight.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      {children}
    </div>
  );
};
