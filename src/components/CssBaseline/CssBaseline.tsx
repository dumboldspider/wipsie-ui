import React from "react";
import useTheme from "../../hooks/useTheme";
import flush from "styled-jsx/server";
import flushToReact from "styled-jsx/server";
import opacity from "../../utils/opacity";

const CssBaseline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      {children}
      <style global jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          background-color: ${theme.palette.background};
          color: ${theme.palette.text};
        }
        html {
          font-size: 16px;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          margin: 0;
          padding: 0;
          min-height: 100%;
          position: relative;
          overflow-x: hidden;
          font-family: ${theme.font.body1.fontFamily};
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
          text-rendering: geometricPrecision;
          -webkit-tap-highlight-color: transparent;
        }
        p,
        small {
          font-weight: 400;
          color: inherit;
          font-family: ${theme.font.body1.fontFamily};
        }
        p {
          font-size: 1em;
        }
        small {
          margin: 0;
          font-size: 0.875rem;
        }
        b {
          font-weight: 600;
        }
        span {
          font-size: inherit;
          color: inherit;
          font-weight: inherit;
        }
        img {
          max-width: 100%;
        }
        a {
          cursor: pointer;
          font-size: inherit;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-box-align: center;
          align-items: center;
          color: ${theme.palette.primary[500]};
          text-decoration: ${theme.expressiveness.linkStyle};
        }
        a:hover {
          text-decoration: ${theme.expressiveness.linkHoverStyle};
        }
        ul,
        ol {
          padding: 0;
          list-style-type: none;
          margin: ${theme.layout.gapHalf} ${theme.layout.gapHalf}
            ${theme.layout.gapHalf} ${theme.layout.gap};
          color: ${theme.palette.text};
        }
        ol {
          list-style-type: decimal;
        }
        li {
          font-size: 1em;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: inherit;
        }
        h1 {
          font-size: 3rem;
          font-weight: 700;
        }
        h2 {
          font-size: 2.25rem;
          font-weight: 600;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }
        h4 {
          font-size: 1.25rem;
          font-weight: 600;
        }
        h5 {
          font-size: 1rem;
          font-weight: 600;
        }
        h6 {
          font-size: 0.875rem;
          font-weight: 600;
        }
        button,
        input,
        select,
        textarea {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          color: inherit;
          margin: 0;
        }
        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
        }
        code {
          color: ${theme.palette.primary[500]};
          padding: calc(${theme.layout.gapQuarter} * 0.5)
            ${theme.layout.gapQuarter};
          border-radius: 0.375rem;
          background-color: ${opacity(theme.palette.primary[500], 20)};
          font-family: ${theme.font.code.fontFamily};
          font-size: 0.8rem;
          white-space: pre-wrap;
          transition: background-color 0.25s ease;
        }
        code:hover {
          background-color: ${opacity(theme.palette.primary[500], 30)};
        }
        pre {
          border-radius: ${theme.layout.radius};
          padding: calc(${theme.layout.gap} * 0.75) ${theme.layout.gap};
          margin: ${theme.layout.gap} 0;
          font-family: ${theme.font.code.fontFamily};
          white-space: pre;
          overflow: auto;
          text-align: left;
          font-size: 0.875rem;
          -webkit-overflow-scrolling: touch;
        }
        pre code {
          color: ${theme.palette.text};
          font-size: 0.8125rem;
          white-space: pre;
        }
        pre code:before,
        pre code:after {
          display: none;
        }
        pre :global(p) {
          margin: 0;
        }
        pre::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }
        hr {
          border-color: ${theme.palette.basic[500]};
        }
        details {
          background-color: ${theme.palette.basic[700]};
          border: none;
        }
        details:focus,
        details:hover,
        details:active {
          outline: none;
        }
        summary {
          cursor: pointer;
          user-select: none;
          list-style: none;
          outline: none;
        }
        summary::-webkit-details-marker,
        summary::before {
          display: none;
        }
        summary::-moz-list-bullet {
          font-size: 0;
        }
        summary:focus,
        summary:hover,
        summary:active {
          outline: none;
          list-style: none;
        }
        blockquote {
          padding: calc(0.667 * ${theme.layout.gap}) ${theme.layout.gap};
          color: ${theme.palette.basic[700]};
          background-color: ${theme.palette.basic[300]};
          border-radius: ${theme.layout.radius};
        }
        blockquote :global(*:first-child) {
          margin-top: 0;
        }
        blockquote :global(*:last-child) {
          margin-bottom: 0;
        }
        ::selection {
          background-color: ${theme.palette.primary[500]};
          color: ${theme.palette.background};
        }
      `}</style>
    </React.Fragment>
  );
};

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact;
};

const MemoCssBaseline = React.memo(CssBaseline) as MemoCssBaselineComponent<
  React.PropsWithChildren<{}>
>;
MemoCssBaseline.flush = flush;

export default MemoCssBaseline;
