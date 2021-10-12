import React from "react";
import CssBaseline from "../src/components/CssBaseline/CssBaseline";

// export const decorators = [
//   (Story) => {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flex: 1,
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           alignItems: "center",
//           flexWrap: "wrap",
//           width: "100%",
//           height: "100vh",
//         }}
//       >
//         <CssBaseline />
//         <Story />
//       </div>
//     );
//   },
// ];

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
