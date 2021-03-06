import React from "react";
import useTheme from "../../hooks/useTheme";
import flush from "styled-jsx/server";
import flushToReact from "styled-jsx/server";
// import "../../static/styles/base.css";

const CssBaseline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      {children}
      <style global jsx>{`
        /* root */
        :root {
          --wipsie-primary-100: ${theme.palette.primary[100]};
          --wipsie-primary-300: ${theme.palette.primary[300]};
          --wipsie-primary-500: ${theme.palette.primary[500]};
          --wipsie-primary-700: ${theme.palette.primary[700]};
          --wipsie-primary-900: ${theme.palette.primary[900]};

          --wipsie-secondary-100: ${theme.palette.secondary[100]};
          --wipsie-secondary-300: ${theme.palette.secondary[300]};
          --wipsie-secondary-500: ${theme.palette.secondary[500]};
          --wipsie-secondary-700: ${theme.palette.secondary[700]};
          --wipsie-secondary-900: ${theme.palette.secondary[900]};

          --wipsie-danger-100: ${theme.palette.danger[100]};
          --wipsie-danger-300: ${theme.palette.danger[300]};
          --wipsie-danger-500: ${theme.palette.danger[500]};
          --wipsie-danger-700: ${theme.palette.danger[700]};
          --wipsie-danger-900: ${theme.palette.danger[900]};

          --wipsie-warning-100: ${theme.palette.warning[100]};
          --wipsie-warning-300: ${theme.palette.warning[300]};
          --wipsie-warning-500: ${theme.palette.warning[500]};
          --wipsie-warning-700: ${theme.palette.warning[700]};
          --wipsie-warning-900: ${theme.palette.warning[900]};

          --wipsie-info-100: ${theme.palette.info[100]};
          --wipsie-info-300: ${theme.palette.info[300]};
          --wipsie-info-500: ${theme.palette.info[500]};
          --wipsie-info-700: ${theme.palette.info[700]};
          --wipsie-info-900: ${theme.palette.info[900]};

          --wipsie-success-100: ${theme.palette.success[100]};
          --wipsie-success-300: ${theme.palette.success[300]};
          --wipsie-success-500: ${theme.palette.success[500]};
          --wipsie-success-700: ${theme.palette.success[700]};
          --wipsie-success-900: ${theme.palette.success[900]};

          --wipsie-basic-100: ${theme.palette.basic[100]};
          --wipsie-basic-300: ${theme.palette.basic[300]};
          --wipsie-basic-500: ${theme.palette.basic[500]};
          --wipsie-basic-700: ${theme.palette.basic[700]};
          --wipsie-basic-900: ${theme.palette.basic[900]};

          --wipsie-background: ${theme.palette.background};
          --wipsie-shade: ${theme.palette.shade};
          --wipsie-highlight: ${theme.palette.highlight};
          --wipsie-text: ${theme.palette.text};
          --wipsie-subtext: ${theme.palette.subtext};
        }

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
          font-family: ${theme.font.code.fontFamily};
          font-size: 0.8rem;
          white-space: pre-wrap;
          transition: background-color 0.25s ease;
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

        /* Selection */
        ::selection {
          background-color: ${theme.palette.primary[500]};
          color: ${theme.palette.background};
        }

        /* ScrollBars */
        /* Works on Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: ${theme.palette.basic[900]}
            ${theme.palette.basic.shadow};
        }

        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
          width: 6px;
        }

        *::-webkit-scrollbar-track {
          background: ${theme.palette.basic.shadow};
        }

        *::-webkit-scrollbar-thumb {
          background-color: ${theme.palette.basic[900]};
          border-radius: 20px;
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

// <style jsx global>{`
// /* montserrat-300 - latin-ext_latin */
// @font-face {
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 300;
//   font-display: swap;
//   src: url("/fonts/montserrat-v18-latin-ext_latin-300.eot"); /* IE9 Compat Modes */
//   src: local(""),
//     url("/fonts/montserrat-v18-latin-ext_latin-300.eot?#iefix")
//       format("embedded-opentype"),
//     /* IE6-IE8 */ url("/fonts/montserrat-v18-latin-ext_latin-300.woff2")
//       format("woff2"),
//     /* Super Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-300.woff")
//       format("woff"),
//     /* Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-300.ttf")
//       format("truetype"),
//     /* Safari, Android, iOS */
//       url("/fonts/montserrat-v18-latin-ext_latin-300.svg#Montserrat")
//       format("svg"); /* Legacy iOS */
// }

// /* montserrat-regular - latin-ext_latin */
// @font-face {
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url("/fonts/montserrat-v18-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
//   src: local(""),
//     url("/fonts/montserrat-v18-latin-ext_latin-regular.eot?#iefix")
//       format("embedded-opentype"),
//     /* IE6-IE8 */
//       url("/fonts/montserrat-v18-latin-ext_latin-regular.woff2")
//       format("woff2"),
//     /* Super Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-regular.woff")
//       format("woff"),
//     /* Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-regular.ttf")
//       format("truetype"),
//     /* Safari, Android, iOS */
//       url("/fonts/montserrat-v18-latin-ext_latin-regular.svg#Montserrat")
//       format("svg"); /* Legacy iOS */
// }

// /* montserrat-500 - latin-ext_latin */
// @font-face {
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 500;
//   font-display: swap;
//   src: url("/fonts/montserrat-v18-latin-ext_latin-500.eot"); /* IE9 Compat Modes */
//   src: local(""),
//     url("/fonts/montserrat-v18-latin-ext_latin-500.eot?#iefix")
//       format("embedded-opentype"),
//     /* IE6-IE8 */ url("/fonts/montserrat-v18-latin-ext_latin-500.woff2")
//       format("woff2"),
//     /* Super Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-500.woff")
//       format("woff"),
//     /* Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-500.ttf")
//       format("truetype"),
//     /* Safari, Android, iOS */
//       url("/fonts/montserrat-v18-latin-ext_latin-500.svg#Montserrat")
//       format("svg"); /* Legacy iOS */
// }

// /* montserrat-700 - latin-ext_latin */
// @font-face {
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url("/fonts/montserrat-v18-latin-ext_latin-700.eot"); /* IE9 Compat Modes */
//   src: local(""),
//     url("/fonts/montserrat-v18-latin-ext_latin-700.eot?#iefix")
//       format("embedded-opentype"),
//     /* IE6-IE8 */ url("/fonts/montserrat-v18-latin-ext_latin-700.woff2")
//       format("woff2"),
//     /* Super Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-700.woff")
//       format("woff"),
//     /* Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-700.ttf")
//       format("truetype"),
//     /* Safari, Android, iOS */
//       url("/fonts/montserrat-v18-latin-ext_latin-700.svg#Montserrat")
//       format("svg"); /* Legacy iOS */
// }

// /* montserrat-900 - latin-ext_latin */
// @font-face {
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 900;
//   font-display: swap;
//   src: url("/fonts/montserrat-v18-latin-ext_latin-900.eot"); /* IE9 Compat Modes */
//   src: local(""),
//     url("/fonts/montserrat-v18-latin-ext_latin-900.eot?#iefix")
//       format("embedded-opentype"),
//     /* IE6-IE8 */ url("/fonts/montserrat-v18-latin-ext_latin-900.woff2")
//       format("woff2"),
//     /* Super Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-900.woff")
//       format("woff"),
//     /* Modern Browsers */
//       url("/fonts/montserrat-v18-latin-ext_latin-900.ttf")
//       format("truetype"),
//     /* Safari, Android, iOS */
//       url("/fonts/montserrat-v18-latin-ext_latin-900.svg#Montserrat")
//       format("svg"); /* Legacy iOS */
// }
// `}</style>
