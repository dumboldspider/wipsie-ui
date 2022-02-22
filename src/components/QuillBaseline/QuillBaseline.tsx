import React from "react";
import useTheme from "../../hooks/useTheme";
import flush from "styled-jsx/server";
import flushToReact from "styled-jsx/server";
// import "../../static/styles/base.css";

const QuillBaseline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      {children}
      <style global jsx>{`
        .ql-snow.ql-toolbar button:hover,
        .ql-snow .ql-toolbar button:hover,
        .ql-snow.ql-toolbar button:focus,
        .ql-snow .ql-toolbar button:focus,
        .ql-snow.ql-toolbar button.ql-active,
        .ql-snow .ql-toolbar button.ql-active,
        .ql-snow.ql-toolbar .ql-picker-label:hover,
        .ql-snow .ql-toolbar .ql-picker-label:hover,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active,
        .ql-snow.ql-toolbar .ql-picker-item:hover,
        .ql-snow .ql-toolbar .ql-picker-item:hover,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
          color: ${theme.palette.primary[500]} !important;
        }
        .ql-snow.ql-toolbar button:hover .ql-fill,
        .ql-snow .ql-toolbar button:hover .ql-fill,
        .ql-snow.ql-toolbar button:focus .ql-fill,
        .ql-snow .ql-toolbar button:focus .ql-fill,
        .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
        .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
          fill: ${theme.palette.primary[500]} !important;
        }
        .ql-snow.ql-toolbar button:hover .ql-stroke,
        .ql-snow .ql-toolbar button:hover .ql-stroke,
        .ql-snow.ql-toolbar button:focus .ql-stroke,
        .ql-snow .ql-toolbar button:focus .ql-stroke,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
        .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
        .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
          stroke: ${theme.palette.primary[500]} !important;
        }
        @media (pointer: coarse) {
          .ql-snow.ql-toolbar button:hover:not(.ql-active),
          .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: ${theme.palette.text} !important;
          }
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: ${theme.palette.text} !important;
          }
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: ${theme.palette.text} !important;
          }
        }

        .ql-snow .ql-stroke {
          fill: none;
          stroke: ${theme.palette.text} !important;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2;
        }
        .ql-snow .ql-stroke-miter {
          fill: none;
          stroke: ${theme.palette.text} !important;
          stroke-miterlimit: 10;
          stroke-width: 2;
        }
        .ql-snow .ql-fill,
        .ql-snow .ql-stroke.ql-fill {
          fill: ${theme.palette.text} !important;
        }

        .ql-snow .ql-editor blockquote {
          border-left: 4px solid ${theme.palette.background} !important;
          margin-bottom: 5px;
          margin-top: 5px;
          padding-left: 16px;
        }

        .ql-snow .ql-picker {
          color: ${theme.palette.text} !important;
          display: inline-block;
          float: left;
          font-size: 14px;
          font-weight: 500;
          height: 24px;
          position: relative;
          vertical-align: middle;
        }

        .ql-snow .ql-picker.ql-expanded .ql-picker-label {
          color: ${theme.palette.background} !important;
          z-index: 2;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
          fill: ${theme.palette.background} !important;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
          stroke: ${theme.palette.background} !important;
        }

        .ql-toolbar.ql-snow {
          border: 1px solid ${theme.palette.background} !important;
          box-sizing: border-box;
          font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          padding: 8px;
        }
        .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
          border-color: ${theme.palette.background} !important;
        }
        .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
          border-color: ${theme.palette.background} !important;
        }
        .ql-snow .ql-tooltip {
          background-color: #fff;
          border: 1px solid ${theme.palette.background} !important;
          box-shadow: 0px 0px 5px #ddd;
          color: ${theme.palette.text} !important;
          padding: 5px 12px;
          white-space: nowrap;
        }
        .ql-snow .ql-tooltip input[type="text"] {
          display: none;
          border: 1px solid ${theme.palette.background} !important;
          font-size: 13px;
          height: 26px;
          margin: 0px;
          padding: 3px 5px;
          width: 170px;
        }
        .ql-snow .ql-tooltip a.ql-action::after {
          border-right: 1px solid ${theme.palette.background} !important;
          content: "Edit";
          margin-left: 16px;
          padding-right: 8px;
        }
        .ql-snow a {
          color: ${theme.palette.primary[500]} !important;
        }
        .ql-container.ql-snow {
          border: 1px solid ${theme.palette.background} !important;
        }
      `}</style>
    </React.Fragment>
  );
};

type MemoQuillBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact;
};

const MemoQuillBaseline = React.memo(
  QuillBaseline
) as MemoQuillBaselineComponent<React.PropsWithChildren<{}>>;
MemoQuillBaseline.flush = flush;

export default MemoQuillBaseline;
