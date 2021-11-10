import React from "react";
import { SimpleColors } from "../../config/propTypes";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";

type NprogressBaselineProps = NprogressDefaultProps &
  (
    | {
        type: "spinner";
        radius: number;
      }
    | {
        type: "bar";
        height: string;
      }
    | {
        type: "both";
        height: string;
        radius: number;
      }
  );

interface NprogressDefaultProps {
  color?: SimpleColors | "highlight" | "background" | "shade" | string;
}

const NprogressBaseline: React.FC<NprogressBaselineProps> = (props) => {
  const theme = useTheme();
  const {
    color = "primary",
    type = "bar",
    height = "2px",
    radius = "16px",
    children,
  } = props as any;

  function handleColor() {
    switch (color) {
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(color) ? theme.palette[color][500] : color;
    }
  }

  return (
    <React.Fragment>
      {children}
      <style global jsx>{`
        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: ${handleColor()};

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: ${height};
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${handleColor()}, 0 0 5px ${handleColor()};
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: ${type === "spinner" || type === "both" ? "block" : "none"};
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: ${radius};
          height: ${radius};
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: ${handleColor()};
          border-left-color: ${handleColor()};
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

type MemoNprogressBaselineComponent<P = {}> = React.NamedExoticComponent<P>;

const MemoNprogressBaseline = React.memo(
  NprogressBaseline
) as MemoNprogressBaselineComponent<React.PropsWithChildren<{}>>;

export default MemoNprogressBaseline;
