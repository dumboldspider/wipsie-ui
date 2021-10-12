module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  babel: async (options) => ({
    ...options,
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
    ],
  }),
  typescript: {
    reactDocgen: "none",
  },
};
