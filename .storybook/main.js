const path = require("path");

module.exports = {
  stories: [
    "../packages/**/**/*.stories.@(js|jsx|ts|tsx|mdx)", //fix #1, previous: "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../packages"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: [
          "@babel/plugin-proposal-private-methods",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-private-property-in-object",
          "styled-jsx/babel",
        ],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};

// const path = require("path");

// module.exports = {
//   stories: [
//     "../packages/wipsie-ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
//     // "../packages/wipsie-rich-editor/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     // "@storybook/addon-a11y",
//   ],
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         "style-loader",
//         {
//           loader: "css-loader",
//           options: {
//             importLoaders: 1,
//             modules: {
//               localIdentName: "[name]__[local]--[hash:base64:5]",
//             },
//           },
//         },
//         "sass-loader",
//       ],
//       include: path.resolve(__dirname, "../"),
//     });

// config.module.rules.push({
//   test: /\.(ts|tsx)$/,
//   loader: require.resolve("babel-loader"),
//   options: {
//     presets: [["react-app", { flow: false, typescript: true }]],
//     plugins: [
//       "@babel/plugin-proposal-class-properties",
//       "@babel/plugin-proposal-private-methods",
//       "styled-jsx/babel",
//     ],
//   },
// });
//     config.resolve.extensions.push(".ts", ".tsx");

//     return config;
//   },
// };
