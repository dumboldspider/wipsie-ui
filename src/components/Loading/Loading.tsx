// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import { normalSizes } from "../../config/propTypes";

import { LoadingProps } from "./Loading.types";

export const Loading: React.FC<LoadingProps> = (props) => {
  const theme = useTheme();
  const {
    color = "primary",
    size = "medium",
    type = "circle",
    ...otherProps
  } = props;

  function handleColor() {
    return isThemePalette(color) ? theme.palette[color][500] : color;
  }

  function handleSize() {
    switch (size) {
      case "xlarge":
        return "5em";
      case "large":
        return "4em";
      case "small":
        return "1.8em";
      case "mini":
        return "1em";
      case "medium":
      default:
        return "3em";
    }
  }

  switch (type) {
    case "coin":
      return (
        <div
          data-testid="Wps-Loading"
          className={classnames("Wps-Loading")}
          {...otherProps}
        >
          <div className="box">
            <div className="coin"></div>
          </div>

          <style jsx>{`
            .Wps-Loading .box {
              /* perspective: 120px; */
            }

            .Wps-Loading .coin {
              width: ${handleSize()};
              height: ${handleSize()};
              border-radius: 50%;
              border: 3px solid ${handleColor()};
              animation: spin 1.5s ease-in-out infinite;
            }

            @keyframes spin {
              to {
                transform: rotateY(540deg);
              }
            }
          `}</style>
        </div>
      );

    case "rings":
      return (
        <div
          data-testid="Wps-Loading"
          className={classnames("Wps-Loading")}
          {...otherProps}
        >
          <div className="loader">
            <div className="outer"></div>
            <div className="middle"></div>
            <div className="inner"></div>
          </div>
          <style jsx>{`
            .Wps-Loading .loader {
              position: relative;
              width: ${(normalSizes.indexOf(size) + 1) * 0.95 + "em"};
              height: ${(normalSizes.indexOf(size) + 1) * 0.95 + "em"};
            }

            .Wps-Loading .outer,
            .Wps-Loading .middle,
            .Wps-Loading .inner {
              border: 2px solid transparent;
              border-top-color: ${handleColor()};
              border-right-color: ${handleColor()};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
            }

            .Wps-Loading .outer {
              width: ${(normalSizes.indexOf(size) + 1) * 0.95 + "em"};
              height: ${(normalSizes.indexOf(size) + 1) * 0.95 + "em"};
              margin-left: ${(((normalSizes.indexOf(size) + 1) * 0.95) / 2) *
                -1 +
              "em"};
              margin-top: ${(((normalSizes.indexOf(size) + 1) * 0.95) / 2) *
                -1 +
              "em"};
              animation: spin 2s linear infinite;
            }

            .Wps-Loading .middle {
              width: ${(normalSizes.indexOf(size) + 1) * 0.75 + "em"};
              height: ${(normalSizes.indexOf(size) + 1) * 0.75 + "em"};
              margin-left: ${(((normalSizes.indexOf(size) + 1) * 0.75) / 2) *
                -1 +
              "em"};
              margin-top: ${(((normalSizes.indexOf(size) + 1) * 0.75) / 2) *
                -1 +
              "em"};
              animation: spin 1.75s linear reverse infinite;
            }

            .Wps-Loading .inner {
              width: ${(normalSizes.indexOf(size) + 1) * 0.55 + "em"};
              height: ${(normalSizes.indexOf(size) + 1) * 0.55 + "em"};
              margin-left: ${(((normalSizes.indexOf(size) + 1) * 0.55) / 2) *
                -1 +
              "em"};
              margin-top: ${(((normalSizes.indexOf(size) + 1) * 0.55) / 2) *
                -1 +
              "em"};
              animation: spin 1.5s linear infinite;
            }

            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      );

    case "orbit":
      return (
        <div
          data-testid="Wps-Loading"
          className={classnames("Wps-Loading")}
          {...otherProps}
        >
          <svg viewBox="0 0 50 50">
            <circle className="ring" cx="25" cy="25" r="20"></circle>
            <circle className="ball" cx="25" cy="5" r="3.5"></circle>
          </svg>
          <style jsx>{`
            .Wps-Loading svg {
              width: ${handleSize()};
              animation: 1.5s spin ease infinite;
            }

            .Wps-Loading .ring {
              fill: none;
              stroke: ${handleColor()};
              stroke-width: 2;
            }

            .Wps-Loading .ball {
              fill: ${handleColor()};
              stroke: none;
            }

            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      );

    case "circle":
      return (
        <div
          data-testid="Wps-Loading"
          className={classnames("Wps-Loading")}
          {...otherProps}
        >
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>

          <style jsx>{`
            .Wps-Loading svg {
              width: ${handleSize()};
              transform-origin: center;
              animation: rotate 2s linear infinite;
            }

            .Wps-Loading circle {
              fill: none;
              stroke: ${handleColor()};
              stroke-width: 2;
              stroke-dasharray: 1, 200;
              stroke-dashoffset: 0;
              stroke-linecap: round;
              animation: dash 1.5s ease-in-out infinite;
            }

            @keyframes rotate {
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes dash {
              0% {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
              }
              50% {
                stroke-dasharray: 90, 200;
                stroke-dashoffset: -35px;
              }
              100% {
                stroke-dashoffset: -125px;
              }
            }
          `}</style>
        </div>
      );

    case "dots":
      return (
        <div
          data-testid="Wps-Loading"
          className={classnames("Wps-Loading")}
          {...otherProps}
        >
          <div></div>
          <div></div>
          <div></div>

          <style jsx>{`
            .Wps-Loading {
              width: ${handleSize()};
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              justify-content: space-between;
              position: relative;
              margin: 5px;
            }

            .Wps-Loading div {
              width: ${(normalSizes.indexOf(size) + 1) * 0.3 + "em"};
              height: ${(normalSizes.indexOf(size) + 1) * 0.3 + "em"};
              border-radius: 50%;
              background-color: ${handleColor()};
              animation: fade 0.8s ease-in-out alternate infinite;
            }

            .Wps-Loading div:nth-of-type(1) {
              animation-delay: -0.4s;
            }

            .Wps-Loading div:nth-of-type(2) {
              animation-delay: -0.2s;
            }

            @keyframes fade {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
          `}</style>
        </div>
      );

    case "closer":
    default:
      return (
        <div
          data-testid="Wps-Loading"
          className={classnames("Wps-Loading")}
          {...otherProps}
        >
          <style jsx>{`
            .Wps-Loading {
              width: ${handleSize()};
              height: ${handleSize()};
              border: 3px solid transparent;
              border-top-color: ${handleColor()};
              border-bottom-color: ${handleColor()};
              border-radius: 50%;
              animation: spin-stretch 2s ease infinite;
            }

            @keyframes spin-stretch {
              50% {
                transform: rotate(360deg) scale(0.4, 0.33);
                border-width: 8px;
              }
              100% {
                transform: rotate(720deg) scale(1, 1);
                border-width: 3px;
              }
            }
          `}</style>
        </div>
      );
  }
};
