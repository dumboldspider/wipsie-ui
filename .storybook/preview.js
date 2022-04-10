import React from "react";
import { CssBaseline, ThemeProvider } from "../packages/wipsie-ui/src/index";
import "../packages/wipsie-ui/src/static/styles/base.css";

export const decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider theme="light">
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#FFFFFF",
      },
      {
        name: "dark",
        value: "#000000",
      },
      {
        name: "cosmic",
        value: "#53025F",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
